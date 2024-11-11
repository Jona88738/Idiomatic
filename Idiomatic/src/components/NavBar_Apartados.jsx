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

 

        // return(<>
        
        {/* <Container className='ContainerNavBarApartado' maxWidth="cadena" >
      
      <img src="/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        
      <Button className='btnAbrirApartado' onClick={cambioNav}><MenuIcon className='btnCerrar'  fontSize='large'/></Button> 

        <Container className={navH ? 'ContainerOpcionesNavApartados':'NavBarOpcionesApartadoOcultar'} >
        <Button onClick={() => {const direccion = "/TemasRecursos"; Redireccionar(direccion);}} className='opcionMenu' >Recursos</Button>   
        <Button onClick={() => {const direccion = "/TemasVideos"; Redireccionar(direccion);}} className='opcionMenu'  >Videos</Button>
        <Button onClick={() => {const direccion = "/TemasAudios"; Redireccionar(direccion);}} className='opcionMenu'  >Audios</Button>
        <Button onClick={() => {const direccion = "/TemasLecturas"; Redireccionar(direccion);}} className='opcionMenu'    >Lecturas</Button>
        <Button onClick={() => {const direccion = "/TemasJuegos"; Redireccionar(direccion);}} className='opcionMenu'   >Ejercicios</Button>
        <Button onClick={() => {const direccion = "/User_Home"; Redireccionar(direccion);}}  className='btnOpcion' >salir</Button>
         */}
  {/* // Función para cerrar sesión */}
  function cerrarSesion() {
    // Elimina el token o datos de sesión del almacenamiento local
    localStorage.removeItem("usuarioAutenticado"); // Suponiendo que el token se almacena con esta clave

    // Redirige a la página de inicio o login después de cerrar sesión
    navigate("/Login"); // O la ruta que desees después del cierre de sesión
  }

  return (
    <>
      <Container maxWidth="cadena" className='ContainerNavBarApartado'>
        <img src="/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        <Button className='btnAbrirApartado' onClick={cambioNav}><MenuIcon className='btnCerrar'  fontSize='large'/></Button> 


        <Container className={navH ? 'ContainerOpcionesNavApartados':'NavBarOpcionesApartadoOcultar'}>
        <Button onClick={() => {const direccion = "/User_Home"; Redireccionar(direccion);}} sx={{bottom:'5px', color:'black', marginRight: '10px', borderRadius: '10px'}}>Inicio</Button>   
          <Button onClick={() => {const direccion = "/TemasRecursos"; Redireccionar(direccion);}} sx={{bottom:'5px', color:'black', marginRight: '10px', borderRadius: '10px'}}>Recursos</Button>   
          <Button onClick={() => {const direccion = "/TemasVideos"; Redireccionar(direccion);}} sx={{bottom:'5px', color:'black', marginRight: '10px', borderRadius: '10px'}}>Videos</Button>
          <Button onClick={() => {const direccion = "/TemasAudios"; Redireccionar(direccion);}} sx={{bottom:'5px', color:'black', marginRight: '10px', borderRadius: '10px'}}>Audios</Button>
          <Button onClick={() => {const direccion = "/TemasLecturas"; Redireccionar(direccion);}} sx={{bottom:'5px', color:'black', marginRight: '10px', borderRadius: '10px'}}>Lecturas</Button>
          <Button onClick={() => {const direccion = "/TemasJuegos"; Redireccionar(direccion);}} sx={{bottom:'5px', color:'black', marginRight: '10px', borderRadius: '10px'}}>Ejercicios</Button>

          {/* El botón de cerrar sesión que elimina los datos del usuario y redirige */}
          <Button onClick={cerrarSesion} className='btnCrearCuenta'>
            Cerrar sesión
          </Button>
        </Container>
      </Container>
    </>
  );
}
