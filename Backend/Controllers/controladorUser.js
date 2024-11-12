import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';
import { encryptPass,verificationPass } from "../utils/fileHelperUser.js";
import { fileURLToPath } from 'url';
import { resolve,join,dirname } from "path";
import { Host,PAYPAL_API, PAYPAL_ID_CLIENT, PAYPAL_SECRET } from "../config.js";
import express from 'express';
import axios from 'axios';
import * as fs from 'node:fs';
import { elements } from "chart.js";


const createUser = async (req, res) => {
  const { username, email, password, rol = 0 } = req.body;  // Rol por defecto es 0 (usuario)

  console.log('Datos recibidos:', username, email);
  
  try {
    // Verificar si faltan datos
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: 'Faltan datos' });
    }

    // Encriptar la contraseña
    const passHashed = await encryptPass(password);
    console.log('Contraseña encriptada:', passHashed);  // Verifica la contraseña encriptada    
    // Insertar el usuario en la base de datos
    const [result] = await conn.query('INSERT INTO usuario (nombre, correo, contraseña, foto, rol, suscripcion, tipo_aprendizaje) VALUES (?, ?, ?, ?, ?, ?, ?)', [
      username,
      email,
      passHashed,
      "/api/FotoPerfil/init.png",
      rol, // Usar el valor de rol recibido o 0 por defecto
      false, // Suscripción por defecto
      '' // Valor vacío para tipo_aprendizaje
    ]);
