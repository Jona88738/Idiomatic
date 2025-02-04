// Register.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi, } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { Head } from '../components/ApartadosCursos';
import Tipo_Aprendizaje from './Home_user/User_Tipo_Aprendizaje';
import CompleteSentences from './ApartadoJuegos/CompleteSentences';

 describe("test del componente Head",() =>{

  const myMock = vi.fn(x => x +1).mockName("Primer Mock xD");

  // test("Visualizacion del componente",() =>{

  //   render(<Head ruta={"/logo.png"} title="Visual" mycolor="blue"/>);
  //   expect(screen.getByText("Visual")).toBeDefined()

  // })
  

  test("Primer test",() =>{

    console.log(myMock.getMockName())
    myMock(2);
    console.log(myMock.mock.calls)
    expect(2+2).toBeGreaterThan(1);
  })
    
 })

  // describe("testTipoAprendizaje",() =>{
  //     test("Visualizacion del  componen",() =>{

  //       render(

  //         <MemoryRouter>

  //           <Tipo_Aprendizaje suscripcion={0} tipoAprendizaje={"Visual"}/>
  //         </MemoryRouter>


  //       );
  //       expect(screen.getAllByText("Visual")).toBeDefined()
  //     })

  //     test("Ejecucion de un componente", () =>{

  //       render(
  //         <MemoryRouter>

  //           <Tipo_Aprendizaje suscripcion={0} tipoAprendizaje={""}/>
  //         </MemoryRouter>
  //       )
  //     })


  // })

  // describe("TestJuego",() => {
    
  //   test("TestInicial",() =>{


  //     const mockState = {
  //       recursoFront:  {"icono1": "/images/svgJuegos/cerebroLentes.svg", "icono2": "/images/svgJuegos/dogmirandoIzquierda.png", "btnColor": "rgba(146, 7, 255, 0.5)", "sentencia": ["I am", "You are", "He is a", "She is", "It is a"], "sentencia2": ["(froms / from) Mexico", "(very / a) beautiful ", "(doctors / doctor)", "(happy / run) ", "(beautiful / from) day"], "sentComplement": ["Mexico", "beautiful", "", "", "day"]
  //       // ,recursoEjercicio: ["I am", "You are", "He is a", "She is", "It is a"]
  //     },
  //     recursoEjercicio: ["I am", "You are", "He is a", "She is", "It is a"]
      
  //   };
  
  //     //
  //     render(
  //       <MemoryRouter  initialEntries={[{ pathname: '/CompleteSentences', state: mockState }]}>
  //         <CompleteSentences/>
  
  //         </MemoryRouter>
  //     )

  //   })

    
  // })
