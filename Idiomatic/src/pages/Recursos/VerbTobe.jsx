import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function VerbtobeInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' , marginLeft: '80px'}}>
                Verb To Be              
            </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px', marginLeft: '100px' }}>
                Verbo ser/estar
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/src/images/vectorweb.png" 
                style={{ width: '68%', borderRadius: '10px', height: 'auto' , marginTop: '-48px'}} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            ¿Qué es el Verb To be?
          </Typography>
          <Box sx={{ backgroundColor: '#F8D9E1', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            El verbo <strong>to be</strong> es uno de los verbos más importantes en inglés y aparece en casi todas las conversaciones diarias. Se utiliza para hablar sobre quiénes somos, cómo nos sentimos, dónde estamos, y para describir situaciones o características. Es un verbo irregular, lo que significa que su forma cambia dependiendo del sujeto y el tiempo verbal.
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <img 
                  src="/src/images/tobe1.png"  
                  alt="tobe" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />
        </Box>
           {/* Divider para separar secciones */}
            <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />


          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold',  textAlign: 'center'  }}>
            Estructura del verbo to be
          </Typography>
          <Typography variant='h7' paragraph sx={{ fontWeight: 'bold',  textAlign: 'justify'  }}>
            Forma afirmativa
          </Typography>
          <Typography paragraph>
          Las oraciones afirmativas son aquellas que declaran o enuncian algo verdadero.          
          </Typography>
          
          <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <img 
                  src="/src/images/tobe2.png"  
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />
        </Box>
        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <img 
                  src="/src/images/tobe3.png"  
                  style={{ maxWidth: '50%', height: 'auto', marginTop: '-40px', textAlign: 'center'}} 
                />
        </Box>

        <Typography variant='h7' paragraph sx={{ fontWeight: 'bold',  textAlign: 'justify' , marginTop: '-70px' }}>
            Forma negativa
          </Typography>
          <Typography paragraph>
          Las oraciones negativas son aquellas que niegan algo.  Asi pues, se añade la partícula <strong>not</strong> después del verbo.         
          </Typography>
          
          <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <img 
                  src="/src/images/tobe4.png"  
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />
        </Box>
        <Typography variant='h7' paragraph sx={{ fontWeight: 'bold',  textAlign: 'justify'}}>
            Forma interrogativa
          </Typography>
          <Typography paragraph>
          Las oraciones interrogativas o preguntas son aquellas que se utilizan para pedir una determinada información.          
          </Typography>
          
          <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <img 
                  src="/src/images/tobe5.png"  
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />
        </Box>
        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <img 
                  src="/src/images/tobe6.png"  
                  style={{ maxWidth: '50%', height: 'auto', marginTop: '-40px', textAlign: 'center'}} 
                />
        </Box>
        </Box>

        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />     
 
        {/* Respuestas cortas */}

        <Box sx={{ marginBottom: '20px' , textAlign: 'justify'}}>
         <Typography variant="h6" paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Respuestas cortas en el verb to be
          </Typography>
          <Typography paragraph>
          Las respuestas cortas son aquellas construcciones que se utilizan para responder afirmativa o negativamente a una pregunta. En inglés, a diferencia del español, no es habitual responder simplemente con los adverbios sí o no, sino que aparecen seguidos del sujeto correspondiente y el verbo to be.         
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <img 
                src="/src/images/tobe7.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
            <Grid item xs={6}>
              <img 
                src="/src/images/tobe8.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={5}>
            <img 
                src="/src/images/tobe9.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
            <Grid item xs={7}>
              <img 
                src="/src/images/tobe10.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
          </Grid>
          
        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />    

          {/* verb tobe pasado */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
            Verbo to be en pasado            
            </Typography>
            <Typography>
            El pasado simple del verbo to be equivale a los verbos <strong>era/estaba</strong> o <strong>fui/estuve</strong> del español, por lo que dependiendo del contexto de la frase se interpretará con un significado u otro.           
             </Typography>

             <Grid container spacing={2}>
            <Grid item xs={6}>
            <img 
                src="/src/images/tobe12.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
            <Grid item xs={6}>
              <img 
                src="/src/images/tobe11.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
          </Grid>            
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
            Conjugacion del verb to be en pasado            
            </Typography>

            <Typography variant='h7' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
            Forma afirmativa           
            </Typography>
            <Typography>
            En las oraciones afirmativas el verbo se coloca después del sujeto y debe ir seguido de un complemento.       
            </Typography>

            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/src/images/tobe13.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '70%', height: 'auto' }} 
              />
            </Box>
            <Typography variant='h7' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
                Forma negativa            
                </Typography>
                <Typography>
                En las oraciones negativas, al igual que en presente, se añade la partícula <strong>not</strong> después del verbo (o utilizamos la forma contraída) y seguido del complemento.       
            </Typography>

            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/src/images/tobe14.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '70%', height: 'auto' }} 
              />
            </Box>
            <Typography variant='h7' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
                Forma interrogativa            
                </Typography>
                <Typography>
                En las oraciones interrogativas el verbo se traslada al principio de la oración y no se admite la forma contraída. 
                </Typography>

            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/src/images/tobe15.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '70%', height: 'auto' }} 
              />
            </Box>
            
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
                Respuestas cortas            
                </Typography>
                <Typography>
                En las oraciones interrogativas el verbo se traslada al principio de la oración y no se admite la forma contraída.
                </Typography>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <img 
                src="/src/images/tobe16.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
            <Grid item xs={6}>
              <img 
                src="/src/images/tobe17.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
          </Grid>        

            {/* Consejos sobre el verb to be */}

<Box sx={{ marginBottom: '20px' , textAlign: 'justify', marginTop: '40px', backgroundColor: '#D4CEF0', padding: '30px', borderRadius: '10px'}}>
  <Typography variant="h6" paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
    Consejos para aprender el verb to be
  </Typography>
  <Typography paragraph>
    <strong>1. Practica con ejemplos:</strong> Usa el verb to be para describir tu día a día, ya sea para hablar de cómo te sientes, dónde estás o quién eres. Cuantas más veces lo uses en tus oraciones, más natural te resultará.
  </Typography>
  <Typography paragraph>
    <strong>2. No olvides el contexto:</strong> Recuerda que en inglés, el verb to be puede traducirse como “ser” o “estar”, por lo que debes fijarte en el contexto para entender su significado correctamente.
  </Typography>
  <Typography paragraph>
    <strong>3. Respuestas cortas:</strong> En inglés, es común responder con "Yes, I am" o "No, I'm not" en lugar de simplemente "Yes" o "No". Esto hace que la conversación sea más clara y completa.
  </Typography>
  <Typography paragraph>
    <strong>4. Memoriza las formas:</strong> Memoriza las tres formas principales del verb to be en presente: *am, is, are* y en pasado: *was, were*. Este es un paso clave para usarlo correctamente en diferentes tiempos.
  </Typography>
  <Typography paragraph>
    <strong>5. Usa contracciones:</strong> En conversaciones informales, es común usar contracciones como "I'm" en lugar de "I am" o "He's" en lugar de "He is". Esto hace que tu inglés suene más natural.
  </Typography>
</Box>


          </Box>
          </Box>
      </Box>
       
    </>
  );
}

export default VerbtobeInfo;
