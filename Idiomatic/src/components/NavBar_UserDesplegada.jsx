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



export default function NavBar_UserDesplegada({funcion,suscripcion}) {

    
    const [count, setCount] = useState(true)  

  function handleActualizar(e){
    console.log(e);
    funcion(e);
    
    setCount(false);
}

    return(<>
        


      <Container className='navDesple'    maxWidth="false" >
       
       <Container className='navDespleSgund' >
       
       <Container className='ConBotones'   >
       < button className="btnDesplegable" onClick={handleActualizar} myvalor={0} ><img myvalor={0} className='imgIconoNavBarUserDesple'   src="/images/dashboardHome.svg"   alt="Home"/>  <h2 style={{fontSize:'1.5vw'}} myvalor={0}>Dashboard</h2> </button>
       
       <button className="btnDesplegable"  onClick={handleActualizar} myvalor={2} ><img myvalor={2} className='imgIconoNavBarUserDesple'  src="/images/curses-lenguage.svg"alt="Mis Cursos"/> <h2 style={{fontSize:'1.5vw'}} myvalor={2}>Mi Curso</h2></button>
       <button className="btnDesplegable" onClick={handleActualizar} img myvalor={3} ><img myvalor={3} className='imgIconoNavBarUserDesple'  src="/images/Informacion.svg"alt="Informacion"/> <h2 style={{fontSize:'1.5vw'}} myvalor={3} >Informes</h2></button>


        {suscripcion === 1 ? (<button className="btnDesplegable" onClick={handleActualizar} img myvalor={7} ><img myvalor={7} className='IconoNavBarUserDespleEstilo'  src="/images/Estilos.svg"  alt="Informacion"/> <h2 style={{fontSize:'1.5vw',paddingTop:"14%"}} myvalor={7} >Estilos</h2></button>
)
        
        :("")}
       

       <button className="btnDesplegable" onClick={handleActualizar} myvalor={4} ><img myvalor={4} className='imgIconoNavBarUserDesple'  src="/images/IconoNotificacion.svg"alt="Notificaciones"/>  <h2 style={{fontSize:'1.5vw'}} myvalor={4} >Notificaciones</h2></button>
       <button className="btnDesplegable" onClick={handleActualizar} myvalor={5}><img myvalor={5} className='imgIconoNavBarUserDesple'  src="/images/IconoConfig.svg"alt="Ajustes"/>  <h2 style={{fontSize:'1.5vw'}} myvalor={5} >Ajustes</h2></button>
       <button className="btnDesplegable" myvalor={6}   onClick={handleActualizar  }><img myvalor={6}  className='imgIconoNavBarUserDesple'  src="/images/IconSalir.svg"alt="Salir"/>  <h2 myvalor={6} style={{fontSize:'1.5vw'}}>Salir</h2></button>
      
       
       
       
       </Container>
       

       </Container>
       
      
      

      
      
      
          
      
      

      

      
        
      </Container>
        </>)
}