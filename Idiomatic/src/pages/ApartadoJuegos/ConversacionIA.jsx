
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useRef } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from "react-router-dom";
import Notificacion from "../../components/ComponenteNotificacion/Notificacion";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function ConversacionIA(){

    const location = useLocation();

    const { recursoFront, recursoEjercicio } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
     // Inicio 
     const navigate = useNavigate();

    const [recording, setRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    
    const [numError, setnumError] = useState([]);

  const [open, setOpen] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [Noti, setNoti] = useState(false);
  const [grabar, setGrabar] = useState(true);

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






    const startRecording = async () => {
        
       setGrabar(false)
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);

            mediaRecorderRef.current.ondataavailable = event => {
                audioChunks.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioUrl(audioUrl);
                audioChunks.current = [];
                sendAudioToServer(audioBlob);
            };

            mediaRecorderRef.current.start();
            setRecording(true);
        } catch (error) {
            console.error('Error al iniciar la grabación:', error);
        }
    };

    const stopRecording = () => {
      
        setGrabar(true)

        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setRecording(false);
        }
    };

    const sendAudioToServer = (blob) => {
        const formData = new FormData();
        formData.append('audio', blob, 'N.wav');
        setOpenBackDrop(true)

        fetch('/api/audioIA', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {

            setOpenBackDrop(false)
            console.log("IA",data.message)
            let resulFinal = [];
            resulFinal.push({
                "bad":data.message,
                "better":recursoEjercicio,
                "description":{"en":"Possible spelling mistake"}
            })

            let contador = 0;

            let respuestaUser = data.message.replace(/\s+/g, '');           //.split("")
            respuestaUser = letras.split("")
            let respuestaCorrecta = recursoFront.respuesta;

            let respuestaSinEspacio = respuestaCorrecta.replace(/\s+/g, '')

            console.log("respuestaFinal",respuestaSinEspacio[0])

            respuestaUser.map((element,index) => {

                if(element === respuestaSinEspacio[index]){

                    contador++;

                }else{

                }

                let porcentaje = (contador* 100)/recursoEjercicio.length;
                console.log(porcentaje)
                //console.log("Letras: ",element);
                //console.log("SinESpacio: ", )
               
            })
            
            //console.log(letras);

            // letras.map((Element) => {

            // })

            // fetch(`https://api.textgears.com/grammar?text=${data.message}&language=en-US&ai=true`,{
            //     headers:{
            //         Authorization: "Basic d96UAhwRk6kmjSXp"
            //     }
            // })
            //         .then(res => res.json())
            //         .then((res) =>{
            //             setOpenBackDrop(false)
            //             let contador = 0;
            //             console.log(res);
            //             console.log(data.messag)

            //             console.log("arregloApi",res.response.errors.length)
            //             let texto = data.message;
            //             let respuestaF = recursoEjercicio.toUpperCase();
            //             let letras = texto.split("");
            //             let letrasREs = respuestaF.split("");
            //             console.log(recursoEjercicio.length)



            //             letras.forEach((element,indice) => {
            //                 console.log(indice);
                            
            //                 if(element === letrasREs[indice]){
                               
            //                     contador++;
            //                 }
            //             });
            //             setnumError(resulFinal);

            //             console.log("mi contador: ",contador);
            //             console.log(numError)

            //             let porcentaje = (contador* 100)/recursoEjercicio.length;
            //             console.log(porcentaje)
            //             if(res.response.errors.length < 2 && porcentaje > 80){

            //                 setNoti(true);
            //                 handleClickOpen();

            //             }else{
            //                 setNoti(false);
            //                 handleClickOpen()
            //             }
            //         })

                    

        })




        .catch(error => console.error('Error al enviar el audio:', error));

       
    };







    // XD
    return(<>
    <div style={{marginLeft:"11%"}}>

        <Container sx={{background:"rgba(119, 102, 198, 0.5)",marginTop:"1%",borderRadius:"20px",width:"70%",height:"15vh",marginLeft:"5%"}}>

            <h1 style={{textAlign:"center",position:"relative",top:"25%",fontSize:"2vw"}}> Lee la respuesta correcta según corresponda</h1>


        </Container>


        <Container sx={{marginLeft:"25%",width:"70%",position:"relative",height:"20vh"}}>

            <div style={{position:"absolute",zIndex:"1",width:"30%",left:"15%",top:"25%",height:"15vh"}}>
                <h1 style={{left:"30%",marginTop:"5%",fontSize:"1.5vw"}}>{recursoEjercicio}</h1>
           
            </div>
            {/* "/src/images/ConversacionIA/dog.png" */}
             <img src="/images/ConversacionIA/cuadroDog.png" width="52%" style={{position:"absolute",right:"45%",top:"-28%"}} alt="" />
            <img src={recursoFront.iconoDog} width="15%" style={{float:"right",marginBottom:"6%",position:"relative",right:"30%",top:"54px"}}  alt="XD" />

        </Container>

        <Container sx={{display:"flex"}}>

            <Container>
                <div style={{position:"absolute",zIndex:"1",width:"30%",left:"15%",top:"48%",height:"15vh"}}>
                    <h1 style={{position:"relative",left:"17%",marginTop:"10%",fontSize:"1.5vw"}}>{recursoFront.sentencia2}</h1>
            
                </div>
                <img src="/images/ConversacionIA/cuadroIzquierdo.png" width="75%"  alt="" />
                <br />
                <img src={recursoFront.iconoIzquierda} width="18%" alt="" />

            </Container>
            <Container>


                <div style={{position:"absolute",zIndex:"1",width:"30%",right:"12%",top:"48%",height:"15vh"}}>
                    <h1 style={{position:"relative",left:"17%",marginTop:"10%",fontSize:"1.5vw"}}>{recursoFront.sentencia3}</h1>
            
                </div>

        
                <img src="/images/ConversacionIA/cuadroDerecho.png" width="73%"  alt="" />
                <br />
                <img src={recursoFront.iconoDerecha} width="18%" style={{float:"right",marginRight:"20%"}} alt="" />

            </Container>



        </Container>
    
        {/* <Button sx={{background:recursoFront.btnColor,color:"black",position:"relative",left:"40%",bottom:"40px",borderRadius:"25px",width:"15%"}} variant='contained'>Enviar</Button> 
     */}
    
        {grabar === true ? (
            <><Button  id="record" onClick={startRecording} variant="outlined" sx={{position:"relative",bottom:"85px", width: "22%", height: "8vh", fontSize: "18px", borderRadius: "22px", background: recursoFront.btnColor, color: "black", marginLeft: "23%" }}>
                    Press to talk
                    <MicIcon sx={{ fontSize: 50 }} />
                </Button>
                <Button disabled  id="stopRecord" onClick={stopRecording} variant="outlined" sx={{position:"relative",bottom:"85px", width: "22%", height: "8vh", fontSize: "18px", borderRadius: "22px", background: recursoFront.btnColor, color: "black", marginLeft: "0%" }}>
                        Press to stop Record
                        <MicIcon sx={{ fontSize: 50 }} />
                </Button></>
            ):(
                <><Button disabled id="record" onClick={startRecording} variant="outlined" sx={{ width: "30%", height: "10vh", fontSize: "25px", borderRadius: "22px", background: recursoFront.btnColor, color: "black", marginLeft: "10%" }}>
                        Press to talk
                        <MicIcon sx={{ fontSize: 50 }} />
                    </Button>
                    <Button  id="stopRecord" onClick={stopRecording} variant="outlined" sx={{ width: "30%", height: "10vh", fontSize: "25px", borderRadius: "22px", background: recursoFront.btnColor, color: "black", marginLeft: "0%" }}>
                            Press to stop Record
                            <MicIcon sx={{ fontSize: 50 }} />
                    </Button></>
                )}

        {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png"indice={numError}  texto="Tuviste un Error"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" img="/src/images/svgJuegos/dogFelicidades.png"/>)}
        


        <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={openBackDrop}
        // onClick={handleClose} 
        >
        <CircularProgress color="inherit" />
      </Backdrop>
        </div>
    </>)
}