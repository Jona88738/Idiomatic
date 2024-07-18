import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import Container from '@mui/material/Container';
export default function ApartadoEjercicios(){

    return(<>
            <NavBar_Apartados/>

            
            <Head title="Ejercicios" mycolor="rgba(255, 0, 0, 0.4)" ruta="/src/images/iconoEjercicios.svg"/>
            
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            
    </>)
}