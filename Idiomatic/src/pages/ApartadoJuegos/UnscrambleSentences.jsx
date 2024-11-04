import { Diversity3 } from '@mui/icons-material';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Notificacion from '../../components/ComponenteNotificacion/Notificacion';
import {  useNavigate  } from 'react-router-dom';
import '../../styles/StyleApartadoJuegos/UnscrambleSentences.css'
export default function UnscrambleSentences(){

    const location = useLocation();

    const { recursoFront, recursoEjercicio,juegoID,index } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
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
        
       
      // let num = [];
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
    
    return(<div >
        

    <img className='imgMainUnscrambleSen' src={recursoFront.icono} alt="" />
    <Container className='ContainerMainTitleUnscramble' disableGutters >

        <h1 className='TitleMainUnscramble'>Unscramble the sentences / Descifra las oraciones</h1>

        

    </Container>

    
    <div className='ContainerPregunta' >

       

        <Container >

            {recursoEjercicio.map((element,index) =>{
        return (<div><img className='imgNumUnscramble' src={"/images/UnscrambleSentences/numero"+(index+1)+".png"}  alt="xd" />
                        <h2 className='oracionUnscramble'>{element}</h2>
                         <input className='inputUnscrambleSenten' id={index} name={index} onChange={handleChange} style={{background:recursoFront.inputColor}} hidden="xd" type="text" />
                         </div>  )
            })}
     
        </Container>

        
    </div>
    
    {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png" indice={num} texto="Tuviste un Error"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" img="/src/images/svgJuegos/dogFelicidades.png" />)}
        
    <Button className='btnUnscrambleEnviar' onClick={enviar} sx={{background:recursoFront.btnColor}} variant='contained'>Enviar</Button> 
    
    </div>)
}
