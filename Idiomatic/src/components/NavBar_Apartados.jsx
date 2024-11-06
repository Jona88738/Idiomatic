import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function NavBar_Apartados(){
  const navigate = useNavigate();

  // Función para manejar la redirección
  function Redireccionar(direccion){
    console.log(direccion)
    navigate(direccion)
  }

  // Función para cerrar sesión
  function cerrarSesion() {
    // Elimina el token o datos de sesión del almacenamiento local
    localStorage.removeItem("usuarioAutenticado"); // Suponiendo que el token se almacena con esta clave

    // Redirige a la página de inicio o login después de cerrar sesión
    navigate("/Login"); // O la ruta que desees después del cierre de sesión
  }

  return (
    <>
      <Container maxWidth="cadena" sx={{background: '#F9FAFD', height:'10vh', boxShadow:'0px 6px 2px GRAY'}}>
        <img src="/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        <Container sx={{display:'flex', justifyContent:'right', position:'relative', bottom:'50px'}}>
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
