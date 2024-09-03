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

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function User_Home() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({});
  const [notificacion, setNotificacion] = useState([])

  const navigate = useNavigate();


  useEffect(() =>{
      console.log("pidio datos progreso usuario")
    fetch("/api/progresoUsuario")
      .then(res => res.json(res))
      .then(res => setInfo(res))

  },[])

  useEffect(() =>{
    
    fetch("/api/notificaciones")
          .then(res => res.json())
          .then(res=> {
            const [noti, pausarNoti,avisos] = res;
            setNotificacion(avisos)
          })
  },[])

  function onDelete(indice){
    
      const nuevoArreglo = notificacion.filter((noti,i) => i !== indice)
        setNotificacion(nuevoArreglo)
  }


  function Notificacion({indice,titulo,texto}){
    console.log(indice)
    return(<>
      <Container className='ContenedorNoti' >
          <h2>{titulo} </h2>
          <p>{texto}</p>
          <br/>   
          
          <button style={{background:"red",position:"absolute",right:"0",top:"0",width:"5%",height:"5vh",cursor:"pointer"}} onClick={() => onDelete(indice)}><CloseIcon/></button>
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
          <img className='imgHomeUser' src="/src/images/iconoHomeUser.svg" width="20%"    alt="Logo de mi página"/>
        
         
        </Container>

        <h2 className='subtema' >Vista Previa</h2>
        <h2 className='subtema2' >Progreso general</h2>

        <Container className='ContenedorProgreso' >

        <img className='imgBandera' src="/src/images/cuadrado.png" width="40%" height="80%"   alt="Logo de mi página"/>
        
          
        <Gauge width={130} height={135} value={info.progresoGeneral}  
         innerRadius="78%"
         outerRadius="99%"
         text={
                ({ value}) => `${value}%`
              } 
              sx={{marginLeft:"15%",

                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 20,
                  transform: 'translate(0px, 0px)',
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
      navigate('/')
    }
         
    setCount(num);    
  }


  //"http://localhost:3001/FotoPerfil/init.png"
//console.log(info.foto)
  return (
    <>
            
<Container className='Contenedormain' maxWidth='false'  disableGutters >

    <Container  className='ContenedorNav' disableGutters >

      <Avatar alt="Remy Sharp"  variant="rounded" src={info.foto} sx={{marginTop:"2%",marginLeft:"32%", width: 110, height: 110 }} />
      <h3 style={{textAlign:"center",margin:"0"}} >{info.nombre}</h3>
      <h3 style={{textAlign:"center",margin:"0"}} >{info.correo}</h3>
      
       <NavBar_User funcion={MostrarApartados}/>
     
     
    </Container>
    
    
    <Container   > 
     {count === 0 ? (<Home/>): count == 2 ?(<User_Cursos/>): count == 3 ? (<User_Informes dataUser={info}/>): 
      count == 4 ? (<User_Notificaciones />): count == 5 ? (<User_Ajustes foto={info} cambiarFoto={setInfo} />): count == 6 ?  (MostrarApartados):33333}
      
    
    </Container>


      
</Container>

      
      
      
      

    </>
  )
}

export default User_Home;