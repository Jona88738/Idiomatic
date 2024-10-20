import { useState } from 'react'
import {Container, Card, CardContent, CardMedia,Typography} from '@mui/material';
import { useNavigate  } from 'react-router-dom';

 function MediaCard({miFuncion,titulo, imagen,introduccion}) {
  return (
    <Card onClick={miFuncion} sx={{  minWidth: 45,maxWidth: 300,background:"rgba(224, 223, 253, 0.41)",borderRadius:"30px",marginTop:"38px",marginLeft:"3%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imagen}
        title={titulo}
      />
      <CardContent sx={{paddingBottom:"5px !important"}}>
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

  function to(){
    console.log("Entro xD")
    navigate('/TemasJuegos')
  }

  return (
    <>
      
      
     

      <Container sx={{background:'rgba(70, 70, 122, 1)',width:'100%',borderRadius:'50px',marginTop:'3.5%'}}>
          <h1 style={{color:'#F9FAFD',marginLeft:"15%",fontSize:'4vw',marginTop:"0",marginBottom:"0"}}>Mis Cursos</h1>
          <h3 style={{color:'#F9FAFD',marginLeft:"20%",fontSize:'2vw',marginBottom:"0"}}>Aqui tenemos tu seleccion de cursos</h3>
          <img src="/images/logoCursos.svg" width="15%"  style={{position:'absolute',right:'60px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
                                               
      </Container>
     
      <h1 style={{textAlign:"center",fontSize:"2vw", boxShadow:'0px 3px 1px rgba(31, 25, 47, 0.5)',color:'rgba(31, 25, 47, 0.7)'}}>Ingles</h1>

      <h1 style={{marginBottom:"0",fontSize:"2vw"}}>Nivel</h1>

      <Container style={{background:"rgba(249, 176, 195, 0.3)",borderRadius:'33px',width:"30%",height:"10%",paddingBottom:"10px",maxWidth:"35%"}}>

      <img src="/images/vectorA1.svg" width="20%"  style={{float:'left',marginTop:'2%'}}   alt="Logo "/>
      <h1  style={{fontSize:"2vw",marginLeft:'35%',marginTop:"0",marginBottom:"0",paddingTop:"8%"}}>Begginer</h1> 

      </Container>

      

      <Container sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>


      
      <MediaCard miFuncion={to} titulo="Ejercicios" imagen='/images/MisCursos/ejercicios.png' introduccion="Mejora tu vocabulario, gramática y fluidez con ejercicios diseñados para reforzar lo que has aprendido. ¡Practica y progresa!"/>
      <MediaCard miFuncion={to} titulo="Lecturas" imagen='/images/MisCursos/lecturas.png' introduccion="¡Descubre historias fascinantes y mejora tu inglés mientras lees y descubre un nuevo mundo de palabras!"/>
      <MediaCard miFuncion={to} titulo="Videos" imagen='/images/MisCursos/videos.png' introduccion="Descubre lecciones en video que te ayudarán a entender mejor el inglés hablado. ¡Aprende a tu ritmo mientras ves y escuchas!" />
      <MediaCard miFuncion={to} titulo="Audios" imagen='/images/MisCursos/audios.png' introduccion="Descubre una variedad de audios que te ayudarán a comprender mejor el inglés. ¡Escucha cuando quieras" />
                                              

      </Container>

      

    </>
  )
}

export default User_Cursos;