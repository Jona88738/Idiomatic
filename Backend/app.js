import express from 'express'
import morgan  from 'morgan'
import { exec } from'child_process';
import rutasUsuario from './Routes/rutasUsuarios.js'
import rutasAdministrador from './Routes/rutasAdministrador.js'

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extend:false}))


app.get('/run-python', (req, res) => {
    exec('python prueba.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error ejecutando el script: ${error}`);
            return res.status(500).send('Error ejecutando el script');
        }

        // Parsear la salida del script Python
        const result = JSON.parse(stdout);
        res.json(result);
    });
});


app.use("/api",rutasUsuario)
app.use("/api",rutasAdministrador.updateUser)

app.use((req,res) => {

    res.status(404).json({
        message: "Recurso no encontrado"
    })
})

app.listen(3001)

console.log("Servidor iniciado xD")

