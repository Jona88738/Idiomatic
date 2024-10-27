import { Box, Typography, Grid } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home';

function JobsInfo() {
  return (
    <>
      {/* Navbar arriba */}
      <Box>
        <NavBar_Home />
      </Box>

      {/* Contenido principal */}
      <Box sx={{ padding: '30px', maxWidth: '1200px', margin: 'auto' }}>
        {/* Box para el título con imagen */}
        <Box
          sx={{
            backgroundColor: '#E0DFFD',
            borderRadius: '10px',
            padding: '30px',
            marginBottom: '50px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            height: '200px'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                variant="h3"
                style={{
                  fontWeight: 'bold',
                  color: '#000000',
                  padding: '25px',
                  marginLeft: '30px'
                }}
              >
                Jobs and occupations
              </Typography>
              <Typography
                variant="h4"
                style={{
                  fontWeight: 'bold',
                  color: '#7766C6',
                  marginTop: '-25px',
                  marginLeft: '100px'
                }}
              >
                Trabajos y ocupaciones
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img
                src="/src/images/vectorjobs.png"
                style={{
                  width: '70%',
                  borderRadius: '10px',
                  height: 'auto',
                  marginTop: '-48px'
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Sección de explicación principal */}
        <Box sx={{ marginBottom: '20px', textAlign: 'justify' }}>
          <Typography variant='h5' paragraph sx={{ fontWeight: 'bold' }}>
            Hablemos sobre los trabajos y ocupaciones
          </Typography>
          <Box sx={{ backgroundColor: '#FFDC79', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <Typography paragraph>
              Los trabajos y ocupaciones son puestos en los que alguien recibe un salario. Una ocupación es el trabajo o la profesión de una persona. Todo el mundo trabaja para ganarse la vida, pero este puesto de trabajo se llama de forma diferente según el lugar, el estatus y las actividades que realiza. Cuando necesites hablar sobre la forma en que ganas dinero, necesitas aprender los nombres de los trabajos y ocupaciones en inglés.
            </Typography>
            <Typography paragraph>
              Este tema te ayudará a comunicarte mejor en entrevistas de trabajo, reuniones sociales, o situaciones laborales.
            </Typography>
          </Box>
        </Box>

        {/* Box para Common Jobs and Occupations */}
        <Box sx={{ backgroundColor: '#EEEEFF', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', textAlign:'center' }}>
            Common Jobs and Occupations
          </Typography>
          <Typography paragraph>
            Here are some of the most common jobs and occupations:
          </Typography>
          <ul>
            <li><strong>Teacher</strong> (Profesor)</li>
            <li><strong>Doctor</strong> (Doctor)</li>
            <li><strong>Engineer</strong> (Ingeniero)</li>
            <li><strong>Chef</strong> (Cocinero)</li>
            <li><strong>Pilot</strong> (Piloto)</li>
            <li><strong>Nurse</strong> (Enfermero)</li>
            <li><strong>Police Officer</strong> (Oficial de policía)</li>
            <li><strong>Artist</strong> (Artista)</li>
          </ul>
        </Box>

        {/* Box para How to Ask and Answer about Jobs */}
        <Box sx={{ backgroundColor: '#FFF3D2', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' , textAlign: 'center'}}>
            How to Ask and Answer about Jobs
          </Typography>
          <Typography paragraph>
            Here are some common ways to ask and answer questions about jobs and occupations:
          </Typography>
          <ul>
            <li>
              <strong>What do you do?</strong> → ¿A qué te dedicas?
              <br />
              <em>Example:</em> "I am a teacher." → Soy maestro.
            </li>
            <li>
              <strong>What is your job?</strong> → ¿Cuál es tu trabajo?
              <br />
              <em>Example:</em> "I am a nurse." → Soy enfermera.
            </li>
            <li>
              <strong>Where do you work?</strong> → ¿Dónde trabajas?
              <br />
              <em>Example:</em> "I work at a hospital." → Trabajo en un hospital.
            </li>
          </ul>
        </Box>

        {/* Box para Types of Jobs */}
        <Box sx={{ backgroundColor: '#EEEEFF', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px', textAlign:'center' }}>
            Types of Jobs
          </Typography>
          <Typography paragraph>
            Jobs can be categorized into different sectors. Here are a few examples:
          </Typography>
          <ul>
            <li><strong>Health Care</strong>: doctor, nurse, dentist</li>
            <li><strong>Education</strong>: teacher, professor, librarian</li>
            <li><strong>Technology</strong>: software developer, IT specialist, data analyst</li>
            <li><strong>Hospitality</strong>: chef, waiter, hotel manager</li>
            <li><strong>Transportation</strong>: pilot, driver, flight attendant</li>
          </ul>
        </Box>

        {/* Box para Common Expressions Related to Jobs */}
        <Box sx={{ backgroundColor: '#FFF3D2', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px', textAlign:'center' }}>
            Common Expressions Related to Jobs
          </Typography>
          <Typography paragraph>
            Here are some common expressions and verbs related to jobs and occupations:
          </Typography>
          <ul>
            <li><strong>To apply for a job</strong> → Postularse para un trabajo</li>
            <li><strong>To work as a...</strong> → Trabajar como...</li>
            <li><strong>To be hired/fired</strong> → Ser contratado/despedido</li>
            <li><strong>To quit a job</strong> → Renunciar a un trabajo</li>
            <li><strong>To look for a job</strong> → Buscar trabajo</li>
          </ul>
        </Box>

        {/* Box para How to Answer about Your Job */}
        <Box sx={{ backgroundColor: '#EEEEFF', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' , textAlign:'center'}}>
            How to Answer about Your Job
          </Typography>
          <Typography paragraph>
            When answering questions about your job, you can use the following structures:
          </Typography>
          <ul>
            <li><strong>I am a [job].</strong> → Soy [trabajo].</li>
            <li><strong>I work as a [job].</strong> → Trabajo como [trabajo].</li>
            <li><strong>I work at [place].</strong> → Trabajo en [lugar].</li>
          </ul>
        </Box>
      </Box>
    </>
  );
}

export default JobsInfo;
