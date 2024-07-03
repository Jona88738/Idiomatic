import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export default function NuestrosPlanes(){
    return(<>
    
    <h1 style={{textAlign:'center'}}>Nuestros Planes</h1>
    
    <Container maxWidth={false} disableGutters sx={{display:'flex',justifyContent:'space-evenly',margin:'0'}}>
          
          
          <Container disableGutters sx={{}}>
            
            <Card sx={{border: '4px solid #7766C6',width:'60%',height:'80%',marginTop:'40px',marginLeft:'120px',marginBottom:'40px',marginRight:'40px',borderRadius:'20px'}}>
            <h1 style={{textAlign:'center'}}>Gratuito</h1>
           <ul style={{marginLeft:'50px'}}>
                <li>Contenido limitado</li>
                <li>Anuncios</li>
                <li>Pruebas de tipo de aprendizaje y <br/>  de nivelacion</li>
           </ul>

           <Button  sx={{width:'80%',background:'#46467A',bottom:'5px',color:'white',borderRadius:'12px',left:'35px'}}>Registrarse ahora</Button>


            </Card>
          
          

          </Container>

          <Container disableGutters sx={{}}>

          <Card sx={{border: '8px solid #7766C6',width:'60%',height:'80%',marginTop:'40px',marginLeft:'120px',marginBottom:'40px',marginRight:'40px',borderRadius:'20px'}}>
            <h1 style={{textAlign:'center'}}>Plus</h1>
            <ul style={{marginLeft:'50px'}}>
                <li>Sin Anuncios</li>
                <li>Acceso a contenido exclusivo</li>
                <li>Acceso a IA's</li>
                <li>Contenido apoyo para pruebas de <br/> certificacion   </li>
           </ul>

           <Button  sx={{height:'15%',left:'15%',background:'#46467A',bottom:'5px',color:'white',borderRadius:'20px'}}>Pruebalo ahora por $80 MXN/mes</Button>

            </Card>
          </Container>
      </Container>
    </>);
}