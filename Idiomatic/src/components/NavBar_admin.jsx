import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

const AdminMenu = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)'); // Cambia a diseño móvil en pantallas pequeñas

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    navigate('/login');
  };

  if (isMobile) {
    return (
      <BottomNavigation
  sx={{ width: '100%', position: 'fixed', bottom: 0, backgroundColor: '#46467a' }}
  showLabels
>
  <BottomNavigationAction 
    label="Home" 
    icon={<HomeIcon style={{ color: 'white' }} />} 
    onClick={() => navigate('/Admin_Home')}
    sx={{ 
      '& .MuiBottomNavigationAction-label': { 
        color: 'white', 
        fontWeight: 'bold' 
      } 
    }}
  />
  <BottomNavigationAction 
    label="Usuarios" 
    icon={<PeopleIcon style={{ color: 'white' }} />} 
    onClick={() => navigate('/Panel_user')}
    sx={{ 
      '& .MuiBottomNavigationAction-label': { 
        color: 'white', 
        fontWeight: 'bold' 
      } 
    }}
  />
  <BottomNavigationAction 
    label="Contenidos" 
    icon={<ContentPasteIcon style={{ color: 'white' }} />} 
    onClick={() => navigate('/contenidos')}
    sx={{ 
      '& .MuiBottomNavigationAction-label': { 
        color: 'white', 
        fontWeight: 'bold' 
      } 
    }}
  />
  <BottomNavigationAction 
    label="Salir" 
    icon={<ExitToAppIcon style={{ color: 'white' }} />} 
    onClick={handleLogout}
    sx={{ 
      '& .MuiBottomNavigationAction-label': { 
        color: 'white', 
        fontWeight: 'bold' 
      } 
    }}
  />
</BottomNavigation>

    );
  } else {
    // Diseño de escritorio - Sidebar a la izquierda
    return (
      <Box 
        style={{ 
          marginTop: '30px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          backgroundColor: '#46467a', 
          padding: '20px',
          height: '100vh',
          width: '250px',
          borderRadius: '20px'
        }}
      >
        <Avatar 
          src="/images/adminlogo1.png" 
          sx={{ 
            width: 100, 
            height: 100, 
            marginBottom: '25px', 
            border: '2px solid #ffffff', 
            boxShadow: '0px 0px 10px rgba(0,0,0,0.3)'
          }} 
        />
        <Typography 
          variant="h6" 
          sx={{ fontWeight: 'bold', color: 'white', marginBottom: '30px' }}
        >
          Bienvenido Admin
        </Typography>

        <List style={{ width: '100%' }}>
          <ListItem 
            button 
            onClick={() => navigate('/Admin_Home')}
            sx={{ 
              borderRadius: '8px', 
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', transform: 'scale(1.05)', transition: 'transform 0.3s' }
            }}
          >
            <ListItemIcon>
              <HomeIcon style={{ color: 'white', fontSize: '30px' }} />
            </ListItemIcon>
            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
          </ListItem>

          <ListItem 
            button 
            onClick={() => navigate('/Panel_user')}
            sx={{ 
              borderRadius: '8px', 
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', transform: 'scale(1.05)', transition: 'transform 0.3s' }
            }}
          >
            <ListItemIcon>
              <PeopleIcon style={{ color: 'white', fontSize: '30px' }} />
            </ListItemIcon>
            <ListItemText primary="Usuarios" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
          </ListItem>

          <ListItem 
            button 
            onClick={() => navigate('/contenidos')}
            sx={{ 
              marginTop: '10px', 
              borderRadius: '8px', 
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', transform: 'scale(1.05)', transition: 'transform 0.3s' }
            }}
          >
            <ListItemIcon>
              <ContentPasteIcon style={{ color: 'white', fontSize: '30px' }} />
            </ListItemIcon>
            <ListItemText primary="Contenidos" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
          </ListItem>

          <ListItem 
            button 
            onClick={handleLogout}
            sx={{ 
              marginTop: '10px', 
              borderRadius: '8px', 
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', transform: 'scale(1.05)', transition: 'transform 0.3s' }
            }}
          >
            <ListItemIcon>
              <ExitToAppIcon style={{ color: 'white', fontSize: '30px' }} />
            </ListItemIcon>
            <ListItemText primary="Salir" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
          </ListItem>
        </List>
      </Box>
    );
  }
};

export default AdminMenu;
