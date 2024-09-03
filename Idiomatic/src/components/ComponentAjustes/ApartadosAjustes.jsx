import { Container } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { json } from "react-router-dom";
import SimpleDialogDemo from "../CambiarAvatar"
import Switch from '@mui/material/Switch';
export function Notificaciones(){

    useEffect(()=>{

        fetch("/api/notificaciones")
            .then(res => res.json())
            .then(res => {
                const [pausarNotificacion,segundo] = res;
                if(segundo === 1){
                    setChecked(true)
                }else{
                    setChecked(false)
                }
                console.log(segundo)
            })
    },[])
    
    const [checked, setChecked] = useState(false);

    function handleChange(e){
        let result = 0; 
        console.log(typeof e.target.checked)
        if(e.target.checked === true){
            result = 1;
        }else{
            result = 0;
        }
        const metodo = {
            method:"PATCH"
        }

        fetch(`/api/notificaciones?pausar=${result}`,metodo)
            .then(res => res.json())
            .then(res => setChecked(!checked))
    }
    

    return(<>
        <h1>Notificaciones</h1>
        <Container sx={{display:"flex",background:"rgba(224, 223, 253, 0.5)",borderRadius:"25px"}}>

            
            
            <p>Al pausar las notificaciones estas solo se<br/> 
                silenciarán pero seguiran llegando a tu buzon.
         
                </p>

                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />

               
        </Container>
        
        </>
    )
}

export function Cursos(){
    return(<>

        
    <h1>Mi cuenta</h1>
        <Container sx={{background:"rgba(224, 223, 253, 0.5)",borderRadius:"25px",height:"29vh",paddingRight:"0"}}>
        <br />
        <h3 style={{marginBottom:"2px",display:"inline",marginLeft:"40%",paddingBottom:"35%"}}>Idioma</h3>
        <h3 style={{marginBottom:"2px",display:"inline",marginLeft:"8%"}}>Nivel</h3>
        <Container  sx={{display:"flex",justifyContent:"space-evenly"}}> 



        <img  src="/src/images/cuadrado.png" width="30%" height="50%" style={{marginTop:"0%",paddingRight:"5%"}} alt="" />
        <div style={{paddingLeft:"5%",paddingRight:"5%",boxShadow: "-2px 0px  0px rgba(31, 25, 47, 0.5), 2px 0px 0px rgba(31, 25, 47, 0.5)"}}> <h2 style={{marginTop:"6vh",}}>Ingles</h2>   </div>
        <div style={{paddingLeft:"5%",paddingRight:"5%",boxShadow:" 2px 0px 0px rgba(31, 25, 47, 0.5)"}}>  <h2 style={{marginTop:"6vh"}}>A1</h2> </div>
        <div style={{width:"20%",paddingLeft:"2%"}}> <button style={{width:"100%",height:"30%",borderRadius:"25px",marginTop:"49%"}}>  <DeleteIcon  /> </button>

        </div>

            
        </Container>
        
        
        

        

        </Container>
       

    </>)
}

export function RestaurarSuscrip(){
    return(<>
            <h1>Restaurar Suscripcion</h1>
    </>)
}

export function Fedback(){

    const [open, setOpen] = useState(false);
    const [comentario, setComentario] = useState();

    const handleClick = (e) => {

        const options = {
            method: "PATCH"
          };

        fetch(`/api/comentario?comentario=${comentario}`,options)
            .then(res => json(res))
            .then(res =>{ 
                setComentario("")
                setOpen(true)});



        
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };


    return(<>
            <h2>Enviar Comentarios</h2>
        
            <TextField
          id="outlined-multiline-flexible"
          label="Comentario"
          multiline
          maxRows={4}
          fullWidth={true}

          sx={{display:"block"}}
          value={comentario}
          onChange={(e) =>{setComentario(e.target.value);}}
        />
        <br/>
            
            <Button  onClick={handleClick}  variant="contained"sx={{marginLeft:"25px"}} >Enviar</Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
            >
            Tu comentario se ha enviado con exito 
            </Alert>
        </Snackbar>

        </>)
}

export function Main({foto,cambiarFoto}){

    const [info, setInfo] = useState([]);
    const [updateInfo, setUpdateInfo] = useState({"foto":foto.foto})
    //console.log("informacion",updateInfo)
    useEffect(() =>{

        fetch("/api/getUser")
            .then(res => res.json(res))
            .then(res => {
                //console.log(res)
                setInfo(res)

            })

    },[])
   // console.log(foto)
   
    function actualizar(){
            cambiarFoto({
                ...foto,
                "foto":"http://localhost:3001/FotoPerfil/mision.png"})
    }

    function handleChange(e){
        setUpdateInfo({
            ...updateInfo,
            [e.target.name]:e.target.value,

            })

            console.log(updateInfo)

    }

    return(<>
    
    
    <h1 style={{marginTop:"0"}}>Editar Perfil</h1>

    <Container sx={{background:"rgba(224, 223, 253, 0.5)",borderRadius:"25px", height:"110vh"}}>

            <Avatar alt="Remy Sharp" variant="rounded" src={updateInfo.foto} sx={{marginLeft:"35%", width: 164, height: 164 }} />
            <h3 style={{marginLeft:"30%"}}>Cambiar foto de perfil</h3>
            <SimpleDialogDemo setfoto={setUpdateInfo} info={updateInfo}/>
            <h3 style={{textAlign:"center"}}>{info.nombre}</h3>
            <h4 style={{textAlign:"center"}}>{info.correo}</h4>

            <label htmlFor="">Nombre de Usuario</label> <br />
            <TextField id="outlined-basic" label={info.nombre} name="Nombre" variant="outlined" sx={{width:"100%"}} onChange={handleChange} /> <br />
            <label htmlFor="">Correo</label> <br />
            <TextField id="outlined-basic" label={info.correo} name="Correo" variant="outlined" sx={{width:"100%"}} onChange={handleChange} /> <br />
            <label htmlFor="">Contraseña</label> <br />
            <TextField id="outlined-basic" label="*****" name="Contraseña" variant="outlined" sx={{width:"100%"}} onChange={handleChange} />
            <label htmlFor="">Escriba de nuevo la Contraseña</label> <br />
            <TextField id="outlined-basic" label="*****" name="Contraseña2" variant="outlined" sx={{width:"100%"}} onChange={handleChange} />
            <Button sx={{marginTop:"2%"}} variant="contained"  onClick={actualizar}>Actualizar</Button>

    </Container>
    </>)
}

