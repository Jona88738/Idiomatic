import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect, useState } from "react"

export default function ApartadoAudio(){

    const [infoAudios, setInfoAudios] = useState([])

    useEffect(()=>{
        fetch("/api/listaAudios")
            .then(res => res.json())
            .then(res => setInfoAudios(res))
    },[])

    return(<>
            <NavBar_Apartados/>
            
            <Head title="Audios" mycolor="rgba(0, 26, 255, 0.4)" ruta="/src/images/iconoAudios.svg"/>

            {infoAudios.map(audio => <MyCard key={audio.idaudio} title={audio.nombre}  page="/EjercicioAudio" link={audio.link} introduccion={audio.introduccion} />)}


            
    </>)
}