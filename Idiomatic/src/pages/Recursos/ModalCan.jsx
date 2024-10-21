import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function ModalCanInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' }}>
                Modal Verb -  Can              
                </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px' , marginLeft: '50px'}}>
                Modo verbal - Poder
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/src/images/vectorlibro.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto' , marginTop: '-48px'}} 
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
            Los verbos modales son esenciales en inglés porque nos permiten expresar acciones o situaciones junto con un verbo principal. En esta lección veremos uno de los más comunes, el verbo <strong>"can"</strong>, que se coloca antes de un verbo en su forma base (infinitivo sin "to").            </Typography>
          </Box>

          {/* Definicion */}
              <Box>
                <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Modal verb Can
                </Typography>
                <Typography paragraph>
                En español, "can" significa "poder" o "tener la habilidad de", y es uno de los verbos más frecuentes en la vida cotidiana de los hablantes de inglés.
                </Typography>
                <Typography paragraph>
                Pero,  <strong>¿cuándo usamos can?</strong> Se emplea para hablar de habilidades, solicitar permiso, hacer peticiones, expresar posibilidades o incluso para ofrecer ayuda. Este modal es compatible con cualquier sujeto, pero siempre debe estar seguido de un verbo principal. En el pasado, <strong>"can"</strong> se transforma en <strong>"could"</strong>.
                </Typography>
              </Box>
            
        </Box>

        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        {/* Uso */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
            Usos del Modal Can
          </Typography>
          
          <List>
  {/* 1. Habilidad o capacidad */}
  <ListItem>
    <ListItemText
      primary="1. Habilidad o capacidad"
      secondary={
        <>
          Se utiliza para expresar habilidades o capacidades que alguien tiene.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"She can play the piano." (Ella puede tocar el piano.)</Typography>
            <Typography>"I can swim very fast." (Yo puedo nadar muy rápido.)</Typography>
          </Box>
        </>
      }
    />
  </ListItem>

  {/* 2. Permiso */}
  <Divider sx={{ margin: '20px 0' }} />
  <ListItem>
    <ListItemText
      primary="2. Permiso"
      secondary={
        <>
          Se usa para pedir o conceder permiso para hacer algo.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"Can I go to the bathroom?" (¿Puedo ir al baño?)</Typography>
            <Typography>"You can leave early today." (Puedes irte temprano hoy.)</Typography>
          </Box>
        </>
      }
    />
  </ListItem>

  {/* 3. Posibilidad */}
  <Divider sx={{ margin: '20px 0' }} />
  <ListItem>
    <ListItemText
      primary="3. Posibilidad"
      secondary={
        <>
          Se utiliza para hablar de algo que es posible o factible.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"It can rain tomorrow." (Puede llover mañana.)</Typography>
            <Typography>"The road can be dangerous at night." (La carretera puede ser peligrosa por la noche.)</Typography>
          </Box>
        </>
      }
    />
  </ListItem>

  {/* 4. Solicitudes o sugerencias */}
  <Divider sx={{ margin: '20px 0' }} />
  <ListItem>
    <ListItemText
      primary="4. Solicitudes o sugerencias"
      secondary={
        <>
          Se usa para hacer solicitudes educadas o sugerencias.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"Can you help me with this?" (¿Puedes ayudarme con esto?)</Typography>
            <Typography>"You can try restarting the computer." (Puedes intentar reiniciar la computadora.)</Typography>
          </Box>
        </>
      }
    />
  </ListItem>

  {/* 5. Imposibilidad */}
  <Divider sx={{ margin: '20px 0' }} />
  <ListItem>
    <ListItemText
      primary="5. Imposibilidad"
      secondary={
        <>
          Se usa en negativo para hablar de algo que no es posible.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"He can't come to the party." (Él no puede venir a la fiesta.)</Typography>
            <Typography>"I can't believe it's true!" (¡No puedo creer que sea verdad!)</Typography>
          </Box>
        </>
      }
    />
  </ListItem>

  {/* 6. Prohibición */}
  <Divider sx={{ margin: '20px 0' }} />
  <ListItem>
    <ListItemText
      primary="6. Prohibición"
      secondary={
        <>
          Se usa para indicar que algo no está permitido.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"You can't park here." (No puedes estacionarte aquí.)</Typography>
            <Typography>"Students can't use their phones in class." (Los estudiantes no pueden usar sus teléfonos en clase.)</Typography>
          </Box>
        </>
      }
    />
  </ListItem>
</List>


          {/* Sección de explicación de la conjugación */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
              Conjugación de Can            
            </Typography>
            <Typography>
            El verbo modal <strong>"can"</strong> es invariable en todas las personas y tiempos. Solo tiene una forma presente, y su forma negativa es <strong>"can't"</strong> o <strong>"cannot"</strong>. Para el pasado, se usa <strong>"could"</strong>
            </Typography>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
              Presente            
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/src/images/Can1.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '60%', height: 'auto' }} 
              />
            </Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
              Pasado            
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/src/images/Can2.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '60%', height: 'auto' }} 
              />
            </Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
              Forma negativa            
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/src/images/Can3.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '60%', height: 'auto' }} 
              />
            </Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '20px' }}>
              Pasado negativo            
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/src/images/Can4.png"  
                alt="Ejemplo del Present continuous" 
                style={{ maxWidth: '60%', height: 'auto' }} 
              />
            </Box>
          </Box>

 {/* Sección de consejos */}
 <Box sx={{ padding: '10px',  marginTop: '20px' }}>
 <List>
  {/* 1. "Can" en preguntas */}
  <ListItem>
    <ListItemText
      primary="1. Uso de 'Can' en preguntas"
      secondary={
        <>
          Utiliza "can" para hacer preguntas invirtiendo el orden del sujeto y el verbo.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"Can you help me?" (¿Puedes ayudarme?)</Typography>
            <Typography>"Can she come to the party?" (¿Puede ella venir a la fiesta?)</Typography>
          </Box>
          <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
            <Typography><strong>Consejo:</strong> Usar "can" en preguntas es una forma directa y amigable de pedir permiso o hacer una solicitud.</Typography>
          </Box>
        </>
      }
    />
  </ListItem>

  {/* 2. Diferencia entre "Can" y "Be able to" */}
  <Divider sx={{ margin: '20px 0' }} />
  <ListItem>
    <ListItemText
      primary="2. Diferencia entre 'Can' y 'Be able to'"
      secondary={
        <>
          Aunque "can" es muy común para hablar de habilidades, "be able to" se usa para expresar habilidades o posibilidades en diferentes tiempos verbales.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"I will be able to visit you next week." (Podré visitarte la próxima semana.)</Typography>
            <Typography>"She was able to finish the project on time." (Ella pudo terminar el proyecto a tiempo.)</Typography>
          </Box>
          <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
            <Typography><strong>Consejo:</strong> Usa "be able to" para expresar habilidades o posibilidades en tiempos verbales donde "can" no es adecuado.</Typography>
          </Box>
        </>
      }
    />
  </ListItem>

  {/* 3. Evita usar "Can" para el futuro de posibilidad */}
  <Divider sx={{ margin: '20px 0' }} />
  <ListItem>
    <ListItemText
      primary="3. Evita usar 'Can' para el futuro de posibilidad"
      secondary={
        <>
          Aunque "can" puede expresar habilidad en el presente, no se usa para hablar de posibilidades futuras. Utiliza "will be able to" o "might" para estos casos.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"I will be able to travel next month." (Podré viajar el próximo mes.)</Typography>
            <Typography>"She might go to the party." (Ella podría ir a la fiesta.)</Typography>
          </Box>
          <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
            <Typography><strong>Consejo:</strong> Usa "will be able to" o "might" para expresar posibilidad en el futuro.</Typography>
          </Box>
        </>
      }
    />
  </ListItem>

  {/* 4. "Can" para sugerencias o ideas */}
  <Divider sx={{ margin: '20px 0' }} />
  <ListItem>
    <ListItemText
      primary="4. 'Can' para sugerencias o ideas"
      secondary={
        <>
          "Can" se puede usar para dar sugerencias o ideas de una manera amigable y no autoritaria.
          <Box sx={{ padding: '10px', backgroundColor: '#BABAE1', borderRadius: '10px', marginTop: '10px' }}>
            <Typography>"You can try calling him later." (Puedes intentar llamarlo más tarde.)</Typography>
            <Typography>"We can meet at the park." (Podemos encontrarnos en el parque.)</Typography>
          </Box>
          <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
            <Typography><strong>Consejo:</strong> Es una excelente opción para sugerir alternativas sin sonar demasiado exigente.</Typography>
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

export default ModalCanInfo;
