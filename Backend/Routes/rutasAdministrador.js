import { Router } from "express";
import cAdmin from "../Controllers/controladorAdmin.js";
const routers = Router()

routers.put("/",cAdmin.createAdmin);

// routers.patch((req,res) =>{

//     res.send("Hola xD")
// })

export default routers;