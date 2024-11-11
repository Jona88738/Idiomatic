import NavBar_User from '../../components/NavBar_User'
import { json, useNavigate  } from 'react-router-dom';
import User_Informes from './User_Informes';
import User_Cursos from './User_Cursos';
import User_Notificaciones from './User_Notificaciones';
import User_Ajustes from './User_Ajustes';
import Container from '@mui/material/Container';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import { useEffect, useRef,useState  } from 'react';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import {HoraContext} from '../../contexto/contextoHora/HoraContext'
import { Padding } from '@mui/icons-material';
import Tipo_Aprendizaje from './User_Tipo_Aprendizaje';
import Cookies from 'js-cookie';

function User_Home() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({});
  const [notificacion, setNotificacion] = useState([])

  // const userId = Cookies.get('userId');
  // console.log(typeof userId)
  // if(userId === "1"){
  //   console.log("Entro")
  //   setInfo(info)
  // }
  // console.log(userId)
         
  const {stopTime} = useContext(HoraContext);

  const navigate = useNavigate();

  useEffect(() =>{
      console.log("pidio datos progreso usuario")
      console.log("XD")
    fetch("/api/progresoUsuario")
      .then(res => res.json(res))
      .then(res =>{
        console.log("Video",res.IdContenido)
       // sessionStorage.setItem('completeVideo', res.completeVideo);
        sessionStorage.setItem('completeV', JSON.stringify( res.completeVideo));
        sessionStorage.setItem('completeAudio', JSON.stringify( res.completeAudio));
        sessionStorage.setItem('completeJuego', JSON.stringify( res.completeEjercicio));
        console.log("Estos son los temas Videos ",res.temaVideos);
        sessionStorage.setItem('TemasJuegos', JSON.stringify( res.temasJuegos));
        sessionStorage.setItem('TemasAudios', JSON.stringify( res.temaAudios));
        sessionStorage.setItem('TemasVideos', JSON.stringify( res.temaVideos));

        // console.log("info progreso",JSON.parse(sessionStorage.getItem('completeAudio')))
        
        // sessionStorage.setItem('rol', 'admin');
        
      console.log(res)
      // Cookies.remove('userId');

        setInfo(res)
      } )

  },[setInfo])

  useEffect(() =>{
    
    fetch("/api/notificaciones")
          .then(res => res.json())
          .then(res=> {
            const [noti, pausarNoti,avisos] = res;
            
            setNotificacion(avisos)
          })
        
  },[])

  function onDelete(indice){
    
      let nuevoArreglo = notificacion.filter((noti,i) => i !== indice)
         
        console.log(nuevoArreglo)
        // const prueba = {nombre:""}
        fetch("/api/DeleteNotificacionAvisos",{
          method:"DELETE",
          headers:{
            'Content-Type': 'application/json',   
          },
          body: JSON.stringify(nuevoArreglo),
        })
        setNotificacion(nuevoArreglo)
  }


  function Notificacion({indice,titulo,texto}){
    console.log(indice)
    return(<>
      <Container className='ContenedorNoti' >
          <h2 className='titleNoti' style={{marginBottom:"0"}}>{titulo} </h2>
          <p className='pNoti'>{texto}</p>
          <br/>   
          
          <button className='btnBorrarNoti' style={{}} onClick={() => onDelete(indice)}><CloseIcon/></button>
        </Container>
        </>
  )
  }


  //XD

  function Home(){
      
    return(<>
        

        <Container className='TitleUserHome'   >
          <h1 className='TituloMain' >Bienvenido {info.nombre}</h1>
          <h3 className='subTituloMain' >¿Listo para iniciar?</h3>
          <img className='imgHomeUser' src="/images/iconoHomeUser.svg" width="20%"    alt="Logo de mi página"/>
        
         
        </Container>

        <h2 className='subtema' >Vista Previa</h2>
        <h2 className='subtema2' >Progreso general</h2>

        <Container className='ContenedorProgreso' >

        <img className='imgBandera' src="/images/cuadrado.png"   alt="Logo de mi página"/>
        
          
        <Gauge className='GaugePorcentaje'  value={info.progresoGeneral}  
         innerRadius="78%"
         outerRadius="99%"
         text={
                ({ value}) => `${value}%`
              } 
              sx={{

                [`& .${gaugeClasses.valueText}`]: {
                  // fontSize: 20,
                  transform: 'translate(0px, 0px)'
                }, 

              }} />
             
        </Container>
        
        <h1 className='subtema3' >Avisos</h1>
        {/*
        <h1 className='subtema2' >Estas al dia</h1>
        */}
        {notificacion.map((aviso,index) => {

         return  <Notificacion key={index} indice={index} titulo={aviso.Titulo} texto={aviso.texto}/>
        })}
        

    </>)
  }


  
  function MostrarApartados(myvalor){
    let num = Number(myvalor);

    console.log(num);
    if(myvalor == 6){

      fetch("/api/logout")
        .then(res => json(res))
        .then(res => console.log("resultado: "+res.message))

        .catch(error =>{console.log(error+"errorxD")})

        stopTime()
      navigate('/')
    }
         
    setCount(num);    
  }


  //"http://localhost:3001/FotoPerfil/init.png"
//console.log(info.foto)
  return (
    <div style={{height:"93vh"}}>
            
<Container className='Contenedormain' maxWidth='false'  disableGutters >

    <Container  className='ContenedorNav' disableGutters >

      <Avatar className='fotoPerfil' alt="Remy Sharp"  variant="rounded" src={info.foto} sx={{}} />
      
     
      <h3  className='NomCorreoTitle'  >{info.nombre}</h3>
      <h3  className='NomCorreoTitle' >{info.correo}</h3>
      <h3 className='planTitle'  >
        {info.suscrip === 1 ? ("Plan Premium "): ("Plan basico")}
        </h3>
       <NavBar_User funcion={MostrarApartados} suscripcion={info.suscrip}/>
     
     
    </Container>
    
    
    <Container   sx={{padding:"0"}}> 
     {count === 0 ? (<Home/>): count == 2 ?(<User_Cursos/>): count == 3 ? (<User_Informes dataUser={info}/>): count == 7 ? (<Tipo_Aprendizaje  suscripcion={info.suscrip} tipoAprendizaje={info.tipoAprendizaje}/>):
      count == 4 ? (<User_Notificaciones />): count == 5 ? (<User_Ajustes foto={info} cambiarFoto={setInfo} />): count == 6 ?  (MostrarApartados):33333}
      
    
    </Container>

    

    {/* <NavBar_User funcion={MostrarApartados} suscripcion={info.suscrip}/>
       */}
</Container>

      
      
      
      

    </div>
  )
}

export default User_Home;