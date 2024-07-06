import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_Home from '../../components/NavBar_User'
import Container from '@mui/material/Container';
function User_Informes() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Container sx={{background:'rgba(249, 176, 195, 1)',width:'100%',borderRadius:'50px', margin:'0'}}>
          <h1 style={{color:'black',left:'20%',fontSize:'4vw'}}>Informes</h1>
          <h3 style={{color:'black',textAlign:'center',fontSize:'2vw'}}>Resumen sobre tus cursos</h3>
          <img src="/src/images/iconoInformes.svg" width="25%"  style={{position:'absolute',right:'20px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
        </Container>

        <h1 style={{fontSize:'2vw'}}>Lunes (Fecha)</h1>
      
     
      

    </>
  )
}

export default User_Informes;