import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "../styles/Nav.css";
//import "../styles/Nav.css";
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

        <Container disableGutters className={navH ? 'NavBarOptions':'NavBarOptionss'}  id="nav">

        <Button className='btnOption' href="/" title='Inicio'> Inicio </Button>
        <Button  className='btnOption' href="/Cursos" >Contenido</Button>
        
        <Button className='btnClose' variant="outlined"sx={{}}>Cerrar sesión</Button>
      
        </Container>
        
      </Container>
    </>
  );
}