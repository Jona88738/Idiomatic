import { Container } from "@mui/system"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Notificacion from "../../components/ComponenteNotificacion/Notificacion";
import '../../styles/StylesApartados/EjercicioAudio.css'
export default function EjercicioAudio(){

    const location = useLocation();

    const { link,recursoEjercicio,index,audioID } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
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
        
        for (const letra of text) {

           

                if(sinEspacioUser[contador] === undefined){

                }else{
                

                if(letra.toUpperCase() === sinEspacioUser[contador].toUpperCase()){
                   
                    aciertos++;
                    contador++;
                    
                }
            }
                
            //}
        }


         
          let porcentajeAcierto = ((aciertos * 100)/text.length)
        

        if(porcentajeAcierto=== 100){

            let completeAudio = JSON.parse(sessionStorage.getItem('completeAudio'))
        
            completeAudio[0].Total += 1;
            
            
            if(completeAudio[index].TotalComplete <=  audioID){
    
                completeAudio[index].TotalComplete = completeAudio[index].TotalComplete +1;
            

    
            sessionStorage.setItem('completeAudio',JSON.stringify(completeAudio) );
            
            completeAudio = JSON.parse(sessionStorage.getItem('completeAudio'));
    
    
    
    
                
                fetch(`/api/progresoUsuarioGeneral?TemaEjercicio=audio&completeV=${completeAudio}`,{
                    method:"PATCH",
                    headers:{
        
                        "Content-Type":'application/json'
                    },
                    body: JSON.stringify({
                        "completeVideo": completeAudio,
                      }),
                })
                .then(res => res.json())
                .then(res => console.log(res))
    
            }
            
               
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
                   
                    setnumError(res.response.errors);
                } )
                .then((res) => {

                    setNoti(false);
                    handleClickOpen();

                    

                })
            
           
         }else{
            setNoti(false);
            handleClickOpen();
         }
       
    }

    function handleChange(e){

         setRespuestaUser(e.target.value)
         
    }

    return(<div style={{height:"91vh"}}>

        
       
        <Container className="ContainerTitleEjerAudio"  >
        
        <img className="ContainerImgEjerAudio" src="/images/svgJuegos/speak.svg"  />
                
        <h1  className="TitleEjerAudio" >Apartado Audio</h1>
        </Container>

        

        <div className="ContainerMainEjerAudio" >

                <h2 className="ContMainTitle" >listen and write the correct sentence</h2>


                <div className="MainEjercicio" >
                    
                <img className="imgDogMainEjer" src="/images/svgJuegos/perroDudaIA.png" alt=""  />

                {/* <h1></h1>    */}
                <audio controls className="MiAudioXD">
                <source src={link} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
                </div>

                <input className="inputAudioEjercicio" type="text" onChange={handleChange} placeholder="Escribe xD"  />

               
                

        </div>

        {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png" indice={numError}  texto="Tuviste un Error"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" img="/src/images/svgJuegos/dogFelicidades.png" />)}
        

        <Button className="btnResEjercicioAudio" onClick={enviar} variant="contained" >Enviar</Button>
        
    
            
    
    </div>)
}