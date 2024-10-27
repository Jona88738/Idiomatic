import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import "../styles/NavbarApartado.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function NavBar_Apartados(){
  const navigate = useNavigate();

  const [navH, setnavH] = useState(false);

  function Redireccionar(direccion){
    console.log(direccion)
    navigate(direccion)
  }
  function cambioNav(){
    setnavH(!navH);
  }

 

        return(<>
        
        <Container className='ContainerNavBarApartado' maxWidth="cadena" >
      
      <img src="/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        
      <Button className='btnAbrirApartado' onClick={cambioNav}><MenuIcon className='btnCerrar'  fontSize='large'/></Button> 

        <Container className={navH ? 'ContainerOpcionesNavApartados':'NavBarOpcionesApartadoOcultar'} >
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