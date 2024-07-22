import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useState } from 'react'



const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  },
}));



export default function NavBar_UserDesplegada({funcion}) {

    
    const [count, setCount] = useState(true)  

  function handleActualizar(e){
    console.log(e.target.attributes.myvalor.value);
    funcion(e);
    
    setCount(false);
}

    return(<>
        


      <Container className='navDesple'    maxWidth="false" >
       
       <Container className='navDespleSgund' >
       
       <Container className='ConBotones'   >
       < button className="btnDesplegable" onClick={handleActualizar}><img myvalor={0}  src="/src/images/dashboardHome.svg" width="40vw"  alt="Home"/>  <h2 style={{fontSize:'1.5vw'}}>Dashboard</h2> </button>
       
       <button className="btnDesplegable"  onClick={handleActualizar} ><img myvalor={2}  src="/src/images/curses-lenguage.svg" width="40vw" height="40vh" alt="Mis Cursos"/> <h2 style={{fontSize:'1.5vw'}}>Mi Curso</h2></button>
       <button className="btnDesplegable" onClick={handleActualizar}><img myvalor={3}  src="/src/images/Informacion.svg" width="40vw" height="40vh" alt="Informacion"/> <h2 style={{fontSize:'1.5vw'}}>Informes</h2></button>
       
       <button className="btnDesplegable" onClick={handleActualizar}><img myvalor={4}  src="/src/images/IconoNotificacion.svg" width="40vw" height="40vh" alt="Notificaciones"/>  <h2 style={{fontSize:'1.5vw'}}>Notificaciones</h2></button>
       <button className="btnDesplegable" onClick={handleActualizar}><img myvalor={5}  src="/src/images/IconoConfig.svg" width="40vw" height="40vh" alt="Ajustes"/>  <h2 style={{fontSize:'1.5vw'}}>Ajustes</h2></button>
       <button className="btnDesplegable" myvalor={6}   onClick={handleActualizar  }><img myvalor={6}   src="/src/images/IconSalir.svg" width="40vw" height="40vh" alt="Salir"/>  <h2 myvalor={6} style={{fontSize:'1.5vw'}}>Salir</h2></button>
      
       
       
       
       </Container>
       

       </Container>
       
      
      

      
      
      
          
      
      

      

      
        
      </Container>
        </>)
}