// Register.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { Head } from '../components/ApartadosCursos';
import Tipo_Aprendizaje from './Home_user/User_Tipo_Aprendizaje';

 describe("test del componente Head",() =>{

  test("Visualizacion del componente",() =>{

    render(<Head ruta={"/logo.png"} title="Visual" mycolor="blue"/>);
    expect(screen.getByText("Visual")).toBeDefined()

  })
    
 })

  describe("testTipoAprendizaje",() =>{
      test("Visualizacion del  componen",() =>{

        render(

          <MemoryRouter>

            <Tipo_Aprendizaje suscripcion={0} tipoAprendizaje={"Visual"}/>
          </MemoryRouter>


        );
        expect(screen.getAllByText("Visual")).toBeDefined()
      })

      test("Ejecucion de un componente", () =>{

        render(
          <MemoryRouter>

            <Tipo_Aprendizaje suscripcion={0} tipoAprendizaje={""}/>
          </MemoryRouter>
        )
      })


  })

// // Mock fetch to simulate the API call
// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ success: true, rol: 2 }),
//   })
// );

// describe('Register Component', () => {
//   it('should show an error when passwords do not match', () => {
//     render(
//       <MemoryRouter>
//         <Register />
//       </MemoryRouter>
//     );

//     // Fill in form fields
//     fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'testuser' } });
//     fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'test@example.com' } });
//     fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });
//     fireEvent.change(screen.getByPlaceholderText('Confirmar contraseña'), { target: { value: 'password124' } });

//     // Submit the form
//     fireEvent.click(screen.getByText('Registrarse'));

//     // Check for alert
//     expect(screen.queryByText('Las contraseñas no coinciden')).toBeTruthy();
//   });

//   it('should proceed with registration if data is correct', async () => {
//     render(
//       <MemoryRouter>
//         <Register />
//       </MemoryRouter>
//     );

//     // Fill in form fields with matching passwords
//     fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'testuser' } });
//     fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'test@example.com' } });
//     fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });
//     fireEvent.change(screen.getByPlaceholderText('Confirmar contraseña'), { target: { value: 'password123' } });

//     // Spy on window alert to check if registration succeeded
//     const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

//     // Submit the form
//     fireEvent.click(screen.getByText('Registrarse'));

//     // Wait for async operations to complete
//     await screen.findByText('Usuario registrado exitosamente');
    
//     // Check if the alert has been called with success message
//     expect(alertSpy).toHaveBeenCalledWith('Usuario registrado exitosamente');

//     // Restore the alert spy after the test
//     alertSpy.mockRestore();
//   });
// });
