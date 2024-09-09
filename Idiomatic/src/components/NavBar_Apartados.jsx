import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function NavBar_Apartados(){
  const navigate = useNavigate();

  function Redireccionar(direccion){
    console.log(direccion)
    navigate(direccion)
  }

        return(<>
        
        <Container maxWidth="cadena" sx={{background: '#F9FAFD', height:'10vh',     boxShadow:'0px 6px 2px GRAY'}}>
      
      <img src="/src/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        
      
        <Container sx={{display:'flex',justifyContent:'right',position:'relative',bottom:'50px'}}>
            <h2 style={{margin:"0",marginRight:"25px"}}>Barra provicional</h2>
        <Button onClick={() => {const direccion = "/TemasVideos"; Redireccionar(direccion);}} sx={{bottom:'5px',color:'black'}}>Videos</Button>
        <Button onClick={() => {const direccion = "/TemasAudios"; Redireccionar(direccion);}} sx={{bottom:'5px',color:'black'}}>Audios</Button>
        <Button onClick={() => {const direccion = "/TemasLecturas"; Redireccionar(direccion);}}   sx={{bottom:'5px',color:'black'}}>Lecturas</Button>
        <Button onClick={() => {const direccion = "/TemasJuegos"; Redireccionar(direccion);}}   sx={{bottom:'5px',color:'black'}}>Ejercicios</Button>
        <Button onClick={() => {const direccion = "/User_Home"; Redireccionar(direccion);}}  className='btnOpcion' >salir</Button>
        
        </Container>
        
      </Container>
        
        
        
        </>)
}