import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect, useState } from "react"

export default function ApartadoTemaAudio(){

    const [infoAudios, setInfoAudios] = useState([])

    let completeAudio = JSON.parse(sessionStorage.getItem('completeAudio'))
    console.log(completeAudio[0].Total )

    let TemasAudios = JSON.parse(sessionStorage.getItem('TemasAudios'))
    // console.log(completeJuego[i.TotalComplete )
    console.log("XD",TemasAudios.length )

    const Card = 
    [
        {
         "Total":0,
         "title":"saludos y despedidas",
         "imagen":"/images/ApartadosTemas/greetings and farewells.png",
         "page":"/Audios",
         "link":"saludos y despedidas",
         "introduccion":"Empieza y termina tus conversaciones con confianza",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":1,
         "title":"presentaciones personales",
         "imagen":"/images/ApartadosTemas/PersonalPresentations.png",
         "page":"/Audios",
         "link":"presentaciones personales",
         "introduccion":"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación.",
         "completeStyle":"3px solid green" 
         },
        {
         "Total":2,
         "title":"Dar informacion personal",
         "imagen":"/images/ApartadosTemas/PersonaLInformation.png",
         "page":"/Audios",
         "link":"Dar informacion personal",
         "introduccion":"Aprende a preguntar y compartir información personal de manera natural.",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":3,
         "title":"verb to be",
         "imagen":"/images/ApartadosTemas/VerbToBe.png",
         "page":"/Audios",
         "link":"verb to be",
         "introduccion":"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video.",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":4,
         "title":"Present Simple",
         "imagen":"/images/ApartadosTemas/PresentSimple.png",
         "page":"/Audios",
         "link":"Present Simple",
         "introduccion":"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza..",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":5,
         "title":"Present Continuo",
         "imagen":"/images/ApartadosTemas/PresentContinuo.png",
         "page":"/Audios",
         "link":"Present Continuo",
         "introduccion":"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous.",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":6,
         "title":"Futuro Will",
         "imagen":"/images/ApartadosTemas/FutureWill.png",
         "page":"/Audios",
         "link":"Futuro Will",
         "introduccion":"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés.",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":7,
         "title":"Pasado Simple",
         "imagen":"/images/ApartadosTemas/PastSimple.png",
         "page":"/Audios",
         "link":"Pasado Simple",
         "introduccion":"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos.",
         "completeStyle":"3px solid green" 
        }
     
     ]



    //  [{"Total":0,"title":"saludos y despedidas"},{"Total":1,"title":"presentaciones personales"},{"Total":2,"title":"Dar informacion personal"},{"Total":3,"title":"verb to be"},{"Total":4,"title":"Present Simple"},{"Total":5,"title":"Present Continuo"},{"Total":6,"title":"Futuro Will"},{"Total":7,"title":"Pasado Simple"}]


   

    return(<>
            <NavBar_Apartados/>
            
            <Head title="Temas Audios" mycolor="rgba(0, 26, 255, 0.4)" ruta="/images/iconoAudios.svg"/>

            {Card.map((Element,index) =>{
                console.log(Element.Total)

                let contador;
                if(index < TemasAudios.length-1){
                    contador = index +1;
                }else{
                    contador = index;
                }

            return( 
            
                completeAudio[0].Total < TemasAudios[index].Total   ?
                (<MyCard title={Element.title} imagen={Element.imagen}  index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  opacity="0.5"  pointerEvents="none"/>):   //opacity="0.5"  pointerEvents="none"
                completeAudio[0].Total < TemasAudios[contador].Total  ?

                (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  boxshadow={0}  />): //completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)"
                
                completeAudio[0].Total > TemasAudios[index].Total  ?  
                (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion} completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)" />):
                ""
            )

            })}



            {/* <MyCard title={"saludos y despedidas"} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/Audios"  link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"} /> 
            <MyCard title={"presentaciones personales"} imagen="/images/ApartadosTemas/PersonalPresentations.png"   page="/Audios"  link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
            <MyCard title={"Dar informacion personal"}  imagen="/images/ApartadosTemas/PersonaLInformation.png" page="/Audios"  link={"Dar informacion personal"}  introduccion={"Aprende a preguntar y compartir información personal de manera natural."} />
            <MyCard title={"verb to be"} imagen="/images/ApartadosTemas/VerbToBe.png"  page="/Audios"  link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
            <MyCard title={"Present Simple"} imagen="/images/ApartadosTemas/PresentSimple.png"  page="/Audios"  link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
            <MyCard title={"Present Continuo"} imagen="/images/ApartadosTemas/PresentContinuo.png"  page="/Audios"  link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
            <MyCard title={"Futuro Will"} imagen="/images/ApartadosTemas/FutureWill.png"   page="/Audios" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />
            <MyCard title={"Pasado Simple"} imagen="/images/ApartadosTemas/PastSimple.png"  page="/Audios"  link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
             */}

    </>)
}