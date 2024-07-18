import Container from '@mui/material/Container';


export default function Presentacion_Home() {
  return (
    <>
      <div className='PresentacionContenedor' >
      <Container>
      
      <img className='PresentacionImage' src="/Vector1.svg"  height="auto"  alt="Logo de mi página"/>
      <h1 className='PresentacionTitulo'>¡Descubre <br/> nuevos mundos<br/>  aprendiendo<br/>  nuevos idiomas!</h1>
      
      </Container>
      
      <Container className='ContenedorGif' >
      <img className='PresentacionGif' src="/src/images/4GIF_SINFONDOFINAL.gif" width="90%" height="80%"  alt="Logo de mi página"/>
      </Container>
      </div>
    </>
  );
}