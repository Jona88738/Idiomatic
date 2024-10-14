import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function ApartadoEjercicios(){

    const [ejercicios, setEjercicios] = useState([]);

    const location = useLocation();

    const { link, imagen } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    useEffect(()=>{
        fetch(`/api/ejercicios?juegos=${link}`)
            .then(res => res.json())
            .then(res => setEjercicios(res))
    },[])
    
    return(<>
            <NavBar_Apartados/>

            
            <Head title="Ejercicios" mycolor="rgba(255, 0, 0, 0.4)" ruta="/images/iconoEjercicios.svg"/>
            
            {ejercicios.map((ejercicio) =>{
                const recursosFront = ejercicio.recursos;
                const recursoEjercicio = recursosFront.sentencia; 
                //console.log(recursosFront.sentencia);
                return  <MyCard title={ejercicio.nombre}  introduccion={ejercicio.introduccion} page={"/"+ejercicio.ejercicio} recursoFrontEje={recursosFront} recursoEjercicio={recursoEjercicio} imagen={imagen} link={link}/>
            })}
            {/* <MyCard title="Vocabulary"  page="/Vocabulary" imagen={imagen}/>
            <MyCard title="Create Sentences " page="/CreateSentences" />
            <MyCard title="Memorama" page />
            <MyCard title="personal pronouns" page="/DragImage" />
            <MyCard title="Complete Sentences" page="/CompleteSentences" />
            <MyCard title="Audio IA" page="/AudioIA" />
             */}
    </>)
}