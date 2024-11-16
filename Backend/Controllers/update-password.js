import { conn } from '../db/connectionMysql.js';  // Asegúrate de tener la conexión a la base de datos
import { encryptPass } from "../utils/fileHelperUser.js";  // Asegúrate de tener la función de hash

export const updatePassword = async (req, res) => {
    const { email, newPass } = req.body;

    // Verificamos que el correo y la nueva contraseña estén presentes
    if (!email || !newPass) {
        return res.status(400).json({
            message: 'El correo y la nueva contraseña son requeridos.',
            code: "ERR_INVALID_REQUEST",
        });
    }

    try {
        // Hasheamos la nueva contraseña
        const newHashedPassword = await encryptPass(newPass);

        // Ejecutamos la consulta para actualizar la contraseña en la base de datos
        const [results] = await conn.execute(  // Usamos execute sin .promise()
            'UPDATE usuario SET contraseña = ? WHERE correo = ?',
            [newHashedPassword, email]
        );

        console.log('Resultado de la actualización:', results);  // Añadir log aquí
        
        if (results.affectedRows === 0) {
            return res.status(404).json({
                message: "No se encontró el usuario con ese correo electrónico",
                code: "ERR_NOT_FOUND_EMAIL",
            });
        }

        // Si la contraseña se actualizó correctamente
        return res.status(200).json({
            message: 'Contraseña actualizada exitosamente.',
            code: "PASSWORD_UPDATE_SUCCESS"
        });

    } catch (error) {
        // Si ocurre un error inesperado
        console.error("Error al actualizar la contraseña:", error);  // Para ver el error en el servidor
        return res.status(500).json({
            message: "Error inesperado, intente más tarde",
            messageDev: error.message,
            code: "ERR_SERVER",
        });
    }
};
