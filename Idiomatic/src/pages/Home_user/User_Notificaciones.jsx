import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_Home from '../../components/NavBar_User'
function User_Notificaciones() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <h1>User Notificaciones</h1>
      <Navbar_Home/>
      

    </>
  )
}

export default User_Notificaciones;