import { Router } from "express";
import create from "../Controllers/controladorUser.js"

const routes = Router();

routes.get("/", (req,res) => res.send("Hola xD")) //create.createUser

 routes.put("/user",(req,res) => {


})

  routes.put((req,res) => {

})


export default routes


