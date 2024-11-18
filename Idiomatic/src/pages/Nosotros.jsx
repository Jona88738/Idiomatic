import { useState } from 'react';
import { Box, Grid, Typography, Avatar, Paper, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavBar from '../components/NavBar_Home';
import Footer_Home from '../components/Footer_Home';

const TeamCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: '15px',
  backgroundColor: '#F5F5F5',
  marginTop: '90px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '300px',
  margin: '10px auto',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)',
  },
}));

const AboutBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6), // Aumenta el padding para dar más espacio interno
  marginBottom: theme.spacing(4),
  borderRadius: '15px',
  backgroundColor: '#EFEFEF',
  boxShadow: '0px 4px 12px rgba(3, 3, 3, 0.3)',
  position: 'relative',
  maxWidth: '900px', // Ajusta el tamaño máximo según tus necesidades
  margin: '0 auto',
  marginTop: '40px' // Centra el recuadro en la pantalla
}));


const TitleBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-40px', // Ajusta la posición vertical si es necesario
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#2E2E48',
  color: '#FFFFFF',
  borderRadius: '8px',
  padding: theme.spacing(3, 10), // Aumenta el padding para hacerlo más alto y ancho
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
  maxWidth: '900px', // Ajusta el ancho según tus necesidades
  textAlign: 'center', // Centra el texto dentro del recuadro
  fontSize: '5rem', // Ajusta el tamaño de la fuente si es necesario
  fontWeight: 'bold', // Haz el texto más llamativo
}));


const DecorativeLine = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  height: '2px',
  backgroundColor: '#666',
  margin: '30px auto 10px auto',
}));

const MissionVisionSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/images/fondonosotros.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(20, 0),
  borderRadius: '15px',
  marginBottom: theme.spacing(4),
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
}));

function Nosotros() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      {/* Sección Sobre Nosotros */}
      <Box sx={{ paddingTop: 4, maxWidth: 'lg', margin: '0 auto', position: 'relative', marginTop: '40px' }}>
        <AboutBox elevation={3}>
          <TitleBox>
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Century Gothic', fontSize: '30px' }}>
              Sobre Nosotros
            </Typography>
          </TitleBox>
          <Typography variant="body1" paragraph sx={{ marginTop: 4 , textAlign: 'justify', fontSize: '18px', fontFamily: 'tahoma'}}>
            En Idiomatic, estamos comprometidos con la excelencia en el aprendizaje de idiomas.
            Ofrecemos una plataforma innovadora y adaptativa que facilita el desarrollo de habilidades
            lingüísticas de manera interactiva y efectiva. Con un enfoque centrado en el usuario,
            proporcionamos recursos educativos de alta calidad que ayudan a nuestros usuarios a alcanzar
            sus metas personales y profesionales.
          </Typography>
        </AboutBox>

        <DecorativeLine />

        <Typography variant="h4" align="center" fontFamily="Century Gothic" gutterBottom sx={{ fontWeight: 'bold', color: '#333', marginTop: '30px', marginBottom: '50px' }}>
          Nuestro Equipo
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <TeamCard elevation={3} sx={{ backgroundColor: '#9890BF' }}>
              <Avatar src="/images/nina.png" sx={{ width: 120, height: 120, margin: '0 auto' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, fontFamily: 'Century Gothic', color: '#00000' }}>
                Nahomy Hernández
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CEO & Developer
              </Typography>
            </TeamCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamCard elevation={9} sx={{ backgroundColor: '#F5C94D' }}>
              <Avatar src="/images/nino.png" sx={{ width: 120, height: 120, margin: '0 auto' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, fontFamily: 'Century Gothic', color: '#00000' }}>
                Jonathan Pérez
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CEO & Developer
              </Typography>
            </TeamCard>
          </Grid>
        </Grid>

        <DecorativeLine />
      </Box>

      {/* Sección de Misión y Visión con fondo especial */}
      <MissionVisionSection>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" fontFamily="Century Gothic" gutterBottom sx={{ fontWeight: 'bold', color: '#333', marginTop: '-120px' }}>
            Misión
          </Typography>
          <Grid container spacing={4} direction="column" alignItems="center" sx={{ marginTop: 1 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', padding: 4, borderRadius: '15px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)' }}>
                <Typography variant="body1" align="justify" fontSize="18px" paragraph>
                  Nuestra misión es ofrecer una plataforma interactiva y personalizada que se adapte
                  a las necesidades de cada usuario. Con recursos educativos de alta calidad y un enfoque
                  en la experiencia del usuario, ayudamos a mejorar las habilidades lingüísticas y a alcanzar
                  los objetivos personales y profesionales.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="h4" align="center" fontFamily="Century Gothic" gutterBottom sx={{ fontWeight: 'bold', color: '#333', marginTop: 6 }}>
            Visión
          </Typography>
          <Grid container spacing={4} direction="column" alignItems="center" sx={{ marginTop: 1 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', padding: 4, borderRadius: '15px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', marginTop: 1 }}>
                <Typography variant="body1" align="justify" fontSize="18px" paragraph>
                  Nuestra visión es ser líderes en el aprendizaje de idiomas en línea, proporcionando
                  una educación accesible y efectiva para todos. Aspiramos a crear una comunidad global
                  de aprendices que puedan comunicarse con confianza y fluidez en múltiples idiomas.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MissionVisionSection>

      <Footer_Home />
    </>
  );
}

export default Nosotros;
