import { Diversity3 } from '@mui/icons-material';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Notificacion from '../../components/ComponenteNotificacion/Notificacion';
import {  useNavigate  } from 'react-router-dom';
export default function UnscrambleSentences(){

    const location = useLocation();

    const { recursoFront, recursoEjercicio } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    const [respuestas,setRespuestas] = useState({})

    const [Noti, setNoti] = useState(false);
    
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    let num = [];

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
        
       
       let num = [];
        let contador  = 0;
        recursoFront.respuesta.map((element, index) =>{

            let sinEspacio = respuestas[index].replace(/\s+/g, '')
           
            if(element === sinEspacio){
               
                let input = document.getElementById(index)
                input.style.background = "rgba(223, 253, 224, 1)"
                input.style.border = "3px solid green"
                contador++;
            }else{
                console.log(respuestas[index])
                num.push(index);
                setNoti(false);
                let input = document.getElementById(index)
                input.style.background = recursoFront.inputColor;
                input.style.border = "3px solid red"
            }

            
        } )

        if(contador === 6){
            console.log("Felicidades ganaste el juego xD"+ contador);
            setNoti(true);
            handleClickOpen();
          
        }else{
            num.map(element => console.log("Te equivocaste en las siguientes ", respuestas[element]))
            
            handleClickOpen()

        }

    }

    function handleChange(e){

        console.log(e)
        console.log(e.target.attributes.name.value,e.target.value)
        setRespuestas({
            ...respuestas,
            [e.target.attributes.name.value]:e.target.value
        })
    }
    
    return(<div style={{}}>
        

    <img src={recursoFront.icono} style={{float:"left",position:"absolute",left:"0%",top:"0%"}} width="12%" alt="" />
    <Container disableGutters sx={{background:"rgba(119, 102, 198, 0.5)",width:"80%",marginLeft:"15%",marginRight:"0%",borderRadius:"10px",height:"14vh",marginTop:"3%"}}>

        <h1 style={{position:"relative",top:"23%",textAlign:"center"}}>Unscramble the sentences / Descifra las oraciones</h1>

        

    </Container>

    
    <div  style={{marginTop:"2%",display:"flex"}}>

        <Container   sx={{width:"15%"}}>

            <img src="/images/UnscrambleSentences/numero1.png" width="50%" style={{display:"block",marginTop:"15%",marginLeft:"45%"}} alt="" />
            <img src="/images/UnscrambleSentences/numero2.png" width="50%" style={{display:"block",marginTop:"45%",marginLeft:"45%"}} alt="" />
            <img src="/images/UnscrambleSentences/numero3.png" width="40%" style={{display:"block",marginTop:"50%",marginLeft:"53%"}} alt="" />
            <img src="/images/UnscrambleSentences/numero4.png" width="40%" style={{display:"block",marginTop:"50%",marginLeft:"53%"}} alt="" />
            <img src="/images/UnscrambleSentences/numero5.png" width="40%" style={{display:"block",marginTop:"50%",marginLeft:"53%"}} alt="" />
            <img src="/images/UnscrambleSentences/numero6.png" width="40%" style={{display:"block",marginTop:"50%",marginLeft:"53%"}} alt="" />
        </Container>

        <Container sx={{}}>

            {recursoEjercicio.map((element,index) =>{
                return (<><h2  style={{margin:"0",marginTop:"2%",color:"black"}}>{element}</h2>
                         <input id={index} name={index} onChange={handleChange} style={{background:recursoFront.inputColor,display:"inline-block",borderRadius:"25px",marginTop:"2%",width:"40%",height:"40px",paddingLeft:"2%",fontSize:"22px"}} hidden="xd" type="text" />
                         </>  )
            })}
     
        </Container>

        
    </div>
    
    {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png" indice={num} texto="Tuviste un Error"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" img="/src/images/svgJuegos/dogFelicidades.png" />)}
        
    <Button onClick={enviar} sx={{background:recursoFront.btnColor,color:"black",position:"relative",left:"75%",marginBottom:"1%",borderRadius:"25px",width:"15%"}} variant='contained'>Enviar</Button> 
    
    </div>)
}
