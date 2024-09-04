import { conn } from "../db/connectionMysql.js";
import { encryptPass,verificationPass } from "../utils/fileHelperUser.js";

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

const adminGetUsers = async (req,res) => {

    const [rows] = await conn.query("SELECT idusuario, nombre, rol,tipo_aprendizaje FROM usuario");
    
    console.log(rows)

    res.json(rows)
}

const comentarioUser = async (req,res) => {

    const [rows] = await conn.query('select  nombre,UserComentario(idusuario) from usuario;')

  

    const arrDatos  =  rows.map((objeto) =>{

        const { 'UserComentario(idusuario)': { comentario } } = objeto;

        return {"nombre":objeto.nombre,"comentario":comentario}
    })

    //console.log(arrDatos)
    res.json(arrDatos)
}

const ModificarAdmin = (req,res) => {


}

const deleteAdmin = (req,res) => {

}

const addContentEdu = (req,res) => {

}

const modificarContentEdu = (req,res) => {

}

const deleteContentEdu = (req,res) => {

}

export default {
    createAdmin,
    ModificarAdmin,
    deleteAdmin,
    addContentEdu,
    modificarContentEdu,
    deleteContentEdu,
    comentarioUser,
    adminGetUsers

}