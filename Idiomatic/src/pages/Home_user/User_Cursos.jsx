import { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar_Home from '../../components/NavBar_User'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate  } from 'react-router-dom';

import Typography from '@mui/material/Typography';



 function MediaCard({miFuncion,titulo}) {
  return (
    <Card onClick={miFuncion} sx={{  minWidth: 45,maxWidth: 300,background:"rgba(224, 223, 253, 0.41)",borderRadius:"30px",marginTop:"38px",marginLeft:"3%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/images/vector(cursoGramatica).svg"
        title={titulo}
      />
      <CardContent sx={{paddingBottom:"5px !important"}}>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="black">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
    navigate('/Ejercicios')
  }

  return (
    <>
      
      
     

      <Container sx={{background:'rgba(70, 70, 122, 1)',width:'100%',borderRadius:'50px',marginTop:'3.5%'}}>
          <h1 style={{color:'#F9FAFD',marginLeft:"15%",fontSize:'4vw',marginTop:"0",marginBottom:"0"}}>Mis Cursos</h1>
          <h3 style={{color:'#F9FAFD',marginLeft:"20%",fontSize:'2vw',marginBottom:"0"}}>Aqui tenemos tu seleccion de cursos</h3>
          <img src="/src/images/logoCursos.svg" width="15%"  style={{position:'absolute',right:'60px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
                                               
      </Container>
     
      <h1 style={{textAlign:"center",fontSize:"2vw", boxShadow:'0px 3px 1px rgba(31, 25, 47, 0.5)',color:'rgba(31, 25, 47, 0.7)'}}>Ingles</h1>

      <h1 style={{marginBottom:"0",fontSize:"2vw"}}>Nivel</h1>

      <Container style={{background:"rgba(249, 176, 195, 0.3)",borderRadius:'33px',width:"30%",height:"10%",paddingBottom:"10px",maxWidth:"35%"}}>

      <img src="/src/images/VectorA1.svg" width="20%"  style={{float:'left',marginTop:'5%'}}   alt="Logo "/>
      <h1  style={{fontSize:"2vw",marginLeft:'35%',marginTop:"0",marginBottom:"0",paddingTop:"8%"}}>Begginer</h1> 

      </Container>

      

      <Container sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>


      
      <MediaCard miFuncion={to} titulo="Ejercicios"/>
      <MediaCard miFuncion={to} titulo="Lecturas"/>
      <MediaCard miFuncion={to} titulo="Videos"/>
      <MediaCard miFuncion={to} titulo="Audios"/>
                                              

      </Container>

      

    </>
  )
}

export default User_Cursos;