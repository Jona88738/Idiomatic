import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useLocation,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Notificacion from "../../components/ComponenteNotificacion/Notificacion";

export default function CompleteSentences(){

    const location = useLocation();

    const { recursoFront, recursoEjercicio } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    let inicio = []; 
    let fin = recursoFront.sentComplement;
    const [respuestas,setRespuestas]= useState([])

    const [Noti, setNoti] = useState(false);
    
    const [open, setOpen] = useState(false);

    const [numError, setnumError] = useState();
    const navigate = useNavigate();

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

    function handleOnChange(e){
       
        setRespuestas({
            ...respuestas,     
            [e.target.attributes.name.value]:e.target.value,
        })
        
    }

    function  handleEnviar(){

        console.log(respuestas)
        
        let res = [];
        let resFinal = [];
        inicio.map((element,index) =>{
            res.push(  element + respuestas[index] + " " +fin[index])
            
        })
        console.log(res)
        let contadorAciertos = 0;
 
const fetchPromises = res.map((element,index) => {
    return fetch(`https://api.textgears.com/grammar?text=${element}&language=en-US&ai=true`, {
        headers: {
            Authorization: "Basic d96UAhwRk6kmjSXp"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Procesa la respuesta
        console.log("Mis datos", data.response.errors[0])
        console.log(data.response.errors.length)
        if(data.response.errors.length === 0){
                
            let input = document.getElementById(index)
                input.style.background = "rgba(223, 253, 224, 1)"
                input.style.border = "3px solid green"
               // console.log("entro bien la sentencias")

        }else{
            contadorAciertos++;
            resFinal.push(data.response.errors[0])
            let input = document.getElementById(index)
                input.style.background = recursoFront.inputColor;
                input.style.border = "3px solid red"
        }
    
        return data; 
    });
});
console.log("resFinal",resFinal)
setnumError(resFinal);
Promise.all(fetchPromises)
    .then(results => {
        console.log("Todos los fetch han terminado");
        console.log("Número de aciertos:", contadorAciertos);

        if(contadorAciertos === 0){
            setNoti(true);
            handleClickOpen();
        }else{
           
            setNoti(false);
            handleClickOpen();

        }

    })
    .catch(error => {
        console.error("Ocurrió un error en una o más peticiones:", error);
    });
        
    }

    return(
    <div style={{backgroundImage:"linear-gradient(#F9B0C3,#936873)",marginBottom:"0px",height:"100vh"}}>
    <br/>
    
        <Container sx={{background:"rgba(255, 194, 18, 0.76)",borderRadius:"25px", height:"25vh",marginTop:"0%"}}>

        <img src={recursoFront.icono1} width="15%" alt="" style={{float:"left"}} />
       
        <h1 style={{textAlign:"center",marginTop:"50px",marginLeft:"20%",display:"inline-block"}}>Complete Sentences</h1>
        <img src='/images/svgJuegos/perroDuda.png' width="15%" style={{float:"right"}} />

        </Container>



    <Container sx={{background:"rgba(255, 194, 18, 0.76)",display:"flex", borderRadius:"25px",marginTop:"2%",paddingBottom:"8%",height:"55vh", positio:"relative" }}>



        <Container sx={{width:"15%"}}>

            {recursoEjercicio.map((element,index) =>{
                inicio[index] = element+" ";
               
                return  <h3 key={index} style={{marginLeft:"20%",marginTop:"22%"}}>{element} </h3> 
            })}

        
        </Container>
        
        <Container>

            {recursoFront.sentencia2.map((element,index) =>{
                return ( <><input key={index} id={index} name={index} style={{display:"inline-block",paddingLeft:"1%",fontSize:"1.5vw",borderRadius:"25px",marginTop:"2%",height:"13%"}} type="text" onChange={handleOnChange}/>
                <h3 key={element} style={{marginLeft:"2%",display:"inline-block"}}>{element} </h3> <br/> </> )
                
            })}
            
       

        </Container>


        <img src={recursoFront.icono2} width="20%" style={{position:"absolute", bottom:"10%",right:"10%"}} alt="" />

    </Container>
    
    {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png" indice={numError}  texto="Tuviste un Error"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" img="/src/images/svgJuegos/dogFelicidades.png" />)}
        


      
    <Button onClick={handleEnviar} sx={{background:recursoFront.btnColor,color:"black",marginTop:"2%",marginLeft:"40%",borderRadius:"25px",width:"15%"}} variant='contained'>Enviar</Button> 
    </div>)
}