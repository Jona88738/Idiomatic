import React, { useEffect, useState } from 'react';
import { Container, Avatar, Button, Grid, Box } from '@mui/material';
import NavBar_User from '../../components/NavBar_User'; 

const AdminDashboard = () => {
  const [adminInfo, setAdminInfo] = useState({ nombre: '', email: '' });

  useEffect(() => {
    fetch('/api/getAdminInfo')
      .then((res) => res.json())
      .then((data) => setAdminInfo(data))
      .catch((error) => console.error('Error fetching admin info:', error));
  }, []);

  return (
    <Container maxWidth="false" disableGutters style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Container className="sidebar" style={{ width: '20%', backgroundColor: '#4B0082', color: 'white', padding: '20px' }}>
        <Avatar alt="Admin Avatar" src="/path-to-avatar.png" sx={{ width: 100, height: 100, margin: '0 auto' }} />
        <h3 style={{ textAlign: 'center', margin: '10px 0' }}>Bienvenida, <span style={{ color: '#FFD700' }}>{adminInfo.nombre}</span></h3>
        <NavBar_User /> 
      </Container>

      {/* Main Content */}
      <Container style={{ width: '80%', padding: '20px' }}>
        <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <h2>Panel de Gestión</h2>
            </Grid>
            <Grid item xs={4}>
              <img src="/path-to-dashboard-icon.png" alt="Dashboard Icon" style={{ width: '100%', borderRadius: '10px' }} />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <h3>Messaging - Inbox</h3>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>From</p>
            </Grid>
            <Grid item xs={6}>
              <p>Subject</p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <input type="checkbox" />
            </Grid>
            <Grid item xs={5}>
              <p>John Doe</p>
            </Grid>
            <Grid item xs={6}>
              <p>New Update Available</p>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ backgroundColor: '#E6E6FA', borderRadius: '10px', padding: '20px' }}>
          <h3>Progreso General</h3>
          <img src="/path-to-progress-chart.png" alt="Progress Chart" style={{ width: '100%', borderRadius: '10px' }} />
        </Box>
      </Container>
    </Container>
  );
};

export default AdminDashboard;
