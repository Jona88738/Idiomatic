import { Container } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { json } from "react-router-dom";


export function Notificaciones(){

    

    

    return(<>
        <h1>Notificaciones</h1>
        <Container sx={{display:"flex",background:"rgba(224, 223, 253, 0.5)",borderRadius:"25px"}}>

            
            
            <p>Al pausar las notificaciones estas solo se<br/> 
                silenciarán pero seguiran llegando a tu buzon.
         
                </p>

                <FormControlLabel
                    value="top"
                    control={<Switch color="primary" />}
                    label="off/on"
                    labelPlacement="top"
                    
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
            <Button variant="contained">Cancelar</Button>
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

export function Main({datos}){

    const [info, setInfo] = useState([]);

    useEffect(() =>{

        fetch("/api/getUser")
            .then(res => res.json(res))
            .then(res => {
                console.log(res)
                setInfo(res)

            })

    },[])
   



    return(<>
    
    
    <h1 style={{marginTop:"0"}}>Editar Perfil</h1>

    <Container sx={{background:"rgba(224, 223, 253, 0.5)",borderRadius:"25px", height:"95vh"}}>

            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{marginLeft:"35%", width: 164, height: 164 }} />
            <h3 style={{marginLeft:"30%"}}>Cambiar foto de perfil</h3>
            <h3 style={{textAlign:"center"}}>{info.nombre}</h3>
            <h4 style={{textAlign:"center"}}>{info.correo}</h4>
            <label htmlFor="">Nombre de Usuario</label> <br />
            <TextField id="outlined-basic" label={info.nombre} variant="outlined" sx={{width:"100%"}} /> <br />
            <label htmlFor="">Correo</label> <br />
            <TextField id="outlined-basic" label={info.correo} variant="outlined" sx={{width:"100%"}} /> <br />
            <label htmlFor="">Contraseña</label> <br />
            <TextField id="outlined-basic" label="*****" variant="outlined" sx={{width:"100%"}} />
            <label htmlFor="">Escriba de nuevo la Contraseña</label> <br />
            <TextField id="outlined-basic" label="*****" variant="outlined" sx={{width:"100%"}} />
            <Button sx={{marginTop:"2%"}} variant="contained" >Actualizar</Button>

    </Container>
    </>)
}

