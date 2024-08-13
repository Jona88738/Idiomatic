import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';
//import { resolve,join } from "path";
import { encryptPass,verificationPass } from "../utils/fileHelperUser.js";
import { fileURLToPath } from 'url';
import { resolve,join,dirname } from "path";

import express from 'express';
const createUser = async (req,res) => {
     
    const {nombre,correo,contra} = req.body


   const passHas = await  encryptPass(contra);
   
    const [rows] = await conn.query('INSERT INTO usuario (nombre,correo,contraseña,foto,rol,suscripcion) VALUES(?,?,?,?,?,?)',
        [nombre,correo,passHas,"/uploads/FotoPerfil/init.png",0,true])
    

    res.json({
     resultado:true,
     message: 'Se inserto '+" " + nombre
   })
}


const sign_in = async (req,res) => {

    const {correo,password} =  req.query   
    console.log(correo+" : " +password) 
    
    const [row] =await conn.query(`SELECT * FROM usuario where correo = ?` ,[correo])
    

    if(row.length <= 0 ){
       return  res.status(404).json({resultado:false })

    }else{

        const contra = await verificationPass(password,row[0].contraseña);
        console.log("xs")
        if(contra === false) return res.status(404).json({resultado:false});
    }

    req.session.idUser = row[0].idusuario;
    req.session.nombre = row[0].nombre;
   // console.log(req.session.idUser);
    res.json({
        resultado: "true",
        rol:row[0].rol,
        message: row[0].nombre
    })
}


const editUser = (req,res) => {
     
 res.json({

 })
}

const testAprendizaje = (req,res) => {
    const tipoAprendizaje = req.body;
    console.log(tipoAprendizaje)
    res.json({
        resultado:"true",
    })
}
const testIngles = (req,res) => {

}

const LecturaGuardada = (req,res) => {

}

const Logout = (req,res) => {
     // Destruye la sesión
   req.session.destroy((err) => {
    if (err) {
      return res.send('Error al cerrar sesión');
    }
    //res.redirect('/login');
    console.log("salio "+ req.session.idUser)
    res.status(200).json({

      "message":true
    })
  });
}

const progresoUsuario = async (req,res) => {
  

  const [row] = await conn.query(`SELECT * FROM progresousuario where Id_usuario = ?`,[req.session.idUser])
  console.log(row[0].nombre)
  console.log(row)
  res.status(200).json({
    "message":true,
    "nombre":req.session.nombre,
    "progresoGeneral":row[0].porcentajeGeneral,
    "horasMes":row[0].tiempoMes

  })
}

  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
   console.log("mi ruta"+__dirname)
   // Construir la ruta para acceder a la carpeta uploads/Videos
 const videosPath = join(__dirname, '../recursos/Videos');

const recursoVideos =  express.static(join( videosPath));


export default {

    sign_in,
    createUser,
    editUser,
    testAprendizaje,
    progresoUsuario,
    recursoVideos,
    Logout
}