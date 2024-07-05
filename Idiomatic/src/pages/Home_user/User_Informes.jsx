import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_Home from '../../components/NavBar_User'
import Container from '@mui/material/Container';
function User_Informes() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Container sx={{background:'rgba(249, 176, 195, 1)',width:'50%',borderRadius:'50px'}}>
          <h1 style={{color:'black',left:'20%'}}>Informes</h1>
          <h3 style={{color:'black',textAlign:'center'}}>Resumen sobre tus cursos</h3>
        </Container>
      

    </>
  )
}

export default User_Informes;