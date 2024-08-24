import { useState } from 'react'


import NavBar from '../components/NavBar_Home';
import './styles/Register.css'; // Asegúrate de importar el archivo CSS para los estilos.

function Register() {
  return (
    <>
      <NavBar />
      <div className="register-container">
        {/* Sección Izquierda */}
        <div className="register-section">
          <h2>Sign Up</h2>
          <form className="register-form">
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="nombre de usuario" />
            </div>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="correo electrónico" />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="*********" />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="confirmacion de contraseña" />
            </div>
            <button type="submit" className="sign-up-button">Sign Up</button>
            <p>o registrate usando</p>
            <div className="social-login">
              <i className="fab fa-google"></i>
              <i className="fab fa-facebook"></i>
              <i className="fas fa-times"></i>
            </div>
          </form>
        </div>

        {/* Sección Derecha */}
        <div className="welcome-section">
          <h2>¿Uno de nosotros?</h2>
          <p>¡Hola de nuevo! ¡Sigue aprendiendo y practicando con nosotros!</p>
          <button className="sign-in-button">Sign In</button>
         {/*} <img src="imagen.png" alt="Imagen de bienvenida" className="welcome-image" />*/}
        </div>
      </div>
    </>
  );
}

export default Register;
