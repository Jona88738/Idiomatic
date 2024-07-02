import * as React from 'react';


import Container from '@mui/material/Container';
import Button from '@mui/material/Button';




export default function Presentacion_Home() {
  return (
    <>
      <div style={{background:'white',display:'flex',marginTop:'5px'}}>
      <Container>
      
      <img src="/Vector1.svg" width="50%" height="50%"style={{position:'absolute', bottom:'230px'}}   alt="Logo de mi página"/>
      <h1 style={{position:'absolute',left:'8%',top:'7%', fontFamily:'helvetica neue',fontSize:'5vw'}}>¡Descubre <br/> nuevos mundos<br/>  aprendiendo<br/>  nuevos idiomas!</h1>
      
      </Container>
      
      <Container sx={{justifyContent:'center'}}>
      <img src="/src/images/4GIF_SINFONDOFINAL.gif" width="90%" height="80%"style={{position:'relative',left:'14%',bottom:'0%'}}   alt="Logo de mi página"/>
      </Container>
      </div>
    </>
  );
}