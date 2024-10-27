import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function ClothesInfo() {
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
                Clothes
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px' , marginLeft: '140px'}}>
                Ropa
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/src/images/vectorropa.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto', marginTop: '-48px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Hablemos sobre la ropa
          </Typography>
          <Box sx={{ backgroundColor: '#FAD7E0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            La ropa no solo cumple la función básica de protegernos del clima y otras condiciones externas, sino que también refleja aspectos de nuestra personalidad, cultura y hasta estado de ánimo. En inglés, existen muchas palabras para describir diferentes prendas de vestir, desde lo más cotidiano como camisetas y pantalones, hasta términos específicos como abrigos formales o accesorios de moda. Conocer este vocabulario no solo es útil para situaciones cotidianas, como ir de compras o describir lo que llevas puesto, sino también para explorar la forma en que la moda puede influir en nuestras interacciones diarias y en la forma en que nos expresamos ante el mundo.
            </Typography>
          </Box>

          <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
        Ropa en inglés
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Columna para la lista de ropa */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" paragraph sx={{ fontWeight: 'bold' , marginTop: '10px'}}>
            Prendas superiores
          </Typography>
          <Typography paragraph>
            <ul>
              <li>Shirt = camisa</li>
              <li>T-shirt = camiseta, remera, playera</li>
              <li>Polo shirt = camiseta polo, chomba</li>
              <li>Blouse = blusa</li>
              <li>Sweatshirt, sweater, pullover = suéter, jersey</li>
              <li>Cardigan = saco liviano de lana</li>
            </ul>
          </Typography>
          
          <Typography variant="h6" paragraph sx={{ fontWeight: 'bold' }}>
            Prendas inferiores y trajes
          </Typography>
          <Typography paragraph>
            <ul>
              <li>Dress = vestido</li>
              <li>Vest = chaleco</li>
              <li>Suit = traje</li>
              <li>Three-piece suit = traje de tres piezas</li>
            </ul>
          </Typography>
          
          <Typography variant="h6" paragraph sx={{ fontWeight: 'bold' }}>
            Abrigos
          </Typography>
          <Typography paragraph>
            <ul>
              <li>Coat = saco</li>
              <li>Raincoat = impermeable, chubasquero</li>
              <li>Waistcoat = chaleco</li>
              <li>Overcoat = sobretodo</li>
              <li>Mackintosh = abrigo de tela o lana gruesa</li>
              <li>Anorak = campera, anorak</li>
              <li>Bomber jacket = campera ajustada en la cintura</li>
            </ul>
          </Typography>
          <Typography variant="h6" paragraph sx={{ fontWeight: 'bold' }}>
            Calzado
          </Typography>
          <Typography paragraph>
            <ul>
              <li>Trainers (UK) - Sneakers (US) = zapatillas de deporte</li>
              <li>Boots = botas</li>
              <li>Wellingtons = botas</li>
              <li>Slippers = pantuflas</li>
              <li>Clogs = zuecos</li>
              <li>Shoes = zapatos</li>
              <li>Sandals = sandalias</li>
              <li>High-heeled shoes = zapatos de taco alto</li>
              <li>Flip-flops = chanclas, ojotas</li>
              <li>Espadrilles = alpargatas</li>
            </ul>
          </Typography>
          
          <Typography paragraph>
            <ul>
              <li>Sole = suela</li>
              <li> - Have your shoes soled = ponerle suela a los zapatos</li>
              <li>Heel = taco</li>
              <li> - Have your shoes heeled = ponerle taco a los zapatos</li>
              <li>Shoelaces = cordones</li>
            </ul>
          </Typography>
        </Grid>
        
        {/* Columna para la imagen alusiva */}
        <Grid item xs={12} md={6}>
          <img 
                src="/src/images/clothe.png"  
                alt="Ropa" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' , marginTop: '-50px'}} 
          />
        </Grid>
      </Grid>
      </Box>

         
        </Box>
      </Box>
    </>
  );
}

export default ClothesInfo;
