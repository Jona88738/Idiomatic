import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect, useState } from "react"

export default function ApartadoTemasLecturas(){



    const [lecturas, setLecturas]= useState([]);


    useEffect(()=>{

        fetch("/api/getAllLecturas")
        .then(res => res.json())
        .then(res => setLecturas(res))

    },[])

    

    return(<>

            <NavBar_Apartados/>
            
            <Head title="Lecturas" mycolor="rgba(249, 176, 195, 0.54)" ruta="/src/images/iconoLecturas.svg"/>
           
            {lecturas.map((element,index) =>{
               return <MyCard key={index} title={element.nombre} imagen="/src/images/ApartadosTemas/greetings and farewells.png"  page="/PageLecturas" lectura={element.rutaLectura}    introduccion={element.introduccion} /> 
            })}
            
            

            
    </>)
}




