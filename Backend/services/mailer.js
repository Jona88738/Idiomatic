import { createTransport } from 'nodemailer';

// Configura el transportador de correo
const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'idiomaticsuppt@gmail.com', // Reemplaza con tu correo
        pass: 'support123.'       // Reemplaza con tu contraseña
    }
});

export default transporter;