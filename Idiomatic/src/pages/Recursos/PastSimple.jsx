import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';
import NavBar_Apartados from "../../components/NavBar_Apartados"


function PastSimpleInfo() {
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
          backgroundColor: '#6A6083', 
          borderRadius: '10px', 
          padding: '30px', 
          marginBottom: '50px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          height: '200px' 
        }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px', marginLeft: '30px' }}>
                Simple Past
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#e0dffd', marginTop: '-25px', marginLeft: '60px' }}>
                Pasado Simple
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectorpensando.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto' , marginTop: '-48px'}} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            ¿Qué es el Pasado Simple?
          </Typography>
          <Box sx={{ backgroundColor: '#D4CEF0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            Past simple, también llamado <strong>simple past</strong> o <strong>past tense</strong>, es el pasado en inglés. Sirve para expresar acciones pasadas, tanto cercanas en el tiempo como lejanas. No es relevante la duración de la acción en sí, sino si la acción se ha completado o no. Se forma con el pasado regular o irregular del verbo principal y el verbo auxiliar do. Equivale en español al pretérito indefinido y al pretérito imperfecto.
            </Typography>
            <Typography paragraph>
            En este apartado aprenderás a reconocer las situaciones en las que se emplea este tiempo en inglés para hablar del pasado y las reglas de conjugación para oraciones afirmativa, negativas e interrogativas
            </Typography>

          </Box>

          {/* Marcadores temporales */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
                  Marcadores temporales en Past Simple
                </Typography>
                <Typography paragraph>
                En el Past Simple (pasado simple), los marcadores temporales son palabras o expresiones que indican cuándo ocurrió una acción en el pasado. Ayudan a dar contexto temporal y suelen ser esenciales para ubicar los eventos en el tiempo. Los marcadores más comunes incluyen:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img 
                src="/images/Pastsimple1.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        {/* Uso del Present Continuous */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
            Uso del Past Simple
          </Typography>
          
          <List>
            {/* 1. Acciones en este momento */}
            <ListItem>
              <ListItemText
                primary= "1. Acciones completadas en el pasado"
                secondary={
                  <>
Se usa para hablar de acciones o eventos que sucedieron y terminaron en un momento específico en el pasado, ya sea que se mencione el tiempo exacto o no.                    
                    <Box sx={{ padding: '10px', backgroundColor: '#e0dffd', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>" I visited my grandmother last weekend." (Visité a mi abuela el fin de semana pasado)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 2. Acciones temporales */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="2. Secuencia de eventos en el pasado"
                secondary={
                  <>
                    Se usa para describir varias acciones o eventos que ocurrieron uno tras otro en el pasado.
                    <Box sx={{ padding: '10px', backgroundColor: '#e0dffd', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"She woke up, brushed her teeth, and went to work." (Ella se despertó, se lavó los dientes y se fue a trabajar).</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 3. Planes o intenciones futuras */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="3. Acciones habituales en el pasado"
                secondary={
                  <>
                    El pasado simple también se usa para hablar de hábitos o rutinas que alguien solía tener en el pasado.
                    <Box sx={{ padding: '10px', backgroundColor: '#e0dffd', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"When I was a child, I played soccer every day". (Cuando era niño, jugaba fútbol todos los días).
                    </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 4. Acciones repetitivas */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="4. Eventos que interrumpen una acción en progreso"
                secondary={
                  <>
                    Se usa para describir un evento que ocurrió en el pasado mientras otra acción estaba en progreso (generalmente usando el past continuous para la acción en progreso).                    
                    <Box sx={{ padding: '10px', backgroundColor: '#e0dffd', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"I was watching TV when the phone rang". (Estaba viendo televisión cuando sonó el teléfono).
                    </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 5. Cambios o desarrollos */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="5. Acciones en un tiempo pasado específico"
                secondary={
                  <>
                    Se utiliza para hablar de eventos que ocurrieron en un momento exacto del pasado.
                    <Box sx={{ padding: '10px', backgroundColor: '#e0dffd', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"They met in 1995". (Se conocieron en 1995).
                    </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 6. Acciones alrededor del presente */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="6. Situaciones temporales en el pasado"
                secondary={
                  <>
                    Describe situaciones o estados que eran verdaderos en el pasado, pero que ya no lo son.
                    <Box sx={{ padding: '10px', backgroundColor: '#e0dffd', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"He lived in New York for five years". (Vivió en Nueva York durante cinco años).
                    </Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
          </List>

          {/* Sección de explicación de la conjugación */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
              Conjugación del Past Simple            
            </Typography>
            <Typography>
            La conjugación de un verbo en past simple es la misma para todas las personas. Los verbos regulares forman el pasado añadiendo <strong>-ed</strong> al infinitivo. Sin embargo, algunos verbos son irregulares.
            </Typography>
            <Typography>
            Las oraciones negativas e interrogativas se forman con el verbo auxiliar <strong>do</strong>, que en pasado toma la forma did. En estos casos, el verbo principal se mantiene en infinitivo, siendo el verbo auxiliar <strong>did</strong> el único que se conjuga en pasado.            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/PastSimple2.png"  
                alt="Ejemplo" 
                style={{ maxWidth: '60%', height: 'auto' }} 
              />
                <Typography>
                La contracción <strong>didn’t</strong> se usa en oraciones negativas en pasado simple.
                </Typography>

                <Box>   
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <Box>
        <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'justify', marginTop: '60px'}}>
          Ejemplos:
        </Typography>
        <Typography component='div' paragraph>
          <ul style={{ textAlign: 'justify', marginLeft: '60px' }}>
            <li>I didn’t go to the concert.</li>
            <li>Did she call you last night?</li>
          </ul>
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={6}>
      <img 
        src="/images/PastSimple3.png"  
        style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
      />
    </Grid>
  </Grid>
        </Box>
            </Box>
          </Box>

 {/* Sección de reglas de ortografía */}
<Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
  <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
    Reglas de ortografía en el Past Simple
  </Typography>
  
  <List>
    {/* Primera regla: Añadir "-d" si el verbo termina en "-e" */}
    <ListItem>
      <ListItemText
        primary="1. Cuando el verbo acaba en '-e', se añade simplemente una '-d'."
        secondary={
          <>
            <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
              <Typography>"bake → baked"</Typography>
            </Box>
          </>
        }
      />
    </ListItem>

    {/* Segunda regla: Duplicar la consonante final después de una vocal corta */}
    <Divider sx={{ margin: '20px 0' }} />
    <ListItem>
      <ListItemText
        primary="2. Después de una vocal corta, se dobla la consonante final."
        secondary={
          <>
            <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
              <Typography>"plan → planned"</Typography>
            </Box>
          </>
        }
      />
    </ListItem>

    {/* Tercera regla: Duplicar la 'l' final en inglés británico */}
    <Divider sx={{ margin: '20px 0' }} />
    <ListItem>
      <ListItemText
        primary="3. En inglés británico, la '-l' final siempre se dobla tras una vocal, pero no en inglés americano."
        secondary={
          <>
            <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
              <Typography>"cancel → cancelled (UK), canceled (US)"</Typography>
            </Box>
          </>
        }
      />
    </ListItem>

    {/* Cuarta regla: Cambiar "-y" por "-i" antes de "-ed" */}
    <Divider sx={{ margin: '20px 0' }} />
    <ListItem>
      <ListItemText
        primary="4. Si el verbo termina en '-y', esta se transforma en '-i' antes de añadir '-ed'."
        secondary={
          <>
            <Box sx={{ padding: '10px', backgroundColor: '#D4CEF0', borderRadius: '10px', marginTop: '10px' }}>
              <Typography>"carry → carried"</Typography>
            </Box>
          </>
        }
      />
    </ListItem>
  </List>
</Box>


        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
          El verbo "be"          
          </Typography>
        </Box>
        <Box>
            <img 
                  src="/images/Pastsimple4.png"  
                  alt="Ejemplo contractions" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />
        </Box>
        <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
          Contractions / Contracciones           
          </Typography>
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography paragraph>
          Las contracciones en pasado simple consisten en la combinación de los verbos auxiliares <strong>be</strong> (was/were) y <strong>do</strong> (did) con la partícula negativa not.          
          </Typography>  
          </Box>
          <Box>
            <img 
                  src="/images/Pastsimple5.png"  
                  alt="Ejemplo contractions" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />
        </Box>  
        </Box>
      </Box>
       
    </>
  );
}

export default PastSimpleInfo;
