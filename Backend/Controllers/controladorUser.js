import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';
import { encryptPass,verificationPass } from "../utils/fileHelperUser.js";
import { fileURLToPath } from 'url';
import { resolve,join,dirname } from "path";
import express from 'express';

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
console.log('Datos recibidos:', username, email);
  try {
        // Verifica los datos recibidos

      // Verificar si faltan datos
      if (!username || !email || !password) {
          return res.status(400).json({ success: false, message: 'Faltan datos' });
      }

      // Encriptar la contraseña
      const passHashed = await encryptPass(password);
      console.log('Contraseña encriptada:', passHashed);  // Verifica la contraseña encriptada

      // Insertar el usuario en la base de datos
      const [result] = await conn.query('INSERT INTO usuario (nombre, correo, contraseña, foto, rol, suscripcion,tipo_aprendizaje) VALUES (?, ?, ?, ?, ?, ?,?)', [
          username,
          email,
          passHashed,
          "/uploads/FotoPerfil/init.png",
          0, // Rol por defecto
          true, // Suscripción por defecto,
          "dsf"
      ]);

      console.log('Resultado de la inserción:', result);  // Verifica el resultado de la consulta

      // Verificar si se insertó correctamente
      if (result.affectedRows === 1) {
          res.json({ success: true, message: 'Usuario registrado con éxito' });
      } else {
          res.json({ success: false, message: 'Error al registrar el usuario' });
      }
  } catch (error) {
      console.error('Error al intentar registrar el usuario:', error);  // Captura cualquier error
      res.status(500).json({ success: false, message: 'Error en el servidor', error: error.message });
  }
};



const sign_in = async (req, res) => {
  const { correo, password } = req.body;
  console.log(correo + " : " + password);

  try {
    const [row] = await conn.query(`SELECT * FROM usuario WHERE correo = ?`, [correo]);

    if (row.length <= 0) {
      return res.status(404).json({ resultado: false });
    } else {
      const contra = await verificationPass(password, row[0].contraseña);
      if (contra === false) {
        return res.status(404).json({ resultado: false });
      }
    }

    req.session.idUser = row[0].idusuario;
    req.session.nombre = row[0].nombre;
    req.session.correo = row[0].correo;

    res.json({
      resultado: "true",
      rol: row[0].rol,
      message: row[0].nombre,
    });
  } catch (error) {
    console.error('Error en la autenticación:', error); // Agregado para identificar errores
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};



const editUser = (req,res) => {
     
 res.json({

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
  //console.log(row[0].nombre)
  console.log(row)
  res.status(200).json({
    "message":true,
    "nombre":req.session.nombre,
    "correo":req.session.correo,
    "progresoGeneral":row[0].porcentajeGeneral,
    "horasMes":row[0].tiempoMes

  })
}

  

const notificaciones = (req,res) =>{

  res.status(200).json({

  })
}


const listaVideos = async (req,res) =>{

  const [row] = await conn.query("select * from video");
  console.log(row)
  res.json(
      row
  )
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
    listaVideos,
    recursoVideos,
    Logout,
    notificaciones 
}