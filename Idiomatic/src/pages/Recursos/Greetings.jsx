import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
// import NavBar_Home from '../../components/NavBar_Home';
import NavBar_Apartados from "../../components/NavBar_Apartados"
function GreetingsInfo() {
  return (
    <>
      {/* Navbar arriba */}
      <Box>
        
        <NavBar_Apartados />
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' }}>
                Greetings and farewells             
                </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px', marginLeft: '90px' }}>
                Saludos y despedidas
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectorsaludo.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto' , marginTop: '-48px'}} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
         
          <Box sx={{ backgroundColor: '#D4CEF0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            ¡Bienvenido/a a tu primera lección en IDIOMATIC! En esta sección, aprenderás cómo saludar y despedirte en inglés. Saber cómo iniciar y finalizar una conversación es clave para comunicarse en cualquier idioma.
            </Typography>
            <Typography paragraph>
            Los saludos y las despedidas son expresiones comunes que te ayudarán a interactuar de manera básica pero efectiva con otras personas en situaciones cotidianas.             En esta lección, aprenderás cuándo y cómo usar cada saludo y despedida de manera apropiada, según el contexto y el momento del día.
            </Typography>
          </Box>

          {/* Definicion */}
              <Box>
                <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  ¿Cómo se saluda?
                </Typography>
                <Typography paragraph>
                Los saludos son una parte fundamental de cualquier idioma y cultura. Son la primera impresión que damos al comenzar una conversación y pueden variar dependiendo de la formalidad y el contexto. A continuación, te mostramos algunos de los saludos más comunes y útiles para iniciar tus interacciones en inglés.
                </Typography>
                <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
                <img 
                src="/images/greetings1.png"  
                style={{ maxWidth: '50%', height: 'auto' }} 
                />
                </Box>
                <Typography paragraph>
                Después de aprender a saludar, es común seguir la conversación preguntando sobre el estado de ánimo de la otra persona. En inglés, existen diferentes formas de hacerlo, dependiendo de si el ambiente es formal o informal. Este tipo de preguntas son clave para iniciar una conversación y demostrar interés en la otra persona.
                </Typography> 
                <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
                <img 
                src="/images/greetings2.png"  
                style={{ maxWidth: '40%', height: 'auto' }} 
                />
              </Box>
              <Typography paragraph sx={{ marginBottom: '20px', marginTop: '-300px' }}>
              Es muy común responder que te encuentras bien, para ello podemos mencionar las siguientes frases:
              </Typography> 
                <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
                <img 
                src="/images/greetings3.png"  
                style={{ maxWidth: '40%', height: 'auto' }} 
                />
              </Box>

              <Typography paragraph sx={{ marginBottom: '20px', marginTop: '-300px' }}>
              Por el lado contrario, cuando queremos decir que no estamos bien podemos responder las preguntas anteriores con las siguientes frases:              </Typography> 
                <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
                <img 
                src="/images/greetings4.png"  
                style={{ maxWidth: '40%', height: 'auto' }} 
                />
              </Box>
              </Box>

              <Box>
                <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '-300px' }}>
                  ¿Cómo podemos despedirnos?
                </Typography>
                <Typography paragraph>
                Así como es importante saber cómo iniciar una conversación, también lo es saber cómo despedirse adecuadamente. Las despedidas son una forma de cerrar una conversación con amabilidad y pueden variar dependiendo de lo formal o informal que sea la situación. 
                </Typography>
                <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
                <img 
                src="/images/greetings5.png"  
                style={{ maxWidth: '50%', height: 'auto' }} 
                />
                </Box>
                <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' , marginTop: '-200px'}}>
                  Expresiones cordiales
                </Typography>
                <Typography paragraph>
                Existen otras expresiones de cordialidad, que utilizarás tarde o temprano cuando convives con otras personas, entre ellas, se encuentran las de agradecimiento, pedir las cosas por favor, desear cosas buenas a alguien, las más conocidas son:                
                </Typography>
                <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
                <img 
                src="/images/greetings6.png"  
                style={{ maxWidth: '40%', height: 'auto' }} 
                />
                </Box>

              </Box>  
              <Typography paragraph sx={{ marginBottom: '20px', textAlign: 'justify', marginTop: '-150px' }}>
              Ahora ya conoces las frases más comunes para iniciar y cerrar conversaciones en diferentes contextos, desde un saludo rápido y amistoso hasta una despedida formal. Estas expresiones son fundamentales para empezar a comunicarte con confianza en situaciones cotidianas.
              </Typography>

              <Box sx={{ padding: '20px', borderRadius: '10px', marginBottom: '20px', marginTop: '50px' }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>
                 Recuerda que:
                </Typography>

  <Box sx={{ padding: '10px', backgroundColor: '#BCBCCB', borderRadius: '8px', marginBottom: '10px' }}>
    <Typography paragraph>
      Los saludos te permiten empezar cualquier interacción de manera cortés y amigable.
    </Typography>
  </Box>

  <Box sx={{ padding: '10px', backgroundColor: '#BEBEEA', borderRadius: '8px', marginBottom: '10px' }}>
    <Typography paragraph>
      Las preguntas sobre el estado de ánimo son útiles para demostrar interés y mantener una conversación fluida.
    </Typography>
  </Box>

  <Box sx={{ padding: '10px', backgroundColor: '#BCBCCB', borderRadius: '8px', marginBottom: '10px' }}>
    <Typography paragraph>
      Las despedidas son la manera de cerrar la interacción de forma educada, ya sea en un entorno formal o informal.
    </Typography>
  </Box>

  <Box sx={{ padding: '10px', backgroundColor: '#BEBEEA', borderRadius: '8px' }}>
    <Typography paragraph>
      En la próxima lección, nos enfocaremos en presentaciones personales, donde aprenderás a hablar sobre ti mismo y a preguntar información básica sobre los demás. ¡Sigue adelante, tu progreso en el aprendizaje del inglés es impresionante!
    </Typography>
  </Box>
</Box>

            

         
        </Box>
      </Box>
       
    </>
  );
}

export default GreetingsInfo;
