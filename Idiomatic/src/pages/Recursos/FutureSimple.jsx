import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function FutureSimpleInfo() {
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
          backgroundColor: '#D4CEF0', 
          borderRadius: '10px', 
          padding: '30px', 
          marginBottom: '50px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          height: '200px' 
        }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' }}>
                Future Simple
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px' , marginLeft:'60px'}}>
                Futuro Simple
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectorfuturo.png" 
                style={{ width: '75%', borderRadius: '10px', height: 'auto' , marginTop: '-48px'}} 
              />
            </Grid>
          </Grid>
        </Box>

        

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            ¿Qué es el Future Simple?
          </Typography>
          <Box sx={{ backgroundColor: '#F8D9E1', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            El Future Simple es uno de los tiempos verbales más comunes para hablar sobre eventos o acciones que sucederán en el futuro. Se utiliza principalmente para hacer predicciones, expresar decisiones espontáneas o hablar de promesas y ofrecimientos.
            </Typography>
          </Box>
           {/* Divider para separar secciones */}
            <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />


          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold',  textAlign: 'center'  }}>
            Future Simple - Will
          </Typography>
          <Typography paragraph>
          Future Simple con will es el futuro en inglés que permite expresar decisiones espontáneas sobre acciones futuras, predicciones o acontecimientos futuro que no puede alterarse. Se forma con el verbo auxiliar will y el infinitivo del verbo principal.
          </Typography>
        </Box>

 {/* Casos del Future Simple con "Will" */}

        <Box sx={{ marginBottom: '20px' }}>
         <Typography variant="h6" paragraph sx={{ fontWeight: 'bold', textAlign: 'justify' }}>
            Usos del Future Simple con "Will"
          </Typography>
          
          <List>
            {/* 1. Decisiones espontáneas */}
            <ListItem>
              <ListItemText
                primary="1. Decisiones espontáneas"
                secondary={(
                  <>
                    Usamos "will" cuando decidimos hacer algo en el momento de hablar, sin haberlo planeado previamente.
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"I’m thirsty." – "I’ll get you some water." (Tengo sed. – Te traeré agua.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>

            {/* 2. Promesas */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="2. Promesas"
                secondary={(
                  <>
                    Se utiliza "will" para hacer promesas o compromisos.
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"I will help you with your homework." (Te ayudaré con tu tarea.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>

            {/* 3. Ofrecimientos */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="3. Ofrecimientos"
                secondary={(
                  <>
                    Para ofrecer hacer algo por alguien, también se utiliza "will".
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"Don’t worry, I’ll carry your bag." (No te preocupes, yo llevaré tu bolsa.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>

            {/* 4. Predicciones */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="4. Predicciones basadas en opiniones o suposiciones"
                secondary={(
                  <>
                    Usamos "will" para hacer predicciones o suposiciones sobre el futuro.
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"I think it will rain tomorrow." (Creo que lloverá mañana.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>

            {/* 5. Hechos inevitables */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="5. Hechos futuros inevitables o seguros"
                secondary={(
                  <>
                    Se utiliza "will" para expresar eventos futuros que consideramos inevitables o ciertos.
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"The sun will rise at 6 AM tomorrow." (El sol saldrá a las 6 de la mañana mañana.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>

            {/* 6. Amenazas o advertencias */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="6. Amenazas o advertencias"
                secondary={(
                  <>
                    Usamos "will" cuando estamos haciendo advertencias o amenazas.
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"If you don’t apologize, I will never forgive you." (Si no te disculpas, nunca te perdonaré.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>
          </List>
          {/* Marcadores temporales */}
          <Grid container spacing={2}>
            <Grid item xs={7}>
            <Box sx={{ padding: '10px', textAlign: 'justify', marginTop: '10px' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold'}}>
                  Indicadores de Future simple con "Will"
                </Typography>
                <Typography paragraph>
                Hay ciertas palabras que permiten identificar la intención del hablante de expresar una opinión o una suposición.                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <img 
                src="/images/Future1.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
          </Grid>

          {/* Sección de explicación de la conjugación */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
            Conjugación del future simple con will            
            </Typography>
            <Typography>
            Para conjugar un verbo en futuro simple con will, se emplea este verbo auxiliar junto con el infinitivo del verbo principal.            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/Future2.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '70%', height: 'auto' }} 
              />
            </Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
                Contracción            
                </Typography>
            <Typography>
            La contracción consiste en la combinación de ciertos pronombres personales, verbos y la partícula de negación not. Este recurso se emplea sobre todo en la lengua hablada y en textos escritos en un registro informal. La finalidad es aligerar la producción oral y dotar de naturalidad al enunciado.
            </Typography>

            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/Future3.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '50%', height: 'auto' }} 
              />
            </Box>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/Future4.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '65%', height: '20%' }} 
              />
            </Box>
          </Box>

           {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

           {/* Going to */}
        <Typography variant='h6' paragraph sx={{ fontWeight: 'bold',  textAlign: 'center'  }}>
            Future Simple - Going to
          </Typography>
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>  
          <Typography paragraph>
          Future Simple (going to) es el futuro en inglés que expresa una conclusión lógica, un plan, o una situación programada con anterioridad. Este tiempo se construye con el presente del verbo auxiliar be + going to + el infinitivo del verbo principal.          
          </Typography>
          </Box>
        </Box>

         {/* Casos del Future Simple con "going to" */}
         <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h6" paragraph sx={{ fontWeight: 'bold', textAlign: 'justify' }}>
            Usos del Future Simple con "Going to"
          </Typography>

          <List>
            {/* 1. Planes o intenciones futuras */}
            <ListItem>
              <ListItemText
                primary="1. Planes o intenciones futuras"
                secondary={(
                  <>
                    Utilizamos "going to" cuando hablamos de algo que decidimos hacer en el futuro y que ya hemos planeado o considerado.
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"I’m going to study medicine." (Voy a estudiar medicina. → Es un plan o una intención decidida previamente.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>

            {/* 2. Predicciones basadas en evidencia presente */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="2. Predicciones basadas en evidencia presente"
                secondary={(
                  <>
                    Se usa "going to" para hacer predicciones sobre el futuro basadas en algo que podemos ver o saber en el presente.
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"Look at those clouds! It’s going to rain." (¡Mira esas nubes! Va a llover. → La predicción se basa en la evidencia presente de las nubes.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>

            {/* 3. Eventos inminentes */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="3. Eventos inminentes"
                secondary={(
                  <>
                    Cuando algo está a punto de suceder y es evidente que ocurrirá pronto.
                    <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"Hurry up! The bus is going to leave." (¡Apúrate! El autobús está a punto de irse.)</Typography>
                    </Box>
                  </>
                )}
              />
            </ListItem>
          </List>

          {/* Marcadores temporales */}
          <Grid container spacing={2}>
            <Grid item xs={7}>
            <Box sx={{ padding: '10px', textAlign: 'justify', marginTop: '10px' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold'}}>
                  Marcadores de Future simple
                </Typography>
                <Typography paragraph>
                Los marcadores temporales permiten identificar el tiempo verbal que debe emplearse en una oración. Los más frencuentes del futuro son:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <img 
                src="/images/Going1.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
          </Grid>
          <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/Going2.png"  
                alt="Ejemplo" 
                style={{ maxWidth: '65%', height: 'auto' }} 
              />
            </Box>


          {/* Sección de explicación de la conjugación */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
            Conjugación del future simple con going            
            </Typography>
            <Typography>
            Para conjugar un verbo en futuro simple con "going to", utilizamos el presente del <strong>verbo auxiliar be + going to</strong> y el infinitivo del verbo principal.            
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/Going5.png"  
                alt="Ejemplo" 
                style={{ maxWidth: '55%', height: 'auto' }} 
              />
            </Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
                Contracción            
                </Typography>
            <Typography>
            La contracción consiste en la combinación de pronombres personales, verbos y la partícula de negación not. Es común en lenguaje oral o en contextos informales.            
            </Typography>

            <Box sx={{ marginBottom: '10px', textAlign: 'center' }}>
              <img 
                src="/images/Going3.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '55%', height: 'auto' }} 
              />
            </Box>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/Going4.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '65%', height: '20%' }} 
              />
            </Box>
          </Box>
          </Box>
      </Box>
       
    </>
  );
}

export default FutureSimpleInfo;
