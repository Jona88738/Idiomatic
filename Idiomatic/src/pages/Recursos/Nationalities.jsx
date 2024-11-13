import { Box, Typography, Grid, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function NationalitiesInfo() {
  return (
    <>
      {/* Navbar arriba */}
      <Box>
        <NavBar_Home />
      </Box>

      {/* Contenido principal */}
      <Box sx={{ padding: '30px', maxWidth: '1200px', margin: 'auto' }}>
        {/* Box para el título con imagen */}
        <Box sx={{ 
          backgroundColor: '#ffc212', 
          borderRadius: '10px', 
          padding: '30px', 
          marginBottom: '50px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          height: '200px' 
        }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px', marginLeft: '60px' }}>
                Nationalities              
                </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px', marginLeft: '100px' }}>
                Nacionalidades
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectornation.png" 
                style={{ width: '90%', borderRadius: '10px', height: 'auto', marginTop: '-68px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Hablemos sobre las nacionalidades
          </Typography>
          <Box sx={{ backgroundColor: '#D4CEF0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            Conocer y hablar sobre las nacionalidades es una parte clave de las conversaciones en inglés, especialmente cuando nos presentamos o hablamos de otras personas. Saber cómo expresar la nacionalidad de alguien correctamente te permitirá comunicarte con claridad en entornos multiculturales y globales.
            </Typography>
            <Typography paragraph>
            Las nacionalidades suelen derivarse del nombre del país, aunque muchas veces cambian de forma. Se utilizan tanto para describir de dónde es una persona como para hablar sobre su cultura o idioma. Las nacionalidades en inglés, como en otros idiomas, se escriben siempre con <strong>mayúscula</strong>.
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center', marginTop: '80px' }}>
          <img 
                src="/images/nationalies1.png" 
                style={{ width: '50%', borderRadius: '10px', height: 'auto', marginTop: '-68px' }} 
              />
            </Box>

        <Box sx={{  padding: '20px', marginBottom: '20px' }}>
        <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign:'center' }}>
            Nacionalidades y idiomas
          </Typography>
            <Typography paragraph>
            A continuación, se presentan algunas de las nacionalidades más comunes que te serán útiles en tus conversaciones diarias.            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '80px' }}>
          <img 
                src="/images/nationalities3.png" 
                style={{ width: '50%', borderRadius: '10px', height: 'auto', marginTop: '-98px' }} 
              />
        </Box>

          <Box>
        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        <Grid container spacing={3}>

{/* Título principal */}
<Grid item xs={12}>
  <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
    Cómo Preguntar sobre Nacionalidades y Países de Origen
  </Typography>
</Grid>

{/* Preguntas sobre el país de origen */}
<Grid item xs={12}>
  <Typography variant="h7" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
    Preguntas sobre el país de origen:
  </Typography>

  <Box sx={{ backgroundColor: '#D4CEF0', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
    <Typography paragraph>
      <strong>Where are you from?</strong> → ¿De dónde eres?
    </Typography>
    <Typography paragraph>
      Esta es la forma más común y directa de preguntar sobre el lugar de origen de una persona.
    </Typography>
    <Box sx={{ backgroundColor: '#F5F5F5', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
      <Typography variant="body1"><strong>A:</strong> Where are you from?</Typography>
      <Typography variant="body1"><strong>B:</strong> I’m from Canada. (Soy de Canadá).</Typography>
    </Box>

    <Typography paragraph>
      <strong>Which country are you from?</strong> → ¿De qué país eres?
    </Typography>
    <Typography paragraph>
      Una forma más específica de hacer la misma pregunta.
    </Typography>
    <Box sx={{ backgroundColor: '#F5F5F5', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
      <Typography variant="body1"><strong>A:</strong> Which country are you from?</Typography>
      <Typography variant="body1"><strong>B:</strong> I’m from Japan. (Soy de Japón).</Typography>
    </Box>
  </Box>
</Grid>

{/* Preguntas sobre la nacionalidad */}
<Grid item xs={12}>
  <Typography variant="h7" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
    Preguntas sobre la nacionalidad:
  </Typography>

  <Box sx={{ backgroundColor: '#FFF9C4', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
    <Typography paragraph>
      <strong>What’s your nationality?</strong> → ¿Cuál es tu nacionalidad?
    </Typography>
    <Typography paragraph>
      Esta pregunta es ideal si te interesa saber directamente la nacionalidad de alguien.
    </Typography>
    <Box sx={{ backgroundColor: '#F5F5F5', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
      <Typography variant="body1"><strong>A:</strong> What’s your nationality?</Typography>
      <Typography variant="body1"><strong>B:</strong> I’m British. (Soy británico).</Typography>
    </Box>

    <Typography paragraph>
      <strong>Are you [nationality]?</strong> → ¿Eres [nacionalidad]?
    </Typography>
    <Typography paragraph>
      Puedes utilizar esta forma para hacer preguntas más específicas.
    </Typography>
    <Box sx={{ backgroundColor: '#F5F5F5', padding: '10px', borderRadius: '5px' }}>
      <Typography variant="body1"><strong>A:</strong> Are you German? (¿Eres alemán?)</Typography>
      <Typography variant="body1"><strong>B:</strong> No, I’m Swiss. (No, soy suizo).</Typography>
    </Box>
  </Box>
</Grid>

{/* Cómo Responder */}
<Grid item xs={12}>
  <Typography variant="h7" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
    Cómo Responder:
  </Typography>

  <Box sx={{ backgroundColor: '#FFECB3', padding: '15px', borderRadius: '10px' }}>
    <Typography paragraph>
      Al responder preguntas sobre nacionalidad o país de origen, puedes seguir una estructura simple:
    </Typography>
    
    <Box sx={{ backgroundColor: '#F5F5F5', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
      <Typography><strong>I am from [country].</strong> → Yo soy de [país].</Typography>
      <Typography paragraph>Ejemplo: I’m from Italy. (Soy de Italia).</Typography>
    </Box>
    
    <Box sx={{ backgroundColor: '#F5F5F5', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
      <Typography><strong>I am [nationality].</strong> → Yo soy [nacionalidad].</Typography>
      <Typography paragraph>Ejemplo: I’m Italian. (Soy italiano/a).</Typography>
    </Box>

    <Box sx={{ backgroundColor: '#F5F5F5', padding: '10px', borderRadius: '5px' }}>
      <Typography><strong>I speak [language].</strong> → Yo hablo [idioma].</Typography>
      <Typography paragraph>Ejemplo: I speak French. (Hablo francés).</Typography>
    </Box>
    
    <Typography paragraph>
      También puedes combinar respuestas para ofrecer más información:
    </Typography>
    <Box sx={{ backgroundColor: '#E8F5E9', padding: '10px', borderRadius: '5px' }}>
      <Typography paragraph>
        I’m from Brazil, and I speak Portuguese. (Soy de Brasil, y hablo portugués).
      </Typography>
      <Typography paragraph>
        I’m American, and I speak English. (Soy estadounidense y hablo inglés).
      </Typography>
    </Box>
  </Box>
</Grid>

</Grid>


  
</Box>
        </Box>
      </Box>
    </>
  );
}

export default NationalitiesInfo;
