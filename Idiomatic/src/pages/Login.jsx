import React, { useEffect, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar_Home';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/App.css';

const schema = yup.object().shape({
  correo: yup
    .string()
    .email('No es un correo válido')
    .required('El correo es requerido'),
  contraseña: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    fetch("/api/signUser?nombre=Jonathan")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const onSubmit = methods.handleSubmit((data) => {
    fetch(`/api/signUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo: data.correo,
        password: data.contraseña,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.resultado === "true") {
          // Verificar el rol y redirigir a la página correspondiente
          if (res.rol === 1) {
            navigate("/Admin_Home");  // Redirigir al dashboard de administrador
          } else if (res.rol === 0) {
            navigate("/User_Home");   // Redirigir al dashboard de usuario
          } else {
            console.log("Rol no válido");
          }
        } else {
          console.log("El usuario no existe o credenciales incorrectas");
        }
      })
      .catch(error => {
        console.error("Hubo un error", error);
      });
  });
  
  

  return (
    <div className="login-page">
      <NavBar />

      <div className="login-container">
        {/* Sección Izquierda */}
        <div className="welcome-section">
  <h2 className="new-here-heading">¿Nuevo/a aquí?</h2>
  <p>¡Bienvenido/a! 🎉 Aprende inglés con nosotros. </p>
  <p>¡Explora, practica y disfruta del viaje lingüístico!</p>
  <button className="register-button" onClick={() => window.location.href = '/Sign_up'}>Registrarse</button>
</div>

<div className="form-section">
  <h2 className="sign-in-heading">Sign In</h2>



          <FormProvider {...methods}>
            <form onSubmit={onSubmit} className="login-form">
              <TextField
                name='correo'
                variant="outlined"
                fullWidth
                placeholder="Usuario o correo electrónico"
                error={!!methods.formState.errors.correo}
                helperText={methods.formState.errors.correo?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailIcon />
                    </InputAdornment>
                  ),
                  style: { 
                    padding: '12px', 
                    fontSize: '1rem',
                    border: 'none',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  }
                }}
                {...methods.register('correo')}
              />
              <br /><br />

              <TextField
                name='contraseña'
                type="password"
                variant="outlined"
                fullWidth
                placeholder="****************"
                error={!!methods.formState.errors.contraseña}
                helperText={methods.formState.errors.contraseña?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  style: { 
                    padding: '12px', 
                    fontSize: '1rem',
                    border: 'none',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  }
                }}
                {...methods.register('contraseña')}
              />
              <br /><br />

              <p style={{ textAlign: 'center' }}>
                <a href="/PasswordRecovery" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
              </p>
              <button type="submit" className="login-btn">Ingresar</button>
              <div className="line-below"></div>

            </form>
          </FormProvider>

          <p className="social-login-text">Ingresar con</p>
          <div className="social-login-buttons">
            <button className="social-btn google">
              <GoogleIcon style={{ marginRight: '8px' }} />
              Google
            </button>
            <button className="social-btn facebook">
              <FacebookIcon style={{ marginRight: '8px' }} />
              Facebook
            </button>
            <button className="social-btn apple">
              <AppleIcon style={{ marginRight: '8px' }} />
              Apple
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default LoginPage;
