import { Container, Button} from "@mui/material";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Notificacion from "../../components/ComponenteNotificacion/Notificacion";
import { useState } from "react";
import '../../styles/StyleApartadoJuegos/CreateSentences.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function CreateSentences(){

    const location = useLocation();
    const navigate = useNavigate();
    const { link,imagen, recursoFront, recursoEjercicio,juegoID,index } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    const [arre, setArre] = useState([])
    const [Noti, setNoti] = useState(false);
    const [openBackDrop, setOpenBackDrop] = useState(false);

    const [ArreRespuestaUser,setArreRespuestaUser]  = useState(new Array(recursoEjercicio.length+1).fill(""))

    //let valor = recursoEjercicio.length+1;
    // const arr = new Array(valor).fill("");
    const arr = ArreRespuestaUser;
    console.log("",arr)

    const [mensaje, setMensaje] = useState("")

    
    
    

    // let arr = ["","","","",""]
    
    
    //console.log(arr)

    let spa = true; //false


    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //navigate("/Ejercicios",{state:{"link":link,"imagen":imagen}})
  };

  const handleCloseComplete = () => {
    setOpen(false);
    navigate(-1)
    
  };

    function drag(ev){
        ev.dataTransfer.setData("text",ev.target.id)
    }

    function allodrop(e){
        e.preventDefault();
    }

   

    function drop(e){
        
        if(isNaN(parseInt(e.target.id))){
            console.log("error")
        }else{
            if(arr[parseInt(e.target.id)] === "" && parseInt(e.target.id) !== arr.length-1){
    
                if( spa === true){
    
                    console.log("Entro",arr[parseInt(e.target.id)] )
    
                    var data = e.dataTransfer.getData("text");
                    const index = arr.findIndex(elemento => elemento === data);
                    if(index !== -1){
    
                        arr[index] = "";
                        console.log(e.target.id)
                        arr[parseInt(e.target.id)] = data; // ""
                        e.target.appendChild(document.getElementById(data));
                        console.log("ya no puedes regresar1" ,arr)
    
                    }else{
                        console.log(e.target.id)
                        arr[parseInt(e.target.id)] = data; // ""
                        e.target.appendChild(document.getElementById(data));
                        console.log("ya no puedes regresar1" ,arr)
                    }
                    
                    
                }
                
            }else if(arr[parseInt(e.target.id)] !== "" || parseInt(e.target.id) === arr.length-1  ){
                
                var data = e.dataTransfer.getData("text");
                console.log(data)
                const index = arr.findIndex(elemento => elemento === data);
                if(index !== -1){
                    arr[index] = "";
                    e.target.appendChild(document.getElementById(data));
                    console.log("ya no puedes regresar2",arr)
                }
               
                
            }
        }
    
            //verificar que este bien la oracion
    
            
        }

    function enviar(){
        setOpenBackDrop(true)
        //const arregloFinal = ["","","","",""];
        const respuesta = "Hello!, My name is Idiomatic"
        
        const arrAux = arr.filter(element => element !== "")
        console.log(arrAux.length)
        const resultado = arrAux.join(' '); 

        console.log()

        if(arrAux.length === recursoEjercicio.length){ 

        

        fetch(`https://api.textgears.com/grammar?text=${resultado}&language=en-US&ai=false&key=d96UAhwRk6kmjSXp`,{
            // headers:{
            //     Authorization: "Basic d96UAhwRk6kmjSXp"
            // }
        })
            .then(res => res.json())
            .then(res => {
                console.log("Respuesta Api: ",res)
                if(res.response.errors.length === 0 ){

                    
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
                
                        fetch(`/api/progresoUsuarioGeneral?TemaEjercicio=ejercicio&completeV=${completeJuego}`,{
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







                    console.log("Felicidades es correcto el ejercicio")
             setNoti(true);
             setArre(resultado);
           
             handleClickOpen ()






                }else{
                    console.log(res)
                    setMensaje("Tienes un error en la sentencia")
                    setArreRespuestaUser(arr)
                 console.log("Tienes un error en la sentencia ")
                 setOpenBackDrop(false);
          
                handleClickOpen()

                }
                
            })

        }else{
            setMensaje("Termina de ordenar la sentencia")
            console.log("Termina de ordenar la sentencia")
            setArreRespuestaUser(arr)
            handleClickOpen()
            setOpenBackDrop(false)

        }
        

    }

    // fetch(()=>{
    //     console.log("recarga");

    // },[recursoEjercicio])

    return(<Box className="MainContainerCreateSentencesBox">


            <Container className="ContainerTitleCreateSentences"  >
            <img className="imgTitleCreateSen" src={recursoFront.icono}  alt="" />             
            <h1 className="TitleCreateSen" >Create Sentences</h1>
            </Container>

            
            <p className="ExplicacionCreateSen"  >Ordena las palabras de manera que sean gramaticalmente correctas.
            prestando atención a la posición de los adverbios y utilizando la puntuación adecuada.
            </p>

        <Container className="ContainerresCreateSen" >

            <Container className="ContainerStars"  >

                <img src="/images/svgJuegos/star.svg" className="EstrellaCreateS" alt="" />
                <img src="/images/svgJuegos/star.svg" className="EstrellaCreateS"  alt="" />
                <img src="/images/svgJuegos/star.svg" className="EstrellaCreateS"  alt="" />
                <img src="/images/svgJuegos/star.svg" className="EstrellaCreateS"  alt="" />
                
            </Container>



            <div className="respuestasCreateSen" onDrop={drop} onDragOver={allodrop} id={recursoEjercicio.length} style={{}}>

                {recursoEjercicio.map((palabra,index) => {
                    // console.log("recarga");

                    return  <h3 className="respuestaFinalCreateSen" key={index}  name={palabra}  draggable="true" onDragStart={drag} id={palabra} >{palabra}</h3>
            
                } )}
            
            
            </div>

        
        </Container>

        
        <div className="ContainerComprobarCreate" >
            <div className="campoResCreateSen"  >

            {recursoEjercicio.map((palabra,index) => {
                    return  <div className="campoRespuestaCreate" key={index} style={{background:recursoFront.inputColor,}} name={palabra}  id={index} onDrop={drop} onDragOver={allodrop}></div>
            
                } )}

            
        </div>

        
        
        </div>
        <Button className="btnCreateSen" onClick={enviar} sx={{background:recursoFront.btnColor}} variant="contained">Enviar</Button>

        <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={openBackDrop}
        // onClick={handleClose} 
        >
        <CircularProgress color="inherit" />
      </Backdrop>

        {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo={mensaje} btnTexto="Salir" img="/images/svgJuegos/dogEquivocado.png"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" img="/images/svgJuegos/dogFelicidades.png"/>)}
        
         
        </Box>)
}