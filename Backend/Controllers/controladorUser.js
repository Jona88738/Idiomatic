import {conn} from "../db/connectionMysql.js"
import { exec } from'child_process';
import { encryptPass,verificationPass } from "../utils/fileHelperUser.js";

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
    
    const [row] =await conn.query(`SELECT * FROM usuario where correo = ?` ,[correo])
    

    if(row.length <= 0 ){
       return  res.status(404).json({resultado:false })

    }else{

        const contra = await verificationPass(password,row[0].contraseña);
        console.log("xs")
        if(contra === false) return res.status(404).json({resultado:false});
    }

    req.session.idUser = row[0].idusuario;
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
    res.status(200).json({
      "message":true
    })
  });
}


export default {

    sign_in,
    createUser,
    editUser,
    testAprendizaje,
    Logout
}