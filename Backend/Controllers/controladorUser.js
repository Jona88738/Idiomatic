import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';
import { encryptPass,verificationPass } from "../utils/fileHelperUser.js";
import { fileURLToPath } from 'url';
import { resolve,join,dirname } from "path";
import { Host,PAYPAL_API, PAYPAL_ID_CLIENT, PAYPAL_SECRET } from "../config.js";
import express from 'express';
import axios from 'axios';

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
          "http://localhost:3001/FotoPerfil/init.png",
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
  const { correo, password } = req.query;
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
    req.session.foto = row[0].foto;
   // console.log(req.session.idUser);
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

const deleteUser = async (req,res) => {

  const [row] = await conn.query('delete from usuario where idusuario = ?',[req.session.idUser])

  console.log(row)
  res.json({

    "Message":true
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

const createOrder = async (req,res) =>{

  const order = {
    "intent":"CAPTURE",
    "purchase_units":[
      {
        "amount":{
        "currency_code":"MXN",
        "value":"30.00"
        }
      }
  ],
  "payment_source":
  {
    "paypal":
      {
        "experience_context":{

          "brand_name":"Idiomatic",
          "landing_page":"NO_PREFERENCE",
          "user_action":"PAY_NOW",
          "return_url":"http://localhost:3001/api/CaptureOrder",
          "cancel_url":`http://localhost:5173/User_Home`,


        }
        
      },
  }
  }

  const params = new URLSearchParams();
  params.append('grant_type','client_credentials');

  const {data:{access_token}} = await axios.post(`${PAYPAL_API}/v1/oauth2/token`,params,{
    auth: {
        username: PAYPAL_ID_CLIENT,
        password: PAYPAL_SECRET
    }
  })
 // console.log(data)
 
  const respuesta = await axios.post(`${PAYPAL_API}/v2/checkout/orders`,order,{
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  console.log(respuesta.data.links[1].href)


  res.json({"link":respuesta.data.links[1].href})

}

const CaptureOrder = async (req,res) =>{

  const {token} = req.query;

  const respuesta = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,{},{ 
    auth: {
        username: PAYPAL_ID_CLIENT,
        password: PAYPAL_SECRET,
    }
  })
  console.log(respuesta);
 
  
  res.redirect('http://localhost:5173/User_Home');
}



const testAprendizajeGet = (req,res) =>{
  res.json({})
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

const ejercicios = async (req,res) => {

  const {juegos} = req.query;

  const [row] =  await conn.query("select * from juegos where tema = ?",[juegos]);

  console.log(row)

  res.json(row)
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
    deleteUser,
    comentario,
    createOrder,
    CaptureOrder,
    testAprendizaje,
    progresoUsuario,
    progresoUsuarioGeneral,
    listaVideos,
    ejercicios,
    listaAudios,
    recursoVideos,
    Logout,
    notificaciones,
    pausarNotification
}