import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_Home from '../../components/NavBar_User'
import Container from '@mui/material/Container';
function User_Cursos() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
     

      <Container sx={{background:'rgba(70, 70, 122, 1)',width:'100%',borderRadius:'50px',margin:'0'}}>
          <h1 style={{color:'white',left:'20%',fontSize:'4vw'}}>Mis Cursos</h1>
          <h3 style={{color:'white',textAlign:'center',fontSize:'2vw'}}>Aqui tenemos tu seleccion de cursos</h3>
        </Container>
     
      

    </>
  )
}

export default User_Cursos;