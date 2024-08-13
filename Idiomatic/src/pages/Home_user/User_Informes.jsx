import { useState } from 'react'
import Container from '@mui/material/Container';
import { Gauge, gaugeClasses,BarChart,LineChart } from '@mui/x-charts';

function User_Informes({dataUser}) {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Container sx={{background:'rgba(249, 176, 195, 1)',width:'100%',borderRadius:'50px', margin:'0'}}>
          <h1 style={{color:'black',left:'20%',fontSize:'4vw'}}>Informes</h1>
          <h3 style={{color:'black',textAlign:'center',fontSize:'2vw'}}>Resumen sobre tus cursos</h3>
          <img src="/src/images/iconoInformes.svg" width="25%"  style={{position:'absolute',right:'20px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
        </Container>

        <h1 style={{fontSize:'2vw', boxShadow:'0px 3px 1px rgba(31, 25, 47, 0.5) '}}>Lunes (Fecha)</h1>
      
        <Container sx={{display:"flex"}}>
          
              <Container sx={{border:"2px solid rgba(224, 224, 224, 1)",borderRadius:"20px",width:"70%"}}>
                  <h2 style={{marginLeft:"25%"}}>Progreso General</h2>  

                  <Gauge width={130} height={135} value={dataUser.progresoGeneral}  
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

                              }} />

                  <h2 style={{marginLeft:"28%"}}>Ingles</h2>
                
              </Container>     

              <Container>
                  <h2 style={{textAlign:"center" }}>Horas por mes</h2>  

                  <Container sx={{background:"rgba(70, 70, 122, 1)",borderRadius:"25px",marginTop:"19%"}}>
                    <h2 style={{color:"white"}}>Ingles</h2>
                    <h1 style={{textAlign:"end",color:"white",fontSize:"3.5vw"}}>{dataUser.horasMes} Hrs</h1>
                  </Container>
              </Container>

              <Container>
                  <h2 style={{marginLeft:"17%"}}>Horas a la semana</h2>  

                  <BarChart
                      xAxis={[{ scaleType: 'band', data: ['L', 'M','Mi','J'] }]}
                      series={[{ data: [4,2,4,4] }, { data: [ ] }, { data: [] }]}
                      width={320}
                      height={300}
                    />
                
              </Container> 

          
        </Container>   

        <Container sx={{display:"flex",justifyContent:"center"}}>


       

        <LineChart sx={{marginRight:"5%"}}
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
/>
      
          </Container>
    </>
  )
}

export default User_Informes;