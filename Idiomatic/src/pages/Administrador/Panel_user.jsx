import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import NavBar_Home from '../../components/NavBar_Home';
import AdminMenu from '../../components/NavBar_admin'; // Importa AdminMenu aquí

function User_Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    fetch("/api/adminGetUsers")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user); 
    setOpenEditModal(true); 
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
    if (confirmed) {
      try {
        const response = await fetch(`/api/adminDeleteUser?idusuario=${id}`, { method: 'DELETE' });
        const data = await response.json();
        if (data.message) {
          setUsers(users.filter(user => user.idusuario !== id));
          alert("Usuario eliminado con éxito.");
        } else {
          alert("Error al eliminar el usuario. Inténtalo de nuevo.");
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert("Error al eliminar el usuario. Inténtalo de nuevo.");
      }
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`/api/adminUpdateUser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedUser),
      });

      const data = await response.json();
      if (data.message) {
        setUsers(users.map(user => user.idusuario === selectedUser.idusuario ? selectedUser : user));
        setOpenEditModal(false);
        alert("Usuario actualizado con éxito.");
      } else {
        alert("Error al actualizar el usuario. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert("Error al actualizar el usuario. Inténtalo de nuevo.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="false" disableGutters>

      {/* AdminMenu */}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ width: '20%', backgroundColor: '#46467A', color: 'white', padding: '20px', marginTop: '20PX', borderRadius: '10PX' }}>
          <AdminMenu />
        </Box>

        <Box sx={{ width: '80%', padding: '20px' }}>
          {/* Panel de Usuarios */}
          <Box 
            sx={{
              backgroundColor: '#E0DFFD', 
              borderRadius: '10px', 
              padding: '16px',  
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px', 
              marginTop: '20px'
            }}
          >

             
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Panel de Usuarios
            </Typography>
            <img 
              src="/src/images/usericon.png"  
              alt="Ropa" 
              style={{ width: '3%', height: 'auto', borderRadius: '8px', marginLeft: '10px' }} 
            />
          </Box>

          <Box sx={{ maxWidth: '80%', margin: '0 auto', padding: '10px' }}>
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f9b0c3' }}>
                    <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>ID</TableCell>
                    <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Imagen</TableCell>
                    <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Nombre</TableCell>
                    <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Rol</TableCell>
                    <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Tipo de Aprendizaje</TableCell>
                    <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={user.idusuario} sx={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9F9F9', '&:hover': { backgroundColor: '#F9E2E8' } }}>
                      <TableCell align="center">{user.idusuario}</TableCell>
                      <TableCell align="center" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar src={user.foto} alt={user.nombre} />
                      </TableCell>
                      <TableCell align="center">{user.nombre}</TableCell>
                      <TableCell align="center">{user.rol}</TableCell>
                      <TableCell align="center">{user.tipo_aprendizaje}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => handleEdit(user)} sx={{ color: '#46467A', '&:hover': { color: '#7766c6' } }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(user.idusuario)} sx={{ color: 'error.main', '&:hover': { color: 'error.dark' } }}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default User_Home;
