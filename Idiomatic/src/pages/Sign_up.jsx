import { useState } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar_Home';
import UserIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import '../styles/App.css'; 
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

    fetch('/api/register', {
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
          navigate('/User_Home');
        } else {
          console.log('Error de registro');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="register-page" style={{ backgroundImage: `url('/src/images/fondo2s.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <NavBar />
      <div className="register-container">
        {/* Sección Izquierda */}
        <div className="register-section">
          <h2>Sign Up</h2>
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
            <Button className= "sign-up-button" type="submit" variant="contained" color="primary" fullWidth>
              Registrarse
            </Button>
            <p>o regístrate usando</p>
            <div className="social-login">
              <Button className="social-btn google">Google</Button>
              <Button className="social-btn facebook">Facebook</Button>
              <Button className="social-btn apple">Apple</Button>
            </div>
          </form>
        </div>

        {/* Sección Derecha */}
        <div className="welcome-section">
          <h2>¿Uno de nosotros?</h2>
          <p>¡Hola de nuevo! ¡Sigue aprendiendo y practicando con nosotros!</p>
          <Button className="sign-in-button" onClick={() => window.location.href = '/Panel_user'}>Iniciar sesión</Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
