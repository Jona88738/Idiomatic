import { conn } from "../db/connectionMysql.js";
import { encryptPass,verificationPass } from "../utils/fileHelperUser.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createAdmin = async (req,res) => {

    const {nombre,correo, contra,rol} = req.body; 

    const passHas = await  encryptPass(contra);


    const [rows] = await conn.query('INSERT INTO usuario (nombre,correo,contraseña,foto,rol,suscripcion) VALUES(?,?,?,?,?,?)',
        [nombre,correo,passHas,"/uploads/FotoPerfil/init.png",rol,true])
    
    res.json({


        resultado:true,
        message: 'Se inserto '+" " + nombre


    })
}

const adminGetUsers = async (req, res) => {
    try {
        const [rows] = await conn.query("SELECT idusuario, foto, nombre, rol, suscripcion, tipo_aprendizaje FROM usuario");
        console.log('Rows fetched:', rows); // Añade este log para verificar los datos
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};



const comentarioUser = async (req, res) => {
    try {
        const [rows] = await conn.query('SELECT idusuario, nombre, UserComentario(idusuario) AS comentarios FROM usuario WHERE rol = 0;');

        const arrDatos = rows
            .map((objeto) => {
                const { comentarios } = objeto;
                const { comentario } = comentarios;

                const comentariosSeparados = Array.isArray(comentario) 
                    ? comentario.filter(c => c.trim() !== '') 
                    : [];

                return {
                    idusuario: objeto.idusuario,
                    nombre: objeto.nombre,
                    comentarios: comentariosSeparados
                };
            })
            // Filtrar usuarios que no tienen comentarios
            .filter(usuario => usuario.comentarios.length > 0);

        res.json(arrDatos);
    } catch (error) {
        console.error('Error al obtener comentarios de usuarios:', error);
        res.status(500).json({ error: 'Error al obtener comentarios de usuarios' });
    }
};

const DeleteComentarioUser = async (req, res) => {
    const { id_usuario } = req.query;  // Cambié idusuario por id_usuario
    const updateJSon = {"comentario": []};

    if (!id_usuario) {
        return res.status(400).json({ message: "ID de usuario no proporcionado" });
    }

    try {
        // Elimina los comentarios de la tabla bitacora basándose en el id_usuario
        const [result] = await conn.query('update bitacora set comentarios = ? where id_usuario = ?',[JSON.stringify(updateJSon),id_usuario])
       // const [result] = await conn.query('DELETE FROM bitacora WHERE id_usuario = ?', [id_usuario]);

        if (result.affectedRows > 0) {
            return res.json({ message: "Comentarios eliminados correctamente." });
        } else {
            return res.status(404).json({ message: "No se encontraron comentarios para eliminar." });
        }
    } catch (error) {
        console.error('Error al eliminar comentarios:', error);
        res.status(500).json({ message: 'Error al eliminar comentarios.' });
    }
};





const ModificarAdmin = async (req, res) => {
    try {
        const { idusuario, tipo_aprendizaje, rol } = req.body;

        // Verificar que el ID de usuario y los campos necesarios estén presentes
        if (!idusuario || tipo_aprendizaje === undefined || rol === undefined) {
            return res.status(400).json({ message: "Datos incompletos para la actualización" });
        }

        // Actualizar tipo de aprendizaje y rol en la base de datos
        const [result] = await conn.query(
            'UPDATE usuario SET tipo_aprendizaje = ?, rol = ? WHERE idusuario = ?',
            [tipo_aprendizaje, rol, idusuario]
        );

        // Verificar si se actualizó alguna fila
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuario no encontrado o no se pudo actualizar" });
        }

        res.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).json({ message: "Error al actualizar usuario" });
    }
};


