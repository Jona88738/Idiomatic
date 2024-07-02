import { useState } from 'react'


import NavBar from '../components/NavBar_Home';
function Nosotros() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar/>
      <h1>Nosotros</h1>

      

    </>
  )
}

export default Nosotros;