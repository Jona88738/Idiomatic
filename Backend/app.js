import express from 'express'
import morgan  from 'morgan'
import rutasUsuario from './Routes/rutasUsuarios.js'
import rutasAdministrador from './Routes/rutasAdministrador.js'

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extend:false}))

app.use("/api",rutasUsuario)
app.use("/api",rutasAdministrador.updateUser)

app.use((req,res) => {

    res.status(404).json({
        message: "Recurso no encontrado"
    })
})

app.listen(3001)

console.log("Servidor iniciado xD")

