
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';


export default function ConversacionIA(){

    const location = useLocation();

    const { recursoFront, recursoEjercicio } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    

    return(<>

        <Container sx={{background:"rgba(119, 102, 198, 0.5)",marginTop:"1%",borderRadius:"20px",width:"70%",height:"15vh",marginLeft:"5%"}}>

            <h1 style={{textAlign:"center",position:"relative",top:"25%",fontSize:"2vw"}}> Lee la respuesta correcta según corresponda</h1>


        </Container>


        <Container sx={{marginLeft:"25%",width:"70%",position:"relative",height:"20vh"}}>

            <div style={{position:"absolute",zIndex:"1",width:"30%",left:"15%",top:"25%",height:"15vh"}}>
                <h1 style={{left:"30%",marginTop:"10%",fontSize:"1.5vw"}}>{recursoEjercicio}</h1>
           
            </div>
            {/* "/src/images/ConversacionIA/dog.png" */}
             <img src="/images/ConversacionIA/cuadroDog.png" width="52%" style={{position:"absolute",right:"45%",top:"-28%"}} alt="" />
            <img src={recursoFront.iconoDog} width="15%" style={{float:"right",marginBottom:"6%",position:"relative",right:"30%",top:"54px"}}  alt="XD" />

        </Container>

        <Container sx={{display:"flex"}}>

            <Container>
                <div style={{position:"absolute",zIndex:"1",width:"30%",left:"15%",top:"48%",height:"15vh"}}>
                    <h1 style={{left:"30%",marginTop:"10%",fontSize:"1.5vw"}}>{recursoFront.sentencia2}</h1>
            
                </div>
                <img src="/images/ConversacionIA/cuadroIzquierdo.png" width="75%"  alt="" />
                <br />
                <img src={recursoFront.iconoIzquierda} width="18%" alt="" />

            </Container>
            <Container>


                <div style={{position:"absolute",zIndex:"1",width:"30%",right:"12%",top:"48%",height:"15vh"}}>
                    <h1 style={{left:"30%",marginTop:"10%",fontSize:"1.5vw"}}>{recursoFront.sentencia3}</h1>
            
                </div>

        
                <img src="/images/ConversacionIA/cuadroDerecho.png" width="73%"  alt="" />
                <br />
                <img src={recursoFront.iconoDerecha} width="18%" style={{float:"right",marginRight:"20%"}} alt="" />

            </Container>


        </Container>
    
        <Button sx={{background:recursoFront.btnColor,color:"black",position:"relative",left:"40%",bottom:"40px",borderRadius:"25px",width:"15%"}} variant='contained'>Enviar</Button> 
    
    
    
    </>)
}