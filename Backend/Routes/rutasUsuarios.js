import { Router } from "express";
import cUser from "../Controllers/controladorUser.js"
import { exec } from'child_process';
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Configurar multer para almacenamiento en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const routes = Router();

routes.post("/createUser", cUser.createUser ) 

routes.get("/signUser", cUser.sign_in ) 



 routes.patch("/editUser", cUser.editUser)

  routes.put((req,res) => {

})

routes.get("/logout",cUser.Logout)

routes.post("/testAprendizaje",cUser.testAprendizaje)


routes.post("/audioIA", upload.single("N.mp3") ,(req, res) => {

    if (!req.file) {
      return res.status(400).send('No se ha subido ningún archivo');
  }

  // Convertir el buffer del archivo a un archivo temporal para pasar al script Python
  const fileBuffer = req.file.buffer;
  const tempFilePath = path.join(__dirname, '../audiosTemporales/N.mp3'); // Ruta del archivo temporal
  const name = "N.mp3"
  console.log(tempFilePath);

  // Guardar el archivo temporalmente
  fs.writeFileSync(tempFilePath, fileBuffer);



  exec(`python prueba.py ${name}`, (error, stdout, stderr) => {

       // Eliminar el archivo temporal
       fs.unlink(tempFilePath, (unlinkError) => {
        if (unlinkError) {
            console.error(`Error al eliminar el archivo temporal: ${unlinkError}`);
        }
    });
    

      if (error) {
          console.error(`Error ejecutando el script: ${error}`);
          return res.status(500).send('Error ejecutando el script');
      }

      // Parsear la salida del script Python
      console.log("sd"+stdout)
      const result = JSON.parse(stdout);
      res.json(result);
  });
})


export default routes


