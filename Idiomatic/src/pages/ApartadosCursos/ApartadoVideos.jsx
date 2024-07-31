import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
export default function ApartadoVideos(){

    return(<>

            <NavBar_Apartados/>

            
            <Head title="Videos" mycolor="rgba(255, 194, 18, 0.4)" ruta="/src/images/iconoVideos.svg"/>
            <MyCard title="verb to be" page="/Video"/>
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
    </>)
}