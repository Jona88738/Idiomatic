import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import "../../styles/NotificacionesHome.css"
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/StyleHomeUser/UserNotificacion.css'


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

    // console.log(nuevoArreglo)
    // const prueba = {nombre:""}
    fetch("/api/DeleteNotificacionNoti",{
      method:"DELETE",
      headers:{
        'Content-Type': 'application/json',   
      },
      body: JSON.stringify(nuevoArreglo),
    })

      setNotificacion(nuevoArreglo)
}

  //console.log(notificacion)
  function Notificacion({titulo,texto,indice}){
    
    return(<>
      <Container className='ContenedorNoti' sx={{background:"rgba(255, 199, 39, 0.7)",marginTop:"2%"}}>
          <h2 style={{marginBottom:"0"}}>{titulo} </h2>
          <p>{texto}</p>
          <br/>   
          <button className='btnUser_NotificacionPage'  onClick={() => onDelete(indice)} ><CloseIcon/> </button>
        </Container>
        </>
  )
  }

  return (
    <div className='ContainerPageNoti'>
      
      
      <Container className='ContenedorMain' >
          <h1 className='TituloNoti' >Notificaciones</h1>
          <h3 className='SubTNoti' >Resumen sobre tus cursos</h3>
          <img className='imgContPage' src="/images/IconoNotifi.svg" width="20%"    alt="Logo de mi página"/>
        
        </Container>
      
        {/* <Button className='btonFiltrar' >Filtrar por</Button> */}
        {notificacion.map((info,index) =>{
         return <Notificacion key={index} indice={index} titulo={info.Titulo} texto={info.texto} />
        })}
       
       <div style={{width:"100%",height:"5rem"}}>

       </div>
       
    </div>
  )
}

export default User_Notificaciones;