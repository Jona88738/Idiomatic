import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

const AdminMenu = () => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  return (
    <List style={{ marginTop: '30px' }}>
      {/* Usuarios */}
      <ListItem 
        button 
        onClick={() => navigate('/Panel_user')}  // Redirige a la página de usuarios
        sx={{ borderRadius: '8px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
      >
        <ListItemIcon sx={{ '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.3s' } }}>
          <PeopleIcon style={{ color: 'white', fontSize: '30px' }} />
        </ListItemIcon>
        <ListItemText primary="Usuarios" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
      </ListItem>

      {/* Contenidos */}
      <ListItem 
        button 
        onClick={() => navigate('/contenidos')}  // Redirige a la página de contenidos
        sx={{ marginTop: '10px', borderRadius: '8px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
      >
        <ListItemIcon sx={{ '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.3s' } }}>
          <ContentPasteIcon style={{ color: 'white', fontSize: '30px' }} />
        </ListItemIcon>
        <ListItemText primary="Contenidos" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
      </ListItem>

      {/* Proyecciones */}
      <ListItem 
        button 
        onClick={() => navigate('/proyecciones')}  // Redirige a la página de proyecciones
        sx={{ marginTop: '10px', borderRadius: '8px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
      >
        <ListItemIcon sx={{ '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.3s' } }}>
          <InsightsIcon style={{ color: 'white', fontSize: '30px' }} />
        </ListItemIcon>
        <ListItemText primary="Proyecciones" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
      </ListItem>

      {/* Ajustes */}
      <ListItem 
        button 
        onClick={() => navigate('/ajustes')}  // Redirige a la página de ajustes
        sx={{ marginTop: '10px', borderRadius: '8px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
      >
        <ListItemIcon sx={{ '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.3s' } }}>
          <SettingsIcon style={{ color: 'white', fontSize: '30px' }} />
        </ListItemIcon>
        <ListItemText primary="Ajustes" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
      </ListItem>

      {/* Salir */}
      <ListItem 
        button 
        onClick={() => navigate('/salir')}  // Redirige a la página de salida
        sx={{ marginTop: '10px', borderRadius: '8px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
      >
        <ListItemIcon sx={{ '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.3s' } }}>
          <ExitToAppIcon style={{ color: 'white', fontSize: '30px' }} />
        </ListItemIcon>
        <ListItemText primary="Salir" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', color: 'white'}} />
      </ListItem>
    </List>
  );
};

export default AdminMenu;
