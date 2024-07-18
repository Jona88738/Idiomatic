import * as React from 'react';
import Container from '@mui/material/Container';
import { useState } from 'react'

import NavBar_UserDesplegada from './NavBar_UserDesplegada';
import '../styles/Home_user.css';
export default function NavBar_User({funcion}) {
  
  const [count, setCount] = useState(true)  

  function handleActualizar(e){
    console.log(e.target.attributes.myvalor.value);
    funcion(e.target.attributes.myvalor.value);
    
    setCount(false);
}

  return (
    <>
      
      
      {count ? (
      <Container className='ContenedorUser' myvalor={0} onClick={handleActualizar} maxWidth="false">
       
       <Container className='ContenedorBotonesUser' disableGutters >

       <button className="btn" ><img myvalor={0}  src="/src/images/dashboardHome.svg" width="40vw" height="40vh" alt="Home"/></button>
       <button className="btn" ><img myvalor={2}  src="/src/images/curses-lenguage.svg" width="40vw" height="40vh" alt="Mis Cursos"/></button>
       <button className="btn" ><img myvalor={3}  src="/src/images/Informacion.svg" width="40vw" height="40vh" alt="Informacion"/></button>
       
       <button className="btn" ><img myvalor={4}  src="/src/images/IconoNotificacion.svg" width="40vw" height="40vh" alt="Notificaciones"/></button>
       <button className="btn" ><img myvalor={5}  src="/src/images/IconoConfig.svg" width="40vw" height="40vh" alt="Ajustes"/></button>
       <button className="btn"  ><img myvalor={6}   src="/src/images/IconSalir.svg" width="40vw" height="40vh" alt="Salir"/></button>
   

       </Container>
       
        
      </Container>

      ):(<NavBar_UserDesplegada funcion={handleActualizar}/>)};



    </>
  );
}