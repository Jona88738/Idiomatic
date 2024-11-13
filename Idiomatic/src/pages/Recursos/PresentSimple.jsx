import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home'; 

function PresentSimpleInfo() {
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
            backgroundColor: '#F9B0C3', 
            borderRadius: '10px', 
            padding: '30px', 
            marginBottom: '50px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
            height: '200px' 
          }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' , marginLeft: '50px'}}>
                  Simple Present
                </Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467A', marginTop: '-25px' , marginLeft: '110px'}}>
                  Presente Simple
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img 
                  src="/images/vectorleyendo.png" 
                  style={{ width: '70%', borderRadius: '10px', height: 'auto' , marginTop: '-40px'}} 
                />
              </Grid>
            </Grid>
          </Box>
  
          {/* Primera Sección */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
            <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
              ¿Qué es el Present simple?
            </Typography>
            
            {/* Resaltando la definición del Present Simple */}
            <Box sx={{ backgroundColor: '#D4CEF0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
              <Typography paragraph>
                El Present Simple es uno de los tiempos verbales más utilizados en inglés. Se emplea para hablar de acciones habituales, hechos generales, verdades universales y situaciones permanentes.
              </Typography>
              <Typography paragraph>
                A diferencia de otros tiempos, el Present Simple es sencillo de formar y de entender, ya que se enfoca en el presente, pero sin la necesidad de expresar si la acción está ocurriendo justo ahora.
              </Typography>
            </Box>

            <Typography paragraph sx={{ fontWeight: 'bold' }}>
              Se utiliza principalmente en los siguientes casos:
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <strong>Acciones habituales o rutinas:</strong> Para describir cosas que hacemos de forma regular. Ejemplo: <em>I walk to work every day.</em> (Camino al trabajo todos los días).
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <strong>Hechos generales o verdades universales:</strong> Para hablar de cosas que son siempre verdaderas. Ejemplo: <em>The sun rises in the east.</em> (El sol sale por el este).
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <strong>Situaciones permanentes:</strong> Para referirse a estados o situaciones que no cambian con frecuencia. Ejemplo: <em>She lives in New York.</em> (Ella vive en Nueva York).
                </ListItemText>
              </ListItem>
            </List>

            {/* Imagen y texto al lado */}
            <Grid container spacing={2} sx={{ marginTop: '20px', marginBottom: '20px', fontSize: '80px' }}>
              <Grid item xs={5} sx={{ textAlign: 'center' }}>
                <img 
                  src="/images/presentsimple1.png"  
                  alt="Ejemplo del Present Simple" 
                  style={{ maxWidth: '106%', height: 'auto' }} 
                />
              </Grid>
              <Grid item xs={7} sx={{backgroundColor: '#D4CEF0', borderRadius: '10px', padding:'15px'}}>
                <Typography paragraph>
                Los marcadores temporales son palabras o frases que se utilizan para situar acciones en el tiempo y proporcionar contexto temporal a las oraciones. Son herramientas esenciales en la comunicación, ya que nos ayudan a entender cuándo ocurre una acción, su duración y si se repite con regularidad.                
                </Typography>
                <Typography paragraph>
                Estos marcadores son fundamentales para formar oraciones coherentes y comprensibles, y son especialmente importantes al hablar del Present Simple, ya que este tiempo verbal se utiliza para describir acciones habituales y rutinas.

A continuación, exploraremos cómo utilizar estos marcadores en la gramática y estructura del Present Simple, permitiéndote crear oraciones más precisas y contextuales. 
                </Typography>              
              </Grid>
            </Grid>
          </Box>
  
          {/* Más información */}
          <Box sx={{ marginBottom: '20px' , textAlign: 'justify'}}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'justify', color: '#383352'}}>
          ¿Cómo se conjuga el simple present?
          </Typography>
            <Typography paragraph>
          <strong>  Para conjugar un verbo en present simple, se siguen estas reglas:</strong>
            </Typography>
         <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
            Oraciones afirmativas          
            </Typography>
            <Typography>
            Añade una -s a la 3ª persona del singular (he/she/it). Para las otras personas, el verbo se mantiene en su forma base.
            </Typography>
            <Box sx={{ marginBottom: '20px' , textAlign: 'center'}}>
            <img 
                  src="/images/presentsimple2.png"  
                  alt="Ejemplo del Present Simple" 
                  style={{ maxWidth: '50%', height: 'auto'}} 
                />
            </Box>

            {/* Reglas de la tercera persona */}
            <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                Reglas para la -s en la 3ª persona del singular:
              </Typography>
              
              {/* Lista de reglas */}
              <List>
                {/* Regla 1 */}
                <ListItem>
                  <ListItemText 
                    primary="1. Añade -es cuando el verbo termina en -o, -ch, -sh, -ss."
                    secondary={
                      <Box>
                        <Typography variant="body1" component="span" sx={{ display: 'block', marginLeft: '20px', color: '#00000' }}>
                          Ejemplos:
                        </Typography>
                        <ul>
                          <li>do → does</li>
                          <li>go → goes</li>
                        </ul>
                      </Box>
                    }
                  />
                </ListItem>
                
                {/* Regla 2 */}
                <ListItem>
                  <ListItemText 
                    primary="2. La consonante final -y se convierte en -ies."
                    secondary={
                      <Box>
                        <Typography variant="body1" component="span" sx={{ display: 'block', marginLeft: '20px' }}>
                          Ejemplo:
                        </Typography>
                        <ul>
                          <li>I study → She studies.</li>
                        </ul>
                      </Box>
                    }
                  />
                </ListItem>

                {/* Regla 3 */}
                <ListItem>
                  <ListItemText 
                    primary="3. Los verbos modales (can, may, must, etc.) no añaden -s en la 3ª persona."
                    secondary={
                      <Box>
                        <Typography variant="body1" component="span" sx={{ display: 'block', marginLeft: '20px' }}>
                          Ejemplo:
                        </Typography>
                        <ul>
                          <li>He can play the piano (no: he cans).</li>
                        </ul>
                      </Box>
                    }
                  />
                </ListItem>
              </List>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
            Oraciones negativas          
            </Typography>
            <Typography>
            Usa los auxiliares <strong>don’t / doesn’t</strong> seguidos del infinitivo para formar oraciones negativas.
            </Typography>
            <Box sx={{ marginBottom: '20px' , textAlign: 'center'}}>
            <img 
                  src="/images/presentsimple3.png"  
                  alt="Ejemplo del Present Simple" 
                  style={{ maxWidth: '60%', height: 'auto'}} 
                />
            </Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' }}>
            Oraciones interrogativas          
            </Typography>
            <Typography>
            Para preguntas, usa los auxiliares do / does antes del sujeto.
            </Typography>
            <Box sx={{ marginBottom: '20px' , textAlign: 'center'}}>
            <img 
                  src="/images/presentsimple4.png"  
                  alt="Ejemplo del Present Simple" 
                  style={{ maxWidth: '60%', height: 'auto'}} 
                />
                
            {/* línea de separación */}
            <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '1px' }} />
            </Box>
            
        {/*segunda parte */}    
        <Box sx={{ marginBottom: '20px' , textAlign: 'justify'}}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'justify', color: '#383352'}}>
          ¿Cómo se conjuga el verbo "be" en el simple present?          
          </Typography>
            <Typography paragraph>
            El verbo be es completamente irregular. A continuación se muestra la forma de realizar las conjugaciones
          <strong>  afirmativas y negativas:</strong>
            </Typography>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
                Afirmativas          
                </Typography>
            <Box sx={{ marginBottom: '10px' , textAlign: 'center'}}>
            <img 
                  src="/images/presentsimple5.png"  
                  alt="Ejemplo del Present Simple be" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px'}} 
                />
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
                Negativas          
                </Typography>
            <img 
                  src="/images/presentsimple6.png"  
                  alt="Ejemplo del Present Simple be" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px'}} 
                />
            <Box sx={{ marginBottom: '10px' , textAlign: 'justify'}}>    
             <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'justify', color: '#383352'}}>
                Oraciones interrogativas usando "be"          
                </Typography>
            <Typography paragraph>
                El verbo <strong> be </strong>se coloca al inicio de la pregunta.
            </Typography>              
            </Box>
            <img 
                  src="/images/presentsimple7.png"  
                  alt="Ejemplo del Present Simple be" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />
            {/* línea de separación */}
            <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '1px' }} />

            </Box>      
            </Box>
        
          {/*tercera parte */}    
          <Box sx={{ marginBottom: '20px' , textAlign: 'justify'}}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'justify', color: '#383352'}}>
          El verbo "have" en present simple            
          </Typography>
            <Typography paragraph>
            El verbo  <strong> have</strong> también es irregular en la 3ª persona del singular:           
            </Typography>
            <Box sx={{ marginBottom: '10px' , textAlign: 'center'}}>
            <img 
                  src="/images/presentsimple8.png"  
                  alt="Ejemplo del Present Simple havegot" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px'}} 
                />
                    {/* línea de separación */}
            <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '1px' }} />
            </Box> 
            </Box>   

          {/*cuarta parte */}    
        <Box sx={{ marginBottom: '20px' , textAlign: 'justify'}}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'justify', color: '#383352'}}>
            "Have got" en simple present          
            </Typography>
            <Typography paragraph>
            Esta es una forma informal de usar 
            <strong> have</strong>
            </Typography>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
                Afirmativas          
                </Typography>
            <Box sx={{ marginBottom: '10px' , textAlign: 'center'}}>
            <img 
                  src="/images/presentsimple9.png"  
                  alt="Ejemplo del Present Simple havegot" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px'}} 
                />
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
                Negativas          
                </Typography>
            <img 
                  src="/images/presentsimple10.png"  
                  alt="Ejemplo del Present Simple be" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px'}} 
                />
            <Box sx={{ marginBottom: '10px' , textAlign: 'justify'}}>    
             <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'justify', color: '#383352'}}>
                Oraciones interrogativas usando "have got"          
                </Typography>             
            </Box>
            <img 
                  src="/images/presentsimple11.png"  
                  alt="Ejemplo del Present Simple be" 
                  style={{ maxWidth: '60%', height: 'auto', marginTop: '-20px', textAlign: 'center'}} 
                />

            </Box>      
            </Box>



            </Box>
          </Box>
        </Box>
      </>
    );
}

export default PresentSimpleInfo;
