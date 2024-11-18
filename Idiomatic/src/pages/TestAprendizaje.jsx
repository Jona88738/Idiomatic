import { useState,useEffect } from 'react'
import { Button, Container, colors } from "@mui/material";
import { Radio } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
//import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Notificacion from "../components/ComponenteNotificacion/Notificacion";
import '../styles/TestTipoAprendizaje.css';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad',''];

function TestAprendizaje() {

  const navigate = useNavigate();

  const [count, setCount] = useState(0)
  const [test, setTest] = useState("");

  const [Noti, setNoti] = useState(false);
  const [open, setOpen] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [preguntas, setPreguntas] = useState([]);
  const [res, setRes] = useState([]);
  
  const [selectedOption, setSelectedOption] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const handleCloseComplete = () => {
    fetch("/api/testAprendizaje",{
      method:'POST',
      headers:{
        
          'Content-Type': 'application/json',
        
      },
      body:JSON.stringify({
        "tipoAprendizaje":test
      })

    })
      
    setOpen(false);
    navigate(-1)
    
  };

  function HorizontalNonLinearStepper() {
  

  const totalSteps = () => {
    
    return steps.length;
  };

  const completedSteps = () => {
    // console.log(res)
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
   // console.log("holaxD")
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    
    
    // Contar el número total de propiedades
    const totalProperties = Object.keys(res).length;

    console.log(totalProperties)

    if(totalProperties === count+2 || totalProperties === 8 ){

    

    setCount(count+2);
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false; // Desmarcar todos los radio buttons
    });
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();

  }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleMio = () =>{
    // console.log(res)

    
    
    // Crear un objeto para contar cuántas veces aparece cada valor
    const contador = {};
    
    // Iterar sobre las propiedades del JSON
    Object.values(res).forEach(valor => {
      contador[valor] = (contador[valor] || 0) + 1;
    });
    
    // Determinar el valor que más se repite
    let valorMasRepetido = null;
    let maxRepeticiones = 0;
    
    for (const valor in contador) {
      if (contador[valor] > maxRepeticiones) {
        maxRepeticiones = contador[valor];
        valorMasRepetido = valor;
      }
    }
    
    // console.log(`El valor que más se repite es: ${valorMasRepetido} (${maxRepeticiones} veces)`);
    setTest(valorMasRepetido)
    // console.log("Mi test: ",test)
    setNoti(true)
    handleClickOpen();

    
  }

  return (
    <Box className='ContainerPuntosTestAprendizaje'sx={{ }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" style={{pointerEvents:"none"}}> { /*onClick={handleStep(index)} */} 
              {/* {label} */}
             </StepButton> 
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography className='StepTestTipoAprendizaje' sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              <Box sx={{ flex: '1 1 auto' }} />
              {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button> */}
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (


                  completedSteps() === totalSteps() - 1
                    ? (<Button onClick={handleMio} variant='contained'>Enviar</Button>)
                    : (<Button onClick={handleComplete} className='btnSiguienteTestAprendizaje' variant='contained' >Siguiente  <ArrowForwardIcon /> </Button>)

                  
                  // <Button onClick={handleComplete}>
                  //   {completedSteps() === totalSteps() - 1
                  //     ? 'Enviar'
                  //     : 'Siguiente pregunta'}
                  // </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
  
useEffect(()=>{

  fetch("/api/testAprendizaje")
    .then(res => res.json())
    .then(res => setPreguntas(res))
  
},[])

    const handleChangle = (e) => {
      // console.log(e.target.value)
      //setSelectedOption(e.target.id);
      // setRes({
      //   ...res,
      //   [e.target.name]:e.target.value
      // })

       setRes({
         ...res,
         [e.target.name]:e.target.value
       })

      // console.log(res)

      

    }
//console.log(res)
  return (
   
    <div className='mainContainerTestAprendizaje' >
       
      <Container  className='ContainerTitleTestAprendizaje'>
      <img className='IconoTitleLeft' src="/images/TestAprendizaje/libro.png" />
      <img className='IconoTitleRight'  src="/images/TestAprendizaje/materialEscolar.png" />
      
      <h1 className='TitleMainTestAprendizaje' >Test de estilos de aprendizaje</h1>
      <br />
      <br />
      <HorizontalNonLinearStepper />
      </Container>

      {
      
      preguntas.slice(count, count+2).map((element,index) =>{
       // console.log(res[index].radio)

        return(<div className='ContainerPreguntasTestAprendizaje' >

            <h2 className='PreguntaTestAprendizaje' >{element.pregunta}</h2>
            
            <input className='firstInputTestAprendizaje' type='radio' key={element.res1.tipo}  name={element.in} id={element.res1.res}   onChange={handleChangle}  value={element.res1.tipo}  />
            <label className='firstLabelTestAprendizaje' htmlFor={element.res1.res} > {element.res1.res}</label>

            <input className='segundoInputTestAprendizaje' type='radio' key={element.res2.tipo}  name={element.in} id={element.res2.res}   onChange={handleChangle} value={element.res2.tipo} />
            <label className='segundoLabelTestAprendizaje'  htmlFor={element.res2.res} > {element.res2.res}</label>

            <input className='tresInputTestAprendizaje'  type='radio' key={element.res3.tipo}  name={element.in} id={element.res3.res}    onChange={handleChangle} value={element.res3.tipo} />
            <label className='tresLabelTestAprendizaje' htmlFor={element.res3.res}    > {element.res3.res}</label>

            <br />
            <br />
          
           
        
        
        </div>)
      })}
       
       
  {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png" texto="Tuviste un Error"/>) : 
         (<Notificacion open={open} handleClose={handleCloseComplete} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" test={"Tu tipo de aprendizaje es: "+test} img="/images/svgJuegos/dogFelicidades.png"/>)}
        
     <img src="/images/svgJuegos//dogSaludando.png" alt="xd"  width="15%" style={{position:"absolute",right:"5%",bottom:"1%"}}/>
      </div>
  )
}

export default TestAprendizaje