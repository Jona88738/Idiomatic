import transporter from '../services/mailer.js';
import jwt from 'jsonwebtoken'; // Librería para generar el token
import { conn } from '../db/connectionMysql.js';

export const sendEmailF = async (req, res) => {
    const { emailRecovery } = req.body;

    try {
        console.log("Debugging: emailRecovery recibido:", emailRecovery);

        // Buscar al usuario con el email proporcionado
        const [results] = await conn.query(
            'SELECT * FROM usuario WHERE correo = ?',
            [emailRecovery]
        );

        console.log("Debugging: resultados de la consulta:", results);

        // Si el usuario no existe, devolver éxito para no revelar información
        if (results.length === 0) {
            console.log("Debugging: No se encontró ningún usuario con el correo proporcionado.");
            return res.status(200).json({
                success:true,
                message: "Correo enviado a la dirección, si el usuario existe",
                code: "EMAIL_SENT_IF_EXIST",
            });
        }

        const user = results[0];

        // Generar un token para la recuperación de la contraseña
        const token = jwt.sign({ email: user.correo }, 'your_secret_key', { expiresIn: '1h' });

        // Crear la URL con el token para la recuperación
        const url = `http://localhost:5173/UpdatePassword?token=${encodeURIComponent(token)}`;
        console.log("Debugging: URL generada para la recuperación:", url);

        // Configuración del correo
        const mailOptions = {
            from: 'idiomatic340@gmail.com',
            to: emailRecovery,
            subject: 'Recuperación de Contraseña',
            html: `
                <h1>Recuperación de Contraseña</h1>
                <p>Para recuperar tu contraseña, haz clic en el siguiente enlace:</p>
                <a href="${url}">Recuperar Contraseña</a>
                <p>Este enlace es válido por una hora.</p>
            `,
        };

        // Enviar el correo
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado, respuesta del servidor:', info.response);

        return res.status(200).json({
            email: emailRecovery,
            message: "Correo enviado exitosamente",
            code: "EMAIL_SENT_SUCCESS",
        });

    } catch (error) {
        console.error('Debugging: Error al procesar la solicitud:', error.message);
        return res.status(500).json({
            message: "Error inesperado, intente más tarde",
            code: "ERR_SERVER",
        });
    }
};
