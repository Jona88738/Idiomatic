import { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar_Home';
import '../styles/App.css';

const LoginPage = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [datos, setDatos] = useState({});
  const navigate = useNavigate();

  // useEffect para llamar a la API
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
    console.log(datos.correo);

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
      <nav className="navbar">
        <img src="/images/Logo.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/courses">Cursos</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><button className="create-account-btn">Crear cuenta</button></li>
        </ul>
      </nav>

      <div className="login-container">
        {/* Sección Izquierda */}
        <div className="welcome-section">
          <h2>¿Nuevo/a aquí?</h2>
          <p>¡Bienvenido/a! 🎉 Aprende inglés con nosotros. ¡Explora, practica y disfruta del viaje lingüístico!</p>
          <button className="register-button" onClick={() => window.location.href = '/register'}>Registrarme</button>
          {/* <img src="/images/fondo_login.png" alt="Ilustración" className="welcome-img" /> */}
        </div>

        {/* Sección Derecha (Formulario) */}
        <div className="form-section">
          <h2>Iniciar sesión</h2>
          <form onSubmit={enviarDatos} className="login-form">
            <TextField id="outlined-basic" label="Usuario" name='correo' variant="outlined" onChange={handleChange} />
            <br />
            <br />
            <TextField id="outlined-basic2" label="Password" name='contraseña' type="password" onChange={handleChange} />
            <br />
            <br />
            <button type="submit" className="login-btn">Ingresar</button>
          </form>
          <p className="social-login-text">Ingresa con</p>
          <div className="social-login-buttons">
            <button className="social-btn google">Google</button>
            <button className="social-btn facebook">Facebook</button>
            <button className="social-btn apple">Apple</button>
          </div>
        </div>
      </div>

      <div className="dashboard-buttons">
        <h1>Login</h1>
        <button className="redirect-btn" onClick={() => window.location.href = '/User_Home'}>
          Te lleva a la vista del<br />Dashboard User
        </button>
        <br /><br />
        <button className="redirect-btn" onClick={() => window.location.href = '/Admin_Home'}>
          Te lleva a la vista del<br />Dashboard Administrador
        </button>
        <br /><br />
        <button className="redirect-btn" onClick={() => window.location.href = '/TestAprendizaje'}>
          Te lleva a la<br />vista Test Aprendizaje
        </button>
        <br /><br />
        <button className="redirect-btn" onClick={() => window.location.href = '/TestIngles'}>
          Te lleva a la vista<br />Test Inglés
        </button>
      </div>

      {/* Si se recibe userData, lo mostramos */}
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
