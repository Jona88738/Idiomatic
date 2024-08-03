import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';


const createUser = async (req,res) => {
     
    const {nombre,correo,contra} = req.body
    console.log(nombre+" "+correo+"con"+contra)  
   
    const [rows] = await conn.query('INSERT INTO usuario (nombre,correo,contraseña,foto,rol,suscripcion) VALUES(?,?,?,?,?,?)',
        [nombre,correo,contra,"/uploads/FotoPerfil/init.png",0,true])
    console.log(rows);
    res.json({
     resultado:true,
     rol:rows.insertId,
     message: 'Se inserto '+" " + nombre
   })
}

const sign_in = async (req,res) => {

    const {nombre} =  req.query

    const [row] =await conn.query(`SELECT * FROM usuario where name = ?` ,[nombre])
    

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
    const tipo = req.body;
    console.log(tipo)
    res.json({
        resultado:"true",
    })
}
const testIngles = (req,res) => {

}

const LecturaGuardada = (req,res) => {

}


export default {

    sign_in,
    createUser,
    editUser,
    testAprendizaje
}