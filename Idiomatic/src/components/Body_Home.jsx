import { Container } from "@mui/material";
import Card from '@mui/material/Card';

export default function  Body_Home() {
  return (
    <>
      
      <Container maxWidth={false} disableGutters sx={{background:'rgba(224, 223, 253, 0.5)',display:'flex',margin:'0',maxWidth:'100%'}}>
          

          <Container disableGutters sx={{background:'black'}}>

          <Card sx={{background:'#F9B0C3', minWidth: '200px', maxWidth:'400px' }}>
              <h1>Variedad en recursos</h1>
          </Card>

          <Card sx={{background:'#7766C6',minWidth: '200px', maxWidth:'400px' }}>
              <h1>Material Siempre disponible</h1>
          </Card>

          <Card sx={{background:'#FFC212', minWidth: '200px', maxWidth:'400px' }}>
              <h1>Material basado en el tipo de aprendizaje</h1>
          </Card>

          <Card sx={{background:'#1F192F', minWidth: '200px', maxWidth:'400px' }}>
              <h1>Materiales didácticos e interactivos</h1>
          </Card>

          </Container>

          <Container disableGutters sx={{background:'rgba(224, 223, 253, 0.5)',}}>
            <h1>4 Razones para elegir Idiomatic</h1>
          </Container>
      </Container>
    </>
  );
}