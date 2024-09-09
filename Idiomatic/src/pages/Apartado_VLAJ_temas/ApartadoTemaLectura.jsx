import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"

export default function ApartadoTemasLecturas(){

    return(<>

            <NavBar_Apartados/>
            
            <Head title="Temas Lecturas" mycolor="rgba(249, 176, 195, 0.54)" ruta="/src/images/iconoLecturas.svg"/>
            <MyCard title={"saludos y despedidas"} imagen="/src/images/ApartadosTemas/greetings and farewells.png"  page="/Lecturas"  link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"} /> 
            <MyCard title={"presentaciones personales"} imagen="/src/images/ApartadosTemas/PersonalPresentations.png"   page="/Lecturas" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
            <MyCard title={"Dar informacion personal"} imagen="/src/images/ApartadosTemas/PersonaLInformation.png" page="/Lecturas"  link={"Dar informacion personal"}  introduccion={"Conéctate mejor: Aprende a preguntar y compartir información personal de manera natural."} />
            <MyCard title={"verb to be"} imagen="/src/images/ApartadosTemas/VerbToBe.png"   page="/Lecturas"  link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
            <MyCard title={"Present Simple"} imagen="/src/images/ApartadosTemas/PresentSimple.png"  page="/Lecturas"  link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
            <MyCard title={"Present Continuo"} imagen="/src/images/ApartadosTemas/PresentContinuo.png"   page="/Lecturas"  link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
            <MyCard title={"Futuro Will"} imagen="/src/images/ApartadosTemas/FutureWill.png"   page="/Lecturas"  link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />
            <MyCard title={"Pasado Simple"} imagen="/src/images/ApartadosTemas/PastSimple.png"  page="/Lecturas"  link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
            

            
    </>)
}