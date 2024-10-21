import { Box, Typography, Grid, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function TitlesInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px', marginLeft: '40px' }}>
                Titles and marital status              
                </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px', marginLeft: '130px' }}>
                Titulos y estado marital
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/src/images/vectormarital.png" 
                style={{ width: '80%', borderRadius: '10px', height: 'auto', marginTop: '-48px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Dirigirse a la gente con respeto
          </Typography>
          <Box sx={{ backgroundColor: '#D4CEF0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            Bienvenida/o a una nueva lección! En cualquier idioma, es fundamental saber cómo dirigirse a las personas de manera respetuosa, especialmente en contextos formales y profesionales. Los <strong>títulos de género </strong>como Mr., Mrs., Miss, y Ms. son comunes en las interacciones cotidianas y ayudan a demostrar cortesía. Además, el <strong>estado civil</strong> de una persona (si es soltera, casada, divorciada, etc.) es otro aspecto importante que puede surgir en conversaciones o formularios.
            </Typography>
            <Typography paragraph>
            En esta lección, aprenderemos a usar estos títulos de manera correcta y cómo identificar y referirnos a los diferentes estados civiles. Esta información te permitirá comunicarte con confianza y profesionalismo en una variedad de situaciones sociales y laborales.
            </Typography>
            
          </Box>
          
          <Grid container spacing={2}>
          <Grid item xs={8}>
  <Box sx={{ backgroundColor: '#8585A7', borderRadius: '10px', padding: '20px', marginBottom: '20px', marginTop: '70px' }}>
    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
      Formal titles
    </Typography>
    
    <Typography paragraph>
      <strong>Mr.</strong> (abreviatura de Mister)
    </Typography>
    <Typography paragraph>
      Uso: Para referirse a cualquier hombre, sin importar su estado civil.
    </Typography>
    <Typography paragraph>
      Ejemplo: Mr. John Smith → Señor John Smith.
    </Typography>

    <Typography paragraph>
      <strong>Mrs.</strong> (abreviatura de Mistress, pero ya no se usa esa palabra)
    </Typography>
    <Typography paragraph>
      Uso: Se usa para mujeres casadas.
    </Typography>
    <Typography paragraph>
      Ejemplo: Mrs. Jane Johnson → Señora Jane Johnson (casada).
    </Typography>

    <Typography paragraph>
      <strong>Miss</strong>
    </Typography>
    <Typography paragraph>
      Uso: Se utiliza para referirse a mujeres solteras.
    </Typography>
    <Typography paragraph>
      Ejemplo: Miss Emily Brown → Señorita Emily Brown (soltera).
    </Typography>

    <Typography paragraph>
      <strong>Ms.</strong> (pronunciado miz)
    </Typography>
    <Typography paragraph>
      Uso: Es un título neutral que puede usarse tanto para mujeres casadas como solteras. Este título se popularizó porque no hace distinción sobre el estado civil de la mujer.
    </Typography>
    <Typography paragraph>
      Ejemplo: Ms. Susan Davis → Señora o señorita Susan Davis (estado civil desconocido o irrelevante).
    </Typography>
  </Box>
</Grid>

            <Grid item xs={4}>
              <img 
                src="/src/images/ftitles1.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' , marginTop: '-20px'}} 
              />
              <img 
                src="/src/images/ftitles2.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' , marginTop: '-20px'}} 
              />
            </Grid>
          </Grid>
          <Box>


            {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        {/* Marital status*/}
        <Grid container spacing={2}>
        <Grid item xs={8}>
  <Box sx={{ backgroundColor: '#8585A7', borderRadius: '10px', padding: '20px', marginBottom: '20px', marginTop: '70px' }}>
    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
      Estados Civiles
    </Typography>

    <Typography paragraph>
      Los estados civiles indican la situación sentimental o legal de una persona en relación con su matrimonio. Aquí tienes los términos más comunes en inglés:
    </Typography>

    <Typography paragraph>
      <strong>1. Single</strong> – Soltero/a
    </Typography>
    <Typography paragraph>
      Se utiliza para describir a una persona que no está casada y no tiene pareja legal.
    </Typography>
    <Typography paragraph>
      Ejemplo: I am single → Estoy soltero/a.
    </Typography>

    <Typography paragraph>
      <strong>2. Married</strong> – Casado/a
    </Typography>
    <Typography paragraph>
      Se usa para personas que están legalmente casadas.
    </Typography>
    <Typography paragraph>
      Ejemplo: She is married → Ella está casada.
    </Typography>

    <Typography paragraph>
      <strong>3. Divorced</strong> – Divorciado/a
    </Typography>
    <Typography paragraph>
      Describe a alguien que estuvo casado/a pero que ya no lo está porque se divorció legalmente.
    </Typography>
    <Typography paragraph>
      Ejemplo: He is divorced → Él está divorciado.
    </Typography>

    <Typography paragraph>
      <strong>4. Widowed</strong> – Viudo/a
    </Typography>
    <Typography paragraph>
      Este término se utiliza para alguien cuyo esposo o esposa ha fallecido.
    </Typography>
    <Typography paragraph>
      Ejemplo: She is widowed → Ella es viuda.
    </Typography>

    <Typography paragraph>
      <strong>5. Engaged</strong> – Comprometido/a
    </Typography>
    <Typography paragraph>
      Describe a una persona que ha acordado casarse pero aún no lo ha hecho.
    </Typography>
    <Typography paragraph>
      Ejemplo: They are engaged → Están comprometidos.
    </Typography>

    <Typography paragraph>
      <strong>6. Separated</strong> – Separado/a
    </Typography>
    <Typography paragraph>
      Se refiere a una persona que está separada de su pareja, pero aún no legalmente divorciada.
    </Typography>
    <Typography paragraph>
      Ejemplo: He is separated → Él está separado.
    </Typography>
  </Box>
</Grid>


            <Grid item xs={4}>
              <img 
                src="/src/images/marital1.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' , marginTop: '-20px'}} 
              />
              <img 
                src="/src/images/marital2.png"  
                style={{ width: '100%', borderRadius: '10px', height: 'auto' , marginTop: '-20px'}} 
              />
            </Grid>
          </Grid>  

  
</Box>
        </Box>
      </Box>
    </>
  );
}

export default TitlesInfo;
