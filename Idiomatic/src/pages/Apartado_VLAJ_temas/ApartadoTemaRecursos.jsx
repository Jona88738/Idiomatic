import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"

export default function ApartadoTemaRecursos(){
    return(<>

            <NavBar_Apartados/>

            <Head title="Temas Recursos" mycolor="rgba(146, 7, 255, 0.4)" ruta="/src/images/iconoEjercicios.svg"/>
            
            <MyCard title={"saludos y despedidas"} imagen="/src/images/ApartadosTemas/greetings and farewells.png"  page=""  link={""}  introduccion={"Empieza y termina tus conversaciones con confianza"} /> 
            <MyCard title={"presentaciones personales"} imagen="/src/images/ApartadosTemas/PersonalPresentations.png"  page="/Ejercicios" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
            <MyCard title={"Dar informacion personal"} imagen="/src/images/ApartadosTemas/PersonaLInformation.png" page="/Ejercicios"  link={"Dar informacion personal"}  introduccion={"Aprende a preguntar y compartir información personal de manera natural."} />
            <MyCard title={"Food"} imagen="/src/images/ApartadosTemas/Food.png" page="/Ejercicios"  link={"Dar informacion personal"}  introduccion={"Descubre el vocabulario esencial sobre alimentos y comidas en inglés."} />
            <MyCard title={"Vocabulario basico"} imagen="/src/images/ApartadosTemas/VocabularioBasico.png" page="/Ejercicios"  link={"Dar informacion personal"}  introduccion={"Aprende las palabras básicas en inglés que necesitas para empezar a comunicarte."} />
            <MyCard title={"verb to be"} imagen="/src/images/ApartadosTemas/VerbToBe.png"   page="/Ejercicios"  link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
            <MyCard title={"Present Simple"} imagen="/src/images/ApartadosTemas/PresentSimple.png" page="/Ejercicios"  link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
            <MyCard title={"Present Continuo"} imagen="/src/images/ApartadosTemas/PresentContinuo.png" page="/Ejercicios"  link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
            <MyCard title={"Modal Verb Can"} imagen="/src/images/ApartadosTemas/Can.png" page="/Ejercicios"  link={"Present Continuo"}  introduccion={"Aprende cómo usar el modal 'can' para hablar de habilidades, permisos y posibilidades en inglés."} />
            <MyCard title={"Modal Verb May"} imagen="/src/images/ApartadosTemas/May.png" page="/Ejercicios"  link={"Present Continuo"}  introduccion={"¡Haz clic para aprender más sobre 'may' y cómo usarlo correctamente!"} />
            <MyCard title={"Modal Verb Must"} imagen="/src/images/ApartadosTemas/Must.png" page="/Ejercicios"  link={"Present Continuo"}  introduccion={"Aprende a utilizar 'must' para expresar obligación, necesidad y prohibición en inglés"} />
            <MyCard title={"Futuro Will"} imagen="/src/images/ApartadosTemas/FutureWill.png" page="/Ejercicios" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />
            <MyCard title={"Pasado Simple"} imagen="/src/images/ApartadosTemas/PastSimple.png"  page="/Ejercicios"  link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
            
            
    
    </>)
}