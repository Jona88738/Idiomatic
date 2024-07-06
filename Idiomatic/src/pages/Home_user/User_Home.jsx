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
        

        <Container disableGutters  sx={{background:'rgba(119, 102, 198, 0.3)',width:'100%',borderRadius:'50px',margin:'0'}}>
          <h1 style={{textAlign:'center',fontSize:'4vw'}}>Bienvenido Xavier</h1>
          <h3 style={{textAlign:'center',fontSize:'2vw'}}>¿Listo para iniciar?</h3>
          <img src="/src/images/iconoHomeUser.svg" width="20%"  style={{position:'absolute',right:'30px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
         
        </Container>

        <h2 style={{  boxShadow:'0px 3px 1px rgba(31, 25, 47, 0.5)'}}>Vista Previa</h2>
        <h2>Progreso general</h2>

        <Container sx={{background:'rgba(70, 70, 122, 0.15)',borderRadius:'25px'}}>

        <img src="/src/images/cuadrado.png" width="20%" height="20%"style={{position:'relative',left:'14%',bottom:'0%'}}   alt="Logo de mi página"/>
          

        </Container>
        <h1 style={{  boxShadow:'0px -3px 1px rgba(31, 25, 47, 0.5)'}}>Avisos</h1>
        <h1>Estas al dia</h1>
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
            
<Container maxWidth='false'  disableGutters  sx={{display:'flex',margin:'0',width:'100%'}}>

    <Container  disableGutters sx={{margin:'0',width:'30%'}}>
      
       <NavBar_User funcion={MostrarApartados}/>
     
     
    </Container>
    
    <Container   sx={{margin:'0'}}> 
     {count === 0 ? (<Home/>): count == 2 ?(<User_Cursos/>): count == 3 ? (<User_Informes/>): 
      count == 4 ? (<User_Notificaciones />): count == 5 ? (<User_Ajustes/>): count == 6 ?  (MostrarApartados):33333}
      
    
    </Container>


      
</Container>

      
      
      
      

    </>
  )
}

export default User_Home;