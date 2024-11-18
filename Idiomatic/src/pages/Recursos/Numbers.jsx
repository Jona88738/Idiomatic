import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function NumbersInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px', marginLeft: '80px' }}>
                Numbers
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px', marginLeft: '130px' }}>
                Números
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectornumber.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto', marginTop: '-48px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          
        <Grid container spacing={2}>
    <Grid item xs={6}>
      <Box>
      <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            ¿Qué es un número?
          </Typography>
          <Box sx={{ backgroundColor: '#9797B4', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            Un número es un concepto matemático que representa una cantidad, una posición o un valor en un sistema de conteo o medida. Los números se utilizan para describir la cantidad de objetos, el orden de elementos en una secuencia o para realizar cálculos y comparaciones. 
            </Typography>
            <Typography paragraph>
            Los números son una parte esencial de nuestro día a día, ya que nos permiten comunicarnos de manera efectiva en diversas situaciones. En esta lección, nos enfocaremos en cómo contar, expresar cantidades y utilizar los números en diferentes contextos, lo que te ayudará a mejorar tu comunicación y a interactuar con más fluidez en inglés.
            </Typography>
          </Box>
      </Box>
    </Grid>
    <Grid item xs={6}>
      <img 
        src="/images/num1.png"  
        style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
      />
    </Grid>
  </Grid>

          {/* Ortografia */}
          <Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Ortografía y descripción fonética
            </Typography>
            <Typography paragraph>
            Para contar en inglés, primero debes aprender los números del 1 al 20. Una vez que aprendas la ortografía y la pronunciación de estos números, te ayudará a contar fácilmente hasta 1000. Sin embargo, aprender los primeros 20 números en cualquier idioma siempre es lo más difícil 
            </Typography>
            <Typography paragraph>
            A continuación, te daremos la ortografía y la pronunciación fonética de cada número. Presta atención a cada sonido, ya que más adelante, tendrás que unirlos para formar números más altos. ¡Así que, vamos a desglosarlo!
            </Typography>

            <Typography variant='h7' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify', marginTop: '60px' }}>
              1-20
            </Typography>
            <Typography paragraph>
            Los tonos de los números del 1 al 10 son sencillos.
            </Typography>
            <Typography paragraph>
            Sin embargo, los del 11 al 20 son más difíciles porque son tonos compuestos, lo que significa que hay varios sonidos involucrados en su pronunciación.
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/num2.png"  
                style={{ maxWidth: '50%', height: 'auto' }} 
              />
            </Box>

            <Typography variant='h7' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify' }}>
              21-99
            </Typography>
            <Typography paragraph>
            Cuando un número contiene decenas y unidades, no hagas pausa entre las dos palabras. Por ejemplo, el número 23 se pronuncia "twenty-three."            </Typography>
            
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/num3.png"  
                style={{ maxWidth: '50%', height: 'auto' }} 
              />
            </Box>
            <Typography variant='h7' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify' }}>
              100-1000
            </Typography>
            <Typography paragraph>
            Ahora, veamos cómo se pronuncian los números del 100 al 1000.
            </Typography>
            
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/num4.png"  
                style={{ maxWidth: '40%', height: 'auto' }} 
              />
            </Box>
          </Box>
        </Box>

        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        {/* Uso */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Cómo unirlo todo
          </Typography>
          <Typography paragraph>
          Veamos un ejemplo con el número <strong>trescientos veintisiete (327). </strong>  
           </Typography>
           <Typography paragraph>
           Se pronuncia 327 uniendo trescientos <strong>(three-HUN-dred)</strong> + veinte <strong>(twenty)</strong> + siete <strong>(SEH-vuhn)</strong> = trescientos veintisiete <strong>(three-HUN-dred twenty-SEH-vuhn).</strong>  
           </Typography>
           <Typography paragraph>
           Combinar números en inglés puede parecer complicado al principio, pero una vez que entiendes la estructura, y practiques un poco, se volverá más sencillo!. Por ejemplo, un número como 786 es una combinación de 700 + 80 + 6, por lo que setecientos (SEH-vuhn-HUN-dred) + ochenta (AY-tee) + seis (six).  
           </Typography>

         {/* Divider para separar secciones */}
         <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

             
                    
          {/* Sección de numeros ordinales */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
              Números ordinales           
            </Typography>
            <Typography>
            El inglés tiene números cardinales y ordinales. Los números cardinales como lo explicamos anteriormente describen cantidad <strong>(uno, dos, tres, etc.)</strong> y los números ordinales son los encargados de describir la posición o rango en orden secuencial <strong>(primero, segundo, tercero, etc.)</strong>. Más específicamente, usamos números ordinales cuando hablamos de orden o ubicación en una secuencia o serie.
            </Typography>
            <Typography>
            Usamos el sufijo <strong>-th</strong> para formar la mayoría de los números ordinales, como cuarto, quinto o décimo. Los números ordinales para uno (primero), dos (segundo) y tres (tercero) son excepciones.
            </Typography>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/num5.png"  
                alt="Ejemplo de Must" 
                style={{ maxWidth: '40%', height: 'auto' }} 
              />
            </Box>

            <Typography variant='h7' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify' }}>
            Números ordinales del 21 al 99
            </Typography>
            <Typography paragraph>
            Los números ordinales en inglés del 21 al 99 y posteriores se forman con un número cardinal para las decenas y un número ordinal para las unidades.
             </Typography>

            <Typography paragraph>
            Por ejemplo, el número ordinal para  twenty-five (25) is <strong>twenty-fifth (25th)</strong>. Es necesario usar un guión(hyphen).
            </Typography>
            
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/num6.png"  
                style={{ maxWidth: '40%', height: 'auto' }} 
              />
            </Box>

            <Typography variant='h7' paragraph sx={{ fontWeight: 'bold', textAlign: 'justify' }}>
            Números ordinales del 100 al 1000
            </Typography>
            <Typography paragraph>
            Los ordinales de los números del 100 al 1000 se forman agregando el sufijo -th a la palabra "hundred".            Entonces, ¿cómo usamos los números ordinales en inglés en la práctica? Veamos algunos ejemplos:
            </Typography>

            <List>
            <ListItem>
                I was third in the queue. / Yo estaba tercero en la fila.
            </ListItem>
            <ListItem>
                He won his fifth football game in a row. / Él ganó su quinto partido de fútbol consecutivo.
            </ListItem>
             <ListItem>
                This is my grandparents’ twentieth wedding anniversary. / Este es el vigésimo aniversario de bodas de mis abuelos.
            </ListItem>
            </List>
            <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
              <img 
                src="/images/num7.png"  
                style={{ maxWidth: '40%', height: 'auto' }} 
              />
            </Box>

          </Box>

         
        </Box>
      </Box>
    </>
  );
}

export default NumbersInfo;
