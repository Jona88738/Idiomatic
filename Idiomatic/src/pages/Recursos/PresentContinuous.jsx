import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';
import NavBar_Apartados from "../../components/NavBar_Apartados"

function PresentContinuousInfo() {
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
                Present Continuous
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px' , marginLeft: '80px'}}>
                Presente Continuo
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectorescribiendo.png" 
                style={{ width: '75%', borderRadius: '10px', height: 'auto' , marginTop: '-48px'}} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            ¿Qué es el Present Continuous?
          </Typography>
          <Box sx={{ backgroundColor: '#D4CEF0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
              El Present Continuous, también llamado <strong>Present Progressive</strong> o <strong>-ing form</strong>, es la forma continua del presente en inglés. Se utiliza principalmente para expresar acciones que están ocurriendo en el momento del habla o acciones temporales. También se usa para futuros cercanos y otras situaciones.
            </Typography>
          </Box>

          {/* Marcadores temporales */}
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Box>
                <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
                  Marcadores temporales en Present Continuous
                </Typography>
                <Typography paragraph>
                  En el Present Continuous, es común usar ciertos marcadores temporales que indican el momento en el que ocurre la acción. Estos son algunas expresiones temporales frecuentes:
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <img 
                src="/images/presentcontinuous1.png"  
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
            Uso del Present Continuous
          </Typography>
          
          <List>
            {/* 1. Acciones en este momento */}
            <ListItem>
              <ListItemText
                primary= "1. Acciones que están ocurriendo en este momento"
                secondary={
                  <>
                    Se utiliza para describir acciones que están sucediendo en el momento de hablar.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFF7E2', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"I am watching TV right now." (Estoy viendo la televisión ahora mismo.)</Typography>
                      <Typography>"She is cooking dinner at the moment." (Ella está cocinando la cena en este momento.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 2. Acciones temporales */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="2. Acciones temporales o en progreso"
                secondary={
                  <>
                    Describe situaciones o acciones que están ocurriendo en un periodo de tiempo temporal.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFF7E2', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"They are studying English this semester." (Ellos están estudiando inglés este semestre.)</Typography>
                      <Typography>"We are staying with friends while our house is being renovated." (Nos estamos quedando con amigos mientras renuevan nuestra casa.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 3. Planes o intenciones futuras */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="3. Planes o intenciones futuras"
                secondary={
                  <>
                    Se usa para hablar de planes futuros ya confirmados.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFF7E2', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"I am meeting my boss tomorrow." (Voy a reunirme con mi jefe mañana.)</Typography>
                      <Typography>"We are traveling to Japan next month." (Nosotros vamos a viajar a Japón el próximo mes.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 4. Acciones repetitivas */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="4. Acciones repetitivas con adverbios como 'always'"
                secondary={
                  <>
                    Este uso refleja una acción que se repite frecuentemente, a menudo con un tono de frustración.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFF7E2', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"He is always leaving his things everywhere!" (¡Él siempre deja sus cosas por todas partes!)</Typography>
                      <Typography>"She is always talking during the meetings." (Ella siempre está hablando durante las reuniones.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 5. Cambios o desarrollos */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="5. Cambios o desarrollos"
                secondary={
                  <>
                    Describe situaciones que están cambiando con el tiempo.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFF7E2', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"The weather is getting colder." (El clima se está poniendo más frío.)</Typography>
                      <Typography>"Technology is advancing rapidly." (La tecnología está avanzando rápidamente.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 6. Acciones alrededor del presente */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="6. Acciones que ocurren alrededor del presente"
                secondary={
                  <>
                    No están sucediendo exactamente en este momento, pero ocurren en un periodo cercano.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFF7E2', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"I am reading an interesting book these days." (Estoy leyendo un libro interesante estos días.)</Typography>
                      <Typography>"She is working on a big project this month." (Ella está trabajando en un gran proyecto este mes.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
          </List>

          {/* Sección de explicación de la conjugación */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
              Conjugación del Present Continuous            
            </Typography>
            <Typography>
              Para conjugar un verbo en present continuous, usamos el verbo auxiliar "be" y el verbo principal en gerundio (añadiendo "-ing" al infinitivo).            
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/presentcontinuous2.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '60%', height: 'auto' }} 
              />
            </Box>
          </Box>

 {/* Sección de reglas de ortografía */}
 <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
            Reglas de ortografía en el Present Continuous
          </Typography>
          
          {/* Primera regla: Eliminar la "e" final */}
          <List>
            <ListItem>
              <ListItemText
                primary="1. Eliminar la '-e' final si el verbo termina en '-e', excepto en los casos de '-ee', '-oe', o '-ye'."
                secondary={
                  <>
                    <Box sx={{ padding: '10px', backgroundColor: '#F1EDFF', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"drive → driving"</Typography>
                      <Typography>"agree → agreeing" (excepción)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* Segunda regla: Duplicar la consonante final */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="2. Duplicar la consonante final cuando una vocal corta precede a una consonante final."
                secondary={
                  <>
                    <Box sx={{ padding: '10px', backgroundColor: '#F1EDFF', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"sit → sitting"</Typography>
                      <Typography>"fix → fixing" (excepción)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* Tercera regla: Duplicar la 'l' final en inglés británico */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="3. En inglés británico, se duplica la 'l' final tras una vocal. No ocurre en inglés estadounidense."
                secondary={
                  <>
                    <Box sx={{ padding: '10px', backgroundColor: '#F1EDFF', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"travel → travelling (UK), traveling (US)"</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* Cuarta regla: Cambiar "-ie" por "y" */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="4. Los verbos que terminan en '-ie' reemplazan estas vocales por una 'y' antes de añadir '-ing'."
                secondary={
                  <>
                    <Box sx={{ padding: '10px', backgroundColor: '#F1EDFF', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"die → dying"</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
            Contractions / Contracciones
          </Typography>
          <Typography paragraph>
            En situaciones informales, es común usar contracciones en vez de las formas completas, sobre todo en la lengua hablada.            </Typography>
        </Box>
        <Box>
            <img 
                  src="/images/presentcontinuous3.png"  
                  alt="Ejemplo contractions" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />
        </Box>


        </Box>
      </Box>
       
    </>
  );
}

export default PresentContinuousInfo;
