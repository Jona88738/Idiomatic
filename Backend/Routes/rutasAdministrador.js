import { Router } from "express";

const routers = Router()

const updateUser = routers.patch((req,res) =>{

    res.send("Hola xD")
})

export default {

    updateUser
}