import { Box, Typography, Grid, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function PresentationsInfo() {
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
              <Typography variant="h3" style={{ fontWeight: 'bold', color: '#000000', padding: '25px' , marginLeft: '30px'}}>
                Personal presentations
              </Typography>
              <Typography variant="h4" style={{ fontWeight: 'bold', color: '#46467a', marginTop: '-25px', marginLeft:'80px' }}>
                Presentaciones personales
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img 
                src="/images/vectorpresentation.png" 
                style={{ width: '80%', borderRadius: '10px', height: 'auto', marginTop: '-58px' }} 
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Presentaciones personales informales
          </Typography>
          <Box sx={{ backgroundColor: '#FFDB73', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            En cualquier idioma, presentarse correctamente es uno de los primeros pasos para iniciar una interacción. Saber cómo decir tu nombre, de dónde eres y algunos detalles básicos sobre ti es esencial en situaciones cotidianas, tanto en el ámbito social como en el profesional.
            </Typography>
            <Typography paragraph>
            En esta lección, aprenderás a presentarte de manera clara y simple de forma informal en inglés.

            </Typography>
            </Box>
        </Box>

        <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
  {/* Introducción */}
  <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
    Existen una serie de pasos a seguir para presentarse de una forma correcta
  </Typography>

  {/* Sección de saludos */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#C2BDD9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      GREETINGS / SALUDOS
    </Typography>
    <Typography paragraph>
      Hi o Hello / Hola
      <br />
      Good morning / Buenos días
      <br />
      Good afternoon / Buenas tardes
      <br />
      Good evening / Buenas noches
    </Typography>
  </Paper>

  {/* Decir el nombre */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#DDD7F9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      SAY OUR NAMES / DECIR NUESTROS NOMBRES
    </Typography>
    <Typography paragraph>
      I am Will Smith. / Soy Will Smith.
      <br />
      My name is Will Smith. / Mi nombre es Will Smith.
      <br />
      Puedes hablar del país o ciudad de origen, edad, fecha de nacimiento y estatura.
      <br />
      I’m from Guadalajara, Jalisco. I am 23 years old. I was born on September 15, 1995. I am 1.78 meters tall.
    </Typography>
  </Paper>

  {/* Hablar de la familia */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#C2BDD9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      TALK ABOUT FAMILY / HABLAR DE LA FAMILIA
    </Typography>
    <Typography paragraph>
      Para dar un poco más de información personal, es posible incluir algunos datos familiares o mencionar con quién vives.
      <br />
      (I live with / Vivo con).
      <br />
      Actualmente, vivo con mis padres y hermanos en Toronto.
    </Typography>
  </Paper>

  {/* Gustos */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#DDD7F9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      TASTES / GUSTOS
    </Typography>
    <Typography paragraph>
      Cuando te presentas es muy común hablar de las actividades o cosas que nos gustan.
    </Typography>

    <Typography paragraph>
      I love / Me encanta
      <br />
      I like / Me gusta
      <br />
      I don’t like / No me gusta
      <br />
      I hate / Odio
    </Typography>

    <Typography paragraph>
      I love One piece. / Me encanta One piece.
      <br />
      I like to take naps with my dog. / Me gusta tomar siestas con mi perro.
      <br />
      I don't like eating melon. / No me gusta comer melón.
      <br />
      I hate Gege. / Odio a Gege.
    </Typography>
  </Paper>

  {/* Explicar razones */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#C2BDD9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      EXPLAIN THE REASON / EXPLICA LA RAZÓN
    </Typography>
    <Typography paragraph>
      Si quieres que tu presentación personal suene mejor y sea más completa, puedes agregar las razones de tus gustos usando la palabra "because" (porque).
    </Typography>

    <Typography paragraph>
      I love One piece because it makes me feel a lot of feelings at the same time. / Me encanta One piece porque me hace sentir muchos sentimientos al mismo tiempo.
      <br />
      I like to take naps with my dog because it's so nice to cuddle with him. / Me gusta tomar siestas con mi perro porque es muy placentero abrazarlo.
      <br />
      I don't like eating melon because its taste reminds me of medicine. / No me gusta comer melón porque su sabor me recuerda al de la medicina.
      <br />
      I hate Gege because he killed a lot of my favorite characters in Jujutsu Kaisen. / Odio a Gege porque mató a muchos de mis personajes favoritos en Jujutsu Kaisen.
    </Typography>
  </Paper>

  {/* Despedida */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#DDDFF7' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      FAREWELL / DESPEDIDA
    </Typography>
    <Typography paragraph>
      Thank you for your attention. / Gracias por su atención.
      <br />
      That was all about me. Thanks. / Eso fue todo acerca de mí. Gracias.
    </Typography>
  </Paper>

  {/* Ejemplo */}
  <Paper sx={{ padding: '15px', backgroundColor: '#d1c4e9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      Ejemplo de una presentación personal
    </Typography>
    <Typography paragraph>
      "Good morning. I’m Emily Johnson. I am from Sydney, Australia. I am 25 years old. I was born on March 15, 1999. I am 1.70 meters tall. Currently, I live with my boyfriend and our dog in New York City. I love traveling to new places because I enjoy learning about different cultures. I like photography because my mother is a professional photographer, and I grew up with a camera in my hands. I don’t like eating fast food because I prefer cooking healthy meals at home. I hate it when people are rude to waiters because it shows a lack of respect. That was all about me. Thanks."
    </Typography>

    <Typography paragraph>
      "Buenos días. Soy Emily Johnson. Soy de Sídney, Australia. Tengo 25 años. Nací el 15 de marzo de 1999. Mido 1,70 metros. Actualmente, vivo con mi novio y nuestro perro en la ciudad de Nueva York. Me encanta viajar a lugares nuevos porque disfruto aprendiendo sobre diferentes culturas. Me gusta la fotografía porque mi madre es fotógrafa profesional, y crecí con una cámara en mis manos. No me gusta comer comida rápida porque prefiero cocinar comidas saludables en casa. Odio cuando la gente es grosera con los camareros porque demuestra una falta de respeto. Eso fue todo acerca de mí. Gracias."
    </Typography>
  </Paper>
</Box>


        {/* Divider para separar secciones */}
        <Divider sx={{ margin: '20px 0', borderColor: '#000000', borderWidth: '0.1px' }} />

        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Presentaciones personales formales
          </Typography>
          <Box sx={{ backgroundColor: '#FFDB73', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
            En cualquier idioma, presentarse correctamente es uno de los primeros pasos para iniciar una interacción. En la lección anterior, aprendimos cómo presentarte en un ámbito social, lo cual es fundamental para conocer nuevas personas. Sin embargo, también es importante aprender a presentarse en un <strong>contexto profesional</strong>, ya que esto te permitirá desenvolverte mejor en entrevistas de trabajo, reuniones de negocios y eventos de networking.             </Typography>
            <Typography paragraph>
            Al igual que con las presentaciones informales, existen una serie de pasos a seguir para presentarse de manera correcta en un entorno profesional.
            </Typography>
            
            </Box>
        </Box>  
        <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
            Existen una serie de pasos a seguir para presentarse de una forma correcta
        </Typography>

        <Box>
  {/* Greetings / Saludos */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#C2BDD9' }}>
    
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      GREETINGS / SALUDOS
    </Typography>
    <Typography paragraph>
      Good morning / Buenos días
      <br />
      Good afternoon / Buenas tardes
      <br />
      Good evening / Buenas noches
      <br />
      En entornos formales, es recomendable usar saludos más específicos dependiendo de la hora del día.
    </Typography>
  </Paper>

  {/* State Your Name and Job Title / Decir tu Nombre y Puesto */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#DDD7F9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      STATE YOUR NAME AND JOB TITLE / DECIR TU NOMBRE Y PUESTO DE TRABAJO
    </Typography>
    <Typography paragraph>
      My name is [full name] / Mi nombre es [nombre completo]
      <br />
      I’m [name], and I work as [job title] / Soy [nombre], y trabajo como [puesto de trabajo]
      <br />
      I am [name], and I’m the [position] at [company name] / Soy [nombre], y soy [puesto] en [nombre de la empresa]
      <br />
      Hablar de tu puesto de trabajo y la empresa en la que te desempeñas es clave en un entorno profesional.
    </Typography>
  </Paper>

  {/* Talk About Your Experience / Hablar de tu Experiencia */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#C2BDD9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      TALK ABOUT YOUR EXPERIENCE / HABLAR DE TU EXPERIENCIA
    </Typography>
    <Typography paragraph>
      I have been working in [industry] for [number of years] / He trabajado en [industria] durante [número de años]
      <br />
      I specialize in [area of expertise] / Me especializo en [área de experiencia]
      <br />
      I have experience in managing [specific task or project] / Tengo experiencia en gestionar [tarea o proyecto específico]
      <br />
      Menciona tu experiencia relevante o habilidades clave en tu sector.
    </Typography>
  </Paper>

  {/* Talk About Your Education / Hablar de tu Formación Académica */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#DDD7F9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      TALK ABOUT YOUR EDUCATION / HABLAR DE TU FORMACIÓN ACADÉMICA
    </Typography>
    <Typography paragraph>
      I graduated with a degree in [field] from [university] / Me gradué con un título en [campo] de [universidad]
      <br />
      I hold a master’s degree in [specialization] / Tengo una maestría en [especialización]
      <br />
      I completed my studies at [university], focusing on [subject] / Completé mis estudios en [universidad], especializándome en [materia]
      <br />
      Tu formación académica puede ser un aspecto importante dependiendo del contexto.
    </Typography>
  </Paper>

  {/* Talk About Your Current Role and Responsibilities / Hablar de tu Rol Actual */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#C2BDD9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      TALK ABOUT YOUR CURRENT ROLE AND RESPONSIBILITIES / HABLAR DE TU ROL ACTUAL Y RESPONSABILIDADES
    </Typography>
    <Typography paragraph>
      I’m currently working on [specific project or responsibility] / Actualmente estoy trabajando en [proyecto específico o responsabilidad]
      <br />
      I’m in charge of [task or department] at [company] / Estoy a cargo de [tarea o departamento] en [empresa]
      <br />
      My main responsibilities include [tasks] / Mis principales responsabilidades incluyen [tareas]
      <br />
      Es importante mencionar en qué estás trabajando actualmente o cuáles son tus principales responsabilidades.
    </Typography>
  </Paper>

  {/* Express Interest / Expresar Interés */}
  <Paper sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#DDD7F9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      EXPRESS INTEREST / EXPRESAR INTERÉS
    </Typography>
    <Typography paragraph>
      I’m excited to collaborate with you on [project or goal] / Estoy emocionado de colaborar contigo en [proyecto o meta]
      <br />
      I look forward to contributing to [company’s success or project] / Espero contribuir al éxito de [empresa o proyecto]
    </Typography>
  </Paper>

  {/* Closing / Despedida */}
  <Paper sx={{ padding: '15px', backgroundColor: '#C2BDD9' }}>
    <Typography variant='h7' sx={{ fontWeight: 'bold' }}>
      CLOSING / DESPEDIDA
    </Typography>
    <Typography paragraph>
      It was a pleasure to meet you. / Fue un placer conocerte.
      <br />
      Thank you for your time. / Gracias por tu tiempo.
      <br />
      Las despedidas formales deben ser educadas y cortas, agradeciendo el tiempo de la otra persona.
    </Typography>
  </Paper>
</Box>

<Box sx={{ padding: '15px', marginBottom: '20px', marginTop: '50px'}}>
    
    <Typography paragraph>
    Recuerda que cada contexto puede requerir un enfoque diferente: en algunas ocasiones puede ser necesario un tono más formal, mientras que en otras situaciones laborales más casuales podrías optar por una presentación más relajada pero aún profesional. La práctica constante te permitirá adaptarte a diferentes entornos con naturalidad. Nos vemos en la siguiente lección!.
    </Typography>
  </Box>


         
      </Box>
    </>
  );
}

export default PresentationsInfo;
