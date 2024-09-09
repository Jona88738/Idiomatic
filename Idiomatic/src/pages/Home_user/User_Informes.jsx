import { useState } from 'react'
import Container from '@mui/material/Container';
import { Gauge, gaugeClasses,BarChart,LineChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';

function User_Informes({dataUser}) {
  const [count, setCount] = useState(0)

   function BasicPie() {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 1, label: 'Videos' },
              { id: 1, value: 1, label: 'Audios' },
              { id: 2, value: 1, label: 'Ejercicios' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    );
  }

  return (
    <>
      
      <Container sx={{marginTop:"5% !important",background:'rgba(249, 176, 195, 1)',width:'100%',borderRadius:'50px', margin:'0'}}>
          <h1 style={{color:'black',left:'20%',fontSize:'4vw'}}>Informes</h1>
          <h3 style={{color:'black',textAlign:'center',fontSize:'2vw'}}>Resumen sobre tus cursos</h3>
          <img src="/src/images/iconoInformes.svg" width="20%"  style={{position:'absolute',right:'20px',top:'2px',minHeight:'25%'}}   alt="Logo de mi página"/>
        
        </Container>

        <h1 style={{fontSize:'2vw', boxShadow:'0px 3px 1px rgba(31, 25, 47, 0.5) ',marginBottom:"5%"}}>Lunes (Fecha)</h1>
      
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


                  <BasicPie />

                  
                
              </Container> 

          
        </Container>   

        <Container sx={{display:"flex",justifyContent:"center"}}>


       

        
      
          </Container>
    </>
  )
}

export default User_Informes;