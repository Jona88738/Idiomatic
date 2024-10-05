import { Router } from "express";
import cUser from "../Controllers/controladorUser.js"
import { sendEmail } from '../Controllers/password-recovery.js'; 
import { updatePassword } from '../Controllers/update-password.js'; 
import { exec,spawn } from'child_process';
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//const {  } = require('child_process');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Configurar multer para almacenamiento en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const routes = Router();

routes.post("/createUser", cUser.createUser ) 
routes.get("/signUser", cUser.sign_in ) 

routes.post("/PasswordRecovery", sendEmail)
routes.post("/UpdatePassword", updatePassword)


routes.patch("/editUser", cUser.editUser)

routes.get("/deleteUser",cUser.deleteUser);

routes.get("/getUser",cUser.getUser);

routes.get("/CreateOrder",cUser.createOrder);

routes.get("/CaptureOrder",cUser.CaptureOrder);

//routes.get("/CancelOrder",cUser)

routes.get("/progresoUsuario",cUser.progresoUsuario)

routes.patch("/progresoUsuarioGeneral",cUser.progresoUsuarioGeneral)

routes.get("/logout",cUser.Logout)

routes.get("/testAprendizaje")

routes.post("/testAprendizaje",cUser.testAprendizaje)

routes.get("/notificaciones",cUser.notificaciones);

routes.patch("/notificaciones",cUser.pausarNotification);

routes.patch("/comentario",cUser.comentario);

//Recursos de usuarios
routes.get("/listaVideos",cUser.listaVideos);

routes.get("/ejercicios",cUser.ejercicios);

routes.use("/videos",cUser.recursoVideos);

routes.use("/listaAudios",cUser.listaAudios); 

routes.get("/lecturas")
routes.get("/juegos")
routes.get("/audios")


routes.post("/audioIA", upload.single("audio") ,(req, res) => {
  //console.log("archivo: "+ typeof req.file);
   // Ahora puedes obtener las especificaciones del archivo
   console.log(`Archivo subido: ${req.file.originalname}`);
   console.log(`MIME Type: ${req.file.mimetype}`);
   console.log(`Tamaño: ${req.file.size} bytes`);

  // console.log(req.file);
   console.log('Buffer size:', req.file.buffer.length);


  

  // Convertir el buffer del archivo a un archivo temporal para pasar al script Python
  const fileBuffer = req.file.buffer;
  const tempFilePath = path.join(__dirname, '../audiosTemporales/N.wav'); // Ruta del archivo temporal
  const name = "N.wav"
  //const name = req.file;
 // console.log(tempFilePath+"archivo: "+fileBuffer);


  // Guardar el archivo temporalmente
  //fs.writeFileSync(tempFilePath, fileBuffer);


 
  fs.writeFileSync(tempFilePath, fileBuffer);

 //                        name
  exec(`python prueba.py ${name}`, (error, stdout, stderr) => {

       // Eliminar el archivo temporal
    /*   fs.unlink(tempFilePath, (unlinkError) => {
        if (unlinkError) {
            console.error(`Error al eliminar el archivo temporal: ${unlinkError}`);
        }
    });*/
    

      if (error) {
          console.error(`Error ejecutando el script: ${error}`);
          return res.status(500).send('Error ejecutando el script');
      }

      // Parsear la salida del script Python
     // console.log("sd"+stdout)
      const result = JSON.parse(stdout);
      res.json(result);
  });
})

/*

routes.post('/audioIA', upload.single('audio'), (req, res) => {
  if (!req.file) {
      return res.status(400).send('No file uploaded.');
  }

  console.log("archivo: "+ typeof req.file);
   // Ahora puedes obtener las especificaciones del archivo
   console.log(`Archivo subido: ${req.file.originalname}`);
   console.log(`MIME Type: ${req.file.mimetype}`);
   console.log(`Tamaño: ${req.file.size} bytes`);


  // Obtén el buffer del archivo
  const fileBuffer = req.file.buffer;

  // Crear un proceso Python para ejecutar el script
  const pythonProcess = spawn('python', ['script.py']);

  // Enviar el buffer al script Python a través de stdin
  pythonProcess.stdin.write(fileBuffer);
  pythonProcess.stdin.end();

  let output = '';
  pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
      if (code === 0) {
          try {
              // Parsear y enviar la salida del script Python como JSON
              const result = JSON.parse(output);
              res.json(result);
          } catch (e) {
              console.error('Error al parsear la salida de Python:', e);
              res.status(500).send('Error al procesar la salida del script Python');
          }
      } else {
          res.status(500).send(`Python script exited with code ${code}`);
      }
  });
});



*/
export default routes


