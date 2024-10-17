import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import NuestrosIdiomas from "./ComponentesBody/NuestrosIdiomas";
import NuestrosPlanes from "./ComponentesBody/NuestrosPlanes";

export default function Body_Home() {
  return (
    <>

      <Container className="BodyContenedor" maxWidth={false} disableGutters >


        <Container disableGutters >

          <Container disableGutters className="bodyCardInfo" >

            <Container disableGutters className="contenedorRosa">

              <Card className="cardRosa" >
                <h1 >Variedad en recursos</h1>
                <img src="/images/Informacion.png" width="80%" height="80%" style={{ position: 'relative', left: '14%', bottom: '0%' }} alt="Logo de mi página" />

              </Card>


            </Container>

            <Container disableGutters className="contenedorMorado" >

              <Card className="cardMorado" >

                <img src="/images/Reloj.png" width="50%" height="50%" style={{ float: 'left' }} alt="Logo de mi página" />
                <h1 >Material Siempre disponible</h1>
              </Card>

              <Card className="cardAmarillo" >

                <img src="/images/Reproducir.png" width="50%" height="50%" style={{ float: 'left', marginTop: '15px' }} alt="Logo de mi página" />

                <h1 >Material basado en el tipo de aprendizaje</h1>
              </Card>


            </Container>

          </Container>

          <Card className="cardNegro">
            <img src="/images/cerebro.png" width="20%" height="20%" style={{ float: 'right', marginRight: '30px' }} alt="Logo de mi página" />
            <h1 >Materiales didácticos e <br />interactivos</h1>


          </Card>

        </Container>

        <Container disableGutters sx={{ width: '65%' }}>

          <img className="ImgRazones" src="/images/Group.png" width="72%"  alt="Logo de mi página" />




        </Container>
      </Container>

      <NuestrosIdiomas />
      <NuestrosPlanes />
    </>
  );
}