import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TestAprendizaje from './TestAprendizaje';
import Login from './Login';
import Home from './Home';
import Sign_up from './Sign_up';
import PasswordRecovery from './PasswordRecovery'
import UpdatePassword from './UpdatePassword'
import Error404 from './Error404'
import Nosotros from './Nosotros';
import Cursos from './Cursos';
import User_Home from './Home_user/User_Home';
import User_Cursos from './Home_user/User_Cursos';
import User_Informes from './Home_user/User_Informes';
import User_Notificaciones from './Home_user/User_Notificaciones';
import User_Ajustes from './Home_user/User_Ajustes';
import Admin_Home from './Administrador/Admin_Home'
import TestIngles from './TestIngles';
import ApartadoEjercicios from './ApartadosCursos/ApartadoEjercicios';
import ApartadoVideos from './ApartadosCursos/ApartadoVideos';
import ApartadoLecturas from './ApartadosCursos/ApartadoLecturas';
import ApartadoAudio from './ApartadosCursos/ApartadoAudio';
import CompleteSentences from './ApartadoJuegos/CompleteSentences';
import DragImage from './ApartadoJuegos/DragImage';
import CreateSentences from './ApartadoJuegos/CreateSentences';
import Vocabulary from './ApartadoJuegos/Vocabulary'
import PageVideos from './ApartadoVideos/PageVideos';
import AudioIA from './ApartadoJuegos/AudioIA';
import EjercicioAudio from './ApartadoVLA/EjercicioAudio';
function App() {
  

  return (
    <>
      <BrowserRouter>
           <Routes>

                <Route  path='/' element={<Home/>} />
                <Route  path='/Login' element={<Login/>} />
                <Route  path='/Sign_up' element={<Sign_up/>} />
                <Route  path='/PasswordRecovery' element={<PasswordRecovery/>} />
                <Route  path='/UpdatePassword' element={<UpdatePassword/>} />

                <Route  path='/Nosotros' element={<Nosotros/>} />
                <Route  path='/Cursos' element={<Cursos/>} />

                <Route  path='/TestAprendizaje' element={<TestAprendizaje/>} />
                <Route  path='/TestIngles' element={<TestIngles/>} />

                <Route  path='/User_Home' element={<User_Home/>} />
                <Route  path='/User_Cursos' element={<User_Cursos/>} />


                <Route path='/Ejercicios' element={<ApartadoEjercicios/>} />
                <Route path='/Videos' element={<ApartadoVideos/>} />
                <Route path='/Lecturas' element={<ApartadoLecturas/>} />
                <Route path='/Audios' element={<ApartadoAudio/>} />
                
                {//Juegos
                }
                <Route path='/CompleteSentences' element={<CompleteSentences/>} />
                <Route path='/DragImage' element={<DragImage/>}/>
                <Route path='/CreateSentences' element={<CreateSentences/>} />
                <Route path='/Vocabulary' element={<Vocabulary/>} />


                {/* Ejercicio Audio*/}
                <Route path='/EjercicioAudio' element={<EjercicioAudio/>} />

                <Route path='/Video' element={<PageVideos/>} />
                <Route path='/AudioIA' element={<AudioIA/>} />
                
                {/*<Route  path='/User_Informes' element={<User_Informes/>} />*/
}
                <Route  path='/User_Notificaciones' element={<User_Notificaciones/>} />
                <Route  path='/User_Ajustes' element={<User_Ajustes/>} />

                <Route  path='/Admin_Home' element={<Admin_Home/>} />



                <Route  path='*' element={<Error404/>} />
                


           </Routes>
      
      </BrowserRouter>
     
      

      

    </>
  )
}

export default App
