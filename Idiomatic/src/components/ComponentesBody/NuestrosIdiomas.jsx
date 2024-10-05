import { Container } from "@mui/material";
import Card from '@mui/material/Card';

export default function NuestrosIdiomas(){
    return(<>
    <h1 className="TituloNuestrosIdiomas">Nuestros idiomas</h1>
    <Container className="contenedorIngles" maxWidth={false} disableGutters >
          
          
          <Container disableGutters >
            
          <h1 >Ingles</h1>
          <p >El inglés es un idioma ampliamente hablado y 
            utilizado en todo el mundo, tanto en contextos profesionales 
            como cotidianos. Es el idioma predominante en áreas como la tecnología,
             los negocios, la ciencia y el entretenimiento.</p>
          

          </Container>

          <Container className="contImagenIngles" disableGutters >
          <img src="/src/images/cuadrado.png" width="70%" height="60%"style={{position:'relative',left:'15%',top:'9%'}}   alt="Logo de mi página"/>
          </Container>
    </Container>


      <h1>Proximamente...</h1>
      

      <Container className="ContenedorFrances" maxWidth={false} disableGutters >
          
          
          <Container className="ContenedorimgFran" disableGutters >
            
          <img src="/src/images/francia.png" width="70%" height="60%"style={{position:'relative',left:'12%',top:'9%'}}   alt="Logo de mi página"/>
          
          

          </Container>
          

          <Container className="ContFrancesInfo" disableGutters>
          <h1 >Frances</h1>
          <p >El francés es un idioma romántico que se habla en varios países de Europa,
             África y América del Norte. Es reconocido por su belleza y sofisticación,
              y es el idioma oficial de organizaciones internacionales como la ONU y la UNESCO</p>
          
          </Container>
      </Container>


      <h1 className="TituloOfrecemos" >Ofrecemos</h1>

    <Container className="ConteOfrecemos" disableGutters > 
        
        <Container disableGutters className="EjercicioNivel">

            <img src="/src/images/ElipseA1.png" width="70%" height="70%"style={{position:'relative',left:'12%',top:'9%'}}   alt="Logo de mi página"/>
          
            <h1 >Ejercicios nivel A1 para ambos idiomas</h1>


        </Container>

        <Container disableGutters className="Adaptacion" >
        
        <img src="/src/images/EyesPana.png" width="70%" height="70%"style={{position:'relative',left:'12%',top:'9%'}}   alt="Logo de mi página"/>
          
        <h1 >Adaptación a su estilo de aprendizaje</h1>

        </Container>
        <Container disableGutters className="TestNivel">


        <img src="/src/images/Ontest-pana.png" width="70%" height="70%"style={{position:'relative',left:'12%',top:'9%'}}   alt="Logo de mi página"/>
         
            <h1 >Test de nivelación y tipo de aprendizaje</h1>
        </Container>

    </Container>


    
    </>);

}