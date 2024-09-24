import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';

export default function CompleteSentences(){

    const location = useLocation();

    const { recursoFront, recursoEjercicio } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    

    return(
    <div style={{backgroundImage:"linear-gradient(#F9B0C3,#936873)",marginBottom:"0px",height:"100vh"}}>

   
    <br/>
        

        <Container sx={{background:"rgba(255, 194, 18, 0.76)",borderRadius:"25px", height:"25vh",marginTop:"0%"}}>

        <img src={recursoFront.icono1} width="15%" alt="" style={{float:"left"}} />
        {/*  src="/src/images/svgJuegos/cerebroLentes.svg" */}
        <h1 style={{textAlign:"center",marginTop:"50px",marginLeft:"20%",display:"inline-block"}}>Complete Sentences</h1>
        <img src='/src/images/svgJuegos/perroDuda.png' width="15%" style={{float:"right"}} />

        </Container>



    <Container sx={{background:"rgba(255, 194, 18, 0.76)",display:"flex", borderRadius:"25px",marginTop:"2%",paddingBottom:"8%",height:"55vh", positio:"relative" }}>



        <Container sx={{width:"15%"}}>

            {recursoEjercicio.map((element) =>{
                return  <h3 style={{marginLeft:"20%",marginTop:"22%"}}>{element} </h3> 
            })}

        {/* <h3 style={{marginLeft:"20%",marginTop:"22%"}}>I am </h3> 
        <h3 style={{marginLeft:"20%",marginTop:"22%"}}>you are</h3> 
        <h3 style={{marginLeft:"20%",marginTop:"22%"}}>he is</h3>
        <h3 style={{marginLeft:"20%",marginTop:"22%"}}>she is</h3>
        <h3 style={{marginLeft:"20%",marginTop:"22%"}}>it is</h3> */}


        </Container>
        
        <Container>

            {recursoFront.sentencia2.map((element) =>{
                return ( <><input style={{display:"inline-block",borderRadius:"25px",marginTop:"2%",height:"13%"}} type="text" />
                <h3 style={{marginLeft:"2%",display:"inline-block"}}>{element} </h3> <br/> </> )
                
            })}
            
        {/* <input style={{display:"inline-block",borderRadius:"25px",marginTop:"2%",height:"13%"}} type="text" />
        <h3 style={{marginLeft:"2%",display:"inline-block"}}>I am </h3> <br/>
        <input style={{display:"inline-block",borderRadius:"25px",marginTop:"2%",height:"13%"}} type="text" />
        <h3 style={{marginLeft:"2%",display:"inline"}}>I am </h3> <br/>
        <input style={{display:"inline-block",borderRadius:"25px",marginTop:"2%",height:"13%"}} type="text" />
        <h3 style={{marginLeft:"2%",display:"inline"}}>I am </h3> <br/>
        <input style={{display:"inline-block",borderRadius:"25px",marginTop:"2%",height:"13%"}} type="text" />    
        <h3 style={{marginLeft:"2%",display:"inline"}}>I am </h3> <br/>
        <input style={{display:"inline-block",borderRadius:"25px",marginTop:"2%",height:"13%"}} type="text" />
        <h3 style={{marginLeft:"2%",display:"inline"}}>I am </h3> <br/>
             */}

        </Container>


        <img src={recursoFront.icono2} width="20%" style={{position:"absolute", bottom:"10%",right:"10%"}} alt="" />

    </Container>
    

      
    <Button sx={{background:recursoFront.btnColor,color:"black",marginTop:"2%",marginLeft:"40%",borderRadius:"25px",width:"15%"}} variant='contained'>Enviar</Button> 
    </div>)
}