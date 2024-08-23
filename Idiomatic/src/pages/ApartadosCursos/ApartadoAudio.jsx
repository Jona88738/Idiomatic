import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
export default function ApartadoAudio(){

    return(<>
            <NavBar_Apartados/>
            
            <Head title="Audios" mycolor="rgba(0, 26, 255, 0.4)" ruta="/src/images/iconoAudios.svg"/>
            <MyCard title="Ejemplo1 Audio" page="/EjercicioAudio"/>
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
    </>)
}