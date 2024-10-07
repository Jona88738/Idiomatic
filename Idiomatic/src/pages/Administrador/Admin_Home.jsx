import React, { useEffect, useState } from 'react';
import { Container, Avatar, Grid, Box, Typography, Button } from '@mui/material';
import NavBar_admin from '../../components/NavBar_admin'; 
import NavBar_Home from '../../components/NavBar_Home'; 

const AdminDashboard = () => {
  const [adminInfo, setAdminInfo] = useState({ nombre: '', email: '' });
  const [userComments, setUserComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    fetch('/api/comentarioUser')
      .then((res) => res.json())
      .then((data) => {
        setUserComments(data);
      })
      .catch((error) => console.error('Error fetching user comments:', error));
  };

  const handleCheckboxChange = (commentId) => {
    setSelectedComments((prev) => {
      if (prev.includes(commentId)) {
        return prev.filter((id) => id !== commentId);
      } else {
        return [...prev, commentId];
      }
    });
  };

  const handleDeleteComments = () => {
    Promise.all(selectedComments.map((commentId) => {
        return fetch(`/DeleteComentarioUser?idusuario=${commentId}`, {
            method: 'DELETE',
        });
    }))
    .then(() => {
        setSelectedComments([]);  // Limpiar los comentarios seleccionados
        fetchComments();  // Refrescar la lista de comentarios después de eliminar
    })
    .catch((error) => {
        console.error('Error al eliminar comentarios:', error);
    });
};
  

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
              height: '230px' 
            }}>
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
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082', marginBottom: '10px' }}>Mensajes - Bandeja de Entrada</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>USUARIO</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>COMENTARIO</Typography>
              </Grid>
            </Grid>

            {userComments.map((comment) => (
              <Grid container spacing={2} key={comment.idusuario} sx={{ '&:hover': { backgroundColor: '#f5f5f5' }, marginTop: '10px' }}>
                <Grid item xs={1}>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(comment.idusuario)}
                    checked={selectedComments.includes(comment.idusuario)}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography style={{ fontWeight: 'bold', color: '#4B0082' }}>{comment.nombre}</Typography> {/* Resaltar el nombre */}
                </Grid>
                <Grid item xs={6}>
                  <Typography>{comment.comentario}</Typography>
                </Grid>
              </Grid>
            ))}
            <Button variant="contained" color="secondary" onClick={handleDeleteComments} style={{ marginTop: '15px', alignContent: 'left' }}>
              Eliminar Comentarios Seleccionados
            </Button>
          </Box>

          <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082' }}>Progreso General</Typography>
            <img src="/path-to-progress-chart.png" alt="Progress Chart" style={{ width: '100%', borderRadius: '10px' }} />
          </Box>
        </Container>

      {/* Sidebar (Menú) */}
      <Container className="sidebar" 
  style={{ 
    width: '24%', 
    backgroundColor: '#46467A', 
    color: 'white', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    borderRadius: '20px', 
    height: '100vh', 
    overflowY: 'auto' 
  }}>
  <Avatar 
    src="/src/images/adminlogo1.png" 
    sx={{ 
      width: 100, 
      height: 100, 
      marginBottom: '20px', 
      marginTop: '10px', 
      border: '2px solid #46477A' 
    }} 
  />
  <Typography 
    variant="h5" 
    align="center" 
    style={{ fontWeight: 'bold' }}
  >
    Bienvenido <span style={{ color: '#46467A' }}>{adminInfo.nombre}</span>
  </Typography>
  {adminInfo.nombre}
  <Typography 
    variant="h6" 
    align="center" 
    style={{ fontWeight: 'normal' }}
  >
   {adminInfo.nombre} {/* O el campo que desees mostrar */}
  </Typography>
  <Box sx={{ borderRadius: '10px', overflow: 'hidden' }}>
  <NavBar_admin/>
  </Box>
</Container>
      </Container>
    </Container>
  );
};

export default AdminDashboard;
