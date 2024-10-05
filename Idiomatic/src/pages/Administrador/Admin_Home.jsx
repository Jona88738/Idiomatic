import React, { useEffect, useState } from 'react';
import { Container, Avatar, Grid, Box, Typography } from '@mui/material';
import NavBar_User from '../../components/NavBar_User'; 
import NavBar_Home from '../../components/NavBar_Home'; 

const AdminDashboard = () => {
  const [adminInfo, setAdminInfo] = useState({ nombre: '', email: '' });
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    fetch('/api/getUser')
    .then((res) => res.json())
    .then((data) => setAdminInfo(data))
    .catch((error) => console.error('Error fetching admin info:', error));

  // Petición para obtener los comentarios de los usuarios
  fetch('/api/comentarioUser')  
    .then((res) => res.json())
    .then((data) => setUserComments(data))
    .catch((error) => console.error('Error fetching user comments:', error));
}, []);

  return (
    <Container maxWidth="false" disableGutters>
      {/* Navbar arriba */}
      <Box>
        <NavBar_Home />
      </Box>

      {/* Main Content en columnas */}
      <Container style={{ display: 'flex', padding: '20px' }}>
        <Container style={{ width: '85%', padding: '20px', marginRight: '20px' }}>
          <Box sx={{ 
              backgroundColor: '#E0DFFD', 
              borderRadius: '10px', 
              padding: '20px', 
              marginBottom: '50px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
              height: '230px' // Ajusta este valor según lo que necesites
            }}
            >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h4" style={{ fontWeight: 'bold', color: '#000000', padding: '80px' }}>Panel de Gestión</Typography>
              </Grid>
              <Grid item xs={4}>
                <img src="/src/images/icondashboard.png" alt="Dashboard Icon" style={{ width: '90%', borderRadius: '10px', height: 'auto' }} />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
  <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082' }}>Mensajes - Bandeja de Entrada</Typography>
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <Typography variant="subtitle1">De</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="subtitle1">Comentario</Typography>
    </Grid>
  </Grid>

  {userComments.map((comment, index) => (
    <Grid container spacing={2} key={index} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
      <Grid item xs={1}>
        <input type="checkbox" />
      </Grid>
      <Grid item xs={5}>
        <Typography>{comment.nombre}</Typography> {/* Nombre del usuario */}
      </Grid>
      <Grid item xs={6}>
        <Typography>{comment.comentarios}</Typography> {/* Comentario del usuario */}
      </Grid>
    </Grid>
  ))}
</Box>


          <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082' }}>Progreso General</Typography>
            <img src="/path-to-progress-chart.png" alt="Progress Chart" style={{ width: '100%', borderRadius: '10px' }} />
          </Box>
        </Container>

        {/* Sidebar (Menú) */}
        <Container className="sidebar" style={{ width: '24%', backgroundColor: '#46467A', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px' }}>
          <Avatar src="/src/images/adminfoto2.png" sx={{ width: 100, height: 100, marginBottom: '20px', marginTop: '10px', border: '2px solid #46477A' }} />
          <Typography variant="h5" align="center" style={{ fontWeight: 'bold' }}>Bienvenido <span style={{ color: '#46467A' }}>{adminInfo.nombre}</span></Typography>
          <Box sx={{ borderRadius: '10px', overflow: 'hidden' }}>
            {/* Aquí puedes incluir el NavBar_User si es necesario */}
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default AdminDashboard;
