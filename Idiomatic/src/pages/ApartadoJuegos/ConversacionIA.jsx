
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useRef } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from "react-router-dom";
import Notificacion from "../../components/ComponenteNotificacion/Notificacion";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import '../../styles/StyleApartadoJuegos/ConversationIA.css'
export default function ConversacionIA(){

    const location = useLocation();

    const { recursoFront, recursoEjercicio,juegoID,index } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
     // Inicio 
     const navigate = useNavigate();

     const [test, setTest] = useState("");

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
        formData.append('file', blob, 'N.wav');
        setOpenBackDrop(true)

        fetch('/api/API_IA', { //api/audioIA
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

            let contadorRes = 0;
            let contadorIncorrecta = 0;

            let respuestaUser = data.message.replace(/\s+/g, '');           //.split("")
            respuestaUser = respuestaUser.split("")
            let respuestaCorrecta = recursoFront.respuesta;
            let respuestaIncorrecta = recursoFront.incorrecta;
            console.log("respuestaIncorrectas: ",respuestaIncorrecta)

            let respuestaSinEspacio = respuestaCorrecta.replace(/\s+/g, '')
            let IncorrectaSinEspacio = respuestaIncorrecta.replace(/\s+/g, '')

            console.log("respuestaFinal",respuestaSinEspacio)
            console.log("respuestaUser: ",respuestaUser)

            respuestaUser.map((element,num) => {

            if(num < respuestaSinEspacio.length){

                if(element === respuestaSinEspacio[num].toUpperCase()){

                    contadorRes++;

                }else if(element === IncorrectaSinEspacio[num].toUpperCase()) {

                    contadorIncorrecta++;
                }
            }
            })

            console.log("Mi contador: ",contadorRes)
            console.log("Incorrecta: ",contadorIncorrecta)

            let porcentaje = (contadorRes* 100)/recursoEjercicio.length;
            console.log(porcentaje)

            let porcentajeIncorrecto = (contadorIncorrecta* 100)/recursoEjercicio.length;
            console.log(porcentajeIncorrecto)
            
            if(porcentaje > 28 ){
                console.log("Felicidades respondiste bien ")
                let completeJuego = JSON.parse(sessionStorage.getItem('completeJuego'))
        
                completeJuego[0].Total += 1;
        console.log("El tipo es: ",completeJuego[index].TotalComplete);
        
        if(completeJuego[index].TotalComplete <=  juegoID){

            completeJuego[index].TotalComplete = completeJuego[index].TotalComplete +1;
        console.log("entro")
        
        console.log(completeJuego[index].TotalComplete )

        sessionStorage.setItem('completeJuego',JSON.stringify(completeJuego) );
        console.log("Objeto actualizado: ",JSON.parse(sessionStorage.getItem('completeJuego')))
        completeJuego = JSON.parse(sessionStorage.getItem('completeJuego'));




            //let complete = Number(sessionStorage.getItem('completeVideo')) +1;
            console.log("entro al if xD")

           // sessionStorage.setItem('completeVideo', complete);
    
          //  console.log("NumLeccionVideo: ",sessionStorage.getItem('completeVideo'));
    
            fetch(`/api/progresoUsuarioGeneral?TemaEjercicio=video&completeV=${completeJuego}`,{
                method:"PATCH",
                headers:{
    
                    "Content-Type":'application/json'
                },
                body: JSON.stringify({
                    "completeVideo": completeJuego,
                  }),
            })
            .then(res => res.json())
            .then(res => console.log(res))

        }
                setTest("Felicidades respondiste bien")
                setNoti(true);
            handleClickOpen();
            }else if(porcentajeIncorrecto > 25 ){
                console.log("La respuesta es incorrecta")
                setTest("La respuesta es incorrecta")
                setNoti(false);
            handleClickOpen();
            }else {
                setTest("No lo pronunciaste bien, Vuelve a intentarlo");
                setNoti(false);
                handleClickOpen();
                console.log("No lo pronunciaste bien, Vuelve a intentarlo")
            }
           

                    

        })




        .catch(error => console.error('Error al enviar el audio:', error));

       
    };






    return(
    <div className='ContainMainConversationIA' >

        <Container className='ContainerTitleConversationIA' >

            <h1 className='titleConvesationIA' > Lee la respuesta correcta según corresponda</h1>


        </Container>
        {/* Ya quedo xD */}

        <Container className='ContainerDogConversation' >

            <div className='ContainerOracionDog' >
                <h1 className='OracionDog' >{recursoEjercicio}</h1>
           
            </div>
            
             <img className='imgCuadroDog' src="/images/ConversacionIA/cuadroDog.png"   alt="" />
            <img className='imgDog' src={recursoFront.iconoDog}   alt="XD" />

        </Container>

        <Container className='ContainerDialogosTextosConIA' >

            <Container className='ContainerDialogoIzquierdo'>
                <div className='ContainerTitleConversationIALeft' >
                    <h1 className='TitleLeftConversation' >{recursoFront.sentencia2}</h1>
            
                </div>
                <img className='imgCuadroLeftConversation' src="/images/ConversacionIA/cuadroIzquierdo.png"  alt="" />
                <br />
                <img className='imgPersonaIzquierdaConversationIA' src={recursoFront.iconoIzquierda}  alt="" />

            </Container>

            <Container className='ContainerDialogosTextoRightIA'>


                <div className='ContainerTitlePersonaRight' >
                    <h1 className='TitlePersonaRight' >{recursoFront.sentencia3}</h1>
            
                </div>

        
                <img className='imgCuadroRightDerechoConIA' src="/images/ConversacionIA/cuadroDerecho.png"   alt="" />
                <br />
                <img className='imgPersonaDerechaConvIA' src={recursoFront.iconoDerecha}  alt="" />

            </Container>



        </Container>
    
       
    
        {grabar === true ? (
            <><Button className='btnRecordConversationIA'  id="record" onClick={startRecording} variant="outlined" sx={{background: recursoFront.btnColor, }}>
                    Press to talk
                    <MicIcon sx={{ fontSize: 50 }} />
                </Button>
                <Button disabled className='btnStopConversationIA'   id="stopRecord" onClick={stopRecording} variant="outlined" sx={{  background: recursoFront.btnColor}}>
                        Press to stop Record
                        <MicIcon sx={{ fontSize: 50 }} />
                </Button></>
            ):(
                <><Button disabled className='btnStopConversationIA2'   id="record" onClick={startRecording} variant="outlined" sx={{  background: recursoFront.btnColor}}>
                        Press to talk
                        <MicIcon sx={{ fontSize: 50 }} />
                    </Button>
                    <Button className='btnRecordConversationIA2'  id="stopRecord" onClick={stopRecording} variant="outlined" sx={{  background: recursoFront.btnColor }}>
                            Press to stop Record
                            <MicIcon sx={{ fontSize: 50 }} />
                    </Button></>
                )}

        {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/images/svgJuegos/dogEquivocado.png"indice={numError} test={test}  texto="Tuviste un Error"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" test={test} img="/images/svgJuegos/dogFelicidades.png"/>)}
        


        <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={openBackDrop}
        
        >
        <CircularProgress color="inherit" />
      </Backdrop>
        </div>
    )
}