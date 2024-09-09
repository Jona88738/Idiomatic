import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import NavBar from '../components/NavBar_Home';
import '../styles/UpdatePass.css';

// Esquema de validación
const schema = yup.object().shape({
  newPass: yup
    .string()
    .min(8, 'Debe tener al menos 8 caracteres')
    .required('Contraseña es requerida'),
  newConfirmPass: yup
    .string()
    .oneOf([yup.ref('newPass')], 'Las contraseñas no coinciden')
    .required('Confirmación es requerida'),
});

const UpdatePassword = ({ UpdatePasswordService }) => {
  const [passField, setPassField] = useState('');
  const { url, setUrl } = useUpdatePasswordContext();

  // Mutation para actualizar la contraseña
  const { mutateAsync, isError, error, isSuccess } = useMutation({
    mutationKey: ['UpdatePassword'],
    mutationFn: UpdatePasswordService,
  });

  // Obtener email del localStorage
  useEffect(() => {
    let email = localStorage.getItem('email');
    email = JSON.parse(email);
    setUrl(email);
  }, [url, setUrl]);

  // Formulario
  const methods = useForm({
    defaultValues: {
      newPass: '',
      newConfirmPass: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = methods.handleSubmit(async ({ newPass, newConfirmPass }) => {
    try {
      const response = await mutateAsync({
        request: {
          email: url,
          newPass: newPass,
        },
      });
      console.log(response);
      // Limpiar el formulario después del éxito
      methods.reset();
      localStorage.removeItem('email');
      setUrl('');
    } catch (error) {
      console.error('Error al actualizar la contraseña', error);
    }
  });

  return (
    <div className="update-password-page">
      <NavBar />
      <Container className="forgot-password-container">
        <Box className="login-card">
          <Typography variant="h5" className="title">
            Actualizacion de contraseña
          </Typography>

          <FormProvider {...methods}>
            <form onSubmit={onSubmit} className="forgot-password-form">
              <TextField
                name="newPass"
                label="Nueva Contraseña"
                variant="outlined"
                fullWidth
                type="password"
                placeholder="Nueva contraseña"
                error={!!methods.formState.errors.newPass}
                helperText={methods.formState.errors.newPass?.message}
                {...methods.register('newPass')}
              />

              <TextField
                name="newConfirmPass"
                label="Confirmar Contraseña"
                variant="outlined"
                fullWidth
                type="password"
                placeholder="Confirmar contraseña"
                error={!!methods.formState.errors.newConfirmPass}
                helperText={methods.formState.errors.newConfirmPass?.message}
                {...methods.register('newConfirmPass')}
              />

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Actualizar contraseña
              </Button>
            </form>
          </FormProvider>

          {isSuccess && (
            <Typography variant="body1" className="success-message">
              Contraseña actualizada correctamente.
            </Typography>
          )}

          {isError && (
            <Typography variant="body1" className="error-message">
              {error.message}
            </Typography>
          )}

          <Button href="/Login" variant="text" color="secondary">
            Volver a Login
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default UpdatePassword;
