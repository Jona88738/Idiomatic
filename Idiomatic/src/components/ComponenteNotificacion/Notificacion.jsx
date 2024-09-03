import Container from '@mui/material/Container';

export default function Notificacion(){
    return(<>

<Container className='ContenedorNoti'>
          <h2>{titulo} </h2>
          <p>{texto}</p>
          <br/>   
          <button>X</button>
        </Container>
        
    
    </>)
}