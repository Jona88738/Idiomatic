import { Container } from "@mui/system"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLocation } from "react-router-dom";
export default function EjercicioAudio(){

    const location = useLocation();

    const { link } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    console.log(link)

    return(<>

        <br />
        <Container sx={{background:"rgba(255, 194, 18, 0.65)",height:"20vh",borderRadius:"20px"}}>
        <br />
        <img src="/src/images/svgJuegos/speak.svg" width="250px"  style={{float:"right",position:"relative",bottom:"55%"}} />
                
        <h1 style={{marginTop:"0%"}}>Apartado Audio</h1>
        </Container>

        <br />

        <div style={{background:"rgba(224, 223, 253, 1)",width:"90%",marginLeft:"5%",height:"50vh",borderRadius:"20px"}}>

                <h2 style={{textAlign:"center"}}>listen and write the correct sentence</h2>


                <div style={{display:"flex",height:"50%"}}>
                    
                <img src="/src/images/svgJuegos/perroDudaIA.png" alt="" width="20%" style={{marginLeft:"8%"}}/>

                <h1>XD</h1>   
                <audio controls>
                <source src={link} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
                </div>

                <input type="text" placeholder="Escribe xD" style={{height:"8vh",width:"60%",borderRadius:"5px", paddingLeft:"5%",border:"2px solid black",marginLeft:"25%"}} />

               


        </div>
        <Button variant="contained" sx={{background:"rgba(249, 176, 195, 0.57)",color:"black",border:"2px solid black",width:"20%",marginTop:"5%",marginLeft:"40%",borderRadius:"20px"}}>Enviar</Button>
        
    
            
    
    </>)
}