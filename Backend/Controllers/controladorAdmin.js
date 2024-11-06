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
    const { idusuario } = req.query;

    if (!idusuario) {
        return res.status(400).json({ message: "ID de usuario no proporcionado" });
    }

    try {
        // Actualiza el campo comentarios a NULL para el id_usuario
        const [result] = await conn.query('UPDATE usuario SET comentarios = NULL WHERE idusuario = ?', [idusuario]);

        if (result.affectedRows > 0) {
            res.json({ message: 'Comentarios eliminados correctamente' });
        } else {
            res.status(404).json({ message: 'Comentarios no encontrados o ya eliminados' });
        }
    } catch (error) {
        console.error('Error al eliminar comentarios:', error);
        res.status(500).json({ message: 'Error al eliminar comentarios' });
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