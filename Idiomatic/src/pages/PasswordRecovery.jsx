import React, { useState } from 'react';
import NavBar from '../components/NavBar_Home';
import { TextField, InputAdornment, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/PasswordRec.css';

// Definición del esquema de validación
const schema = yup.object().shape({
  correo: yup
    .string()
    .email('No es un correo válido')
    .required('El correo es requerido'),
});

const ForgotPasswordPage = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      const response = await fetch('/api/Password-Recovery', { // Asegúrate de que la ruta sea correcta
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailRecovery: data.correo }),
      });

      const result = await response.json();
      if (result.success) {
        setConfirmationMessage(
          'Lo sentimos, el correo ingresado no está registrado.'        );
      } else {
        setConfirmationMessage('Correo enviado. Por favor, revisa tu bandeja de entrada!.');
      }
    } catch (error) {
      setConfirmationMessage('Ocurrió un error, por favor intenta nuevamente.');
      console.error('Error:', error);
    }
  });

  return (
    <div className="forgot-password-page">
      <NavBar />
      <div className="forgot-password-container">
        <div className="login-card">
          <h2>Recuperar Contraseña</h2>
          <FormProvider {...methods}>
            <form onSubmit={onSubmit} className="forgot-password-form">
              <TextField
                name="correo"
                variant="outlined"
                fullWidth
                placeholder="Correo electrónico"
                error={!!methods.formState.errors.correo}
                helperText={methods.formState.errors.correo?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                {...methods.register('correo')}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Enviar instrucciones
              </Button>
            </form>
          </FormProvider>
          {confirmationMessage && (
            <p className="confirmation-message">{confirmationMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
