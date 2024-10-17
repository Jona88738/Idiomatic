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

    const [rows] = await conn.query('select  idusuario,nombre,UserComentario(idusuario) from usuario where rol = 0')

  

    const arrDatos  =  rows.map((objeto) =>{

        const { 'UserComentario(idusuario)': { comentario } } = objeto;

        return {"idusuario":objeto.idusuario,"nombre":objeto.nombre,"comentario":comentario}
    })

    //console.log(arrDatos)
    res.json(arrDatos)
}

const DeleteComentarioUser = (req,res) =>{

    const {idusuario} = req.query;

    console.log(idusuario)

}

const ModificarAdmin = (req,res) => {


}

const AdminDeleteUser = async  (req,res) => {

    const {idusuario} = req.query

    const id = Number(idusuario)

    const [row] = await conn.query('delete from usuario where idusuario = ?',[id])

    console.log("resultado",row);

    res.json({
        "message":true,
    })

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
    AdminDeleteUser,
    addContentEdu,
    modificarContentEdu,
    deleteContentEdu,
    comentarioUser,
    DeleteComentarioUser,
    adminGetUsers

}