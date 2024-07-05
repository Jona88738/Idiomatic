import Container from '@mui/material/Container';
import { useState } from 'react'

export default function NavBar_UserDesplegada({funcion}) {

    const [count, setCount] = useState(true)  

  function handleActualizar(e){
    console.log(e.target.attributes.myvalor.value);
    funcion(e);
    
    setCount(false);
}

    return(<>
        


      <Container disableGutters   maxWidth="false" sx={{position:'relative',left:'15px',borderRadius:'50px',width:'20%',background: 'rgba(70, 70, 122, 0.05)', height:'80vh',  boxShadow:'5px 8px 2px GRAY',margin:'0'}}>
       
       <Container sx={{position:'relative',top:'15%'}}>
       <button className="btn" onClick={handleActualizar}><img myvalor={0}  src="/src/images/dashboardHome.svg" width="40vw" height="40vh" alt="Home"/></button>
       <button className="btn"  onClick={handleActualizar} ><img myvalor={2}  src="/src/images/curses-lenguage.svg" width="40vw" height="40vh" alt="Mis Cursos"/></button>
       <button className="btn" onClick={handleActualizar}><img myvalor={3}  src="/src/images/Informacion.svg" width="40vw" height="40vh" alt="Informacion"/></button>
       
       <button className="btn" onClick={handleActualizar}><img myvalor={4}  src="/src/images/IconoNotificacion.svg" width="40vw" height="40vh" alt="Notificaciones"/></button>
       <button className="btn" onClick={handleActualizar}><img myvalor={5}  src="/src/images/IconoConfig.svg" width="40vw" height="40vh" alt="Ajustes"/></button>
       <button className="btn"  onClick={handleActualizar}><img myvalor={6}   src="/src/images/IconSalir.svg" width="40vw" height="40vh" alt="Salir"/></button>
      

       </Container>
       

      
      

      
      
      
          
      
      

      

      
        
      </Container>
        </>);
}