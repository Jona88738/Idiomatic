import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import AdminMenu from '../../components/NavBar_admin'; // Importa el menú de administración
import { Pie } from 'react-chartjs-2';  // Importa el gráfico tipo Pie
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Configuración de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [userComments, setUserComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);
  const [userStats, setUserStats] = useState({ usersCount: 0, subscriptionStats: {} });

  useEffect(() => {
    // Obtiene los comentarios de los usuarios
    fetch('/api/comentarioUser')
      .then((res) => res.json())
      .then((data) => {
        setUserComments(data);
      })
      .catch((error) => console.error('Error fetching user comments:', error));

    // Obtiene los usuarios y calcula las estadísticas
    fetch('/api/adminGetUsers') // Ruta del backend para obtener los usuarios
      .then((res) => res.json())
      .then((data) => {
        const usersCount = data.length; // Número total de usuarios
        const subscriptionStats = data.reduce((acc, user) => {
          const subscription = user.suscripcion || 'No definida'; // Agrupa por tipo de suscripción
          acc[subscription] = (acc[subscription] || 0) + 1;
          return acc;
        }, {});

        setUserStats({ usersCount, subscriptionStats });
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

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

  // Configuración de la gráfica de tipo de suscripción
  const subscriptionChartData = {
    labels: Object.keys(userStats.subscriptionStats),
    datasets: [
      {
        data: Object.values(userStats.subscriptionStats),
        backgroundColor: ['#FFC212', '#7766c6', '#f0b0c3', '#4BC0C0', '#F7464A'],
      },
    ],
  };

  return (
    <Container maxWidth="false" disableGutters>
      {/* Navbar arriba */}
      <Container style={{ display: 'flex', padding: '20px', width: '100%', height: '100vh' }}>
        
        {/* Menú de Administración */}
        <Box sx={{ width: '20%', marginRight: '20px' }}>
          <AdminMenu /> {/* Aquí se renderiza el menú de administración */}
        </Box>

        {/* Panel de Gestión y contenido principal */}
        <Container style={{ width: '100%', padding: '40px' }}>
          <Box sx={{
            backgroundColor: '#C9C8D9',
            borderRadius: '10px',
            padding: '30px',
            marginBottom: '50px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            height: '300px'
          }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h4" style={{ fontWeight: 'bold', color: '#000000', padding: '20px', marginTop: '70px' }}>
                  Panel de Gestión
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img src="/src/images/icondashboard.png" alt="Dashboard Icon" style={{ width: '100%', borderRadius: '10px', height: 'auto' }} />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{
            backgroundColor: '#E6E6FA',
            borderRadius: '10px',
            padding: '30px',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082', marginBottom: '10px' }}>
              Mensajes - Bandeja de Entrada
            </Typography>
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
                  <Grid container spacing={2} sx={{ '&:hover': { backgroundColor: '#f5f5f5' }, padding: '10px', borderRadius: '8px', fontSize: '12px' }}>
                    <Grid item xs={1}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(user.idusuario)}  
                        checked={selectedComments.includes(user.idusuario)}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography style={{ fontWeight: 'bold', color: '#4B0082' , fontSize: '18px'}}>{user.nombre}</Typography>
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

          <Grid container spacing={3}>
  {/* Estimación de usuarios registrados */}
  <Grid item xs={6}>
    <Box sx={{
      backgroundColor: '#C9C8D9',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      height: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' , textAlign: 'center', marginTop: -'100px'}}>
        Estimado de Usuarios Registrados
      </Typography>
      <img 
      src="/src/images/happy.png" 
      alt="D" 
      style={{
        width: '100px', 
        height: 'auto', 
        display: 'block', 
        margin: '0 auto', 
        marginTop: '10px', 
        marginBottom: '10PX'
      }}
/>
      <Typography variant="h3" style={{ color: '#4B0082', fontWeight: 'bold' , textAlign: 'center'}}>
        {userStats.usersCount}
      </Typography>
    </Box>
  </Grid>

  {/* Distribución de usuarios por tipo de suscripción */}
  <Grid item xs={6}>
    <Box sx={{
      backgroundColor: '#C9C8D9',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography variant="h5" style={{ fontWeight: 'bold', color: '#4B0082', marginBottom: '10px' , marginTop: '60px', textAlign: 'center'}}>
        Distribución de usuarios por tipo de suscripción
      </Typography>
      <Pie 
        data={subscriptionChartData} 
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { font: { size: 10 } }
            }
          }
        }} 
        height={100}
      />
    </Box>
  </Grid>
</Grid>


        </Container>
      </Container>
    </Container>
  );
};

export default AdminDashboard;
