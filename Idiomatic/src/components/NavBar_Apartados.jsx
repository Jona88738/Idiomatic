import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import "../styles/NavbarApartado.css"
export default function NavBar_Apartados(){
  const navigate = useNavigate();

  function Redireccionar(direccion){
    console.log(direccion)
    navigate(direccion)
  }

 

        return(<>
        
        <Container maxWidth="cadena" sx={{background: '#F9FAFD', height:'10vh',     boxShadow:'0px 6px 2px GRAY'}}>
      
      <img src="/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        
      
        <Container sx={{display:'flex',justifyContent:'right',position:'relative',bottom:'50px'}}>
        <Button onClick={() => {const direccion = "/TemasRecursos"; Redireccionar(direccion);}} className='opcionMenu' >Recursos</Button>   
        <Button onClick={() => {const direccion = "/TemasVideos"; Redireccionar(direccion);}} className='opcionMenu'  >Videos</Button>
        <Button onClick={() => {const direccion = "/TemasAudios"; Redireccionar(direccion);}} className='opcionMenu'  >Audios</Button>
        <Button onClick={() => {const direccion = "/TemasLecturas"; Redireccionar(direccion);}} className='opcionMenu'    >Lecturas</Button>
        <Button onClick={() => {const direccion = "/TemasJuegos"; Redireccionar(direccion);}} className='opcionMenu'   >Ejercicios</Button>
        <Button onClick={() => {const direccion = "/User_Home"; Redireccionar(direccion);}}  className='btnOpcion' >salir</Button>
        
        </Container>
        
      </Container>
        
        
        
        </>)
}