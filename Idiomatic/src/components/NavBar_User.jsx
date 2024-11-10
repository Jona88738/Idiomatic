import * as React from 'react';
import Container from '@mui/material/Container';
import { useState } from 'react'
import NavBar_UserDesplegada from './NavBar_UserDesplegada';
import '../styles/Home_user.css';
export default function NavBar_User({funcion,suscripcion}) {
  
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

       <button className="btn" ><img myvalor={0} className='imgIconoNavBarUser'  src="/images/dashboardHome.svg" alt="Home"/></button>
       <button className="btn" ><img myvalor={2} className='imgIconoNavBarUser'  src="/images/curses-lenguage.svg" alt="Mis Cursos"/></button>
       <button className="btn" ><img myvalor={3} className='imgIconoNavBarUser'  src="/images/Informacion.svg" alt="Informacion"/></button>
       
       <button className="btn" ><img myvalor={4} className='imgIconoNavBarUser'  src="/images/IconoNotificacion.svg" alt="Notificaciones"/></button>
       <button className="btn" ><img myvalor={5} className='imgIconoNavBarUser'  src="/images/IconoConfig.svg" alt="Ajustes"/></button>
       <button className="btn"  ><img myvalor={6} className='imgIconoNavBarUser'   src="/images/IconSalir.svg" alt="Salir"/></button>
   

       </Container>
       
        
      </Container>

      ):(<NavBar_UserDesplegada funcion={handleActualizar} suscripcion={suscripcion}/>)}



    </>
  );
}