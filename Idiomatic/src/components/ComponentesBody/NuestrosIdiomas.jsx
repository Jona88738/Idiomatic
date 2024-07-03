import { Container } from "@mui/material";
import Card from '@mui/material/Card';

export default function NuestrosIdiomas(){
    return(<>
    <h1 style={{textAlign:'center'}}>Nuestros idiomas</h1>
    <Container maxWidth={false} disableGutters sx={{display:'flex',margin:'0',maxWidth:'100%', boxShadow:'5px 5px 5px black'}}>
          
          
          <Container disableGutters sx={{}}>
            
          <h1 style={{textAlign:'center'}}>Ingles</h1>
          <p style={{fontSize:'2vw',textAlign:'justify'}}>El inglés es un idioma ampliamente hablado y 
            utilizado en todo el mundo, tanto en contextos profesionales 
            como cotidianos. Es el idioma predominante en áreas como la tecnología,
             los negocios, la ciencia y el entretenimiento.</p>
          

          </Container>

          <Container disableGutters sx={{width:'60%'}}>
          <img src="/src/images/cuadrado.png" width="70%" height="60%"style={{position:'relative',left:'15%',top:'9%'}}   alt="Logo de mi página"/>
          </Container>
      </Container>


      <h1>Proximamente...</h1>
      

      <Container maxWidth={false} disableGutters sx={{display:'flex',margin:'0',maxWidth:'100%'}}>
          
          
          <Container disableGutters sx={{width:'60%'}}>
            
          <img src="/src/images/francia.png" width="70%" height="60%"style={{position:'relative',left:'12%',top:'9%'}}   alt="Logo de mi página"/>
          
          

          </Container>
          

          <Container disableGutters sx={{background:'white',}}>
          <h1 style={{textAlign:'center'}}>Frances</h1>
          <p style={{textAlign:'justify'}}>El francés es un idioma romántico que se habla en varios países de Europa,
             África y América del Norte. Es reconocido por su belleza y sofisticación,
              y es el idioma oficial de organizaciones internacionales como la ONU y la UNESCO</p>
          
          </Container>
      </Container>


      <h1 style={{textAlign:'center'}}>Ofrecemos</h1>

      <Container sx={{background:'rgba(249, 176, 195, 0.44)',display:'flex',justifyContent:'space-evenly',borderRadius:'20px'}}> 
        
        <Container disableGutters sx={{}}>

            <img src="/src/images/ElipseA1.png" width="70%" height="60%"style={{position:'relative',left:'12%',top:'9%'}}   alt="Logo de mi página"/>
          
            <h1>Ejercicios nivel A1 para ambos idiomas</h1>


        </Container>
        <Container disableGutters  sx={{}}>
        
        <img src="/src/images/EyesPana.png" width="70%" height="60%"style={{position:'relative',left:'12%',top:'9%'}}   alt="Logo de mi página"/>
          
        <h1>Adaptación a su estilo de aprendizaje</h1>

        </Container>
        <Container disableGutters sx={{}}>


        <img src="/src/images/Ontest-pana.png" width="70%" height="60%"style={{position:'relative',left:'12%',top:'9%'}}   alt="Logo de mi página"/>
         
            <h1>Test de nivelación y tipo de aprendizaje</h1>
        </Container>

      </Container>


    
    </>);

}