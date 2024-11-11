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
import TextField from '@mui/material/TextField';
import AdminMenu from '../../components/NavBar_admin'; // Importa el menú de administración

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
      <Container style={{ display: 'flex', padding: '20px', width: '100%', height: '100vh' }}>

        {/* Menú de Administración */}
        <Box sx={{ width: '20%', marginRight: '20px' }}>
          <AdminMenu /> {/* Aquí se renderiza el menú de administración */}
        </Box>

        {/* Contenido principal */}
        <Box sx={{ width: '80%', padding: '20px' }}>
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
              src="/src/images/usericon.png"  
              alt="Ropa" 
              style={{ width: '3%', height: 'auto', borderRadius: '8px', marginLeft: '10px' }} 
            />
          </Box>

          <Box sx={{ maxWidth: '100%', margin: '0 auto', padding: '10px', marginTop: '-10px' }}>
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
      </Container>

      {/* Modal de Edición */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        PaperProps={{
          sx: {
            padding: 2,
            backgroundImage: 'url(/src/images/fondomodal.png)', // Ruta a tu imagen de fondo
            backgroundSize: 'cover', // Ajusta la imagen para cubrir todo el fondo
            backgroundPosition: 'center', // Centra la imagen
            backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
            borderRadius: '12px',
          },
        }}
      >
        <DialogTitle sx={{ backgroundColor: '#E0DFFD', color: '#46467A', textAlign: 'center', fontWeight: 'bold' , borderRadius: '20px', marginBottom: '20px'}}>
          Editar Usuario
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Nombre"
            type="text"
            fullWidth
            name="nombre"
            value={selectedUser?.nombre || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Rol"
            type="text"
            fullWidth
            name="rol"
            value={selectedUser?.rol || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Tipo de Aprendizaje"
            type="text"
            fullWidth
            name="tipo_aprendizaje"
            value={selectedUser?.tipo_aprendizaje || ''}
            onChange={handleInputChange}
          />
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
