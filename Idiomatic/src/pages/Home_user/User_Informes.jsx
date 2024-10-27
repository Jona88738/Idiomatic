import { useState } from 'react'
import Container from '@mui/material/Container';
import { Gauge, gaugeClasses,BarChart,LineChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import '../../styles/StyleHomeUser/UserInformes.css';

function User_Informes({dataUser}) {
  const [count, setCount] = useState(0)

    console.log(dataUser)
    const fechaActual = new Date();
    const fechaLegible = fechaActual.toLocaleDateString(); // Devuelve la fecha en formato local
    

   function BasicPie() {
    return (
      <PieChart
       className='PieChartt'
        series={[
          {
            data: [
              { id: 0, value: dataUser.completeVideo[0].Total === 0 ? (1):(dataUser.completeVideo[0].Total ) , label: 'Videos' },
              { id: 1, value: dataUser.completeAudio[0].Total === 0 ? (1):(dataUser.completeAudio[0].Total ) , label: 'Audios' },
              { id: 2, value: dataUser.completeEjercicio[0].Total === 0 ? (1):(dataUser.completeEjercicio[0].Total ) , label: 'Ejercicios' },
            ],
          },
        ]}
        
      />
    );
  }

  return (
    <>
      
      <Container className='ContainerTitleI' >
          <h1 className='TitleInfor' >Informes</h1>
          <h3 className='subInfor' >Resumen sobre tus cursos</h3>
          <img className='imgContainerIn' src="/images/iconoInformes.svg" width="20%"    alt="Logo de mi página"/>
        
        </Container>

        <h1 className='fechaInf'>{fechaLegible}</h1>
      
        <Container className='ContaBodyInfor' >
          
              <Container className='ContainerProgreso' >
                  <h2 className='titleProgreso' >Progreso General</h2>  

                  <Gauge width={130} height={135} value={dataUser.progresoGeneral} className='progresoGauge'  
                        innerRadius="78%"
                        outerRadius="99%"
                        text={
                                ({ value}) => `${value}%`
                              } 
                              sx={{marginLeft:"15%",

                                [`& .${gaugeClasses.valueText}`]: {
                                  fontSize: 20,
                                  transform: 'translate(0px, 0px)',
                                }, 

                              }} 
                               />

                  <h2 className='titleInglesInf'>Ingles</h2>
                
              </Container>     

              <Container>
                  <h2 className='HoraMInformes' >Horas por mes</h2>  

                  <Container className='ContainerHoraInfor'>
                    <h2 className='titleHoraIngles' >Ingles</h2>
                    <h1 className='HoraInfor' >
                      
                      {
                      dataUser.tiempoHoras === 0 ? (dataUser.tiempoMinutos+" Min" ):(dataUser.tiempoHoras+":"+dataUser.tiempoMinutos+"Hrs" )
                      
                      
                      } </h1>
                  </Container>
              </Container>

              <Container className='containerProgresoApartado'>
                  <h2 className='ProgresoApartado' >Progreso por apartado</h2>  


                  <BasicPie />

                  
                
              </Container> 

          
        </Container>   

       
    </>
  )
}

export default User_Informes;