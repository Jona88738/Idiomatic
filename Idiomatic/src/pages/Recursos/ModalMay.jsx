import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function ModalMayInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px', marginLeft: '100px' }}>
                Modal Verb - May              
                </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px' }}>
                Modo verbal - Puede (permiso o posibilidad)
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/src/images/vectorlibro.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto', marginTop: '-48px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            ¿Qué es un modal verb?
          </Typography>
          <Box sx={{ backgroundColor: '#D4CEF0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
              Los verbos modales son fundamentales en inglés porque nos permiten expresar acciones, permisos, posibilidades y más. En este recurso veremos el uso de <strong>"may"</strong>, que se utiliza para hablar de permiso o de algo que es posible.
            </Typography>
          </Box>

          {/* Definicion */}
          <Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Modal verb May
            </Typography>
            <Typography paragraph>
              En español, "may" puede traducirse como "puede que" o "tener permiso para". Es comúnmente usado para solicitar o dar permiso y para expresar posibilidad, aunque es más formal que "can".
            </Typography>
            <Typography paragraph>
              <strong>¿Cuándo usamos may?</strong> Usamos "may" principalmente en situaciones formales para pedir permiso y para hablar de algo que es posible en el presente o futuro. Aunque es similar a "can", es más educado y menos directo. 
            </Typography>
          </Box>
        </Box>

        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        {/* Uso */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
            Usos del Modal May
          </Typography>
          
          <List>
            {/* 1. Permiso */}
            <ListItem>
              <ListItemText
                primary="1. Permiso"
                secondary={
                  <>
                    "May" se usa principalmente para pedir y dar permiso en contextos formales.
                    <Box sx={{ padding: '10px', backgroundColor: '#FCC9D6', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"May I leave the room?" (¿Puedo salir del cuarto?)</Typography>
                      <Typography>"You may start the meeting now." (Puedes comenzar la reunión ahora.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 2. Posibilidad */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="2. Posibilidad"
                secondary={
                  <>
                    También se utiliza para hablar de algo que es posible, pero no seguro.
                    <Box sx={{ padding: '10px', backgroundColor: '#FCC9D6', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"It may rain later." (Puede que llueva más tarde.)</Typography>
                      <Typography>"She may not come to the party." (Puede que ella no venga a la fiesta.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 3. Ofrecimiento o sugerencia formal */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="3. Ofrecimiento o sugerencia formal"
                secondary={
                  <>
                    Se utiliza en situaciones formales para hacer sugerencias o para ofrecer algo.
                    <Box sx={{ padding: '10px', backgroundColor: '#FCC9D6', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"You may want to speak with your supervisor." (Podrías hablar con tu supervisor.)</Typography>
                      <Typography>"May I help you with that?" (¿Puedo ayudarte con eso?)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
          </List>

          {/* Sección de explicación de la conjugación */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
              Conjugación de May            
            </Typography>
            <Typography>
              El verbo modal <strong>"may"</strong> no cambia con los sujetos, y su forma negativa es <strong>"may not"</strong>. Para hablar del pasado se suele usar "might", aunque en la mayoría de los contextos modernos, "might" también se usa para el presente y futuro.
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/src/images/May.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '60%', height: 'auto' }} 
              />
            </Box>
          </Box>

          {/* Sección de consejos */}
    <Box sx={{ padding: '10px', marginTop: '20px' }}>
    <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
           Consejos de uso
    </Typography>
    <List>
    {/* 1. Uso de "May" en preguntas */}
    <ListItem>
      <ListItemText
        primary="1. Uso de 'May' en preguntas"
        secondary={
          <>
            Utiliza "may" para hacer preguntas formales sobre permiso o posibilidad.
            <Box sx={{ padding: '10px', backgroundColor: '#FCC9D6', borderRadius: '10px', marginTop: '10px' }}>
              <Typography>"May I sit here?" (¿Puedo sentarme aquí?)</Typography>
              <Typography>"May we come in?" (¿Podemos entrar?)</Typography>
            </Box>
            <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
              <Typography><strong>Consejo:</strong> Usar "may" es una forma educada y formal de pedir permiso.</Typography>
            </Box>
          </>
        }
      />
    </ListItem>

    {/* 2. Diferencia entre "May" y "Might" */}
    <Divider sx={{ margin: '20px 0' }} />
    <ListItem>
      <ListItemText
        primary="2. Diferencia entre 'May' y 'Might'"
        secondary={
          <>
            Aunque "may" y "might" expresan posibilidad, "might" sugiere una probabilidad más baja o menos formal.
            <Box sx={{ padding: '10px', backgroundColor: '#FCC9D6', borderRadius: '10px', marginTop: '10px' }}>
              <Typography>"She might not come to the party." (Puede que ella no venga a la fiesta, pero es menos probable.)</Typography>
              <Typography>"It may rain later." (Es posible que llueva más tarde.)</Typography>
            </Box>
            <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
              <Typography><strong>Consejo:</strong> Usa "may" en situaciones formales y "might" para hablar de una posibilidad menos segura.</Typography>
            </Box>
          </>
        }
      />
    </ListItem>

    {/* 3. Uso de "May" para posibilidades futuras */}
    <Divider sx={{ margin: '20px 0' }} />
    <ListItem>
      <ListItemText
        primary="3. Uso de 'May' para posibilidades futuras"
        secondary={
          <>
            Utiliza "may" para hablar de posibilidades futuras, especialmente cuando no estás seguro de lo que ocurrirá.
            <Box sx={{ padding: '10px', backgroundColor: '#FCC9D6', borderRadius: '10px', marginTop: '10px' }}>
              <Typography>"We may go to the beach next weekend." (Es posible que vayamos a la playa el próximo fin de semana.)</Typography>
              <Typography>"He may decide to join us later." (Es posible que él decida unirse más tarde.)</Typography>
            </Box>
            <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
              <Typography><strong>Consejo:</strong> Usa "may" para expresar incertidumbre en cuanto a eventos futuros.</Typography>
            </Box>
          </>
        }
      />
    </ListItem>

    {/* 4. "May" para sugerencias formales */}
    <Divider sx={{ margin: '20px 0' }} />
    <ListItem>
      <ListItemText
        primary="4. 'May' para sugerencias formales"
        secondary={
          <>
            "May" también puede usarse para hacer sugerencias o recomendaciones de manera formal.
            <Box sx={{ padding: '10px', backgroundColor: '#FCC9D6', borderRadius: '10px', marginTop: '10px' }}>
              <Typography>"You may want to consider another option." (Quizás quieras considerar otra opción.)</Typography>
              <Typography>"May I suggest we take a break?" (¿Puedo sugerir que tomemos un descanso?)</Typography>
            </Box>
            <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
              <Typography><strong>Consejo:</strong> Usar "may" para sugerencias es una manera educada y respetuosa de ofrecer alternativas.</Typography>
            </Box>
          </>
        }
      />
    </ListItem>
  </List>
</Box>

        </Box>
      </Box>
    </>
  );
}

export default ModalMayInfo;
