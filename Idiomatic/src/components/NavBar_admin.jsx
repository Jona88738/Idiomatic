import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const AdminMenu = () => {
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Eliminar el token de localStorage o sessionStorage (según corresponda)
    localStorage.removeItem('authToken'); // Si usas localStorage
    sessionStorage.removeItem('authToken'); // Si usas sessionStorage

    // Redirigir al usuario al login
    navigate('/login'); // O usa el path correcto para tu login
  };

  return (
    <Box 
      style={{ 
        marginTop: '30px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: '#46467a', // Aplicamos el color al sidebar
        padding: '20px', // Agregamos padding para que el contenido no toque los bordes
        height: '100vh', // Asegura que el sidebar ocupe toda la altura de la pantalla
        width: '250px', // Ajusta el tamaño del sidebar
        borderRadius: '20px'
      }}
    >
      {/* Avatar con la foto del Administrador */}
      <Avatar 
        src="/src/images/adminlogo1.png" 
        sx={{ 
          width: 100, 
          height: 100, 
          marginBottom: '25px', 
          border: '2px solid #ffffff', // Cambio a blanco para hacer el borde visible
          boxShadow: '0px 0px 10px rgba(0,0,0,0.3)'
        }} 
      />
      <Typography 
        variant="h6" 
        sx={{ fontWeight: 'bold', color: 'white', marginBottom: '30px' }} // Cambié a 'white' para que se vea el texto
      >
        Bienvenido Admin
      </Typography>

      {/* Menú de Opciones */}
      <List style={{ width: '100%' }}>
        {/* Home */}
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
        
        {/* Usuarios */}
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

        {/* Contenidos */}
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

        {/* Salir */}
        <ListItem 
          button 
          onClick={handleLogout} // Llamamos a handleLogout cuando se hace clic
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
};

export default AdminMenu;
