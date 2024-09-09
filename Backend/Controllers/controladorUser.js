import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';
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
      console.log("xs",contra)
        if(contra === false) return res.status(404).json({resultado:false});
    }

    req.session.idUser = row[0].idusuario;
    req.session.nombre = row[0].nombre;
    req.session.correo = row[0].correo;
    req.session.foto = row[0].foto;
   // console.log(req.session.idUser);
    res.json({
        resultado: "true",
        rol:row[0].rol,
        message: row[0].nombre
    })
}


const editUser = async (req,res) => {

  const {nombre, correo,contraseña,foto} = req.body;

  console.log("Entro: ", req.body,contraseña);
  
  if(contraseña === undefined){

    const [row] = await conn.query('update usuario set nombre = ?, correo = ?, foto = ? where idusuario = ?',[nombre,correo,foto,req.session.idUser])
   
  }else{

    const passHas = await  encryptPass(contraseña);

    const [row] = await conn.query('update usuario set nombre = ?, correo = ?,contraseña = ?, foto = ? where idusuario = ?',[nombre,correo,passHas,foto,req.session.idUser])
   
     

  }

  req.session.nombre = nombre;
    req.session.correo = correo;
    req.session.foto = foto;
  
 res.json({
    "message":true
 })


}

const getUser = async (req,res) => {

    const [row] = await conn.query(`select * from usuario where idusuario = ?`,[req.session.idUser]);
    //console.log(row)

  res.json({
    nombre:row[0].nombre,
    correo:row[0].correo,
    foto:row[0].foto,


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

const comentario = async (req,res) => {

  const {comentario} =req.query; 

 // console.log(req.session.idUser+" Este es el comentario xD"+comentario)
  
  const [row] = await conn.query(`update bitacora set comentarios = json_array_append(comentarios,'$.comentario',?)
    where id_usuario = ?`,[comentario,req.session.idUser]) 
    
    //console.log(row);
  res.json({
        message:"Comentario Enviado"
  })
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
    "correo":req.session.correo,
    "progresoGeneral":row[0].porcentajeGeneral,
    "horasMes":row[0].tiempoMes,
    "foto":req.session.foto

  })
}

const progresoUsuarioGeneral = async (req,res) => {

  const {TemaEjercicio} = req.query;

  const [row] = await conn.query(`SELECT * FROM progresousuario where Id_usuario = ?`,[TemaEjercicio])
  //console.log(typeof row[0].porcentajeGeneral);
  const porcentaje = (100 * (row[0].porcentajeGeneral+1))/60;
  
  console.log(porcentaje)

  res.json({

  })
}

  

const notificaciones = async (req,res) =>{

  const [row] = await conn.query("select * from notificaciones where Id_usuario= ?",[req.session.idUser])
      console.log("Aqui esta el dato",row[0].notificacion.Avisos[0])
  res.status(200).json([
      row[0].notificacion.Notificacion,
      row[0].pausarNotificacion,
      row[0].notificacion.Avisos


  ])
}


const pausarNotification = async (req,res) => {
    
    const {pausar} = req.query;
    //const resultado = 
    
   // let str = 'true';
    let boolValue =  Number(pausar)
  
//str = 'false';
    //boolValue = (pausar === 'false'); // false


    
   // console.log(boolValue,"result",pausar)
    const [row] = await conn.query("update notificaciones set pausarNotificacion = ? where Id_usuario = ?",[boolValue,req.session.idUser])
    

  res.json({
      message:"true"
  })
}

const listaVideos = async (req,res) =>{
  const {tema} = req.query;
console.log(tema)
  const [row] = await conn.query("select * from video where tema = ?",[tema]);
  console.log(row)
  res.json(
      row
  )
}

const listaAudios = async (req,res) => {

  const {tema} = req.query
  const [row] = await conn.query("select * from audio where tema = ?",[tema]);
  console.log(row);

  res.json(row)
}



// traer recursos como video 
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
    getUser,
    comentario,
    testAprendizaje,
    progresoUsuario,
    progresoUsuarioGeneral,
    listaVideos,
    listaAudios,
    recursoVideos,
    Logout,
    notificaciones,
    pausarNotification
}