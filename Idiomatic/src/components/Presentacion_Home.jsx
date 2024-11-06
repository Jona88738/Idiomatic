import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Presentacion_Home() {
  return (
    <>
      <div className='PresentacionContenedor'>
        <Container sx={{ marginTop: '40px' }}>
          <img className='PresentacionImage' src="/Vector1.svg" height="auto" alt="Logo de mi página" />
          <h1 className='PresentacionTitulo'>¡Descubre nuevos<br /> mundos aprendiendo<br /> nuevos idiomas!</h1>
        </Container>

        {/* Contenedor para el texto */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '420px', marginLeft: '-430px' }}>
          <Typography
            variant="body1"
            sx={{ fontSize: '20px', fontFamily: 'Century Gothic', color: '#444', textAlign: 'justify', marginRight: '20px', marginBottom:'30px' }}
          >
            Sumérgete en lecciones dinámicas, ejercicios auténticos y actividades prácticas diseñadas para hacerte sentir seguro y motivado en tu viaje hacia la fluidez.
          </Typography>
        </Box>

        {/* Contenedor para el GIF y el botón */}
        <Container className='ContenedorGif' sx={{ alignItems: 'center', marginTop: '10px', marginRight: '30px' }}>
          <img className='PresentacionGif' src="/images/4GIF_SINFONDOFINAL.gif" width="90%" height="80%" alt="Logo de mi página" />
          <Button
            variant="contained"
            sx={{ padding: '8px 50px', fontSize: '14px', backgroundColor: '#ffc212', color: '#000', marginTop: '10px' , marginLeft: '170px', borderRadius: '10px', '&:hover':{backgroundColor: '#f9b0c3'}}}
          >Comienza ahora
          </Button>
        </Container>
      </div>
    </>
  );
}
