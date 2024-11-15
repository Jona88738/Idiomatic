import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "../styles/MainHome.css";
//import "../styles/Nav.css";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

        const navigate = useNavigate();

        const [navH, setnavH] = useState(false);

        function cambioNav(){
          setnavH(!navH);
        }

        function Redireccionar(direccion){
          console.log(direccion)
          navigate(direccion)
        }

  return (
    <>
      
      <Container className='NavBarHome' maxWidth="false" >
      
      <img src="/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

      
      <Button className='btnAbrir' onClick={cambioNav}><MenuIcon className='btnCerrar'  fontSize='large'/></Button> 

        <Container disableGutters className={navH ? 'NavBarOpciones':'NavBarOpcioness'}  id="nav">

        <Button className='btnCerrar'>Cerrar</Button> 

        <Button className='btnOpcion' onClick={() => {const direccion = "/"; Redireccionar(direccion);}}  title='inicio'> Inicio </Button>
        {/* <Button  className='btnOpcion' onClick={() => {const direccion = "/Cursos"; Redireccionar(direccion);}}  >Cursos</Button> */}
        <Button  className='btnOpcion' onClick={() => {const direccion = "/Login"; Redireccionar(direccion);}} >Login</Button>
        <Button  className='btnOpcion' onClick={() => {const direccion = "/Nosotros"; Redireccionar(direccion);}}   >Nosotros</Button>
        
        {/* <Button className='btnOpcion' href="/" title='inicio'> Inicio </Button>
        <Button  className='btnOpcion' href="/Nosotros" >Nosotros</Button>
        <Button  className='btnOpcion' href="/Login" >Login</Button> */}

        <Button className='btnCrearCuenta' href='/Sign_up'  variant="outlined"sx={{}}>Crear Cuenta</Button>
      
        </Container>
        
      </Container>
    </>
  );
}