import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function NavBar_Apartados(){

        return(<>
        
        <Container maxWidth="cadena" sx={{background: '#F9FAFD', height:'10vh',     boxShadow:'0px 6px 2px GRAY'}}>
      
      <img src="/src/images/Logo.png" width="60vw" height="60vh" alt="Logo de mi página"/>

        
      
        <Container sx={{display:'flex',justifyContent:'right',position:'relative',bottom:'50px'}}>
            <h2 style={{margin:"0",marginRight:"25px"}}>Barra provicional</h2>
        <Button href="/Videos" sx={{bottom:'5px',color:'black'}}>Videos</Button>
        <Button href="/Audios" sx={{bottom:'5px',color:'black'}}>Audios</Button>
        <Button href="/Lecturas" sx={{bottom:'5px',color:'black'}}>Lecturas</Button>
        <Button href="/Ejercicios" sx={{bottom:'5px',color:'black'}}>Ejercicios</Button>
        <Button  className='btnOpcion' href="/User_Home" >salir</Button>
        
        </Container>
        
      </Container>
        
        
        
        </>)
}