// result[0].insertId
    console.log('Resultado de la inserción:', result);  // Verifica el resultado de la consulta
    // Verificar si se insertó correctamente
    if (result.affectedRows === 1) {
      res.json({ success: true, message: 'Usuario registrado con éxito', rol });
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
    const [row2] = await conn.query(`SELECT TemaJuegos,TemaAudios,TemaVideos FROM temasapartados WHERE idTemasApartados = ?`, [1]);

    console.log(row2[0].TemaJuegos)
    req.session.idUser = row[0].idusuario;
    req.session.nombre = row[0].nombre;
    req.session.correo = row[0].correo;
    req.session.foto = row[0].foto;
    req.session.suscripcion = row[0].suscripcion;
    req.session.TemasEjercicios = row2[0].TemaJuegos;
    req.session.TemaAudios = row2[0].TemaAudios;
    req.session.TemaVideos = row2[0].TemaVideos;
    req.session.tipoAprendizaje = row[0].tipo_aprendizaje;

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

const obtenerComentarios = async (req, res) => {
  try {
    const [row] = await conn.query(`SELECT u.nombre, b.comentarios FROM bitacora b JOIN usuario u ON b.id_usuario = u.idusuario`);
    
    if (row.length === 0) {
      return res.status(404).json({ message: "No hay comentarios disponibles" });
    }

    res.json(row);
  } catch (error) {
    console.error('Error al obtener los comentarios:', error);
    res.status(500).json({ message: "Error en el servidor", error: error.message });
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

  const [row] = await conn.query("update usuario set suscripcion = ? where idusuario = ? ",[1,req.session.idUser])


  const respuesta = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,{},{ 
    auth: {
        username: PAYPAL_ID_CLIENT,
        password: PAYPAL_SECRET,
    }
  })
  console.log(respuesta);

   
  // res.cookie('userId', 123);
  
  res.redirect('http://localhost:5173/User_Home');
}



const testAprendizajeGet = (req,res) =>{
  res.json([{
    "in":"1",
    "pregunta":"1.-Me resultan mas faciles los examenes: ",
    "res1":{"tipo":"Kinestesico",
            "res":"Practicos "
           },

     "res2":{"tipo":"Visual",
            "res":"Teoricos escritos"
           },

      "res3":{"tipo":"Auditivo",
            "res":"Teoricos orales"
           },
    
    
  },
  {
    "in":"2",
    "pregunta":"2.-Recuerdo mejor:",
    "res1":{"tipo":"Auditivo",
            "res":"Una cancion "
           },

     "res2":{"tipo":"Visual",
            "res":"Una imagen"
           },

      "res3":{"tipo":"Kinestésico",
            "res":"Una ruta o camino"
           },
  },
  {
    "in":"3",
    "pregunta":"3.-Mi tecnica para estudiar es:",
    "res1":{"tipo":"Visual",
            "res":"Hacer esquemas y dibujos "
           },

     "res2":{"tipo":"Kinestésico",
            "res":"Practicar"
           },

      "res3":{"tipo":"Auditivo",
            "res":"Explicar y repetir en voz alta"
           },

  },
  {
    "in":"4",
    "pregunta":"4.-Entre estos 3 trabajos elegiria:",
    "res1":{"tipo":"Auditivo",
            "res":"Locutor de radio"
           },

     "res2":{"tipo":"Visual",
            "res":"Editor en una revista"
           },

      "res3":{"tipo":"Kinestésico",
            "res":"Director de un club deportivo"
           },

  },

  //

  {
    "in":"5",
    "pregunta":"5.-Mi entretenimiento favorito es:",
    "res1":{"tipo":"Kinestésico",
            "res":"Actividades"
           },

     "res2":{"tipo":"Visual",
            "res":"La television"
           },

      "res3":{"tipo":"Auditivo",
            "res":"La radio o audiolibros"
           },

  },
  {
    "in":"6",
    "pregunta":"6.-Prefiero acudir a:",
    "res1":{"tipo":"Auditivo",
            "res":"Un concierto"
           },

     "res2":{"tipo":"Kinestésico",
            "res":"Una clase de baile"
           },

      "res3":{"tipo":"Visual",
            "res":"Una exposicion de arte"
           },
           
  
  },

  //XD

  {
    "in":"7",
    "pregunta":"7.-Prefiero aprender:",
    "res1":{"tipo":"Visual",
            "res":"Leyendo el libro"
           },

     "res2":{"tipo":"Auditivo",
            "res":"Escuchando al profesor"
           },

      "res3":{"tipo":"Kinestesico",
            "res":"Haciendo actividades practicas"
           },

  },
  {
    "in":"8",
    "pregunta":"8.-Me gusta:",
    "res1":{"tipo":"Visual",
            "res":"Ver paisajes bonitos"
           },

     "res2":{"tipo":"Auditivo",
            "res":"Escuchar a los demas"
           },

      "res3":{"tipo":"Kinestesico",
            "res":"Desmontar y montar"
           },

  },



])
}

const testAprendizaje = async (req,res) => {
    const {tipoAprendizaje} = req.body;

   console.log(tipoAprendizaje)

   const [user] = await conn.query('update usuario set tipo_aprendizaje = ? where idusuario = ? ',[tipoAprendizaje,req.session.idUser]);
    console.log(user)

    res.json({
        resultado:"true",
    })
}


const testIngles = (req,res) => {

  
}

const recursos = async (req,res) => {

  const {tema} = req.query;

  const [row] = await conn.query("select * from recursos where tema = ?",[tema]);

    console.log(row)

  res.json(row)
}

const getLectura = (req, res) =>{

  const {lectura} = req.query;
  console.log(lectura)

   const data = fs.readFileSync("./recursos/Lecturas"+lectura)

   const carros = JSON.parse(data);
   
   
   res.json(carros)
}


const getAllLecturas = async (req,res) => {

  const [row] = await conn.query("select * from lecturas");

  res.json(row)
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

const tiempo = async (req,res) =>{

  const {minutos} = req.query;
  const {Noti} = req.body;

  console.log("Los minutos que llegaron: ",minutos)
  
  const [row] = await conn.query("SELECT tiempoHoras,tiempoMinutos FROM  progresousuario where Id_usuario = ? ",[12])
  
  const tiempoTotalMinutos = row[0].tiempoMinutos + Number(minutos);
  console.log("Total minutos",tiempoTotalMinutos)

  if(tiempoTotalMinutos < 60 ){

    const [rowMinutos] = await conn.query("update progresousuario set tiempoMinutos = ? where Id_usuario = ?",[tiempoTotalMinutos,req.session.idUser])

    console.log(rowMinutos)
  }else{

    const hours = Math.floor(tiempoTotalMinutos / 60); // Horas
    const remainingMinutes = tiempoTotalMinutos % 60; // Minutos restantes

    const [rowHoras] = await conn.query("update progresousuario set tiempoHoras = ?, tiempoMinutos = ? where  Id_usuario = ?",[hours,remainingMinutes,12])

  }
  console.log(row[0].tiempoHoras)

  const [tableNoti] = await conn.query("select notificacion from notificaciones where Id_usuario  = ?",[req.session.idUser])//req.session.idUser


  if(Noti === "1" && tableNoti[0].notificacion.Notificacion.length === 0){
   
    // const [tableNoti] = await conn.query("select notificacion from notificaciones where Id_usuario  = ?",[req.session.idUser])//req.session.idUser
    console.log("entro")
    const Notificacion = {"texto":"Sigue adelante con tus metas.","Titulo":"Felicidades empezaste un nuevo Apartado de aprendizaje"}

    tableNoti[0].notificacion.Notificacion.push(Notificacion);
   //console.log(tableNoti[0].notificacion)
   //console.log(tableNoti[0])

   const [update] = await conn.query("update notificaciones set notificacion = ? where Id_usuario = ?",[JSON.stringify(tableNoti[0].notificacion),req.session.idUser])
  


   // tableNoti[0]
  }else{

    let contador = 0;

    tableNoti[0].notificacion.Notificacion.map((element) =>{
      
      console.log(element.Titulo)

      if( tableNoti[0].notificacion.Notificacion === "Felicidades empezaste un nuevo Apartado de aprendizaje"){
        contador++;
      }

    })


    console.log("Mi contador: ",contador)
    
   

  }
  res.json(row)
}

const progresoUsuario = async (req,res) => {
  

  const [row] = await conn.query(`SELECT * FROM progresousuario where Id_usuario = ?`,[req.session.idUser])
  
  const [user] = await conn.query(`SELECT * FROM usuario WHERE idusuario = ?`, [req.session.idUser]);

  //console.log(row[0].nombre)
  //console.log(row[0].Id_contenido)
  res.status(200).json({
    "message":true,
    "nombre":req.session.nombre,
    "AudioIA":user[0].idusuario,
    "correo":req.session.correo,
    "progresoGeneral":row[0].porcentajeGeneral,
    "tiempoHoras":row[0].tiempoHoras,
    "tiempoMinutos":row[0].tiempoMinutos,
    "foto":req.session.foto,
    "suscrip":user[0].suscripcion,
    "completeVideo":row[0].numLeccion_video,
    "completeAudio":row[0].numLeccion_audio,
    "completeEjercicio":row[0].numLeccion_juegos,
    "IdContenido":row[0].Id_contenido,
    "temasJuegos": req.session.TemasEjercicios,
    "temaAudios":req.session.TemaAudios,
    "temaVideos":req.session.TemaVideos,
    "tipoAprendizaje":user[0].tipo_aprendizaje

  })
}

const progresoUsuarioGeneral = async (req,res) => {

  const {TemaEjercicio,completeV} = req.query;
  const {completeVideo} = req.body;
  console.log(completeVideo)
  console.log("Entron xD")
  const progresoJSON = JSON.stringify(completeVideo);
  // const [row] = await conn.query(`SELECT * FROM progresousuario where Id_usuario = ?`,[TemaEjercicio])
  // //console.log(typeof row[0].porcentajeGeneral);
  // const porcentaje = (100 * (row[0].porcentajeGeneral+1))/60;
  
  // console.log(porcentaje)
  const [row] = await conn.query("CALL ActualizarProgresoUsuario(?,?,?)",[req.session.idUser,TemaEjercicio,progresoJSON]);

  console.log(row)

  res.json(row)
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

const DeleteNotificacionAvisos = async  (req,res) =>{

  const arreglo = req.body;
  
  const [row] = await conn.query("select * from notificaciones where Id_usuario= ?",[req.session.idUser])
  // console.log(row[0])
  // console.log("Aqui esta el dato",)
  console.log(row[0].notificacion)
  row[0].notificacion.Avisos = arreglo;
   console.log(row[0].notificacion)

  const [update] = await conn.query("update notificaciones set notificacion = ? where Id_usuario = ?",[JSON.stringify(row[0].notificacion),req.session.idUser])
  
  console.log(update)
  res.json({})
}

const DeleteNotificacionNoti = async (req,res) =>{


  const arreglo = req.body;
  
  const [row] = await conn.query("select * from notificaciones where Id_usuario= ?",[req.session.idUser])
  // console.log(row[0])
  // console.log("Aqui esta el dato",)
  console.log(row[0].notificacion)
  row[0].notificacion.Notificacion = arreglo;
   console.log(row[0].notificacion)

  const [update] = await conn.query("update notificaciones set notificacion = ? where Id_usuario = ?",[JSON.stringify(row[0].notificacion),req.session.idUser])
  

  res.json({})
}


const ejercicios = async (req,res) => {

  const {juegos} = req.query;

  const [row] =  await conn.query("select * from juegos where tema = ?",[juegos]);

  //console.log(row)

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
  
   console.log("mi ruta XD"+__dirname)
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
    testIngles,
    createOrder,
    CaptureOrder,
    testAprendizaje,
    testAprendizajeGet,
    progresoUsuario,
    progresoUsuarioGeneral,
    recursos,
    listaVideos,
    ejercicios,
    listaAudios,
    getLectura,
    getAllLecturas,
    recursoVideos,
    Logout,
    tiempo,
    notificaciones,
    DeleteNotificacionAvisos,
    DeleteNotificacionNoti,
    pausarNotification
}