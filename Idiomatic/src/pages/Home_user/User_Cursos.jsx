import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_Home from '../../components/NavBar_User'
import Container from '@mui/material/Container';
function User_Cursos() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
     

      <Container sx={{background:'rgba(70, 70, 122, 1)',width:'50%',borderRadius:'50px'}}>
          <h1 style={{color:'white',left:'20%'}}>Mis Cursos</h1>
          <h3 style={{color:'white',textAlign:'center'}}>Aqui tenemos tu seleccion de cursos</h3>
        </Container>
     
      

    </>
  )
}

export default User_Cursos;