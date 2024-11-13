import { Box, Typography, Grid, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function ClockInfo() {
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
          backgroundColor: '#f9b0c3', 
          borderRadius: '10px', 
          padding: '30px', 
          marginBottom: '50px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          height: '200px' 
        }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px', marginLeft: '80px' }}>
                Clock              
                </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px', marginLeft: '130px' }}>
                Reloj
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectortime.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto', marginTop: '-48px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            What time is it?
          </Typography>
          <Box sx={{ backgroundColor: '#D4CEF0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            Saber decir y preguntar la hora en inglés es una habilidad práctica y esencial para el día a día. Ya sea para llegar a tiempo a una reunión, hacer planes con amigos, o simplemente saber cuándo empieza tu clase, es importante dominar cómo expresar y comprender la hora.
            </Typography>
            <Typography paragraph>
            La pregunta más común para preguntar la hora en inglés es:            
            </Typography>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            ¿Qué hora es?
          </Typography>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <Box sx={{ backgroundColor: '#8585A7', borderRadius: '10px', padding: '20px', marginBottom: '20px' , marginTop: '40px'}}>
            <Typography paragraph>
            La primera forma de decir la hora es utilizando el <strong>horario militar</strong>, también conocido como el <strong>formato de 24 horas</strong>. Este método es muy sencillo, ya que solo necesitas conocer cómo se dicen los números en inglés, se usa en muchas situaciones formales o técnicas, como el transporte, hospitales o el ejército. Este formato es sencillo porque no utiliza "a.m." o "p.m." y simplemente cuenta las horas del día de 00:00 a 23:59.
            </Typography>
            </Box>
            </Grid>
            <Grid item xs={6}>
              <img 
                src="/images/reloj1.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' , marginTop: '-20px'}} 
              />
            </Grid>
          </Grid>
          <Typography paragraph sx={{ textAlign: 'justify' , marginTop: '30px'}}>
          No obstante, la forma más común y adecuada, especialmente en contextos formales como el académico o profesional, es el formato de 12 horas que veremos a continuación.
            Es importante destacar que en este formato solo usamos los números del 1 al 12, lo que lo hace más simple y familiar para la mayoría de las personas.
          </Typography>

          <Box>
  {/* En punto - O' clock */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#F9CCD8' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
      En punto - O’ clock
    </Typography>
    <Typography paragraph>
      Para referirnos a la hora en punto solamente debemos decir It’s + la hora que es + la expresión o’clock.
      <br />
      Por ejemplo: It’s two o’clock, It’s five o’clock o It’s nine o’clock.
    </Typography>
    <Typography paragraph>
      Recuerda que solo utilizamos la forma simple, es decir del 1 al 12. Nunca diremos "It’s thirteen o’clock."
      <br />
      Existen dos términos para referirnos a las 12, bien sean del mediodía o de la media noche:
      <br />
      - Twelve noon o simplemente noon.
      <br />
      - Twelve midnight o simplemente midnight.
    </Typography>
  </Paper>

  {/* Media hora – 'Half past' */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#DDD7F9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
      Media hora – 'Half past'
    </Typography>
    <Typography paragraph>
      Para indicar que ha pasado media hora después de una hora en punto, utilizamos la expresión "half past".
      <br />
      La estructura es: It’s + half past + la hora.
    </Typography>
    <Typography paragraph>
      Ejemplos:
      <br />
      It’s half past two → Son las dos y media.
      <br />
      It’s half past five → Son las cinco y media.
      <br />
      It’s half past nine → Son las nueve y media.
    </Typography>
    <Typography paragraph>
      Recuerda que en este caso, solo usamos números del 1 al 12. Nunca diríamos "It’s half past thirteen".
    </Typography>
  </Paper>

  {/* Un cuarto después – 'Quarter past' */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#F9CCD8' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      Un cuarto después – 'Quarter past'
    </Typography>
    <Typography paragraph>
      Para decir que han pasado 15 minutos después de la hora, usamos la expresión "quarter past".
      <br />
      La estructura es: It’s + quarter past + la hora.
    </Typography>
    <Typography paragraph>
      Ejemplos:
      <br />
      It’s quarter past two → Son las dos y cuarto.
      <br />
      It’s quarter past six → Son las seis y cuarto.
      <br />
      It’s quarter past ten → Son las diez y cuarto.
    </Typography>
  </Paper>

  {/* Un cuarto para – 'Quarter to' */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#DDD7F9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      Un cuarto para – 'Quarter to'
    </Typography>
    <Typography paragraph>
      Para indicar que faltan 15 minutos para la siguiente hora, usamos "quarter to".
      <br />
      La estructura es: It’s + quarter to + la hora siguiente.
    </Typography>
    <Typography paragraph>
      Ejemplos:
      <br />
      It’s quarter to three → Son las tres menos cuarto.
      <br />
      It’s quarter to seven → Son las siete menos cuarto.
      <br />
      It’s quarter to eleven → Son las once menos cuarto.
    </Typography>
    <Typography paragraph>
      Es importante recordar que mencionamos la hora siguiente, no la actual.
    </Typography>
  </Paper>

  {/* Minutos – 'Past' y 'To' */}
  <Paper sx={{ padding: '15px', backgroundColor: '#F9CCD8' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      Minutos – 'Past' y 'To'
    </Typography>
    <Typography paragraph>
      Para expresar los minutos en inglés, utilizamos las palabras "past" (después) y "to" (para).
      <br />
      La estructura es: It’s + los minutos + past/to + la hora.
    </Typography>
    <Typography paragraph>
      Ejemplos para "past":
      <br />
      It’s ten past four → Son las cuatro y diez.
      <br />
      It’s twenty past seven → Son las siete y veinte.
      <br />
      It’s five past twelve → Son las doce y cinco.
    </Typography>
    <Typography paragraph>
      Ejemplos para "to":
      <br />
      It’s ten to four → Son las cuatro menos diez.
      <br />
      It’s twenty to seven → Son las siete menos veinte.
      <br />
      It’s five to twelve → Son las doce menos cinco.
    </Typography>
    <Typography paragraph>
      Utilizamos "past" cuando los minutos han pasado desde la hora en punto, y "to" cuando faltan minutos para llegar a la siguiente hora.
    </Typography>
  </Paper>
</Box>
        </Box>
      </Box>
    </>
  );
}

export default ClockInfo;
