import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import Container from '@mui/material/Container';

export default function ApartadoTemaJuegos(){


    let completeJuego = JSON.parse(sessionStorage.getItem('completeJuego'))
    

    let TemasJuegos = JSON.parse(sessionStorage.getItem('TemasJuegos'))
    // console.log(completeJuego[i.TotalComplete )
    console.log("XD",TemasJuegos.length )

    // [{"Total":0,"title":"saludos y despedidas"},{"Total":3,"title":"presentaciones personales"},{"Total":5,"title":"Dar informacion personal"},{"Total":8,"title":"verb to be"},{"Total":11,"title":"Present Simple"},{"Total":14,"title":"Present Continuo"},{"Total":17,"title":"Futuro Will"},{"Total":20,"title":"Pasado Simple"}]


    const Card = 
    [
        {
         "Total":0,
         "title":"saludos y despedidas",
         "imagen":"/images/ApartadosTemas/greetings and farewells.png",
         "page":"/Ejercicios",
         "link":"saludos y despedidas",
         "introduccion":"Empieza y termina tus conversaciones con confianza",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":3,
         "title":"presentaciones personales",
         "imagen":"/images/ApartadosTemas/PersonalPresentations.png",
         "page":"/Ejercicios",
         "link":"presentaciones personales",
         "introduccion":"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación.",
         "completeStyle":"3px solid green" 
         },
        {
         "Total":3,
         "title":"Dar informacion personal",
         "imagen":"/images/ApartadosTemas/PersonaLInformation.png",
         "page":"/Ejercicios",
         "link":"Dar informacion personal",
         "introduccion":"Aprende a preguntar y compartir información personal de manera natural.",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":5,
         "title":"verb to be",
         "imagen":"/images/ApartadosTemas/VerbToBe.png",
         "page":"/Ejercicios",
         "link":"verb to be",
         "introduccion":"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video.",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":8,
         "title":"Present Simple",
         "imagen":"/images/ApartadosTemas/PresentSimple.png",
         "page":"/Ejercicios",
         "link":"Present Simple",
         "introduccion":"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza..",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":10,
         "title":"Present Continuo",
         "imagen":"/images/ApartadosTemas/PresentContinuo.png",
         "page":"/Ejercicios",
         "link":"Present Continuo",
         "introduccion":"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous.",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":7,
         "title":"Futuro Will",
         "imagen":"/images/ApartadosTemas/FutureWill.png",
         "page":"/Ejercicios",
         "link":"Futuro Will",
         "introduccion":"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés.",
         "completeStyle":"3px solid green" 
        },
        {
         "Total":8,
         "title":"Pasado Simple",
         "imagen":"/images/ApartadosTemas/PastSimple.png",
         "page":"/Ejercicios",
         "link":"Pasado Simple",
         "introduccion":"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos.",
         "completeStyle":"3px solid green" 
        }
     
     ]

     
     

//[{"Tema": "saludos y despedidas", "Total": 0, "TotalComplete": 2}, {"Tema": "presentaciones personales","TotalEjerciciosTema":3, "TotalComplete": 0}, {"Tema": "Dar informacion personal","TotalEjerciciosTema":3, "Total": 0, "TotalComplete": 0}, {"Tema": "verb to be","TotalEjerciciosTema":3, "TotalComplete": 0}, {"Tema": "Present Simple","TotalEjerciciosTema":3, "Total": 0, "TotalComplete": 0}, {"Tema": "Present Continuo","TotalEjerciciosTema":3, "TotalComplete": 0}, {"Tema": "Futuro Will","TotalEjerciciosTema":3, "Total": 0, "TotalComplete": 0}, {"Tema": "Pasado Simple","TotalEjerciciosTema":3, "TotalComplete": 0}]


    

    return(<>
            <NavBar_Apartados/>

            
            <Head title="Temas Ejercicios" mycolor="rgba(255, 0, 0, 0.4)" ruta="/images/iconoEjercicios.svg"/>
            
        <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            {Card.map((Element,index) =>{
                console.log(Element.Total)

                let contador;
                if(index < TemasJuegos.length-1){
                    contador = index +1;
                }else{
                    contador = index;
                }
                
            return(                 

                completeJuego[0].Total < TemasJuegos[index].Total  ?
                (<MyCard title={Element.title} imagen={Element.imagen}  index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  opacity="0.5"  pointerEvents="none"/>):   //opacity="0.5"  pointerEvents="none"
                
                completeJuego[0].Total < TemasJuegos[contador].Total ?
                    (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  boxshadow={0}  />)://completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)"
                                
                completeJuego[0].Total > TemasJuegos[index].Total ?  
                (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion} completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)" />):
                (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  boxshadow={0}  />)
                
                
            
                // completeJuego[0].Total < Element.Total  ?
                // (<MyCard title={Element.title} imagen={Element.imagen}  index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  opacity="0.5"  pointerEvents="none"/>):   //opacity="0.5"  pointerEvents="none"
                // completeJuego[0].Total === Element.Total || completeJuego[0].Total === 2?

                // (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion}  boxshadow={0}  />): //completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)"
                
                // completeJuego[0].Total > Element.Total ?  
                // (<MyCard title={Element.title} imagen={Element.imagen} index={index}   page={Element.page} link={Element.link}  introduccion={Element.introduccion} completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)" />):
                // ""

            )

            })}
{/* 
            <MyCard title={"saludos y despedidas"} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/Ejercicios"  link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"} /> 
            <MyCard title={"presentaciones personales"} imagen="/images/ApartadosTemas/PersonalPresentations.png"  page="/Ejercicios" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
            <MyCard title={"Dar informacion personal"} imagen="/images/ApartadosTemas/PersonaLInformation.png" page="/Ejercicios"  link={"Dar informacion personal"}  introduccion={"Aprende a preguntar y compartir información personal de manera natural."} />
            <MyCard title={"verb to be"} imagen="/images/ApartadosTemas/VerbToBe.png"   page="/Ejercicios"  link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
            <MyCard title={"Present Simple"} imagen="/images/ApartadosTemas/PresentSimple.png" page="/Ejercicios"  link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
            <MyCard title={"Present Continuo"} imagen="/images/ApartadosTemas/PresentContinuo.png" page="/Ejercicios"  link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
            <MyCard title={"Futuro Will"} imagen="/images/ApartadosTemas/FutureWill.png" page="/Ejercicios" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />
            <MyCard title={"Pasado Simple"} imagen="/images/ApartadosTemas/PastSimple.png"  page="/Ejercicios"  link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
             */}
            
          </div>  
    </>)
}