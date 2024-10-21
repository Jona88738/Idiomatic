import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function FoodInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px', marginLeft: '90px' }}>
                Food
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px', marginLeft: '90px' }}>
                Alimentos
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/src/images/vectorchef.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto', marginTop: '-48px' }} 
                alt="Vector de comida" 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Comida y esenciales de la cocina
          </Typography>
          <Box sx={{ backgroundColor: '#BEBEEA', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
              Cuando hablamos de comida, existen muchos aspectos que podemos cubrir, como los tipos de alimentos (frutas, verduras, carnes), las comidas del día (desayuno, almuerzo, cena), las preferencias alimenticias, y las maneras de cocinar o preparar alimentos. Este tema también te ayudará a aprender cómo pedir comida, hablar de tus gustos o preferencias, y describir platos y recetas.
            </Typography>
          </Box>

          <Typography paragraph sx={{ textAlign: 'justify' }}>
            En nuestra vida cotidiana, los alimentos y bebidas juegan un papel fundamental en nuestra salud y bienestar. Esta sección está dedicada a explorar diferentes categorías de alimentos, que incluyen:
          </Typography>
         
          <Box sx={{ p: 2 }}>
            <Grid container spacing={6} alignItems="center">
              {/* Columna para la lista de ropa */}
              <Grid item xs={12} md={7}>
                <Box sx={{ textAlign: 'center' }}>
                  <img 
                    src="/src/images/food1.png"  
                    alt="Alimento" 
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', textAlign: 'center' }} 
                  />
                </Box>
              </Grid>

              {/* Columna para la imagen alusiva */}
              <Grid item xs={12} md={5}>
                <img 
                  src="/src/images/food2.png"  
                  alt="Ropa" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '-50px' }} 
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
            Esenciales de la cocina
          </Typography>
          <Box sx={{ backgroundColor: '#BEBEEA', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            La cocina es un arte que combina creatividad y técnica, y entender los esenciales de la cocina es fundamental para cualquier amante de la gastronomía. En esta sección, exploraremos los utensilios, ingredientes y técnicas básicas que te ayudarán a preparar deliciosos platillos con confianza y habilidad.
            </Typography>
        </Box>
 
            <Box  sx={{textAlign: 'center' }}>
            <img 
                  src="/src/images/food4.png"  
                  alt="Ropa" 
                  style={{ width: '50%', height: 'auto', borderRadius: '8px', marginTop: '-20px' , textAlign: 'center'}} 
                />
            </Box>    
          </Box>

          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'justify'}}>
            Contenedores de comida
          </Typography>
          <Box sx={{  padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            Los contenedores de comida son aliados indispensables en la cocina, facilitando no solo la preparación de tus platillos favoritos, sino también su almacenamiento y transporte. En esta sección, exploraremos los diferentes tipos de contenedores disponibles, desde recipientes de plástico y vidrio hasta opciones herméticas y biodegradables, cada uno diseñado para satisfacer diversas necesidades.            </Typography>
        </Box>
 
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
     

      <TableContainer component={Paper} sx={{ maxWidth: '800px', margin: 'auto' , backgroundColor: 'BEBEEA', textAlign: 'center'}}>
        <Table>
          <TableHead>
            <TableRow sx={{ fontSize: '18px', backgroundColor: 'BEBEEA'}}>
              <TableCell sx={{ fontWeight: 'bold' , textAlign: 'center', backgroundColor: 'BEBEEA'}}>Contenedor</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: 'BEBEEA' }}>Ejemplos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Bolsas</TableCell>
              <TableCell>Azúcar, Harina</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cajas</TableCell>
              <TableCell>Cereal, Galletas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cartones</TableCell>
              <TableCell>Huevos, Leche</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Latas</TableCell>
              <TableCell>Sopa, Frijoles</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Frascos</TableCell>
              <TableCell>Mermelada, Mostaza</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Paquete</TableCell>
              <TableCell>Hamburguesas, Fideos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trozo</TableCell>
              <TableCell>Tostadas, Pescado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Botella</TableCell>
              <TableCell>Vino, Cerveza</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Barra</TableCell>
              <TableCell>Jabón, Chocolate</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

    <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center', marginTop: '30px'}}>
            Lista de platillos
          </Typography>
          <Box sx={{  padding: '20px', marginBottom: '20px', textAlign: 'center' }}>
          <img 
                  src="/src/images/food5.png"  
                  alt="Ropa" 
                  style={{ width: '50%', height: 'auto', borderRadius: '8px', marginTop: '-20px' , textAlign: 'center'}} 
                />
      </Box>
    </Box>    
          </Box>
        
          

        </Box>
      </Box>
    </>
  );
}

export default FoodInfo;
