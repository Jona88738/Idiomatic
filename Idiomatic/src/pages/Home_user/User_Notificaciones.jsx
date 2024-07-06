import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_Home from '../../components/NavBar_User'
import Container from '@mui/material/Container';
function User_Notificaciones() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Container sx={{background:'rgba(119, 102, 198, 0.3)',width:'100%',borderRadius:'50px'}}>
          <h1 style={{color:'black',left:'20%',fontSize:'4vw'}}>Notificaciones</h1>
          <h3 style={{color:'black',textAlign:'center',fontSize:'2vw'}}>Resumen sobre tus cursos</h3>
          <img src="/src/images/IconoNotifi.svg" width="20%"  style={{position:'absolute',right:'30px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
        </Container>
      

    </>
  )
}

export default User_Notificaciones;