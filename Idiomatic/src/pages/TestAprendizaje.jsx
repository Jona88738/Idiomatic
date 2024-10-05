import { useState } from 'react'
import { Button, Container, colors } from "@mui/material";
import { Radio } from '@mui/material';


function TestAprendizaje() {
  const [count, setCount] = useState(0)

  function handleContador(){
    setCount(count+1);
  }
  return (
    <div style={{backgroundImage: "url('/src/images/TestAprendizaje/prueba.png')",backgroundSize:"cover",backgroundPosition: "center",height:"150vh"}}>
      <Container >
      <img style={{float:"left",position:"absolute",left:"16%"}} src="/src/images/TestAprendizaje/libro.png" width="7%"/>
      <img style={{float:"right",position:"absolute",right:"16%"}} src="/src/images/TestAprendizaje/materialEscolar.png" width="7%"/>
      
      <h1 style={{textAlign:'center',fontSize:'3vw'}}>Test de estilos de aprendizaje</h1>
      
      </Container>
       
      
      </div>
  )
}

export default TestAprendizaje