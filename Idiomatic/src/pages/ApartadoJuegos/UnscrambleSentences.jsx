import { Diversity3 } from '@mui/icons-material';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function UnscrambleSentences(){

    const location = useLocation();

    const { recursoFront, recursoEjercicio } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    
    
    return(<div style={{}}>
        

    <img src={recursoFront.icono} style={{float:"left",position:"absolute",left:"0%",top:"0%"}} width="12%" alt="" />
    <Container disableGutters sx={{background:"rgba(119, 102, 198, 0.5)",width:"80%",marginLeft:"15%",marginRight:"0%",borderRadius:"10px",height:"14vh",marginTop:"3%"}}>

        <h1 style={{position:"relative",top:"23%",textAlign:"center"}}>Unscramble the sentences / Descifra las oraciones</h1>

        

    </Container>

    
    <div  style={{marginTop:"2%",display:"flex"}}>

        <Container   sx={{width:"15%"}}>
            <img src="/src/images/UnscrambleSentences/numero1.png" width="50%" style={{display:"block",marginTop:"15%",marginLeft:"45%"}} alt="" />
            <img src="/src/images/UnscrambleSentences/numero2.png" width="50%" style={{display:"block",marginTop:"45%",marginLeft:"45%"}} alt="" />
            <img src="/src/images/UnscrambleSentences/numero3.png" width="40%" style={{display:"block",marginTop:"50%",marginLeft:"53%"}} alt="" />
            <img src="/src/images/UnscrambleSentences/numero4.png" width="40%" style={{display:"block",marginTop:"50%",marginLeft:"53%"}} alt="" />
            <img src="/src/images/UnscrambleSentences/numero5.png" width="40%" style={{display:"block",marginTop:"50%",marginLeft:"53%"}} alt="" />
            <img src="/src/images/UnscrambleSentences/numero6.png" width="40%" style={{display:"block",marginTop:"50%",marginLeft:"53%"}} alt="" />
        </Container>

        <Container sx={{}}>

            {recursoEjercicio.map((element) =>{
                return (<><h2 style={{margin:"0",marginTop:"2%",color:"black"}}>{element}</h2>
                         <input style={{background:recursoFront.inputColor,display:"inline-block",borderRadius:"25px",marginTop:"2%",width:"40%",height:"40px",paddingLeft:"2%",fontSize:"22px"}} hidden="xd" type="text" />
                         </>  )
            })}
     
        </Container>

        
    </div>
    
      
    <Button sx={{background:recursoFront.btnColor,color:"black",position:"relative",left:"75%",marginBottom:"1%",borderRadius:"25px",width:"15%"}} variant='contained'>Enviar</Button> 
    
    </div>)
}
