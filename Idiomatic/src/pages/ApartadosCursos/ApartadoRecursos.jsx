import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';

export default function ApartadoRecursos(){

    const [infoAudios, setInfoAudios] = useState([])

    const location = useLocation();

    const { link } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    

    useEffect(()=>{
        fetch(`/api/recursos?tema=${link}`)
            .then(res => res.json())
            .then(res => setInfoAudios(res))
    },[])

    return(<>
            <NavBar_Apartados/>
            
            <Head title="Recursos" mycolor="rgba(0, 26, 255, 0.4)" ruta="/src/images/iconoAudios.svg"/>

            {infoAudios.map(audio => <MyCard key={audio.idaudio} title={audio.nombre}  page=" " link={audio.link} introduccion={audio.introduccion} />)}


            
    </>)
}