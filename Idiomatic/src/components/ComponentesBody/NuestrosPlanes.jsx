import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';






export default function NuestrosPlanes(){
    return(<>
    
    <h1 className="TituloNuestrosPlanes" >Nuestros Planes</h1>
    
     
          
    <Container className="ConteNuestrosP" disableGutters>
         
      <Container disableGutters className="ContGratuito" >
            
            <Card className="cardGratuido">
            <h1 >Gratuito</h1>
           <ul >
                <li>Contenido limitado</li>
                <li>Anuncios</li>
                <li>Pruebas de tipo de aprendizaje y <br/>  de nivelacion</li>
           </ul>

           <Button className="btnGratuito" >Registrarse ahora</Button>


            </Card>
          
          

          </Container>

          <Container disableGutters className="ContPlus">

          <Card className="cardPlus" >
            <h1 >Plus</h1>
            <ul >
                <li>Sin Anuncios</li>
                <li>Acceso a contenido exclusivo</li>
                <li>Acceso a IA's</li>
                <li>Contenido apoyo para pruebas de <br/> certificacion   </li>
           </ul>

           <Button  className="btnPlus" >Pruebalo ahora por<br/> $80 MXN/mes</Button>

            </Card>
          </Container>
    </Container>

      
    </>);
}