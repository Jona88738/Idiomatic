export const authenticate = (req, res, next) => {
    

const MySesion = req.session.idUser;
console.log("Esta es la session",MySesion);

  if(MySesion === undefined){
    return res.status(401).json({ message: "Acceso denegado. Token no proporcionado." });
  }else{
    next();

  }

}
