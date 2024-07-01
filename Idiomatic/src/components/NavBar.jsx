import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';




export default function NavBar() {
  return (
    <React.Fragment>
      
      
      
      <Container maxWidth="cadena" sx={{background: '#F9FAFD', height:'10vh',     boxShadow:'0px 6px 2px GRAY'}}>
      
      <img src="/src/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        
      
        <Container sx={{display:'flex',justifyContent:'right',position:'relative',bottom:'50px'}}>
        <Button href="#text-buttons" sx={{bottom:'5px',color:'black'}}>Inicio</Button>
        <Button href="#text-buttons" sx={{bottom:'5px',color:'black'}}>Cursos</Button>
        <Button href="#text-buttons" sx={{bottom:'5px',color:'black'}}>Login</Button>
        <Button href="#text-buttons" sx={{bottom:'5px',color:'black'}}>Nosotros</Button>

        <Button  variant="outlined"sx={{color: 'white' ,background: 'rgba(58, 49, 96, 1)',height:'25px'}}>Crear Cuenta</Button>
      
        </Container>
        
      </Container>
    </React.Fragment>
  );
}