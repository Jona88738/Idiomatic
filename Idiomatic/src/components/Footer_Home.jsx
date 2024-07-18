import { Container } from "@mui/material";

export default function Footer_Home(){
    return(<>
    
    
      
      <Container disableGutters  maxWidth="cadena" sx={{display:'flex',background: '#3A3160',     boxShadow:'0px 6px 2px GRAY'}}>
      
      
        <Container disableGutters >

            <h1 style={{color:'white',fontSize:"3vw"}}>Nuestros Cursos</h1>
            <ul>

              <li style={{color:'white',fontSize:"2vw"}}>Curso de ingles</li>
              <li style={{color:'white',fontSize:"2vw"}}>Curso de frances</li>
            </ul>

        </Container>

        


        <Container disableGutters >

        <h1 style={{color:'white',fontSize:"3vw"}}>Recursos</h1>
            <ul>

              <li style={{color:'white',fontSize:"2vw"}}>Test nivel de  ingles</li>
              <li style={{color:'white',fontSize:"2vw"}}>Test nivel de frances</li>
              <li style={{color:'white',fontSize:"2vw"}}>Test Tipo de aprendizaje</li>
            </ul>

        </Container>
      
        <Container disableGutters  sx={{}}>
        <h1 style={{color:'white',fontSize:"3vw"}}>Sobre Nosotros</h1>
            <ul>

              <li style={{color:'white',fontSize:"2vw"}}>Vision/Mision</li>
              <li style={{color:'white',fontSize:"2vw"}}>Preguntas frecuentes</li>
              <li style={{color:'white',fontSize:"2vw"}}>Opiniones</li>
            </ul>
        </Container>
        
      </Container>
    
    
    </>);

}