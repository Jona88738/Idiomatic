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
import Memorama from './ApartadoJuegos/Memorama';
import Vocabulary from './ApartadoJuegos/Vocabulary'
import PageVideos from './ApartadoVideos/PageVideos';
import AudioIA from './ApartadoJuegos/AudioIA';
import EjercicioAudio from './Apartado_VLAJ_temas/EjercicioAudio';
import Datos from '../contexto/ProvedorContexto';
import ApartadoTemasVideos from './Apartado_VLAJ_temas/ApartadoTemasVideo';
import ApartadoTemaAudio from './Apartado_VLAJ_temas/ApartadoTemaAudios';
import ApartadoTemaEjercicios from './Apartado_VLAJ_temas/ApartadoTemaJuegos';
import ApartadoTemaJuegos from './Apartado_VLAJ_temas/ApartadoTemaJuegos';
import ApartadoTemasLecturas from './Apartado_VLAJ_temas/ApartadoTemaLectura';
import PageLecturas from './ApartadoVideos/PageLecturas';
import MyHora from '../contexto/contextoHora/ProvedorHoraCon';
import ApartadoTemaRecursos from './Apartado_VLAJ_temas/ApartadoTemaRecursos';
import UnscrambleSentences from './ApartadoJuegos/unscrambleSentences';
import ConversacionIA from './ApartadoJuegos/ConversacionIA';
import Panel_user from './Administrador/Panel_user';
import PresentSimple from './Recursos/PresentSimple';
import PresentContinuous from './Recursos/PresentContinuous';
import PastSimple from './Recursos/PastSimple';
import FutureSimple from './Recursos/FutureSimple';
import ModalCan from './Recursos/ModalCan';
import ModalMay from './Recursos/ModalMay';
import ModalMust from './Recursos/ModalMust';



function App() {
  

  return (
    <>
      <BrowserRouter>
           <Routes>
               
                <Route  path='/' element={<Home/>} />
                <Route  path='/Login' element={  <Datos> <Login/> </Datos>} />
                <Route  path='/Sign_up' element={<Sign_up/>} />
                <Route  path='/PasswordRecovery' element={<PasswordRecovery/>} />
                <Route  path='/UpdatePassword' element={<UpdatePassword/>} />

                <Route  path='/Panel_user' element={<Panel_user/>} />

                <Route  path='/Nosotros' element={<Nosotros/>} />
                <Route  path='/Cursos' element={<Cursos/>} />
                

                <Route  path='/TestAprendizaje' element={<TestAprendizaje/>} />
                <Route  path='/TestIngles' element={<TestIngles/>} />

                
              <Route element={<MyHora/>}>
                {/* Apartado Home_user */}
          
                <Route  path='/User_Home' element={ <User_Home/>  } />
                <Route  path='/User_Cursos' element={<User_Cursos/>} />

                {/* Temas VLAJ  */}

                <Route path='/TemasVideos' element={<ApartadoTemasVideos/>} /> 
                <Route path='/TemasAudios' element={<ApartadoTemaAudio />} /> 
                <Route path='/TemasJuegos' element={<ApartadoTemaJuegos />} /> 
                <Route path='/TemasLecturas' element={<ApartadoTemasLecturas />} /> 
                <Route path='/TemasRecursos' element={<ApartadoTemaRecursos />} /> 

                {/* Apartado  VLAJ*/}

                <Route path='/Ejercicios' element={<ApartadoEjercicios/>} />
                <Route path='/Videos' element={<ApartadoVideos/>} />
                <Route path='/Lecturas' element={<ApartadoLecturas/>} />
                <Route path='/Audios' element={<ApartadoAudio/>} />
                
                {/* Juegos */}

                <Route path='/CompleteSentences' element={<CompleteSentences/>} />
                <Route path='/DragImage' element={<DragImage/>}/>
                <Route path='/CreateSentences' element={<CreateSentences/>} />
                <Route path='/Vocabulary' element={<Vocabulary/>} />
                <Route path='/UnscrambleSentences' element={<UnscrambleSentences/>} />
                <Route path='/Memorama' element={<Memorama/>} />
                <Route path='/ConversacionIA' element={<ConversacionIA/>} />

                {/* Pagina Lecturas  */}

                <Route path='/PageLecturas' element={<PageLecturas /> } />

                {/* Ejercicio Audio */}

                <Route path='/EjercicioAudio' element={<EjercicioAudio/>} />

                <Route path='/Video' element={<PageVideos/>} />
                <Route path='/AudioIA' element={<AudioIA/>} />

                {/*  */}

                <Route  path='/User_Notificaciones' element={<User_Notificaciones/>} />
                <Route  path='/User_Ajustes' element={<User_Ajustes/>} />

                {/* Recursos*/}
                <Route  path='/PresentSimple' element={<PresentSimple/>} />
                <Route  path='/PresentContinuous' element={<PresentContinuous/>} />
                <Route  path='/PastSimple' element={<PastSimple/>} />
                <Route  path='/FutureSimple' element={<FutureSimple/>} />
                <Route  path='/ModalCan' element={<ModalCan/>} />
                <Route  path='/ModalMay' element={<ModalMay/>} />
                <Route  path='/ModalMust' element={<ModalMust/>} />





              </Route>
                

                
              {/* Empiezan Rutas de Admin  */}


                <Route  path='/Admin_Home' element={<Admin_Home/>} />



                <Route  path='*' element={<Error404/>} />
                


           </Routes>
      
      </BrowserRouter>
     
      

      

    </>
  )
}

export default App
