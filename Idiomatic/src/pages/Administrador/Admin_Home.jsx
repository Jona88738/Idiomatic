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
    const confirmed = window.confirm('¿Está seguro de que desea eliminar los comentarios del usuario seleccionado?');

    if (confirmed) {
        Promise.all(selectedComments.map((commentId) => {
            return fetch(`/DeleteComentarioUser?idusuario=${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ confirm: true }),  // Enviando la confirmación en el cuerpo de la solicitud
            });
        }))
        .then(() => {
            setSelectedComments([]);  // Limpiar los comentarios seleccionados
            fetchComments();  // Refrescar la lista de comentarios después de eliminar
        })
        .catch((error) => {
            console.error('Error al eliminar comentarios:', error);
        });
    }
};

  return (
    <Container maxWidth="false" disableGutters>
      {/* Navbar arriba */}
      <Box>
        <NavBar_Home />
      </Box>

      {/* Main Content en columnas */}
      <Container style={{ display: 'flex', padding: '20px', width: '100%', height: '100vh' }}>
        <Container style={{ width: '120%', padding: '40px', marginRight: '20px' }}>
          <Box sx={{ 
              backgroundColor: '#E0DFFD', 
              borderRadius: '10px', 
              padding: '30px', // Aumentar padding
              marginBottom: '50px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
              height: '300px' // Aumentar altura
            }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h4" style={{ fontWeight: 'bold', color: '#000000', padding: '20px' }}>Panel de Gestión</Typography> {/* Reduce el padding interno */}
              </Grid>
              <Grid item xs={4}>
                <img src="/src/images/icondashboard.png" alt="Dashboard Icon" style={{ width: '100%', borderRadius: '10px', height: 'auto' }} /> {/* Ajustar el tamaño de la imagen */}
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '30px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}> {/* Aumentar padding */}
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
              user.comentarios.length > 0 && (  // Verificamos si el usuario tiene comentarios
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
                      <Typography style={{ fontWeight: 'bold', color: '#4B0082', alignContent: 'left' }}>{user.nombre}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {user.comentarios.map((comentario, index) => (  // Muestra cada comentario
                        <Typography key={index}>{comentario}</Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              )
            ))}
            <Button variant="contained" color="secondary" onClick={handleDeleteComments} style={{ marginTop: '15px', alignContent: 'left' }}>
              Eliminar Comentarios
            </Button>
          </Box>

          <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}> {/* Aumentar padding */}
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082' }}>Progreso General</Typography>
            <img src="/path-to-progress-chart.png" alt="Progress Chart" style={{ width: '100%', borderRadius: '10px' }} />
          </Box>
        </Container>

        {/* Sidebar (Menú) */}
        <Container className="sidebar" 
          style={{ 
            width: '35%', 
            backgroundColor: '#46467A', 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            borderRadius: '20px', 
            height: '100vh', 
            overflowY: 'auto', 
            padding: '20px' // Agregar padding
          }}>
          <Avatar 
            src="/src/images/adminlogo1.png" 
            sx={{ 
              width: 120, // Aumentar el tamaño del avatar
              height: 120, 
              marginBottom: '20px', 
              marginTop: '10px', 
              border: '2px solid #46477A' 
            }} 
          />
          <Typography 
            variant="h5" 
            align="left" 
            style={{ fontWeight: 'bold' }}
          >
            Bienvenido <span style={{ color: '#46467A' }}>{adminInfo.nombre}</span>
          </Typography>
          <Typography 
            variant="h6" 
            align="left" 
            style={{ fontWeight: 'normal' }}
          >
           {adminInfo.email} {/* O el campo que desees mostrar */}
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
