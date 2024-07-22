import { Router } from "express";
import cUser from "../Controllers/controladorUser.js"

const routes = Router();

routes.post("/createUser", cUser.createUser ) //create.createUser

routes.get("/signUser", cUser.sign_in ) //create.createUser



 routes.patch("/editUser", cUser.editUser)

  routes.put((req,res) => {

})


export default routes