const AdminDeleteUser = async (req, res) => {
    try {
      const { idusuario } = req.query;
  
      // Verifica si idusuario es un número
      if (!idusuario || isNaN(idusuario)) {
        return res.status(400).json({ message: "ID de usuario inválido" });
      }
  
      const id = Number(idusuario);
      
      // Realiza la consulta de eliminación
      const [result] = await conn.query('DELETE FROM usuario WHERE idusuario = ?', [id]);
  
      // Verifica si se eliminó alguna fila
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      console.log("Usuario eliminado:", id);
      res.status(200).json({ message: true });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ message: "Error al eliminar usuario" });
    }
  };
  

const addContentEdu = (req,res) => {

}

const getAllJuegos = async (req,res)=>{

    const [row] = await conn.query("select idjuegos,nombre,tema,recursos,img,ejercicio,introduccion from juegos");
    console.log(row)

    res.json(row)
}

const deleteJuego = async (req,res) =>{
    const {juego} = req.body;
    let posicion = 0;
    console.log("Mi juego: ",juego)

    const [Tema] = await conn.query('select tema from juegos where idjuegos = ?',[juego]);
    // console.log(Tema[0].tema) 
    const [row] = await conn.query('select TemaJuegos from temasapartados where idTemasApartados = ?',[1])
    console.log(row[0].TemaJuegos)

    posicion = row[0].TemaJuegos.findIndex(item => item.title === Tema[0].tema);

    console.log(posicion,"Tema: "+Tema[0].tema)

    let arregloFinal =  row[0].TemaJuegos.map((Element,index) =>{

        if(posicion < index){
            return ({...Element,
                    Total: Element.Total -1
            })
        }


        return ({...Element})
    })

    const [row2] = await conn.query('delete from juegos where idjuegos = ?',[juego]);

    const [update] = await conn.query('update temasapartados set  TemaJuegos = ? where idTemasApartados = ?',[JSON.stringify(arregloFinal),1])
    console.log(arregloFinal)
    res.json({})
}

// [{"Total": 0, "title": "saludos y despedidas"}, {"Total": 3, "title": "presentaciones personales"}, {"Total": 5, "title": "Dar informacion personal"}, {"Total": 8, "title": "verb to be"}, {"Total": 11, "title": "Present Simple"}, {"Total": 14, "title": "Present Continuo"}, {"Total": 17, "title": "Futuro Will"}, {"Total": 20, "title": "Pasado Simple"}]

const getAllAudios = async (req,res)=>{

    const [audios] = await conn.query('select * from  audio');
    // console.log(audios)

   

    res.json(audios)

}

const deleteAudios = async (req,res) =>{

    const {idAudio} = req.body;
    let posicion = 0;

    const [Tema] = await conn.query('select tema from audio where idaudio = ?',[idAudio]);


    const [row] = await conn.query('select TemaAudios from temasapartados where idTemasApartados = ?',[1])
    console.log(row[0].TemaAudios)


    posicion = row[0].TemaAudios.findIndex(item => item.title === Tema[0].tema);


    let arregloFinal =  row[0].TemaAudios.map((Element,index) =>{

        if(posicion < index){
            return ({...Element,
                    Total: Element.Total -1
            })
        }


        return ({...Element})
    })

    const [row2] = await conn.query('delete from audio where idaudio = ?',[idAudio]);

    const [update] = await conn.query('update temasapartados set  TemaAudios = ? where idTemasApartados = ?',[JSON.stringify(arregloFinal),1])
    console.log(arregloFinal)

    res.json({})

}

