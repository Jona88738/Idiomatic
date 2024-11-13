import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"

export default function ApartadoTemaRecursos(){
    return(<>

            <NavBar_Apartados/>

            <Head title="Temas Recursos" mycolor="rgba(146, 7, 255, 0.4)" ruta="/images/iconoEjercicios.png"/>
            
        <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>

            <MyCard title={"Saludos y despedidas"} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/Greetings"  link={""}  introduccion={"Empieza y termina tus conversaciones con confianza"} boxshadow={0}   /> 
            <MyCard title={"Presentaciones personales"} imagen="/images/ApartadosTemas/PersonalPresentations.png"  page="/Presentations" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} boxshadow={0}  />
            <MyCard title={"Dar informacion"} imagen="/images/ApartadosTemas/PersonaLInformation.png" page="/Giveinformation"  link={"Dar informacion personal"}  introduccion={"Aprende a preguntar y compartir información personal de manera natural."} boxshadow={0}  />
            <MyCard title={"Food"} imagen="/images/ApartadosTemas/Food.png" page="/Food"  link={"Dar informacion personal"}  introduccion={"Descubre el vocabulario esencial sobre alimentos y comidas en inglés."} boxshadow={0}  />
            <MyCard title={"Vocabulario basico"} imagen="/images/ApartadosTemas/VocabularioBasico.png" page="/Vocabulariobasico"  link={"Dar informacion personal"}  introduccion={"Aprende las palabras básicas en inglés que necesitas para empezar a comunicarte."} boxshadow={0}  />
            <MyCard title={"Verb to be"} imagen="/images/ApartadosTemas/VerbToBe.png"   page="/VerbTobe"  link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} boxshadow={0}  />
            <MyCard title={"Present Simple"} imagen="/images/ApartadosTemas/PresentSimple.png" page="/PresentSimple"  link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} boxshadow={0}  />
            <MyCard title={"Present Continuo"} imagen="/images/ApartadosTemas/PresentContinuo.png" page="/PresentContinuous"  link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} boxshadow={0}  />
            <MyCard title={"Modal Verb Can"} imagen="/images/ApartadosTemas/Can.png" page="/ModalCan"  link={"Present Continuo"}  introduccion={"Aprende cómo usar el modal 'can' para hablar de habilidades, permisos y posibilidades en inglés."} boxshadow={0}  />
            <MyCard title={"Modal Verb May"} imagen="/images/ApartadosTemas/May.png" page="/ModalMay"  link={"Present Continuo"}  introduccion={"¡Haz clic para aprender más sobre 'may' y cómo usarlo correctamente!"} boxshadow={0}  />
            <MyCard title={"Modal Verb Must"} imagen="/images/ApartadosTemas/Must.png" page="/ModalMust"  link={"Present Continuo"}  introduccion={"Aprende a utilizar 'must' para expresar obligación, necesidad y prohibición en inglés"} boxshadow={0}  />
            <MyCard title={"Futuro Simple"} imagen="/images/ApartadosTemas/FutureWill.png" page="/FutureSimple" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} boxshadow={0}  />
            <MyCard title={"Pasado Simple"} imagen="/images/ApartadosTemas/PastSimple.png"  page="/PastSimple"  link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} boxshadow={0}  />
            
        </div>  
    
    </>)
}