import {Head,CardAdmin} from "../../../components/ApartadosCursos"
import {Container,Button} from '@mui/material';
import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function ContTemaVideo(){

    
    return(<>
    
    {/* <NavBar_Apartados/> */}

            
    <Head title="Temas de Videos" mycolor="rgba(255, 194, 18, 0.4)" ruta="/images/iconoVideos.svg"/>

    <CardAdmin title={"saludos y despedidas"} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/Videos" link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"} /> 
    <CardAdmin title={"presentaciones personales"} imagen="/images/ApartadosTemas/PersonalPresentations.png"   page="/Videos" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
    <CardAdmin title={"Dar informacion personal"} imagen="/images/ApartadosTemas/PersonaLInformation.png"   page="/Videos" link={"Dar informacion personal"}  introduccion={"Aprende a preguntar y compartir información personal de manera natural."} />
    <CardAdmin title={"verb to be"} imagen="/images/ApartadosTemas/VerbToBe.png"   page="/Videos" link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
    <CardAdmin title={"Present Simple"} imagen="/images/ApartadosTemas/PresentSimple.png"   page="/Videos" link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
    <CardAdmin title={"Present Continuo"} imagen="/images/ApartadosTemas/PresentContinuo.png"   page="/Videos" link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
    <CardAdmin title={"Futuro Will"} imagen="/images/ApartadosTemas/FutureWill.png"  page="/Videos" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />
    <CardAdmin title={"Pasado Simple"} imagen="/images/ApartadosTemas/PastSimple.png"   page="/Videos" link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
    
    
    
    
    </>)
}