const SubirAudio = async (req,res) =>{

    const {Nombre,introduccion,Tema,Respuesta,img} = req.body;

    console.log(Nombre,introduccion,Tema,Respuesta,img)



    let posicion = 0;

    //const [Tema] = await conn.query('select tema from audio where idaudio = ?',[idAudio]);

    const [row] = await conn.query('select TemaAudios from temasapartados where idTemasApartados = ?',[1])
   // console.log(row[0].TemaAudios)


    posicion = row[0].TemaAudios.findIndex(item => item.title === Tema);


    let arregloFinal =  row[0].TemaAudios.map((Element,index) =>{

        if(posicion < index){
            return ({...Element,
                    Total: Element.Total +1
            })
        }


        return ({...Element})
    })

    const [update] = await conn.query('update temasapartados set  TemaAudios = ? where idTemasApartados = ?',[JSON.stringify(arregloFinal),1])
    console.log(arregloFinal)


    
    console.log(`Archivo subido: ${req.file.originalname}`);

    // Convertir el buffer del archivo a un archivo temporal para pasar al script Python
  const fileBuffer = req.file.buffer;
  const tempFilePath = path.join(__dirname, '../recursos/Audios/'+req.file.originalname); // Ruta del archivo temporal
  const name = "N.wav"

  fs.writeFileSync(tempFilePath, fileBuffer);

  let link = "/api/Audios/" + req.file.originalname;

    const [tableAudio] = await conn.query('insert into audio(nombre,introduccion,nivel,idioma,link,tema,id_leccion,respuesta,img) values(?,?,?,?,?,?,?,?,?)',[Nombre,introduccion,"A1","ingles",link,Tema,0,Respuesta,img])
    
    res.json({})
}

const getAllVideos = async (req,res) => {

    const [row] =await conn.query('select * from video');

    res.json(row)
}

const deleteVideo = async (req,res) =>{

    const {idVideo} = req.body;
    console.log(idVideo)

    let posicion = 0;

    const [Tema] = await conn.query('select tema from video where idvideo = ?',[idVideo]);

    const [row] = await conn.query('select TemaVideos from temasapartados where idTemasApartados = ?',[1])
    console.log(row[0].TemaVideos)


    posicion = row[0].TemaVideos.findIndex(item => item.title === Tema[0].tema);


    let arregloFinal =  row[0].TemaVideos.map((Element,index) =>{

        if(posicion < index){
            return ({...Element,
                    Total: Element.Total -1
            })
        }

        


        return ({...Element})
    })


        const [row2] = await conn.query('delete from video where idvideo = ?',[idVideo]);

        const [update] = await conn.query('update temasapartados set  TemaVideos = ? where idTemasApartados = ?',[JSON.stringify(arregloFinal),1])
        console.log(arregloFinal)



    res.json({})
}

const SubirVideos = async  (req,res) =>{
    
    const {Nombre,introduccion,Tema,link,img} = req.body;
    console.log(Nombre,introduccion,Tema,link,img);
    let posicion = 0;

    const [row] = await conn.query('select TemaVideos from temasapartados where idTemasApartados = ?',[1])

    posicion = row[0].TemaVideos.findIndex(item => item.title === Tema);

    let arregloFinal =  row[0].TemaVideos.map((Element,index) =>{

        if(posicion < index){
            return ({...Element,
                    Total: Element.Total + 1
            })
        }

    
        return ({...Element})
    })

    const [update] = await conn.query('update temasapartados set  TemaVideos = ? where idTemasApartados = ?',[JSON.stringify(arregloFinal),1])
    console.log(arregloFinal)

     const {tableVideo} = await conn.query('insert into video(nombre,nivel,idioma,link,introduccion,id_leccion,tema,img) values(?,?,?,?,?,?,?,?)',[Nombre,"A1","ingles",link,introduccion,0,Tema,img])
    
     res.json({})
}

const modificarContentEdu = (req,res) => {

}

const deleteContentEdu = (req,res) => {

}
const deleteLectura = async (req,res) =>{
    const {lectura} = req.body;

    const [row] = await conn.query('delete from lecturas where nombre = ?',[lectura]);
    console.log(row)
    console.log("Se borro Lectura",lectura)

    res.json({})
}

export default {
    createAdmin,
    ModificarAdmin,
    AdminDeleteUser,
    addContentEdu,
    modificarContentEdu,
    deleteContentEdu,
    comentarioUser,
    getAllJuegos,
    deleteJuego,
    getAllAudios,
    deleteAudios,
    SubirAudio,
    getAllVideos,
    deleteVideo,
    SubirVideos,
    DeleteComentarioUser,
    adminGetUsers,
    deleteLectura

}