import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_User from '../../components/NavBar_User'
import Container from '@mui/material/Container';
function User_Ajustes() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Container sx={{background:'rgba(255, 199, 39, 1)',width:'50%',borderRadius:'50px'}}>
          <h1 style={{color:'black',left:'20%'}}>Ajustes</h1>
          <h3 style={{color:'black',textAlign:'center'}}>¡Arreglemos Esto!</h3>
        </Container>
      

    </>
  )
}

export default User_Ajustes;