import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect,useState } from "react"

export default function ApartadoTemasVideos(){

/*
    const [infoVideos, setInfoVideos] =  useState([]);

    useEffect(()=>{

        fetch("/api/listaVideos")
            .then(res => res.json(res))
            .then(res =>  setInfoVideos(res))

    },[])
    //console.log(infoVideos)
*/

    return(<>

<NavBar_Apartados/>

            
<Head title="Temas de Videos" mycolor="rgba(255, 194, 18, 0.4)" ruta="/src/images/iconoVideos.svg"/>


<MyCard title={"saludos y despedidas"} imagen="/src/images/ApartadosTemas/greetings and farewells.png"  page="/Videos" link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"} /> 
<MyCard title={"presentaciones personales"} imagen="/src/images/ApartadosTemas/PersonalPresentations.png"   page="/Videos" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
<MyCard title={"Dar informacion personal"} imagen="/src/images/ApartadosTemas/PersonaLInformation.png"   page="/Videos" link={"Dar informacion personal"}  introduccion={"Conéctate mejor: Aprende a preguntar y compartir información personal de manera natural."} />
<MyCard title={"verb to be"} imagen="/src/images/ApartadosTemas/VerbToBe.png"   page="/Videos" link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
<MyCard title={"Present Simple"} imagen="/src/images/ApartadosTemas/PresentSimple.png"   page="/Videos" link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
<MyCard title={"Present Continuo"} imagen="/src/images/ApartadosTemas/PresentContinuo.png"   page="/Videos" link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
<MyCard title={"Futuro Will"} imagen="/src/images/ApartadosTemas/FutureWill.png"  page="/Videos" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />
<MyCard title={"Pasado Simple"} imagen="/src/images/ApartadosTemas/PastSimple.png"   page="/Videos" link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
 

    
    </>)
}