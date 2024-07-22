import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';


const createUser = async (req,res) => {
     
    const {nombre,correo,contra} = req.body
    console.log(nombre+" "+correo+"con"+contra)  
   
    const [rows] = await conn.query('INSERT INTO usuario (nombre,correo,contraseña,rol,suscripcion) VALUES(?,?,?,?,?)',
        [nombre,correo,contra,0,true])
    
    res.json({
     
     message: 'Se inserto '+" " + nombre
   })
}

const sign_in = async (req,res) => {

    const {nombre} =  req.query

    const [row] =await conn.query(`SELECT * FROM usuario where nombre = ?` ,[nombre])
    

    if(row.length <= 0 ){
       return  res.status(404).json({
            resultado:"false"
        })
    }

    res.json({
        resultado: "true",
        message: row[0].nombre
    })
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