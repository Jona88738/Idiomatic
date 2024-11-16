import nodemailer from 'nodemailer';
import {USER_GMAIL,USER_PASSWORD } from  '../config.js'
// Configura el transportador de correo
console.log(USER_GMAIL,USER_GMAIL  )
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: USER_GMAIL, // Reemplaza con tu correo
        pass: USER_PASSWORD       // Reemplaza con tu contraseña
    },
    tls:{
        rejectUnauthorized:false
    }
});

export default transporter;