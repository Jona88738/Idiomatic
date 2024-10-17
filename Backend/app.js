import express from 'express'
import morgan  from 'morgan'
import rutasUsuario from './Routes/rutasUsuarios.js'
import rutasAdministrador from './Routes/rutasAdministrador.js'
import passwordrecovery from './Routes/password-recovery.js'
import updatePassword from './Routes/update-password.js'
import bodyParser from 'body-parser';
import session from 'express-session';
import { createRequire } from 'module';
import { resolve,join,dirname } from "path";
import { fileURLToPath } from 'url';
import { PORT } from './config.js'


const require = createRequire(import.meta.url);
const MySQLStore = require('express-mysql-session')(session);
const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

const options = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'idiomaticact'
}

const sessionStore = new MySQLStore(options);

app.use(session({
    key:"cookie_user",
    secret:"idiomaticXDJN",
    store:sessionStore,
    resave:false,
    saveUninitialized:false,
    cookie: { secure: false } 
}))

app.use(express.static('recursos'))


// Necesario para obtener la ruta del archivo en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)
// Define la ruta para servir los archivos de video con el prefijo /api/videos
//app.use('/api/videos', express.static(join(__dirname, 'recursos/Videos')));

app.use("/api",rutasUsuario)
app.use("/api",rutasAdministrador)
app.use("/api",passwordrecovery)
app.use("/api",updatePassword)


app.post('/api/forgot-password', (req, res) => {

    res.json({ success: true }); 
  });

app.use((req,res) => {

    res.status(404).json({
        message: "Recurso no encontrado"
    })
})

app.listen(PORT,()=>{
    console.log("Servidor iniciado xD")
})



