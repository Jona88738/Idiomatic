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

    const [rows] = await conn.query('select  idusuario,nombre,UserComentario(idusuario) from usuario where rol=0;')

    const arrDatos  =  rows.map((objeto) =>{

        const { 'UserComentario(idusuario)': { comentario } } = objeto;

        return {"idusuario":objeto.idusuario,"nombre":objeto.nombre,"comentario":comentario}
    })

    //console.log(arrDatos)
    res.json(arrDatos)
}

const DeleteComentarioUser = async (req, res) => {
    const { idusuario } = req.query;

    console.log('ID de usuario recibido:', idusuario);  // Verifica que el ID esté llegando correctamente

    if (!idusuario) {
        return res.status(400).json({ message: "ID de usuario no proporcionado" });
    }

    try {
        // Realizar la eliminación del comentario en la tabla bitacora para el id_usuario
        const [result] = await conn.query('DELETE FROM bitacora WHERE id_usuario = ?', [idusuario]);

        if (result.affectedRows > 0) {
            res.json({ message: 'Comentario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Comentario no encontrado o ya eliminado' });
        }
    } catch (error) {
        console.error('Error al eliminar el comentario:', error);  // Verifica el error
        res.status(500).json({ message: 'Error al eliminar el comentario' });
    }
};


  

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