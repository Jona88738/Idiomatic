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
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar_Home from '../../components/NavBar_Home'; 

function User_Home() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("/api/adminGetUsers")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (selectedUser) {
      // Aquí puedes hacer una llamada al backend para actualizar el usuario en la base de datos
      console.log('User updated:', selectedUser);
      setIsModalOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser(prev => ({ ...prev, [name]: value }));
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

  return (
    <Container maxWidth="false" disableGutters>
      <Box>
        <NavBar_Home />
      </Box>
      
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

      {/* Modal para edición */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 550, bgcolor: 'background.paper', p: 4, borderRadius: '10px', boxShadow: 24
        }}>
          <Typography variant="h6" gutterBottom>Editar Usuario</Typography>
          {selectedUser && (
            <>
              <TextField
                fullWidth
                margin="normal"
                label="Tipo de Aprendizaje"
                name="tipo_aprendizaje"
                value={selectedUser.tipo_aprendizaje}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Rol"
                name="rol"
                value={selectedUser.rol}
                onChange={handleChange}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" color="primary" onClick={handleSave}>Guardar</Button>
                <Button variant="outlined" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

export default User_Home;
