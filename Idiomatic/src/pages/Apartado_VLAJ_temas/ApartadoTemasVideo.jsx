import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect,useState } from "react"

export default function ApartadoTemasVideos(){

    let completeV = JSON.parse(sessionStorage.getItem('completeV'))
    console.log(completeV[0].Total )

    let TemasVideos = JSON.parse(sessionStorage.getItem('TemasVideos'))
    // console.log(completeJuego[i.TotalComplete )
    console.log("XD",TemasVideos.length )
    

    //Prueba xD

    const Card = 
    [
       {
        "Total":0,
        "title":"saludos y despedidas",
        "imagen":"/images/ApartadosTemas/greetings and farewells.png",
        "page":"/Videos",
        "link":"saludos y despedidas",
        "introduccion":"Empieza y termina tus conversaciones con confianza",
        "completeStyle":"3px solid green" 
       },
       {
        "Total":2,
        "title":"presentaciones personales",
        "imagen":"/images/ApartadosTemas/PersonalPresentations.png",
        "page":"/Videos",
        "link":"presentaciones personales",
        "introduccion":"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación.",
        "completeStyle":"3px solid green" 
        },
       {
        "Total":3,
        "title":"Dar informacion personal",
        "imagen":"/images/ApartadosTemas/PersonaLInformation.png",
        "page":"/Videos",
        "link":"Dar informacion personal",
        "introduccion":"Aprende a preguntar y compartir información personal de manera natural.",
        "completeStyle":"3px solid green" 
       },
       {
        "Total":4,
        "title":"verb to be",
        "imagen":"/images/ApartadosTemas/VerbToBe.png",
        "page":"/Videos",
        "link":"verb to be",
        "introduccion":"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video.",
        "completeStyle":"3px solid green" 
       },
       {
        "Total":5,
        "title":"Present Simple",
        "imagen":"/images/ApartadosTemas/PresentSimple.png",
        "page":"/Videos",
        "link":"Present Simple",
        "introduccion":"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza..",
        "completeStyle":"3px solid green" 
       },
       {
        "Total":6,
        "title":"Present Continuo",
        "imagen":"/images/ApartadosTemas/PresentContinuo.png",
        "page":"/Videos",
        "link":"Present Continuo",
        "introduccion":"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous.",
        "completeStyle":"3px solid green" 
       },
       {
        "Total":7,
        "title":"Futuro Will",
        "imagen":"/images/ApartadosTemas/FutureWill.png",
        "page":"/Videos",
        "link":"Futuro Will",
        "introduccion":"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés.",
        "completeStyle":"3px solid green" 
       },
       {
        "Total":8,
        "title":"Pasado Simple",
        "imagen":"/images/ApartadosTemas/PastSimple.png",
        "page":"/Videos",
        "link":"Pasado Simple",
        "introduccion":"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos.",
        "completeStyle":"3px solid green" 
       }
    
    ]


    // [{"Total":0,"title":"saludos y despedidas"},{"Total":2,"title":"presentaciones personales"},{"Total":3,"title":"Dar informacion personal"},{"Total":4,"title":"verb to be"},{"Total":5,"title":"Present Simple"},{"Total":6,"title":"Present Continuo"},{"Total":7,"title":"Futuro Will"},{"Total":8,"title":"Pasado Simple"}]




    console.log('Usuario:', sessionStorage.getItem('completeVideo'));
    return(<>

<NavBar_Apartados/>

            
<Head title="Temas de Videos" mycolor="rgba(255, 194, 18, 0.4)" ruta="/images/iconoVideos.svg"/>

{Card.map((Element,index) =>{
    console.log(Element.Total)

    let contador = 0;
    if(index < TemasVideos.length-1){
        contador = index +1;
    }else{
        contador = index;
    }
   return( 
   
    completeV[0].Total < TemasVideos[index].Total  ?
    (<MyCard title={Element.title} imagen={Element.imagen}  index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  opacity="0.5"  pointerEvents="none"/>):   //opacity="0.5"  pointerEvents="none"
    completeV[0].Total <  TemasVideos[contador].Total  ?

    (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  boxshadow={0}  />): //completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)"
    
    completeV[0].Total > TemasVideos[index].Total ?  
    (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion} completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)" />):
    (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  boxshadow={0}  />)
   )

})}

{/* [{"Tema": "saludos y despedidas", "Total": 0, "TotalComplete": 0}, {"Tema": "presentaciones personales", "TotalComplete": 0},{"Tema": "Dar informacion personal", "Total": 0, "TotalComplete": 0}, {"Tema": "verb to be", "TotalComplete": 0},{"Tema": "Present Simple", "Total": 0, "TotalComplete": 0}, {"Tema": "Present Continuo", "TotalComplete": 0},{"Tema": "Futuro Will", "Total": 0, "TotalComplete": 0}, {"Tema": "Pasado Simple", "TotalComplete": 0}] */}

{/* {Number(sessionStorage.getItem('completeVideo') ) < 2 ? 

(  
<MyCard title={"saludos y despedidas"} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/Videos" link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"} completeStyle="3px solid green"  /> 
):(  
    <MyCard title={"saludos y despedidas"} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/Videos" link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"}   /> 
    )

}



<MyCard title={"presentaciones personales"} imagen="/images/ApartadosTemas/PersonalPresentations.png"   page="/Videos" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
<MyCard title={"Dar informacion personal"} imagen="/images/ApartadosTemas/PersonaLInformation.png"   page="/Videos" link={"Dar informacion personal"}  introduccion={"Aprende a preguntar y compartir información personal de manera natural."} />
<MyCard title={"verb to be"} imagen="/images/ApartadosTemas/VerbToBe.png"   page="/Videos" link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
<MyCard title={"Present Simple"} imagen="/images/ApartadosTemas/PresentSimple.png"   page="/Videos" link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
<MyCard title={"Present Continuo"} imagen="/images/ApartadosTemas/PresentContinuo.png"   page="/Videos" link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
<MyCard title={"Futuro Will"} imagen="/images/ApartadosTemas/FutureWill.png"  page="/Videos" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />

<MyCard title={"Pasado Simple"} imagen="/images/ApartadosTemas/PastSimple.png"   page="/Videos" link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
 
 */}

    
    </>)
}