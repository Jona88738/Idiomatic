import { Router } from "express";
import cUser from "../Controllers/controladorUser.js"
import { sendEmailF } from '../Controllers/password-recovery.js'; 
import { updatePassword } from '../Controllers/update-password.js'; 

const routes = Router();

routes.post("/createUser", cUser.createUser ) 
routes.post("/signUser", cUser.sign_in ) 

routes.post("/PasswordRecovery", sendEmailF)
routes.post("/UpdatePassword", updatePassword)
routes.get("/sesion",cUser.sesion)

export default routes;