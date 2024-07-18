import { useState } from 'react'
import Button from '@mui/material/Button';

import NavBar from '../components/NavBar_Home';
function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar/>
      <h1>Login</h1>
      <Button href="/User_Home" sx={{left:'10%',bottom:'5px',color:'black',background:'purple'}}>Te lleva a la vista del<br/> Dashboard User</Button>
      <br/>
      <br/>
      <Button href="/Admin_Home" sx={{left:'10%',bottom:'10px',color:'black',background:'purple'}}>Te lleva a la vista del<br/> Dashboard Administrador</Button>

      <br/>
      <br/>
      <Button href="/TestAprendizaje" sx={{left:'10%',bottom:'10px',color:'black',background:'purple'}}>Te lleva a la<br/> vista TestAprendizaje</Button>

      <br/>
      <br/>
      <Button href="/TestIngles" sx={{left:'10%',bottom:'10px',color:'black',background:'purple'}}>Te lleva a la vista<br/> Test Ingles</Button>

      

    </>
  )
}

export default Login