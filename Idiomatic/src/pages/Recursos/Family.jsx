import { Box, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function FamilyInfo() {
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
          backgroundColor: '#BDB2F0', 
          borderRadius: '10px', 
          padding: '30px', 
          marginBottom: '50px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          height: '200px' 
        }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' , marginLeft: '80px'}}>
                Family members
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#BA68C8', marginTop: '-25px' , marginLeft: '100px'}}>
                Miembros de la familia
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectorfamily.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto', marginTop: '-48px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Acerca de la familia
          </Typography>
          <Box sx={{ backgroundColor: '#FFDC79', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            Aprender los términos para los miembros de la familia es esencial para poder hablar sobre nuestras relaciones y el entorno familiar en inglés. Estos términos te ayudarán a describir a las personas cercanas a ti y entender conversaciones sobre la familia en diversas situaciones cotidianas.
            </Typography>
            <Typography paragraph>
            En esta lección, aprenderás a identificar y utilizar los vocablos más comunes relacionados con la familia. Desde describir a tus padres, hermanos, abuelos, hasta los miembros más lejanos de la familia, esta lista de vocabulario te será de gran utilidad en las conversaciones diarias y cuando quieras hablar de tu vida personal.
            </Typography>
          </Box>

          {/* familia inmediata */}
          <Box>
            <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Familia inmediata
            </Typography>
            <Typography paragraph sx={{  textAlign: 'center' }}>
            La familia inmediata se refiere al grupo de parientes más cercanos a una persona.
            </Typography>
           
            <Grid container spacing={2}>
            <Grid item xs={8}>
            <img 
                src="/images/family3.png" 
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }} 
              />
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/family1.png" 
                style={{ width: '70%', borderRadius: '10px', height: 'auto'}} 
              />
            </Grid>
          </Grid>
          <Typography paragraph sx={{ textAlign: 'justify', padding: '20px' , backgroundColor: '#FFDC79', borderRadius: '10px', padding: '20px'}}>
  Antes de explorar los términos familiares específicos en inglés, es útil entender cómo se estructuran las relaciones familiares básicas y cómo estos términos varían según el género y las circunstancias. La familia inmediata incluye a los padres, hijos, hermanos y cónyuges, con roles que cambian dependiendo del sexo y el estado civil. A continuación, veremos algunos ejemplos para aclarar mejor cómo se utilizan estas palabras en inglés y su traducción al español.
</Typography>

<Grid container spacing={2}>
  <Grid item xs={8}>
    <Typography paragraph sx={{ textAlign: 'justify' }}>
      <b>When you have children, you are a parent.</b> <br/>
      Cuando tienes hijos, eres un padre o madre.
    </Typography>
    
    <Typography paragraph sx={{ textAlign: 'justify' }}>
      <b>If you are a male parent, you are a father.</b> <br/>
      Si eres un padre de sexo masculino, eres un padre.
    </Typography>
    
    <Typography paragraph sx={{ textAlign: 'justify' }}>
      <b>If you are a female parent, you are a mother.</b> <br/>
      Si eres una madre de sexo femenino, eres una madre.
    </Typography>

    <Typography paragraph sx={{ textAlign: 'justify' }}>
      <b>If one of your children is a boy, he is your son.</b> <br/>
      Si uno de tus hijos es un niño, él es tu hijo.
    </Typography>

    <Typography paragraph sx={{ textAlign: 'justify' }}>
      <b>If one of your children is a girl, she is your daughter.</b> <br/>
      Si uno de tus hijos es una niña, ella es tu hija.
    </Typography>

    <Typography paragraph sx={{ textAlign: 'justify' }}>
      <b>When a couple gets married, the man is the husband, and the woman is his wife.</b> <br/>
      Cuando una pareja se casa, el hombre es el esposo y la mujer es su esposa.
    </Typography>

    <Typography paragraph sx={{ textAlign: 'justify' }}>
      <b>A brother and sister both have the same parents.</b> <br/>
      Un hermano y una hermana tienen los mismos padres.
    </Typography>

    <Typography paragraph sx={{ textAlign: 'justify' }}>
      <b>One collective word to describe brothers and sisters is siblings.</b> <br/>
      Una palabra colectiva para describir a los hermanos y hermanas es <i>siblings</i> (hermanos/as). Sin embargo, esta palabra se usa normalmente solo en inglés escrito, no en conversaciones orales.
    </Typography>
  </Grid>

  <Grid item xs={4}>
    <img 
      src="/images/family2.png" 
      style={{ width: '80%', borderRadius: '10px', height: 'auto' }} 
    />
  </Grid>
</Grid>
          </Box>
        </Box>

        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        {/* diferentes generaciones */}
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant='h6' paragraph sx={{ fontWeight: 'bold' , textAlign: 'center'}}>
            Diferentes generaciones
          </Typography>
          <Typography paragraph sx={{ textAlign: 'justify', padding: '20px' }}>
             En la estructura familiar, los términos en inglés para referirse a diferentes generaciones varían según el género y la relación específica con los descendientes. Desde los antepasados hasta los descendientes, es importante conocer estas palabras para hablar de nuestra historia familiar o de nuestras generaciones futuras. A continuación, te mostramos los términos que describen a cada generación en inglés, tanto en su forma masculina como femenina.
        </Typography>
        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
        <img 
      src="/images/family4.png" 
      style={{ width: '70%', borderRadius: '10px', height: 'auto', textAlign: 'center' }} 
        />
        </Box>      

          {/* Otra familia */}
          <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
  <Typography variant='h6' paragraph sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
    Familiares y familia extendida
  </Typography>

  <Box sx={{ backgroundColor: '#E8E3FE', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
    <Typography variant='body1' paragraph >
      <strong>Grandparents (Abuelos):</strong>
      <ul>
        <li>Grandfather (Abuelo): el padre de tu padre/madre</li>
        <li>Grandmother (Abuela): la madre de tu padre/madre</li>
        <li>Grandchildren (Nietos): los hijos de tus hijos</li>
        <li>Grandson (Nieto): el hijo de uno de tus hijos</li>
        <li>Granddaughter (Nieta): la hija de uno de tus hijos</li>
        <li>Great Grandfather (Bisabuelo): el padre de tu abuelo/abuela</li>
        <li>Great Grandmother (Bisabuela): la madre de tu abuelo/abuela</li>
      </ul>
    </Typography>
  </Box>

  <Box sx={{ backgroundColor: '#FFF6DB', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
    <Typography variant='body1' paragraph>
      <strong>Relatives (Familiares):</strong>
      <ul>
        <li>Uncle (Tío): el hermano (o cuñado) de tu madre/padre</li>
        <li>Aunt (Tía): la hermana (o cuñada) de tu madre/padre</li>
        <li>Cousin (Primo/a): el hijo de tu tía/tío</li>
        <li>Nephew (Sobrino): el hijo de tu hermano/hermana</li>
        <li>Niece (Sobrina): la hija de tu hermano/hermana</li>
      </ul>
    </Typography>
  </Box>

  <Box sx={{ backgroundColor: '#E8E3FE', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
    <Typography variant='body1' paragraph >
      <strong>In-Laws (Familiares políticos):</strong>
      <ul>
        <li>Father-in-law (Suegro): el padre de tu cónyuge</li>
        <li>Mother-in-law (Suegra): la madre de tu cónyuge</li>
        <li>Son-in-law (Yerno): el esposo de tu hija</li>
        <li>Daughter-in-law (Nuera): la esposa de tu hijo</li>
        <li>Brother-in-law (Cuñado): el esposo de tu hermana</li>
        <li>Sister-in-law (Cuñada): la esposa de tu hermano</li>
      </ul>
    </Typography>
  </Box>

  <Box sx={{ backgroundColor: '#FFF6DB', padding: '10px', borderRadius: '5px' }}>
    <Typography variant='body1' paragraph>
      <strong>Family Mix (La mezcla familiar):</strong>
      <ul>
        <li>Stepfather (Padrastro): el esposo de tu madre, pero no tu padre biológico</li>
        <li>Stepmother (Madrastra): la esposa de tu padre, pero no tu madre biológica</li>
        <li>Stepson (Hijastro): el hijo de tu (nuevo) esposo/esposa</li>
        <li>Stepdaughter (Hijastra): la hija de tu (nuevo) esposo/esposa</li>
        <li>Stepsister (Hermanastra): la hija de tu madrastra o padrastro</li>
        <li>Stepbrother (Hermanastro): el hijo de tu madrastra o padrastro</li>
        <li>Half-brother (Medio hermano): el hermano con quien solo compartes uno de los padres</li>
        <li>Half-sister (Media hermana): la hermana con quien solo compartes uno de los padres</li>
      </ul>
    </Typography>
  </Box>
</Box>

        </Box>
      </Box>
    </>
  );
}

export default FamilyInfo;
