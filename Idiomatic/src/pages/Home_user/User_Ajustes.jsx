import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_User from '../../components/NavBar_User'
import Container from '@mui/material/Container';
function User_Ajustes() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Container sx={{background:'rgba(255, 199, 39, 1)',width:'100%',borderRadius:'50px'}}>
          <h1 style={{color:'black',left:'20%',fontSize:'4vw'}}>Ajustes</h1>
          <h3 style={{color:'black',textAlign:'center',fontSize:'2vw'}}>¡Arreglemos Esto!</h3>
          <img src="/src/images/IconoAjus.svg" width="25%"  style={{position:'absolute',right:'20px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
          
      </Container >

      
     
      </Container>

      
      
      

    </>
  )
}

export default User_Ajustes;