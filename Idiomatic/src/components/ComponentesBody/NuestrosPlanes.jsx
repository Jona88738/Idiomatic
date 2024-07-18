import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';





export default function NuestrosPlanes(){
    return(<>
    
    <h1 style={{textAlign:'center'}}>Nuestros Planes</h1>
    
     
          
    <Container disableGutters sx={{display:'flex',margin:'0',color: "black"}}>
         
      <Container disableGutters sx={{}}>
            
            <Card sx={{border: '4px solid #7766C6',width:'70%',height:'80%',marginTop:'8%',marginLeft:'10%',marginBottom:'10%',marginRight:'10%',borderRadius:'20px'}}>
            <h1 style={{textAlign:'center'}}>Gratuito</h1>
           <ul style={{marginLeft:'10%'}}>
                <li>Contenido limitado</li>
                <li>Anuncios</li>
                <li>Pruebas de tipo de aprendizaje y <br/>  de nivelacion</li>
           </ul>

           <Button  sx={{width:'80%',background:'#46467A',bottom:'5px',color:'white',borderRadius:'12px',left:'35px'}}>Registrarse ahora</Button>


            </Card>
          
          

          </Container>

          <Container disableGutters sx={{}}>

          <Card  sx={{border: '8px solid #7766C6',width:'70%',height:'80%',marginTop:'8%',marginLeft:'10%',marginBottom:'10%',marginRight:'10%',borderRadius:'20px'}}>
            <h1 style={{textAlign:'center'}}>Plus</h1>
            <ul style={{marginLeft:'10%'}}>
                <li>Sin Anuncios</li>
                <li>Acceso a contenido exclusivo</li>
                <li>Acceso a IA's</li>
                <li>Contenido apoyo para pruebas de <br/> certificacion   </li>
           </ul>

           <Button  sx={{width:"80%",height:'20%',left:'15%',background:'#46467A',bottom:'5px',color:'white',borderRadius:'20px'}}>Pruebalo ahora por<br/> $80 MXN/mes</Button>

            </Card>
          </Container>
      </Container>

      
    </>);
}