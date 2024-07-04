import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState } from 'react'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import User_Informes from '../pages/Home_user/User_Informes';
import NavBar_UserDesplegada from './NavBar_UserDesplegada';
import '../styles/Home_user.css';
export default function NavBar_User({funcion}) {
  
  const [count, setCount] = useState(true)  

  function handleActualizar(e){
    console.log(e.target.attributes.myvalor.value);
    funcion(e.target.attributes.myvalor.value);
    
    setCount(false);
}

  return (
    <>
      
      
      {count ? (
      <Container disableGutters myvalor={0} onClick={handleActualizar} maxWidth="false" sx={{position:'relative',left:'15px',borderRadius:'50px',width:'70px',background: 'rgba(70, 70, 122, 0.05)', height:'80vh',  boxShadow:'5px 8px 2px GRAY',margin:'0'}}>
       
       <button className="btn" ><img myvalor={1}  src="/src/images/dashboardHome.svg" width="40vw" height="40vh" alt="Home"/></button>
       <button className="btn" ><img myvalor={2}  src="/src/images/curses-lenguage.svg" width="40vw" height="40vh" alt="Mis Cursos"/></button>
       <button className="btn" ><img myvalor={3}  src="/src/images/Informacion.svg" width="40vw" height="40vh" alt="Informacion"/></button>
       
       <button className="btn" ><img myvalor={4}  src="/src/images/IconoNotificacion.svg" width="40vw" height="40vh" alt="Notificaciones"/></button>
       <button className="btn" ><img myvalor={5}  src="/src/images/IconoConfig.svg" width="40vw" height="40vh" alt="Ajustes"/></button>
       <button className="btn"  ><img myvalor={6}   src="/src/images/IconSalir.svg" width="40vw" height="40vh" alt="Salir"/></button>
      

      
      

      
      
      
          
      
      

      

      
        
      </Container>

      ):(<NavBar_UserDesplegada/>)};



    </>
  );
}