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

function User_Home() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({});


  const navigate = useNavigate();


  useEffect(() =>{

    fetch("/api/progresoUsuario")
      .then(res => res.json(res))
      .then(res => setInfo(res))

  },[])


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
        <h1 className='subtema2' >Estas al dia</h1>
        

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


  

  return (
    <>
            
<Container className='Contenedormain' maxWidth='false'  disableGutters >

    <Container  className='ContenedorNav' disableGutters >

      <Avatar alt="Remy Sharp"  variant="rounded" src="http://localhost:3001/FotoPerfil/init.png" sx={{marginTop:"2%",marginLeft:"32%", width: 110, height: 110 }} />
      <h3 style={{textAlign:"center",margin:"0"}} >{info.nombre}</h3>
      <h3 style={{textAlign:"center",margin:"0"}} >{info.correo}</h3>
      
       <NavBar_User funcion={MostrarApartados}/>
     
     
    </Container>
    
    
    <Container   > 
     {count === 0 ? (<Home/>): count == 2 ?(<User_Cursos/>): count == 3 ? (<User_Informes dataUser={info}/>): 
      count == 4 ? (<User_Notificaciones />): count == 5 ? (<User_Ajustes/>): count == 6 ?  (MostrarApartados):33333}
      
    
    </Container>


      
</Container>

      
      
      
      

    </>
  )
}

export default User_Home;