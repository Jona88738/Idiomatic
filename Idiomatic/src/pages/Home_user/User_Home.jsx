import { useState } from 'react'
import Button from '@mui/material/Button';
import NavBar_User from '../../components/NavBar_User'
import NavBar_UserDesplegada from '../../components/NavBar_UserDesplegada';
import { useNavigate  } from 'react-router-dom';
import User_Informes from './User_Informes';
import User_Cursos from './User_Cursos';
import User_Notificaciones from './User_Notificaciones';
import User_Ajustes from './User_Ajustes';
import Container from '@mui/material/Container';

import React, { useEffect, useRef } from 'react';
function User_Home() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  function Home(){
    return(<>
        

        <Container sx={{background:'rgba(119, 102, 198, 0.3)',width:'50%',borderRadius:'50px'}}>
          <h1 style={{textAlign:'center'}}>Bienvenido Xavier</h1>
          <h3 style={{textAlign:'center'}}>¿Listo para iniciar?</h3>
        </Container>
    </>)
  }

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
      
      
      
      {count === 0 ? (<Home/>): count == 2 ?(<User_Cursos/>): count == 3 ? (<User_Informes/>): 
      count == 4 ? (<User_Notificaciones />): count == 5 ? (<User_Ajustes/>): count == 6 ?  (MostrarApartados):3}
      
      <NavBar_User funcion={MostrarApartados}/>
      
      
      

    </>
  )
}

export default User_Home;