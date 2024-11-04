import { Container } from "@mui/material";
import '../styles/FoodeHome.css';

export default function Footer_Home(){
    return(<>
    
    
      
      <Container disableGutters className="ContainerMainFooderHome"  maxWidth="cadena" >
      
      
        <Container disableGutters >

            <h1 className="TitleMainCont" >Nuestros Cursos</h1>
            <ul>

              <li className="listaContain" >Curso de ingles</li>
              <li className="listaContain">Curso de frances</li>
            </ul>

        </Container>

        


        <Container disableGutters >

        <h1 className="TitleMainCont">Recursos</h1>
            <ul>

              <li className="listaContain">Test nivel de  ingles</li>
              <li className="listaContain">Test nivel de frances</li>
              <li className="listaContain">Test Tipo de aprendizaje</li>
            </ul>

        </Container>
      
        <Container disableGutters  sx={{}}>
        <h1 className="TitleMainCont" >Sobre Nosotros</h1>
            <ul>

              <li className="listaContain">Vision/Mision</li>
              <li className="listaContain">Preguntas frecuentes</li>
              <li className="listaContain">Opiniones</li>
            </ul>
        </Container>
        
      </Container>
    
    
    </>);

}