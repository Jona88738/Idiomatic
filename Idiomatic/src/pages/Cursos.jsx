import { useState } from 'react'


import NavBar from '../components/NavBar_Home';
function Cursos() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar/>
      <h1>Cursos</h1>

      

    </>
  )
}

export default Cursos