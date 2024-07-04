import { useState } from 'react'
import { Button, Container, colors } from "@mui/material";
import { Radio } from '@mui/material';


function TestAprendizaje() {
  const [count, setCount] = useState(0)

  function handleContador(){
    setCount(count+1);
  }
  return (
    <>
      <Container sx={{background:'#E0DFFD'}}>

      <h1 style={{textAlign:'center',fontSize:'3vw'}}>Test de estilos de aprendizaje numero: {count}</h1>
      <Button onClick={handleContador}> Preciona</Button>

      <Radio background='green' sx={{accentColor:'rebeccapurple'}}/>

      <input type="radio" name="color"   style={{WebkitAppearance:'none',MozAppearance:'none',appearance:'none',padding:'3px',border:'2px solid blue',borderRadius:'50%',width:'50px',height:'50px',backgroundClip:'content-box',accentColor:'green'}}></input>
      </Container>
       
      
    </>
  )
}

export default TestAprendizaje