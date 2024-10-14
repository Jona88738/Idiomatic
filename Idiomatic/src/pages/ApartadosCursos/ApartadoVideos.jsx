import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect,useState } from "react"
import { useLocation } from 'react-router-dom';

export default function ApartadoVideos(){

    const [infoVideos, setInfoVideos] =  useState([]);

    const location = useLocation();

    const { link, imagen } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    

    useEffect(()=>{

        fetch(`/api/listaVideos?tema=${link}`)
            .then(res => res.json(res))
            .then(res =>  setInfoVideos(res))

    },[])
    //console.log(infoVideos)

    return(<>

            <NavBar_Apartados/>

            
            <Head title={link} mycolor="rgba(255, 194, 18, 0.4)" ruta="/images/iconoVideos.svg"/>
            
            {infoVideos.map((video) =>{ 
               return <MyCard key={video.idvideo} title={video.nombre} imagen={imagen}  page="/video" link={video.link} introduccion={video.introduccion} /> })}

                
            
    </>)
}