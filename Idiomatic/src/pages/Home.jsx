import { useState } from 'react'
import NavBar from '../components/NavBar_Home';
import Presentacion_Home from '../components/Presentacion_Home';
import Body_Home from '../components/Body_Home'
import Footer_Home from '../components/Footer_Home';
import "../styles/MainHome.css";
import { Container, Typography  } from "@mui/material";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <NavBar/>
      
      <Presentacion_Home/>
      <Body_Home/>

      <Footer_Home />

    </>
  )
}

export default Home