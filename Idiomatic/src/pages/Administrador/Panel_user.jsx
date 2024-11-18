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
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import AdminMenu from '../../components/NavBar_admin'; // Importa el menú de administración
import Notificacion from '../../components/ComponenteNotificacion/Notificacion';


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
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          padding: '20px', 
          width: '100%', 
          height: '100vh' 
        }}
      >

        {/* Menú de Administración */}
        <Box sx={{ 
          width: { xs: '100%', sm: '20%' }, 
          marginRight: { xs: '0', sm: '20px' },
          order: { xs: 2, sm: 1 },
        }}>
          <AdminMenu /> {/* Aquí se renderiza el menú de administración */}
        </Box>

        {/* Contenido principal */}
        <Box sx={{ 
          width: { xs: '100%', sm: '80%' }, 
          padding: '20px', 
          order: { xs: 1, sm: 2 }, 
        }}>
          <Box 
            sx={{
              backgroundColor: '#E0DFFD', 
              borderRadius: '10px', 
              padding: '26px',  
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px', 
              marginTop: '-10px'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' , fontFamily: 'Century Gothic'}}>
              Panel de Usuarios
            </Typography>
            <img 
              src="/images/usericon.png"  
              alt="Ropa" 
              style={{ width: '3%', height: 'auto', borderRadius: '8px', marginLeft: '10px' }} 
            />
          </Box>

          <Box sx={{ maxWidth: '100%', margin: '0 auto', padding: '10px', marginTop: '-10px', overflowX: 'auto' }}>
  <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: '#ffc212' }}>
          <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' , fontFamily: 'Century Gothic'}}>ID</TableCell>
          <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' , fontFamily: 'Century Gothic' }}>Imagen</TableCell>
          <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' , fontFamily: 'Century Gothic'}}>Nombre</TableCell>
          <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' , fontFamily: 'Century Gothic'}}>Rol</TableCell>
          <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' , fontFamily: 'Century Gothic'}}>Tipo de Aprendizaje</TableCell>
          <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' , fontFamily: 'Century Gothic'}}>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={user.idusuario} sx={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9F9F9', '&:hover': { backgroundColor: '#F7F1F1' } }}>
            <TableCell align="center" fontFamily= 'Century Gothic'>{user.idusuario}</TableCell>
            <TableCell align="center" sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar src={user.foto} alt={user.nombre} />
            </TableCell>
            <TableCell align="center" fontFamily= 'Century Gothic'>{user.nombre}</TableCell>
            <TableCell align="center" fontFamily= 'Century Gothic'>{user.rol}</TableCell>
            <TableCell align="center" fontFamily= 'Century Gothic'>{user.tipo_aprendizaje}</TableCell>
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
      {/* Modal de Edición */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        PaperProps={{
          sx: {
            padding: 2,
            backgroundImage: 'url(/images/fondomodal.png)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
            width: '600px'
          },
        }}
      >
        <DialogTitle sx={{ backgroundColor: '#E0DFFD', color: '#46467A', textAlign: 'center', fontWeight: 'bold', borderRadius: '20px', marginBottom: '20px' }}>
          Editar Usuario
        </DialogTitle>
        <DialogContent>
          {/* Etiqueta y campo de entrada para Nombre */}
          <Typography variant="subtitle1" sx={{ color: '#46467A', fontWeight: 'bold' }}>Nombre</Typography>
          <TextField
            margin="dense"
            type="text"
            fullWidth
            name="nombre"
            value={selectedUser?.nombre || ''}
            onChange={handleInputChange}
          />

          {/* Etiqueta y Select para Rol */}
          <Typography variant="subtitle1" sx={{ marginTop: 2, color: '#46467A', fontWeight: 'bold' }}>Rol</Typography>
          <Select
            margin="dense"
            fullWidth={false}
            sx={{ width: '250px', backgroundColor: '#EDEDFC' }}
            name="rol"
            value={selectedUser?.rol || ''}
            onChange={handleInputChange}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em>Selecciona un rol</em>
            </MenuItem>
            <MenuItem value={0}>Usuario</MenuItem>
            <MenuItem value={1}>Administrador</MenuItem>
          </Select>

          {/* Etiqueta y Select para Tipo de Aprendizaje */}
          <Typography variant="subtitle1" sx={{ marginTop: 2, color: '#46467A', fontWeight: 'bold' }}>Tipo de Aprendizaje</Typography>
          <Select
            margin="dense"
            fullWidth={false}
            sx={{ width: '250px', backgroundColor: '#EDEDFC' }}
            name="tipo_aprendizaje"
            value={selectedUser?.tipo_aprendizaje || ''}
            onChange={handleInputChange}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em>Selecciona el tipo de aprendizaje</em>
            </MenuItem>
            <MenuItem value="Kinestésico">Kinestésico</MenuItem>
            <MenuItem value="Visual">Visual</MenuItem>
            <MenuItem value="Auditivo">Auditivo</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)} sx={{ backgroundColor: '#E0DFFD', color: '#000000', borderRadius: '5px', '&:hover': { backgroundColor: '#ffc212' } }}>
            Cancelar
          </Button>
          <Button onClick={handleSaveChanges} sx={{ backgroundColor: '#7766c6', borderRadius: '5px', color: '#000000', '&:hover': { backgroundColor: '#E0DFFD' } }}>
            Guardar Cambios
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default User_Home;
