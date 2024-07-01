import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TestAprendizaje from './TestAprendizaje';


import Login from './Login';
import Home from './Home';
import Sign_up from './Sign_up';
import Error404 from './Error404'

function App() {
  

  return (
    <>
      <BrowserRouter>
           <Routes>

                <Route  path='/' element={<Home/>} />
                <Route  path='/TestAprendizaje' element={<TestAprendizaje/>} />
                <Route  path='/Login' element={<Login/>} />
                <Route  path='/Sign_up' element={<Sign_up/>} />
                <Route  path='*' element={<Error404/>} />
                


           </Routes>
      
      </BrowserRouter>
     
      

      

    </>
  )
}

export default App
