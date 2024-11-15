import { Router } from "express";
import cAdmin from "../Controllers/controladorAdmin.js";

import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const routers = Router()

routers.put("/",cAdmin.createAdmin);

routers.get("/comentarioUser",cAdmin.comentarioUser)

routers.delete("/DeleteComentarioUser",cAdmin.DeleteComentarioUser)

routers.get("/adminGetUsers",cAdmin.adminGetUsers)

routers.get("/getAllJuegos",cAdmin.getAllJuegos)

routers.delete("/deleteJuego",cAdmin.deleteJuego)

routers.get("/getAllAudios",cAdmin.getAllAudios)

routers.delete("/deleteAudios",cAdmin.deleteAudios)

routers.post("/SubirAudio",upload.single("audio") ,cAdmin.SubirAudio)

routers.get("/getAllVideos",cAdmin.getAllVideos)

routers.delete("/deleteVideo",cAdmin.deleteVideo)

routers.post("/SubirVideo",cAdmin.SubirVideos)

routers.delete("/adminDeleteUser",cAdmin.AdminDeleteUser)

routers.delete("/deleteLectura",cAdmin.deleteLectura)

routers.put("/adminUpdateUser", cAdmin.ModificarAdmin); 


// routers.patch("",(req,res) =>{
// // routers.patch((req,res) =>{

//     res.send("Hola xD")
// })

export default routers;