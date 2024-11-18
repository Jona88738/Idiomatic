import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function ModalMustInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' , marginLeft: '90px'}}>
                Modal Verb - Must
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px' }}>
                Modo verbal - Debe (obligación o deducción)
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectorlibro.png" 
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
          <Box sx={{ backgroundColor: '#FAD7E0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
              Los verbos modales son fundamentales en inglés porque nos permiten expresar acciones, obligaciones, deducciones, y más. En este recurso veremos el uso de <strong>"must"</strong>, que se utiliza para hablar de obligación o de algo que creemos que es cierto.
            </Typography>
          </Box>

          {/* Definición */}
          <Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Modal verb Must
            </Typography>
            <Typography paragraph>
              En español, "must" puede traducirse como "deber" o "tener que". Es comúnmente usado para expresar obligación fuerte o para hacer deducciones basadas en evidencia.
            </Typography>
            <Typography paragraph>
              <strong>¿Cuándo usamos must?</strong> Usamos "must" para dar instrucciones firmes o para expresar algo que creemos firmemente. Es más fuerte que "should" y más formal que "have to". 
            </Typography>
          </Box>
        </Box>

        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        {/* Uso */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
            Usos del Modal Must
          </Typography>
          
          <List>
            {/* 1. Obligación */}
            <ListItem>
              <ListItemText
                primary="1. Obligación"
                secondary={
                  <>
                    "Must" se utiliza principalmente para expresar obligaciones fuertes o necesarias.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFDC79', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"You must wear a helmet." (Debes llevar un casco.)</Typography>
                      <Typography>"Students must submit their assignments on time." (Los estudiantes deben entregar sus tareas a tiempo.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 2. Deducción lógica */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="2. Deducción lógica"
                secondary={
                  <>
                    "Must" se utiliza también para hacer deducciones lógicas basadas en evidencia.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFDC79', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"She must be the new manager." (Debe ser la nueva gerente.)</Typography>
                      <Typography>"They must have left already." (Deben haber salido ya.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>

            {/* 3. Prohibición */}
            <Divider sx={{ margin: '20px 0' }} />
            <ListItem>
              <ListItemText
                primary="3. Prohibición"
                secondary={
                  <>
                    "Must not" se usa para expresar prohibiciones.
                    <Box sx={{ padding: '10px', backgroundColor: '#FFDC79', borderRadius: '10px', marginTop: '10px' }}>
                      <Typography>"You must not use your phone during the exam." (No debes usar el teléfono durante el examen.)</Typography>
                      <Typography>"Visitors must not park here." (Los visitantes no deben estacionar aquí.)</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
          </List>

          {/* Sección de explicación de la conjugación */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
              Conjugación de Must            
            </Typography>
            <Typography>
              El verbo modal <strong>"must"</strong> no cambia con los sujetos, y su forma negativa es <strong>"must not" o "mustn't"</strong>. "Must" se usa principalmente en presente, y para hablar de obligaciones pasadas se puede usar "had to".
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/Must.png"  
                alt="Ejemplo de Must" 
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
              {/* 1. Uso de "Must" para obligación */}
              <ListItem>
                <ListItemText
                  primary="1. Uso de 'Must' para obligación"
                  secondary={
                    <>
                      Utiliza "must" para expresar obligaciones firmes, especialmente cuando el hablante tiene autoridad.
                      <Box sx={{ padding: '10px', backgroundColor: '#FFDC79', borderRadius: '10px', marginTop: '10px' }}>
                        <Typography>"You must complete this task by tomorrow." (Debes completar esta tarea para mañana.)</Typography>
                      </Box>
                      <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
                        <Typography><strong>Consejo:</strong> "Must" implica una obligación fuerte, pero más formal que "have to".</Typography>
                      </Box>
                    </>
                  }
                />
              </ListItem>

              {/* 2. Diferencia entre "Must" y "Have to" */}
              <Divider sx={{ margin: '20px 0' }} />
              <ListItem>
                <ListItemText
                  primary="2. Diferencia entre 'Must' y 'Have to'"
                  secondary={
                    <>
                      Aunque ambos expresan obligación, "must" es más formal y se usa cuando el hablante da la orden, mientras que "have to" se usa para obligaciones externas.
                      <Box sx={{ padding: '10px', backgroundColor: '#FFDC79', borderRadius: '10px', marginTop: '10px' }}>
                        <Typography>"I must finish this report." (Tengo que terminar este informe.)</Typography>
                        <Typography>"You have to follow the company rules." (Tienes que seguir las reglas de la empresa.)</Typography>
                      </Box>
                      <Box sx={{ padding: '10px', backgroundColor: '#C8DFC0', borderRadius: '10px', marginTop: '10px' }}>
                        <Typography><strong>Consejo:</strong> Usa "must" cuando el hablante tiene autoridad directa sobre la situación.</Typography>
                      </Box>
                    </>
                  }
                />
              </ListItem>

              {/* 3. Uso de "Must" para deducciones lógicas */}
              <Divider sx={{ margin: '20px 0' }} />
              <ListItem>
                <ListItemText
                  primary="3. Uso de 'Must' para deducciones lógicas"
                  secondary={
                    <>
                      Usa "must" para hacer deducciones firmes basadas en evidencia clara.
                      <Box sx={{ padding: '10px', backgroundColor: '#FFDC79', borderRadius: '10px', marginTop: '10px' }}>
                        <Typography>"She must be tired after such a long day." (Debe estar cansada después de un día tan largo.)</Typography>
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

export default ModalMustInfo;
