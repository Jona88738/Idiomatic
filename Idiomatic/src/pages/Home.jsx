import { useState } from 'react'
import NavBar from '../components/NavBar_Home';
import Presentacion_Home from '../components/Presentacion_Home';
import Body_Home from '../components/Body_Home'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar/>
      
      <Presentacion_Home/>
      <Body_Home/>
      

    </>
  )
}

export default Home