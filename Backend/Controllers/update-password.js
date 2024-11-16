import { conn } from '../db/connectionMysql.js';
import { encryptPass } from "../utils/fileHelperUser.js";

export const updatePassword = async (req, res) => {
    const { email, newPass } = req.body;

    // Verificar que el correo y la nueva contraseña se proporcionen
    if (!email || !newPass) {
        return res.status(400).json({ 
            message: 'Solicitud inválida. Falta el correo o la nueva contraseña.',
            code: "ERR_INVALID_REQUEST",
        });
    }

    try {
        // Verificar si el usuario existe
        const [results] = await conn.promise().query(
            'SELECT * FROM usuario WHERE correo_recuperacion = ? OR correo = ?', [email]
        );

        if (results.length === 0) {
            return res.status(400).json({
                message: 'El correo no está registrado.',
                code: "ERR_USER_NOT_FOUND",
            });
        }

        // Usamos la función encryptPass para hashear la nueva contraseña
        const newHashedPassword = await encryptPass(newPass);

        // Ejecutamos la consulta para actualizar la contraseña en la base de datos
        await conn.promise().query(
            'UPDATE usuario SET contraseña = ? WHERE correo_recuperacion = ?', 
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
