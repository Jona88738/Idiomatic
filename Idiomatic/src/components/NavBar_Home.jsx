import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "../styles/MainHome.css";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {

        const [navH, setnavH] = useState(false);

        function cambioNav(){
          setnavH(!navH);
        }
  return (
    <>
      
      <Container className='NavBarHome' maxWidth="false" >
      
      <img src="/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

      
      <Button className='btnAbrir' onClick={cambioNav}><MenuIcon className='btnCerrar'  fontSize='large'/></Button> 

        <Container disableGutters className={navH ? 'NavBarOpciones':'NavBarOpcioness'}  id="nav">

        <Button className='btnCerrar'>Cerrar</Button> 

        <Button className='btnOpcion' href="/" title='inicio'> Inicio </Button>
        <Button  className='btnOpcion' href="/Cursos" >Cursos</Button>
        <Button  className='btnOpcion' href="/Login" >Login</Button>
        <Button  className='btnOpcion' href="/Nosotros" >Nosotros</Button>
        
        <Button className='btnCrearCuenta' href='/Sign_up'  variant="outlined"sx={{}}>Crear Cuenta</Button>
      
        </Container>
        
      </Container>
    </>
  );
}