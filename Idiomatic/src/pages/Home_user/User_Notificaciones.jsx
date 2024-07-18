import { useState } from 'react'
import Container from '@mui/material/Container';
import "../../styles/NotificacionesHome.css"
import Button from '@mui/material/Button';
function User_Notificaciones() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Container className='ContenedorMain' >
          <h1 className='TituloNoti' >Notificaciones</h1>
          <h3 className='SubTNoti' >Resumen sobre tus cursos</h3>
          <img src="/src/images/IconoNotifi.svg" width="20%"  style={{position:'absolute',right:'30px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
        </Container>
      
        <Button className='btonFiltrar' >Filtrar por</Button>


        <Container className='ContenedorNoti'>
          <h2>Lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore ...</p>
          <br/>   
        </Container>
        <Container className='ContenedorNoti'>
          <h2>Lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore ...</p>
          <br/>   
        </Container>
    </>
  )
}

export default User_Notificaciones;