import { Container } from "@mui/system"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Notificacion from "../../components/ComponenteNotificacion/Notificacion";
export default function EjercicioAudio(){

    const location = useLocation();

    const { link,recursoEjercicio } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
//     console.log(recursoEjercicio)

    const [respuestaUser, setRespuestaUser] = useState("")

    const [Noti, setNoti] = useState(false);
    
    const [open, setOpen] = useState(false);

    const [numError, setnumError] = useState([]);

    const navigate = useNavigate();
    //let numError = [];

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        
      };
      const handleCloseComplete = () => {
        setOpen(false);
        navigate(-1)
        
      };

    function enviar(){

        const text = recursoEjercicio.split("")
       // console.log("mi letra",text[0])
        let contador = 0;
        let aciertos = 0;
        //let respuestaApi = respuestaUser;

        let sinEspacioUser = respuestaUser.replace(/\s+/g, '')
        console.log("Esta es la respuesta User",sinEspacioUser)
        for (const letra of text) {

            console.log(contador," letra: ",letra,"text:", sinEspacioUser[contador])
            //if(  sinEspacioUser.length <=  text.length ){
                console.log("entro")

                if(letra.toUpperCase() === sinEspacioUser[contador].toUpperCase()){
                   
                    aciertos++;
                    contador++;
                    
                }
                
                
            //}
        }


          console.log(contador)
          let porcentajeAcierto = ((aciertos * 100)/text.length)
        
        console.log("Respuesta verificada",porcentajeAcierto)


        if(porcentajeAcierto=== 100){

            
                console.log("Felicidades Completaste el ejercicio")
                setNoti(true);
                handleClickOpen();
            

         }else if(porcentajeAcierto >45){
            

            fetch(`https://api.textgears.com/grammar?text=${respuestaUser}&language=en-US&ai=true`,{
                headers:{
                    Authorization: "Basic d96UAhwRk6kmjSXp"
                }
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                    setnumError(res.response.errors);
                } )
                .then((res) => {

                    setNoti(false);
                    handleClickOpen();

                    console.log("Mis errores: ", numError[0].description.en)

                })
            
            //setNoti(false);
            //handleClickOpen();

           // console.log("Reformula completamente la sentecia por que no coincide ")
         }else{
            setNoti(false);
            handleClickOpen();
         }
        console.log("aciertos:", aciertos,"Total letras:",text.length)
    }

    function handleChange(e){

         setRespuestaUser(e.target.value)
         
    }

    return(<>

        <br />
        <Container sx={{background:"rgba(255, 194, 18, 0.65)",height:"20vh",borderRadius:"20px"}}>
        <br />
        <img src="/images/svgJuegos/speak.svg" width="250px"  style={{float:"right",position:"relative",bottom:"55%"}} />
                
        <h1 style={{marginTop:"0%"}}>Apartado Audio</h1>
        </Container>

        <br />

        <div style={{background:"rgba(224, 223, 253, 1)",width:"90%",marginLeft:"5%",height:"50vh",borderRadius:"20px"}}>

                <h2 style={{textAlign:"center"}}>listen and write the correct sentence</h2>


                <div style={{display:"flex",height:"50%"}}>
                    
                <img src="/images/svgJuegos/perroDudaIA.png" alt="" width="20%" style={{marginLeft:"8%"}}/>

                <h1></h1>   
                <audio controls>
                <source src={link} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
                </div>

                <input type="text" onChange={handleChange} placeholder="Escribe xD" style={{height:"8vh",width:"60%",borderRadius:"5px", paddingLeft:"5%",border:"2px solid black",marginLeft:"25%"}} />

               
                {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png" indice={numError}  texto="Tuviste un Error"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" img="/src/images/svgJuegos/dogFelicidades.png" />)}
        

        </div>
        <Button onClick={enviar} variant="contained" sx={{background:"rgba(249, 176, 195, 0.57)",color:"black",border:"2px solid black",width:"20%",marginTop:"5%",marginLeft:"40%",borderRadius:"20px"}}>Enviar</Button>
        
    
            
    
    </>)
}