import express from 'express'
import morgan  from 'morgan'
import cors from 'cors';
import rutasUsuario from './Routes/rutasUsuarios.js'
import rutasAdministrador from './Routes/rutasAdministrador.js'
import passwordrecovery from './Routes/password-recovery.js'
import updatePassword from './Routes/update-password.js'
import bodyParser from 'body-parser';
import session from 'express-session';
import { createRequire } from 'module';
import { resolve, join, dirname } from "path";
import { fileURLToPath } from 'url';
import { PORT, HOST_BD, PORT_BD, USER_BD, PASSWORD_BD, DATABASE } from './config.js'
import {authenticate} from './utils/MiddlewareAutentication.js'
import rutasPublicas from './Routes/rutasPublicas.js'

const require = createRequire(import.meta.url);
const MySQLStore = require('express-mysql-session')(session);
const app = express();

// Configurar CORS antes de las rutas
app.use(cors({
    origin: 'http://localhost:5173',  // Origen permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],  // Cabeceras permitidas
    credentials: true,  // Permitir credenciales como cookies
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Imprimir las variables en consola
console.log("Variables de configuración:");
console.log(`PORT: ${PORT}`);
console.log(`HOST_BD: ${HOST_BD}`);
console.log(`PORT_BD: ${PORT_BD}`);
console.log(`USER_BD: ${USER_BD}`);
console.log(`PASSWORD_BD: ${PASSWORD_BD}`);
console.log(`DATABASE: ${DATABASE}`);

const options = {
    host: HOST_BD,
    port: PORT_BD,
    user: USER_BD,
    password: PASSWORD_BD,
    database: DATABASE
};

const sessionStore = new MySQLStore(options);

app.use(session({
    key: "cookie_user",
    secret: "idiomaticXDJN",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));

app.use("/api", express.static('recursos'));

// Necesario para obtener la ruta del archivo en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Ruta de ejecución:", __dirname);
app.use("/api",rutasPublicas)
app.use("/api", passwordrecovery);
app.use("/api", updatePassword);
app.use("/api", rutasUsuario); //,authenticate,
//app.use("/api",authenticate, rutasAdministrador);


app.post('/api/forgot-password', (req, res) => {
    res.json({ success: true }); 
});

// Apartado 
app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.use((req, res) => {
    res.status(404).json({
        message: "Recurso no encontrado"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
