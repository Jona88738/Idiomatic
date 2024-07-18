import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';

const sign_in = (req,res) => {

    res.send("Ruta Sign in")
}

const createUser = async (req,res) => {

    const usuarios = [];
   const [resul] = await conn.query("SELECT *FROM  usuario")
   
   res.send(usuarios.nombre)
}

const editUser = (req,res) => {


}

const testAprendizaje = (req,res) => {

}
const testIngles = (req,res) => {

}

const LecturaGuardada = (req,res) => {

}


export default {

    sign_in,
    createUser,
    editUser
}