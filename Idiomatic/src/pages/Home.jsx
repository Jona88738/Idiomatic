import { useState } from 'react'
import NavBar from '../components/NavBar';
import Presentacion_Home from '../components/Presentacion_Home';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar/>
      <h1>Home</h1>
      <Presentacion_Home/>

      

    </>
  )
}

export default Home