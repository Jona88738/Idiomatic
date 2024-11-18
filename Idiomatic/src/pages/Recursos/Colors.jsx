import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function ColorsInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' , marginLeft: '80px'}}>
                Colors
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px' , marginLeft: '120px'}}>
                Colores
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectorcolor.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto', marginTop: '-48px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Hablemos sobre los colores
          </Typography>
          </Box>

          <Box sx={{ p: 2 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Columna para la lista de ropa */}
        <Grid item xs={12} md={6}>
        <Box sx={{ backgroundColor: '#FAD7E0', borderRadius: '10px', padding: '20px', marginBottom: '20px' , textAlign: 'justify'}}>
            <Typography paragraph>
            Este tema es una parte fundamental del vocabulario en cualquier idioma, ya que nos permiten describir el mundo que nos rodea con más precisión. Desde la ropa que llevamos hasta los objetos cotidianos, los colores juegan un papel importante en cómo nos expresamos y entendemos a los demás.
            </Typography>
        </Box>
        </Grid>
        
        {/* Columna para la imagen alusiva */}
        <Grid item xs={12} md={6}>
          <img 
                src="/images/color1.png"  
                alt="Ropa" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' , marginTop: '-20px'}} 
          />
        </Grid>
      </Grid>
</Box>
      
      <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography paragraph sx={{ }}>
          En esta lección, aprenderemos los nombres de los colores más comunes en inglés, cómo usarlos para describir cosas y cómo combinarlos con otros elementos del lenguaje para dar descripciones claras y detalladas. Dominar los colores te ayudará a mejorar tus habilidades comunicativas en diversas situaciones cotidianas, como ir de compras, hablar sobre tus preferencias o describir personas y lugares.
          </Typography>

          <Box sx={{ p: 2 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Columna para la lista de ropa */}
        <Grid item xs={12} md={7}>
        <img 
                src="/images/color2.png"  
                alt="Ropa" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px'}} 
          />
        </Grid>
        
        {/* Columna para la imagen alusiva */}
        <Grid item xs={12} md={5}>
          <Box sx={{ backgroundColor: '#FAD7E0', borderRadius: '10px', padding: '20px', marginBottom: '20px' , textAlign: 'justify'}}>
            <Typography paragraph>
            La gama de colores es prácticamente infinita, pero se basa en una estructura fundamental compuesta por colores primarios como el <strong>rojo, amarillo y azul</strong>, y colores secundarios, que surgen de la combinación de los primeros, como el <strong>verde, naranja y violeta.</strong>
            </Typography>
        </Box>
        </Grid>
      </Grid>
</Box>

        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
          <Typography paragraph sx={{ }}>
          Ahora que comprendemos la diferencia entre colores primarios y secundarios, es momento de aprender cómo se dicen en inglés
          </Typography>
        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
        <img 
                src="/images/color3.png"  
                alt="Ropa" 
            style={{ width: '60%', height: 'auto', borderRadius: '8px', textAlign: 'center'}} 
          />
        </Box>
</Box>

          </Box>

      

         
        </Box>
    </>
  );
}

export default ColorsInfo;
