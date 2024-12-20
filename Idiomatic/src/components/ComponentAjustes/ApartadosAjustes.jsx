import { Container } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { createElement, useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { json } from "react-router-dom";
import SimpleDialogDemo from "../CambiarAvatar"
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import '../../styles/ApartadosAjustes.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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


  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseSi = () => {

    fetch("/api/deleteUser")
          

    navigate('/Login')
    setOpen(false);

  };

  const handleCloseNo = () => {
    setOpen(false);
  };

  
      
    function DialogEliminar(){

      return(<>

<Dialog
        open={open}
        onClose={handleCloseNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Eliminar Cuenta"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estas Seguro que quieres eliminar tu Cuenta?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNo}>No</Button>
          <Button onClick={handleCloseSi} autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
      
      
      </>)
    }







//XD
    return(<>

        
    <h1>Mi cuenta</h1>
        <Container className="ContainerMainBorrarCuenta" >
        <br />
        <h3 className="TitleMainBorrarCuenta" >Idioma</h3>
        <h3 className="TitleNIvelBorrarCuenta" >Nivel</h3>
        <Container  sx={{display:"flex",justifyContent:"space-evenly"}}> 



        <img className="imgBorrarCuenta"  src="/images/cuadrado.png" alt="" />
        <div className="microContainerInglesBorrarCuenta" > <h2 className="InglesBorrarCuenta" >Ingles</h2>   </div>
        <div className="microContainerA1BorrarCuenta" >  <h2 className="InglesBorrarCuenta" >A1</h2> </div>
        <div className="microContainerIconoBorrarCuenta" > <button onClick={handleClickOpen} className="btnBorrarCuenta" >  <DeleteIcon  /> </button>

        </div>

            
        </Container>
        
        
        

        

        </Container>
       

        <DialogEliminar/>
        
      

    </>)
}

export function RestaurarSuscrip({suscripcion}){
  
  const [openBackDrop, setOpenBackDrop] = useState(false);
  function Comprar(){
    setOpenBackDrop(true)
    fetch("/api/CreateOrder")
      .then(res => res.json())
      .then(res => {

       
        window.location.href = res.link
        setOpenBackDrop(false)
      })
  }

    return(<>
            <h1>Comprar Suscripcion</h1>

            {suscripcion.suscrip === 1 ? (<h3 style={{marginTop:"5%"}}>Ya tienes una suscripcion Actualmente</h3> ):
            (
              <>

                <h3>En estos momentos no tienes una suscripcion</h3>
                <Button sx={{marginTop:"6%"}} variant="contained" onClick={Comprar}>Comprar Plan Plus</Button>
              
              </>
            
            
            )            }
            <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={openBackDrop}
        // onClick={handleClose} 
        >
        <CircularProgress color="inherit" />
      </Backdrop>
            
{/*             
            <Button onClick={Comprar}>Comprar Plan Plus</Button> */}
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

          sx={{display:"block","& .MuiOutlinedInput-root": {
      border: '2px solid #ced4da !important',  // Sobrescribe los bordes
      }}}
          value={comentario}
          onChange={(e) =>{setComentario(e.target.value);}}
        />
        <br/>
            
            <Button  onClick={handleClick}  variant="contained"sx={{marginLeft:"0px"}} >Enviar</Button>
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


    
        const [open, setOpen] = useState(false);
        const [openError, setOpenError] = useState(false);  //Obligatorio
        const [openObligatorio, setOpenObligatorio] = useState(false); 
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
          setOpenError(false)
          setOpenObligatorio(false)
        };
      
      
    const [info, setInfo] = useState([]);

    // const [updateInfo, setUpdateInfo] = useState({"foto":foto.foto}) correcto
    const [updateInfo, setUpdateInfo] = useState(foto)
    console.log("info foto",updateInfo) 
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


        console.log("Cambio foto final",updateInfo.foto)

        const Tnombre = document.getElementById("contra");

        const TCorreo = document.getElementById("contra2");
        
        
        console.log("Contras: ",Tnombre.attributes.value.value);
        console.log("Contra2: ", TCorreo.attributes.value.value)

        if(updateInfo.nombre === "" || updateInfo.correo === ""){
            console.log("Rellena los campos obligatorios")
            setOpenObligatorio(true)

        }else
        
        if(Tnombre.attributes.value.value === TCorreo.attributes.value.value ){
            
            //if(Tnombre.attributes.value.value === "" ){
                const options = {
                    method: 'PATCH',
                    body: JSON.stringify(updateInfo.nombre),
                    

                };
                console.log(updateInfo.nombre)
                 
                  
                  

                fetch("/api/editUser",{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify(updateInfo),
                    

                })
                    .then(res => res.json(res))
                    

            //}else{

            //}
            
            cambiarFoto(updateInfo)
            setUpdateInfo(updateInfo)
           
            console.log("Se logro")
            setOpen(true);
            
          
        }
        else{
            console.log("Las Contraseñas no coinciden ");
            setOpenError(true);


            
        }

        
    }

    
    function handleChange(e){


        const Tnombre = document.getElementById(e.target.attributes.id.value);

            
        let h1 = document.getElementById(e.target.name);

       if(e.target.value === "" && e.target.name !== "contraseña" && e.target.name !==  "contraseña2"){

        if (!h1) {
            h1 = document.createElement("h4");
            h1.textContent = "El campo Nombre es requerido";
            h1.id = e.target.name; // Asignar un ID único al h1
            Tnombre.insertAdjacentElement("afterend", h1);
        }

       
      }else if(h1){

         // Si el h1 existe y el campo tiene valor, lo eliminamos
          if (h1.id === "nombre" || h1.id === "correo") {
             h1.remove();
         }else{

         }
        

       }
       
       setUpdateInfo({
        ...updateInfo,
        [e.target.name]:e.target.value,

        })
        
            console.log(e.target.attributes.id.value)
            console.log(e.target.value)

    }

    return(<>
    
    
    <h1 className="TitleMainEditar" >Editar Perfil</h1>

    <Container className="ContainerMainEditarP" >

            <Avatar className="imgAvatarEditarP" alt="Remy Sharp" variant="rounded" src={updateInfo.foto}  />
            
            <SimpleDialogDemo setfoto={setUpdateInfo} info={updateInfo}/>
           
            <label htmlFor="">Nombre</label>  
            
          <br/>
            <TextField required variant="outlined" className="TextFieldEditarP"    id="filled-required"label={"Nombre"} value={updateInfo.nombre}  
                    // Sobrescribe los bordes
                  name="nombre" onChange={handleChange} /> <br />
            
            <label htmlFor="">Correo</label> <br />
            <TextField id="outlined-basic" className="TextFieldEditarP" label={foto.correo} value={updateInfo.correo} name="correo" onChange={handleChange} /> <br />
            
            <label htmlFor="">Contraseña</label> <br />
            <TextField id="contra" className="TextFieldEditarP"   type="password" label="*****" value={updateInfo.contraseña}  name="contraseña" variant="outlined"  onChange={handleChange} />
            
            <label htmlFor="">Escriba de nuevo la Contraseña</label> <br />
            <TextField  id="contra2" className="TextFieldEditarP"   type="password" label="*****" value={updateInfo.contraseña2} name="contraseña2" variant="outlined" onChange={handleChange} />
            
            <Button className="EnviarEditarFoto"variant="contained"  onClick={actualizar}>Actualizar</Button>
            
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                Se actualizaron tus datos!!
              </Alert>
            </Snackbar>

            <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%', background:'red', color:'white' }}
              >
                Las contraseñas no coinciden!!!
              </Alert>
            </Snackbar>

            <Snackbar open={openObligatorio} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                
                variant="filled"
                sx={{ width: '100%', background:'red', color:'white' }}
              >
                Rellena los campos obligatorios!!!
              </Alert>
            </Snackbar>
    </Container>

       
    </>)
}

