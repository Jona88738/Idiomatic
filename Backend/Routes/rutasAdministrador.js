import { Router } from "express";
import cAdmin from "../Controllers/controladorAdmin.js";
const routers = Router()

routers.put("/",cAdmin.createAdmin);

routers.get("/comentarioUser",cAdmin.comentarioUser)

routers.get("/adminGetUsers",cAdmin.adminGetUsers)

routers.patch((req,res) =>{

    res.send("Hola xD")
})

export default routers;