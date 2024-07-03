import { Container } from "@mui/material";
import Button from '@mui/material/Button';
export default function Footer_Home(){
    return(<>
    
    
      
      <Container maxWidth="cadena" sx={{display:'flex',background: '#3A3160', height:'30vh',     boxShadow:'0px 6px 2px GRAY'}}>
      
      
        <Container>

            <h1 style={{color:'white'}}>Nuestros Cursos</h1>
            <ul>

              <li style={{color:'white'}}>Curso de ingles</li>
              <li style={{color:'white'}}>Curso de frances</li>
            </ul>

        </Container>

        


        <Container>

        <h1 style={{color:'white'}}>Recursos</h1>
            <ul>

              <li style={{color:'white'}}>Test nivel de  ingles</li>
              <li style={{color:'white'}}>Test nivel de frances</li>
              <li style={{color:'white'}}>Test Tipo de aprendizaje</li>
            </ul>

        </Container>
      
        <Container sx={{}}>
        <h1 style={{color:'white'}}>Sobre Nosotros</h1>
            <ul>

              <li style={{color:'white'}}>Vision/Mision</li>
              <li style={{color:'white'}}>Preguntas frecuentes</li>
              <li style={{color:'white'}}>Opiniones</li>
            </ul>
        </Container>
        
      </Container>
    
    
    </>);

}