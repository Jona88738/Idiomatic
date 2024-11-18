import React, { useState, useEffect } from 'react';
import { TextField, Button, InputAdornment, IconButton, Container, Typography, Box } from '@mui/material'; // Agrega Box aquí
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import NavBar from '../components/NavBar_Home';
import { Email, Lock, LockOpen, Visibility, VisibilityOff } from '@mui/icons-material'; // Asegúrate de importar Visibility y VisibilityOff también
import '../styles/UpdatePass.css';


// Esquema de validación
const schema = yup.object().shape({
  email: yup.string().email('Correo inválido').required('Correo es requerido'),
  newPass: yup
    .string()
    .min(8, 'Debe tener al menos 8 caracteres')
    .required('Contraseña es requerida'),
  newConfirmPass: yup
    .string()
    .oneOf([yup.ref('newPass')], 'Las contraseñas no coinciden')
    .required('Confirmación es requerida'),
});

// Servicio para actualizar la contraseña
const UpdatePasswordService = async ({ email, newPass }) => {
  const response = await fetch('http://localhost:3001/api/update-password', {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, newPass }),
    credentials: 'include',
  });

  if (!response.ok) {
    const errorData = await response.json(); // Obtener los detalles del error
    console.error('Error detallado:', errorData);  // Imprimir detalles en consola
    throw new Error(errorData.message || 'Error al actualizar la contraseña');
  }

  return response.json();  // Respuesta exitosa
};

const UpdatePassword = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      newPass: '',
      newConfirmPass: '',
    },
    resolver: yupResolver(schema),
  });

  const { setValue, handleSubmit, formState: { errors } } = methods;
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const emailFromURL = queryParams.get('correo'); 
    const emailLocalStorage = localStorage.getItem('email');
    const emailToSet = emailFromURL || emailLocalStorage || ''; 
    setValue('email', emailToSet);
  }, [setValue]);

  const { mutateAsync, isError, error, isSuccess, isLoading } = useMutation({
    mutationFn: UpdatePasswordService,
  });

  const onSubmit = handleSubmit(async ({ email, newPass }) => {
    try {
      await mutateAsync({ email, newPass });
      methods.reset();
      localStorage.removeItem('email');
    } catch (err) {
      console.error('Error al actualizar la contraseña:', err.message);
      alert('No se pudo actualizar la contraseña. Inténtelo más tarde.');
    }
  });

  return (
    <div className="update-password-page">
      <NavBar />
      <Container className="forgot-password-container" sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px', maxWidth: 300}}>
        <Box className="login-card" sx={{ width: '100%', maxWidth: 750, padding: 2, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="h5" className="title" sx={{ fontSize: '2rem', marginBottom: 1.5, marginTop: "-10px", fontFamily:'Century Gothic', fontWeight: 'bold'}}>
            Actualización de Contraseña
          </Typography>

          <FormProvider {...methods}>
            <form onSubmit={onSubmit} className="forgot-password-form">
            <TextField
        name="email"
        variant="outlined"
        fullWidth
        type="email"
        placeholder="Correo electrónico"
        {...methods.register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        sx={{
          marginBottom: 2,
          '& .MuiInputLabel-root': { fontSize: '1.1rem' },
          '& .MuiInputBase-root': { fontSize: '1rem' },
          '& .MuiOutlinedInput-root': {
            border: '2px solid #333',
            '&:hover fieldset': {
              borderColor: '#555',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        name="newPass"
        variant="outlined"
        fullWidth
        type={showPassword ? 'text' : 'password'}
        placeholder="Nueva contraseña"
        error={!!errors.newPass}
        helperText={errors.newPass?.message}
        {...methods.register('newPass')}
        sx={{
          marginBottom: 2,
          '& .MuiInputLabel-root': { fontSize: '1.1rem' },
          '& .MuiInputBase-root': { fontSize: '1rem' },
          '& .MuiOutlinedInput-root': {
            border: '2px solid #333',
            '&:hover fieldset': {
              borderColor: '#555',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton 
  onClick={() => setShowPassword(!showPassword)} 
  sx={{
    color: '#666',
    '&:hover': {
      backgroundColor: '#f0f0f0', // Fondo gris claro al pasar el ratón
    },
    '&:focus': {
      outline: 'none', // Elimina el contorno al hacer clic
      backgroundColor: '#e0e0e0', // Fondo gris más oscuro cuando tiene foco
    },
  }}
>
  {showPassword ? <Visibility sx={{ color: '#666' }} /> : <VisibilityOff sx={{ color: '#444' }} />}
</IconButton>


            </InputAdornment>
          ),
        }}
      />

      <TextField
        name="newConfirmPass"
        variant="outlined"
        fullWidth
        type={showPassword ? 'text' : 'password'}
        placeholder="Confirmar contraseña"
        error={!!errors.newConfirmPass}
        helperText={errors.newConfirmPass?.message}
        {...methods.register('newConfirmPass')}
        sx={{
          marginBottom: 2,
          '& .MuiInputLabel-root': { fontSize: '1.1rem' },
          '& .MuiInputBase-root': { fontSize: '1rem' },
          '& .MuiOutlinedInput-root': {
            border: '2px solid #333',
            '&:hover fieldset': {
              borderColor: '#555',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpen />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
               <IconButton 
  onClick={() => setShowPassword(!showPassword)} 
  sx={{
    color: '#666',
    '&:hover': {
      backgroundColor: '#f0f0f0', // Fondo gris claro al pasar el ratón
    },
    '&:focus': {
      outline: 'none', // Elimina el contorno al hacer clic
      backgroundColor: '#e0e0e0', // Fondo gris más oscuro cuando tiene foco
    },
  }}
>
  {showPassword ? <Visibility sx={{ color: '#666' }} /> : <VisibilityOff sx={{ color: '#444' }} />}
</IconButton>

            </InputAdornment>
          ),
        }}
      />


              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  sx={{ width: '48%' }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Cargando...' : 'Actualizar contraseña'}
                </Button>

                <Button 
                  href="/Login" 
                  variant="contained" 
                  sx={{
                    width: '78%',
                    borderRadius: '20px',
                    marginLeft:'15px',
                    backgroundColor: '#f9b0c3',
                    '&:hover': {
                    backgroundColor: '#7766C6', // Fondo gris claro al pasar el ratón
                     }
                  }}
                >
                  Volver a Login
                </Button> 
              </Box>
            </form>
          </FormProvider>

          {isSuccess && (
  <Typography variant="body1" className="success-message" sx={{ color: '#46467a', fontWeight: 'bold' }}>
    ¡Excelente! Tu contraseña se actualizó con éxito.
  </Typography>
)}


{isError && (
  <Typography variant="body1" className="error-message" sx={{   color: rgb(158, 5, 5) , fontWeight: 'bold' }}>
    {error?.message || 'Parece que hubo un error al intentar actualizar tu contraseña. Por favor, inténtalo más tarde.'}
  </Typography>
)}

        </Box>
      </Container>
    </div>
  );
};

export default UpdatePassword;
