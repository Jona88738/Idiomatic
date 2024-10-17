// pruebas.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Para simular la navegación
import LoginPage from './Login'; // Asegúrate de poner la ruta correcta
import { describe, it, expect, vi } from 'vitest';

describe('LoginPage Component', () => {
  
  it('renders login form correctly', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Verifica que los elementos principales están en el documento
    expect(screen.getByPlaceholderText(/Usuario o correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/****************/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  });

  it('displays validation errors when form is submitted empty', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Simular el envío del formulario sin datos
    fireEvent.click(screen.getByText(/Ingresar/i)); // El botón de enviar

    // Verificar que los mensajes de error aparezcan
    await waitFor(() => {
      expect(screen.getByText(/El correo es requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/La contraseña es requerida/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    // Mockear fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ resultado: 'true', rol: 0 }) // Simula una respuesta exitosa de un usuario
      })
    );

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Rellenar los campos del formulario
    fireEvent.change(screen.getByPlaceholderText(/Usuario o correo electrónico/i), {
      target: { value: 'test@correo.com' }
    });
    fireEvent.change(screen.getByPlaceholderText(/****************/i), {
      target: { value: 'password123' }
    });

    // Simular el envío del formulario
    fireEvent.click(screen.getByText(/Ingresar/i));

    // Verificar que el fetch fue llamado con los parámetros correctos
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/signUser'), expect.anything());
    });

    // Limpieza del mock
    global.fetch.mockClear();
  });
});
