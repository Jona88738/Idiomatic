import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import "../../styles/NotificacionesHome.css"
import Button from '@mui/material/Button';
function User_Notificaciones() {
  const [notificacion, setNotificacion] = useState([])

  useEffect(()=>{

      fetch("/api/notificaciones")
        .then(res => res.json())
        .then(res => setNotificacion(res))
  },[]);

  console.log(notificacion)
  function Notificacion({titulo,texto}){
    
    return(<>
      <Container className='ContenedorNoti'>
          <h2>{titulo} </h2>
          <p>{texto}</p>
          <br/>   
          <button>X</button>
        </Container>
        </>
  )
  }

  return (
    <>
      
      
      <Container className='ContenedorMain' >
          <h1 className='TituloNoti' >Notificaciones</h1>
          <h3 className='SubTNoti' >Resumen sobre tus cursos</h3>
          <img src="/src/images/IconoNotifi.svg" width="20%"  style={{position:'absolute',right:'30px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
        </Container>
      
        <Button className='btonFiltrar' >Filtrar por</Button>
        {notificacion.map((info) =>{
         return <Notificacion key="dk" titulo={info.Titulo} texto={info.texto} />
        })}
        <Notificacion/>
       
    </>
  )
}

export default User_Notificaciones;