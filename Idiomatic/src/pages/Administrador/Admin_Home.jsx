import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import NavBar_Home from '../../components/NavBar_Home'; 
import AdminMenu from '../../components/NavBar_admin'; // Importa el menú de administración

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

  const handleDeleteComments = async (userId) => {
  const confirmed = window.confirm("¿Estás seguro de que deseas eliminar los comentarios de este usuario?");
  if (confirmed) {
    try {
      const response = await fetch(`/api/DeleteComentarioUser?idusuario=${userId}`, { method: 'DELETE' });
      const data = await response.json();
      if (data.message) {
        alert("Comentarios eliminados correctamente.");
        // Aquí puedes actualizar el estado de los usuarios para reflejar los cambios.
      } else {
        alert("Error al eliminar comentarios. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error deleting comments:', error);
      alert("Error al eliminar comentarios. Inténtalo de nuevo.");
    }
  }
};


  return (
    <Container maxWidth="false" disableGutters>
      {/* Navbar arriba */}
    

      {/* Main Content en columnas */}
      <Container style={{ display: 'flex', padding: '20px', width: '100%', height: '100vh' }}>
        
        {/* Menú de Administración */}
        <Box sx={{ width: '20%', marginRight: '20px' }}>
          <AdminMenu /> {/* Aquí se renderiza el menú de administración */}
        </Box>

        {/* Panel de Gestión y contenido principal */}
        <Container style={{ width: '100%', padding: '40px' }}>
          <Box sx={{ 
              backgroundColor: '#E0DFFD', 
              borderRadius: '10px', 
              padding: '30px', 
              marginBottom: '50px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
              height: '300px' 
            }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h4" style={{ fontWeight: 'bold', color: '#000000', padding: '20px' }}>Panel de Gestión</Typography>
              </Grid>
              <Grid item xs={4}>
                <img src="/src/images/icondashboard.png" alt="Dashboard Icon" style={{ width: '100%', borderRadius: '10px', height: 'auto' }} />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '30px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082', marginBottom: '10px' }}>Mensajes - Bandeja de Entrada</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>USUARIO</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>COMENTARIOS</Typography>
              </Grid>
            </Grid>

            {userComments.map((user) => (
              user.comentarios.length > 0 && (
                <Box key={user.idusuario} sx={{ mb: 2 }}>
                  <Grid container spacing={2} sx={{ '&:hover': { backgroundColor: '#f5f5f5' }, padding: '10px', borderRadius: '8px' }}>
                    <Grid item xs={1}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(user.idusuario)}  
                        checked={selectedComments.includes(user.idusuario)}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography style={{ fontWeight: 'bold', color: '#4B0082' }}>{user.nombre}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {user.comentarios.map((comentario, index) => (
                        <Typography key={index}>{comentario}</Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              )
            ))}
            <Button variant="contained" color="secondary" onClick={handleDeleteComments} style={{ marginTop: '15px' }}>
              Eliminar Comentarios
            </Button>
          </Box>

          <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082' }}>Progreso General</Typography>
            <img src="/path-to-progress-chart.png" alt="Progress Chart" style={{ width: '100%', borderRadius: '10px' }} />
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default AdminDashboard;
