import nodemailer from 'nodemailer';

const testMail = async () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'a21110142@ceti.mx',
            pass: '', // Cambia por tu contraseña o contraseña de aplicación
        },
    });

    try {
        const info = await transporter.sendMail({
            from: 'a21110142@ceti.mx',
            to: 'nahomyhernandez142@gmail.com', // Cambia esto por un correo válido
            subject: 'Prueba de correo desde Nodemailer',
            text: 'Este es un correo de prueba para verificar la configuración de Nodemailer.',
        });

        console.log('Correo enviado: ' + info.response);
    } catch (error) {
        console.error('Error enviando correo:', error.message);
    }
};

testMail();
