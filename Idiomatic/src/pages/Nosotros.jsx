import { useState } from 'react'
import Container from '@mui/material/Container';

import NavBar from '../components/NavBar_Home';
import Footer_Home from '../components/Footer_Home';
function Nosotros() {
  const [count, setCount] = useState(0)

  return (
    <>

      <NavBar />
  <Container>
        <h1 style={{ textAlign: 'center' }}>Idiomatic</h1>
        <h2 style={{ textAlign: 'center' }}>Impulsando tu viaje linguistico con<br />
          aprendizaje personalizado e<br /> interactivo.</h2>

        <p style={{ textAlign: 'center' }}>En idiomatic, estamos comprometidos con la excelencia en el
          aprendizaje de idiomas. <br /> Ofrecemos una plataforma innovadora
          y adaptativa que facilita el desarrollo  de habilidades <br />
          linguisticas de manera interactiva y efectiva. Con un enforque centrado
          en el usuario, <br /> proporcionamos recursos educativos de alta calidad
          que ayudan a nuestro usuarios a<br /> alcanzar sus metas personales
          y profesionales.
        </p>


        <Container disableGutters sx={{ display: 'flex', justifyContent: 'center', position: 'relative', bottom: '81px' }}>

          <img src="/src/images/gifSobreNosotros.gif" width="30%" height="10%" style={{ position: 'relative', bottom: '0%' }} alt="Logo de mi página" />


        </Container>

  </Container>

  <Container disableGutters sx={{display:'flex'}}  >

        <Container disableGutters >

          <h1>Mision</h1>
          <p>Nuestra mision es ofrecer una plataforma interactiva y
            personalizada <br/> que se adapte a las necesidades de cada 
            usuario. Con recursos<br/> educativos de alta calidad y un enfoque en la 
            experiencia   del usuario <br/> ayudamos a mejorar las habilidades linguisticas
             y a alcanzar los objetivos personales y profesionales</p>

        </Container>
        <Container disableGutters >

          <img src="/src/images/mision.png" width="80%" height="80%" style={{ position: 'relative', bottom: '0%' }} alt="Logo de mi página" />

        </Container>

  </Container>


  <Container disableGutters sx={{display:'flex'}}  >

        <Container disableGutters sx={{justifyContent:'center'}} >
          <img src="/src/images/Vision.png" width="80%" height="80%" style={{ position: 'relative', bottom: '0%' }} alt="Logo de mi página" />

        </Container>

        <Container disableGutters >

        <h1>Vision</h1>
        <p>Nuestra vision es se lideres en el aprendizaje de idiomas 
        en linea, <br/> proporcionando una educacion accesible y efectiva
        para todos. <br/>Aspiramos a crear una comunidad global de aprendices<br/>
        que puedan comunicarse con confianza y fluidez en multiples idiomas  </p>
        </Container>

  </Container>


    <Footer_Home/>
    </>
  )
}

export default Nosotros;