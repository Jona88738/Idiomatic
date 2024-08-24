import { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar_Home';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import '../styles/App.css';

const LoginPage = () => {
  const [userData, setUserData] = useState(null);
  const [datos, setDatos] = useState({});
  const navigate = useNavigate();

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

  function enviarDatos(event) {
    event.preventDefault();

    fetch(`/api/signUser?correo=${datos.correo}&password=${datos.contraseña}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.resultado);

        if (res.resultado === "true") {
          navigate("/User_Home");
        } else {
          console.log("El usuario no existe");
        }
      })
      .catch(error => {
        console.error("Hubo un Error", error);
      });
  }

  function handleChange(event) {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="login-page">
      <NavBar />

      <div className="login-container">
        {/* Sección Izquierda */}
        <div className="welcome-section">
          <h2>¿Nuevo/a aquí?</h2>
          <p>¡Bienvenido/a! 🎉 Aprende inglés con nosotros. </p>
          <p>¡Explora, practica y disfruta del viaje lingüístico!</p>
          <button className="register-button" onClick={() => window.location.href = '/Sign_up'}>Registrarme</button>
        </div>

        {/* Sección Derecha (Formulario) */}
        <div className="form-section">
          <h2>Sign In</h2>
          <form onSubmit={enviarDatos} className="login-form">
            <TextField
              name='correo'
              variant="outlined"
              fullWidth
              placeholder="Usuario o correo electrónico"
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
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              name='contraseña'
              type="password"
              variant="outlined"
              fullWidth
              placeholder="****************"
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
              onChange={handleChange}
            />
            <br />
            <br />
            <p style={{ textAlign: 'center' }}>
              <a href="/forgot-password" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
            </p>
            <button type="submit" className="login-btn">Ingresar</button>
          </form>
          <p className="social-login-text">Ingresa con</p>
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

      {userData && (
        <div className="user-info">
          <h2>Información del Usuario</h2>
          <p>{JSON.stringify(userData)}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
