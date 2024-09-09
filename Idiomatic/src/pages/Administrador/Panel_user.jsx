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

function User_Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from API
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit user with ID: ${id}`);
    // Navigate to edit page or open a modal for editing
  };

  const handleDelete = (id) => {
    console.log(`Delete user with ID: ${id}`);
    // Call API to delete user and update state
  };

  return (
    <Container>
      {/* Rectángulo con título */}
      <Box 
        sx={{
          backgroundColor: '#F8D7DA', 
          borderRadius: '8px', 
          padding: '16px',  
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px' 
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Panel de Usuarios
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Idioma</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <Avatar src={user.image} alt={user.name} />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.language}</TableCell>
                <TableCell>{user.type}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default User_Home;
