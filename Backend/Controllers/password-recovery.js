import transporter from '../services/mailer.js';
import { conn } from '../db/connectionMysql.js';

export const sendEmail = async (req, res) => {
    const { emailRecovery } = req.body;

    try {
        // Buscar al usuario con el email proporcionado
        const [results] = await conn.query('SELECT * FROM usuario WHERE email_recovery = ?', [emailRecovery]);

        // Si el usuario no existe, devolver éxito para no revelar información
        if (results.length === 0) {
            return res.status(200).json({
                message: "Correo enviado a la dirección, si el usuario existe",
                code: "EMAIL_SENT_IF_EXIST",
            });
        }

        // Crear la URL de restablecimiento de contraseña (puede ser una página genérica)
        const url = `http://localhost:5173/update-password?email=${encodeURIComponent(emailRecovery)}`;

        const mailOptions = {
            from: 'idiomaticsuppt@gmail.com',
            to: emailRecovery,
            subject: 'Recuperación de Contraseña',
            html: `
                <h1>Recuperación de Contraseña</h1>
                <p>Para recuperar tu contraseña, haz clic en el siguiente enlace:</p>
                <a href="${url}">Recuperar Contraseña</a>
                <p>Este enlace es válido por un tiempo limitado.</p>
            `,
        };

        // Enviar el correo
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: ' + info.response);

        return res.status(200).json({
            email: emailRecovery,
            message: "Correo enviado exitosamente",
            code: "EMAIL_SENT_SUCCESS",
        });

    } catch (error) {
        console.error('Error al procesar la solicitud:', error.message);
        return res.status(500).json({
            message: "Error inesperado, intente más tarde",
            code: "ERR_SERVER",
        });
    }
};
