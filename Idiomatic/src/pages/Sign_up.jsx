import { useState } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar_Home';
import UserIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import '../styles/Register.css';

function Register() {
  const [datos, setDatos] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  function handleChange(event) {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    if (datos.password !== datos.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
  
    // Realizar la solicitud al backend para crear un nuevo usuario
    fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          alert('Usuario registrado exitosamente');
  
          if (data.rol === 1) { 
            navigate('/Admin_Home'); // Redirige al dashboard de admin
          } else { 
            navigate('/Login'); // Redirige al dashboard de usuario. Modificacion de Jona
          }
        } else {
          alert('Error de registro. Inténtalo de nuevo.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema en el servidor. Inténtalo de nuevo más tarde.');
      });
  }
  

  return (
    <div className="register-page" style={{ backgroundImage: `url('/src/images/fondo2s.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <NavBar />
      <div className="register-container">
        {/* Sección Izquierda */}
        <div className="register-section">
          <h2 className="sign-up-heading">Sign Up</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <TextField
              name='username'
              variant="outlined"
              fullWidth
              placeholder="Nombre de usuario"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <UserIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              name='email'
              variant="outlined"
              fullWidth
              placeholder="Correo electrónico"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              name='password'
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Contraseña"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              name='confirmPassword'
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Confirmar contraseña"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <br />
            <br />
            <Button className="sign-up-button-reg" type="submit" variant="contained" color="primary" fullWidth>
              Registrarse
            </Button>
            
          </form>
        </div>

        {/* Sección Derecha */}
        <div className="welcome-section">
          <h2 className="one-of-us-heading">¿Uno de nosotros?</h2>
          <p>¡Hola de nuevo! ¡Sigue aprendiendo y practicando con nosotros!</p>
          <Button className="sign-in-button-reg" onClick={() => navigate('/Login')}>Iniciar sesión</Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
