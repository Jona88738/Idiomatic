import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import "../../styles/NotificacionesHome.css"
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
function User_Notificaciones() {
  const [notificacion, setNotificacion] = useState([])

  useEffect(()=>{

      fetch("/api/notificaciones")
        .then(res => res.json())
        .then(res => {
          const [noti,pausa] = res;
          console.log(noti)
          setNotificacion(noti)
        } )
  },[]);

  function onDelete(indice){
    
    const nuevoArreglo = notificacion.filter((noti,i) => i !== indice)
      setNotificacion(nuevoArreglo)
}

  //console.log(notificacion)
  function Notificacion({titulo,texto,indice}){
    
    return(<>
      <Container className='ContenedorNoti' sx={{background:"rgba(255, 199, 39, 0.7)"}}>
          <h2 style={{marginBottom:"0"}}>{titulo} </h2>
          <p>{texto}</p>
          <br/>   
          <button  style={{background:"red",position:"absolute",right:"0",top:"0",width:"5%",height:"5vh"}}  onClick={() => onDelete(indice)} ><CloseIcon/> </button>
        </Container>
        </>
  )
  }

  return (
    <>
      
      
      <Container className='ContenedorMain' >
          <h1 className='TituloNoti' >Notificaciones</h1>
          <h3 className='SubTNoti' >Resumen sobre tus cursos</h3>
          <img src="/images/IconoNotifi.svg" width="20%"  style={{position:'absolute',right:'30px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
        </Container>
      
        {/* <Button className='btonFiltrar' >Filtrar por</Button> */}
        {notificacion.map((info,index) =>{
         return <Notificacion key={index} indice={index} titulo={info.Titulo} texto={info.texto} />
        })}
       
       
    </>
  )
}

export default User_Notificaciones;