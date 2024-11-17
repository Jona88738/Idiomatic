import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Grid, IconButton } from '@mui/material';
import AdminMenu from '../../components/NavBar_admin'; // Importa el menú de administración
import { Pie } from 'react-chartjs-2';  // Importa el gráfico tipo Pie
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DeleteIcon from '@mui/icons-material/Delete';  // Icono de basurero


// Configuración de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [userComments, setUserComments] = useState([]);
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

  const handleDeleteComments = async (userId) => {
    console.log("ID de usuario para eliminar:", userId);  // Debería imprimir el ID del usuario
    if (!userId || typeof userId !== 'number') {
        alert("ID de usuario no válido.");
        return;
    }
  
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar los comentarios de este usuario?");
    if (confirmed) {
        try {
            // Cambio aquí: Reemplazar idusuario por id_usuario
            const response = await fetch(`/api/DeleteComentarioUser?id_usuario=${userId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setUserComments((prev) => prev.filter((user) => user.idusuario !== userId));
            } else {
                alert(data.message || "Error al eliminar comentarios. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error eliminando comentarios:", error);
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
                <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginBottom: '20px' }}>USUARIO</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginBottom: '20px' }}>COMENTARIOS</Typography>
              </Grid>
            </Grid>

            {userComments.map((user) => (
              user.comentarios.length > 0 && (
                <Box key={user.idusuario} sx={{ mb: 2 }}>
                  <Grid container spacing={2} sx={{ '&:hover': { backgroundColor: '#f5f5f5' }, padding: '10px', borderRadius: '8px', fontSize: '12px' }}>
                    <Grid item xs={5}>
                      <Typography style={{ fontWeight: 'bold', color: '#4B0082', fontSize: '18px'}}>{user.nombre}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {user.comentarios.map((comentario, index) => (
                        <Typography key={index}>{comentario}</Typography>
                      ))}
                    </Grid>
                  </Grid>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteComments(user.idusuario)} // Aquí pasa el ID del usuario
                    style={{ marginTop: '10px', float: 'right', marginRight: '10px', fontSize: '30px' }}
                  >
                    <DeleteIcon style={{ fontSize: 30 , marginTop: '-15px'}} />  {/* Ícono del bote de basura */}
                  </IconButton>
                </Box>
              )
            ))}
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
