import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Notificacion from "../../components/ComponenteNotificacion/Notificacion";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import '../../styles/StyleApartadoJuegos/AudioIA.css';

export default function AudioIA() {

    const navigate = useNavigate();

    const [recording, setRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    const location = useLocation();
    const [numError, setnumError] = useState([]);

    const { recursoFront, recursoEjercicio,juegoID,index  } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    
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


            console.log("IA",data.message)
            let resulFinal = [];
            resulFinal.push({
                "bad":data.message,
                "better":recursoEjercicio,
                "description":{"en":"Possible spelling mistake"}
            })

            fetch(`https://api.textgears.com/grammar?text=${data.message}&language=en-US&ai=true`,{
                headers:{
                    Authorization: "Basic d96UAhwRk6kmjSXp"
                }
            })
                    .then(res => res.json())
                    .then((res) =>{
                        setOpenBackDrop(false)
                        let contador = 0;
                        console.log(res);
                        console.log(data.messag)

                        console.log("arregloApi",res.response.errors.length)
                        let texto = data.message;
                        let respuestaF = recursoEjercicio.toUpperCase();
                        let letras = texto.split("");
                        let letrasREs = respuestaF.split("");
                        console.log(recursoEjercicio.length)



                        letras.forEach((element,indice) => {
                            console.log(indice);
                            
                            if(element === letrasREs[indice]){
                               
                                contador++;
                            }
                        });
                        setnumError(resulFinal);

                        console.log("mi contador: ",contador);
                        console.log(numError)

                        let porcentaje = (contador* 100)/recursoEjercicio.length;
                        console.log(porcentaje)
                        if(res.response.errors.length < 2 && porcentaje > 80){

                            setNoti(true);
                            handleClickOpen();
                            //inicia Actualizar contador

                            let completeJuego = JSON.parse(sessionStorage.getItem('completeJuego'))
        
                            completeJuego[0].Total += 1;
                            console.log("El tipo es: ",completeJuego[index].Total);
                            
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
                        
                                fetch(`/api/progresoUsuarioGeneral?TemaEjercicio=ejercicio&completeV=${completeJuego}`,{
                                    method:"PATCH",
                                    headers:{
                        
                                        "Content-Type":'application/json'
                                    },
                                    body: JSON.stringify({
                                        completeVideo: completeJuego,
                                      }),
                                })
                                .then(res => res.json())
                                .then(res => console.log(res))
                    
                            }
                            











                            
                            //Termina 
                        }else{
                            setNoti(false);
                            handleClickOpen()
                        }
                    })

                    

        })




        .catch(error => console.error('Error al enviar el audio:', error));

       
    };

    
    return (
        <div className='ContainerMainAudioIA' >
            <br />
            <Container className='ContainerTitleAudioIA' >
                <img className='imgDogSpeak' src="/images/svgJuegos/speak.svg"   />
                <h1 className='TitleAudioIA' >Speaking.- Was/Were</h1>
            </Container>

            <h1 className='SubtitleAudioIA' >Speak this sentence</h1>
            <Container className='ContainerEjercicioAudioIA' >
                <img className='imgDogLeftAudioIA' src={recursoFront.icono} alt=""   />
                        {/*  ="/src/images/svgJuegos/perroDudaIA.png" */}
                <Container >
                    <div className='ContainerTitleEjercicioAudioIA' >
                        <h2 className='TitleEJercicioAudioIA' >{recursoEjercicio}</h2>
                    </div>
                </Container>
            </Container>
            <br />
            <MicIcon sx={{ fontSize: 9 }} />
            
            {grabar === true ? (
            <><Button className='btnAudioIARecord'  id="record" onClick={startRecording} variant="outlined" sx={{color:"black", background: recursoFront.btnColor, }}>
                    Press to talk
                    <MicIcon sx={{ fontSize: 50 }} />
                </Button>
                <Button className='btnAudioIAStop'  disabled  id="stopRecord" onClick={stopRecording} variant="outlined" sx={{ background: recursoFront.btnColor, color: "black", }}>
                        Press to stop Record
                        <MicIcon sx={{ fontSize: 50 }} />
                </Button></>
            ):(
                <><Button className='btnAudioIARecord'  disabled id="record" onClick={startRecording} variant="outlined" sx={{color:"black",  background: recursoFront.btnColor,  }}>
                        Press to talk
                        <MicIcon sx={{ fontSize: 50 }} />
                    </Button>
                    <Button  className='btnAudioIAStop'  id="stopRecord" onClick={stopRecording} variant="outlined" sx={{ background: recursoFront.btnColor, color: "black",  }}>
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

        
    );
}
