import { useState } from 'react'
import {Container, Card, CardContent, CardMedia,Typography} from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import '../../styles/StyleHomeUser/UserCursos.css'
 function MediaCard({miFuncion,titulo, imagen,introduccion}) {
  return (
    <Card className='Mcard' onClick={()=> miFuncion(titulo)} >
      <CardMedia
        sx={{ height: 140 }}
        image={imagen}
        title={titulo}
      />
      <CardContent className='McardContent' >
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="black">
          {introduccion}
        </Typography>
      </CardContent>
     
    </Card>
  );
}



function User_Cursos() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();

  function to(titulo){
    // console.log("Entro xD",titulo)
    navigate('/Temas'+titulo)
  }

  return (
    <>
      
      
     

      <Container className='ContainerTitle' >
          <h1 className='Title' >Mis Cursos</h1>
          <h3 className='subtitle' >Aqui tenemos tu seleccion de cursos</h3>
          <img className='imgContainer' src="/images/logoCursos.svg"     alt="Logo de mi página"/>
                                               
      </Container>
     
      <h1 className='subtitleB' >Ingles</h1>

      <h1 className='subNivel' >Nivel</h1>

      <Container className='ContainerBegginer' >

      <img  className='imgVectorA1' src="/images/vectorA1.svg" width="18%"    alt="Logo "/>
      <h1  className='titleBegginer' >Begginer</h1> 

      </Container>

      

      <Container className='ContainerMCard' >


      
      <MediaCard miFuncion={to} titulo="Juegos" imagen='/images/MisCursos/ejercicios.png' introduccion="Mejora tu vocabulario, gramática y fluidez con ejercicios diseñados para reforzar lo que has aprendido. ¡Practica y progresa!" />
      <MediaCard miFuncion={to} titulo="Lecturas" imagen='/images/MisCursos/lecturas.png' introduccion="¡Descubre historias fascinantes y mejora tu inglés mientras lees y descubre un nuevo mundo de palabras!"/>
      <MediaCard miFuncion={to} titulo="Videos" imagen='/images/MisCursos/videos.png' introduccion="Descubre lecciones en video que te ayudarán a entender mejor el inglés hablado. ¡Aprende a tu ritmo mientras ves y escuchas!" />
      <MediaCard miFuncion={to} titulo="Audios" imagen='/images/MisCursos/audios.png' introduccion="Descubre una variedad de audios que te ayudarán a comprender mejor el inglés. ¡Escucha cuando quieras" />
                                              

      </Container>

      

    </>
  )
}

export default User_Cursos;