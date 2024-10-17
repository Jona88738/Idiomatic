import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import Container from '@mui/material/Container';

export default function ApartadoTemaJuegos(){

    

    return(<>
            <NavBar_Apartados/>

            
            <Head title="Temas Ejercicios" mycolor="rgba(255, 0, 0, 0.4)" ruta="/images/iconoEjercicios.svg"/>
            
            <MyCard title={"saludos y despedidas"} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/Ejercicios"  link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"} /> 
            <MyCard title={"presentaciones personales"} imagen="/images/ApartadosTemas/PersonalPresentations.png"  page="/Ejercicios" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
            <MyCard title={"Dar informacion personal"} imagen="/images/ApartadosTemas/PersonaLInformation.png" page="/Ejercicios"  link={"Dar informacion personal"}  introduccion={"Aprende a preguntar y compartir información personal de manera natural."} />
            <MyCard title={"verb to be"} imagen="/images/ApartadosTemas/VerbToBe.png"   page="/Ejercicios"  link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
            <MyCard title={"Present Simple"} imagen="/images/ApartadosTemas/PresentSimple.png" page="/Ejercicios"  link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
            <MyCard title={"Present Continuo"} imagen="/images/ApartadosTemas/PresentContinuo.png" page="/Ejercicios"  link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
            <MyCard title={"Futuro Will"} imagen="/images/ApartadosTemas/FutureWill.png" page="/Ejercicios" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />
            <MyCard title={"Pasado Simple"} imagen="/images/ApartadosTemas/PastSimple.png"  page="/Ejercicios"  link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
            
            
            
    </>)
}