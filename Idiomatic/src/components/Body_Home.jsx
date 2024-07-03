import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import NuestrosIdiomas from "./ComponentesBody/NuestrosIdiomas";
import NuestrosPlanes from "./ComponentesBody/NuestrosPlanes";

export default function  Body_Home() {
  return (
    <>
      
      <Container maxWidth={false} disableGutters sx={{background:'rgba(224, 223, 253, 0.5)',display:'flex',margin:'0',maxWidth:'100%'}}>
          

          <Container disableGutters sx={{}}>

            <Container sx={{display:'flex'}}>

              <Container sx={{marginTop:'20px'}}>

              <Card sx={{background:'#F9B0C3', minWidth: '200px', maxWidth:'400px',borderRadius:'20px', height:'100%' }}>
              <h1 style={{color:'white',fontSize:'2vw',textAlign:'center'}}>Variedad en recursos</h1>
              <img src="/src/images/Informacion.png" width="80%" height="80%"style={{position:'relative',left:'14%',bottom:'0%'}}   alt="Logo de mi página"/>
          


              </Card>


              </Container>

              <Container>

              <Card sx={{background:'#7766C6',minWidth: '200px', maxWidth:'400px',marginTop:'20px',marginBottom:'20px',borderRadius:'20px' }}>
              
              <img src="/src/images/Reloj.png" width="50%" height="50%"style={{float:'left'}}   alt="Logo de mi página"/>
              <h1 style={{color:'white',fontSize:'2.5vw'}}>Material Siempre disponible</h1>
          </Card>

          <Card sx={{background:'#FFC212', minWidth: '200px', maxWidth:'400px',borderRadius:'20px' }}>
              
              <img src="/src/images/Reproducir.png" width="50%" height="50%"style={{float:'left',marginTop:'15px'}}   alt="Logo de mi página"/>
      
              <h1 style={{color:'white','textAlign':'right',margin:'20px',fontSize:'2vw'}}>Material basado en el tipo de aprendizaje</h1>
          </Card>


              </Container>

            </Container>

          

          

          <Card sx={{background:'#1F192F', minWidth: '200px',width:'90%',marginLeft:'40px',marginTop:'20px',marginBottom:'20px',borderRadius:'20px' }}>
          <img src="/src/images/cerebro.png" width="20%" height="20%"style={{float:'right',marginRight:'30px'}}   alt="Logo de mi página"/>
              <h1 style={{color:'white',marginLeft:'40px',marginTop:'30px'}}>Materiales didácticos e <br/>interactivos</h1>
              
      
          </Card>

          </Container>

          <Container disableGutters sx={{width:'65%'}}>

          <img src="/src/images/Group.png" width="72%" style={{position:'relative',left:'10px',marginTop:'120px'}}   alt="Logo de mi página"/>
           
            <Container sx={{borderRadius:'100%',width:'50%',height:'30%',position:'relative',top:'40%'}}>
              
            
              <h1 style={{textAlign:'center',fontSize:'2vw'}}>4 Razones para elegir Idiomatic</h1>
              
              </Container>
            
            
          </Container>
      </Container>

      <NuestrosIdiomas/>
      <NuestrosPlanes/>
    </>
  );
}