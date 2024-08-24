import NavBar from '../components/NavBar_Home';
import Presentacion_Home from '../components/Presentacion_Home';
import Body_Home from '../components/Body_Home'
import Footer_Home from '../components/Footer_Home';
import "../styles/MainHome.css";

function Home() {
  
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