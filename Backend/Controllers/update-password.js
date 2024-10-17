import { conn } from '../db/connectionMysql.js';
import { encryptPass } from "../utils/fileHelperUser.js";

export const updatePassword = async (req, res) => {
    const { email, newPass, token } = req.body;  // Añadimos el token como parte de la solicitud

    if (!email || !newPass || !token) {
        return res.status(400).json({ 
            message: 'Solicitud inválida. Falta el correo, contraseña o token.' ,
            code: "ERR_INVALID_REQUEST",
        });
    }

    try {
        // Verificar si el token es válido y no ha expirado
        const [results] = await conn.promise().query(
            'SELECT * FROM users WHERE email_recovery = ? AND reset_token = ? AND reset_token_expires > ?',
            [email, token, Date.now()]
        );

        if (results.length === 0) {
            return res.status(400).json({
                message: 'El token es inválido o ha expirado.',
                code: "ERR_INVALID_OR_EXPIRED_TOKEN",
            });
        }

        // Usamos la función encryptPass para hashear la nueva contraseña
        const newHashedPassword = await encryptPass(newPass);

        // Ejecutamos la consulta para actualizar la contraseña en la base de datos
        await conn.promise().query(
            'UPDATE users SET pass = ?, reset_token = NULL, reset_token_expires = NULL WHERE email_recovery = ?', 
            [newHashedPassword, email]
        );

        return res.status(200).json({ 
            message: 'Contraseña actualizada exitosamente.',
            code: "PASSWORD_UPDATE_SUCCESS"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error inesperado, intente más tarde",
            messageDev: error.message,
            code: "ERR_SERVER",
        });
    }
};
