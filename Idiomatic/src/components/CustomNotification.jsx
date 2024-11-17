import React from 'react';
import '../styles/CustomNotification.css';

const CustomNotification = ({ message, subMessage, buttons, icon, onClose }) => {
  return (
    <div className="custom-notification">
      <div className="notification-content">
        {icon && <img src={icon} alt="Icon" className="notification-icon" />}
        <h3>{message}</h3>
        {subMessage && <p>{subMessage}</p>}
        <div className="notification-buttons">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`btn-${button.type}`}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default CustomNotification;
