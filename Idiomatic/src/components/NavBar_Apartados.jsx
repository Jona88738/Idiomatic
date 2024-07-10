import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function NavBar_Apartados(){

        return(<>
        
        <Container maxWidth="cadena" sx={{background: '#F9FAFD', height:'10vh',     boxShadow:'0px 6px 2px GRAY'}}>
      
      <img src="/src/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        
      
        <Container sx={{display:'flex',justifyContent:'right',position:'relative',bottom:'50px'}}>
            <h2 style={{margin:"0",marginRight:"25px"}}>Barra provicional</h2>
        <Button href="/" sx={{bottom:'5px',color:'black'}}>Videos</Button>
        <Button href="/Cursos" sx={{bottom:'5px',color:'black'}}>Audios</Button>
        <Button href="/Login" sx={{bottom:'5px',color:'black'}}>Lecturas</Button>
        <Button href="/Nosotros" sx={{bottom:'5px',color:'black'}}>Ejercicios</Button>
        
        <Button href='/Sign_up'  variant="outlined"sx={{color: 'white' ,background: 'rgba(58, 49, 96, 1)',height:'25px'}}>Crear Cuenta</Button>
      
        </Container>
        
      </Container>
        
        
        
        </>)
}