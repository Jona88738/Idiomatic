import { useState } from 'react'
import Button from '@mui/material/Button';
import NavBar_User from '../../components/NavBar_User'
import NavBar_UserDesplegada from '../../components/NavBar_UserDesplegada';
import { useNavigate  } from 'react-router-dom';
import User_Informes from './User_Informes';
import User_Cursos from './User_Cursos';
import User_Notificaciones from './User_Notificaciones';
import User_Ajustes from './User_Ajustes';
import Home from '../Home';

import React, { useEffect, useRef } from 'react';
function User_Home() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  function MostrarApartados(myvalor){
    let num = Number(myvalor);

    

    console.log(num);
    if(myvalor == 6){
      navigate('/')
    }
    
     
    setCount(num);
    
  }


  

  return (
    <>
      <h1>User Home</h1>
      <NavBar_User funcion={MostrarApartados}/>
      
      {count === 0 ? (<h1>Home xD</h1>): count == 2 ?(<User_Cursos/>): count == 3 ? (<User_Informes/>): 
      count == 4 ? (<User_Notificaciones />): count == 5 ? (<User_Ajustes/>): count == 6 ?  (MostrarApartados):3}
      
      
      
      
      

    </>
  )
}

export default User_Home;