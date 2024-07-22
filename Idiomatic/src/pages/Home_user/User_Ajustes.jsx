import { useState } from 'react'
import Container from '@mui/material/Container';
import {Main,Fedback, RestaurarSuscrip,Cursos,Notificaciones} from '../../components/ComponentAjustes/ApartadosAjustes'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ShopIcon from '@mui/icons-material/Shop';
import AddCommentIcon from '@mui/icons-material/AddComment';
import "../../styles/AjustesUser.css"
function User_Ajustes() {
  const [apartados, setApartados] = useState(0)

  return (
    <>
    <Container>
      <Container className='ContainerHead' >
          <h1 className='TitleHead' >Ajustes</h1>
          <h3 className='subTitleHead' >¡Arreglemos Esto!</h3>
          <img className='imgHead' src="/src/images/IconoAjus.svg" width="25%"     alt="Logo de mi página"/>
        
          
      </Container >

      
<Container className='Containerbody'>

      <Container className='ApartadosAjustes'>
        
        <h2 className='ApartadoBody'>Cuenta</h2>
        <button onClick={() => setApartados(0)} className='btnAjustes' style={{fontSize:"1.5vw",marginTop:"1%"}}><PersonIcon/>  Perfil</button>
        <button onClick={() => setApartados(1)} className='btnAjustes' style={{fontSize:"1.5vw",marginTop:"4%"}}> <NotificationsIcon sx={{position:"relative",top:"2px"}}/>  Notificaciones</button>
        <button onClick={() => setApartados(2)}  className='btnAjustes' style={{fontSize:"1.5vw",marginTop:"4%"}}><SchoolIcon/> Cursos</button>
      
        <h2 className='ApartadoBody'>Suscripcion</h2>

        <button onClick={() => setApartados(3)}  className='btnAjustes' style={{fontSize:"1.5vw"}}><ShopIcon /> Restaurar Suscripcion</button>
        <h2 className='ApartadoBody'>Soporte</h2>    
        <button onClick={() => setApartados(4)}  className='btnAjustes' style={{fontSize:"1.5vw"}}><AddCommentIcon/> Feedback</button>  
      </Container>

      <Container>
        

        {apartados == 0 ? (<Main/>): apartados == 1 ? (<Notificaciones/>):
        apartados == 2 ? (<Cursos/>): apartados == 3 ? (<RestaurarSuscrip/>):
        apartados == 4 ? (<Fedback/>):2}

      </Container>

</Container>
     
      </Container>

      
      
      

    </>
  )
}

export default User_Ajustes;