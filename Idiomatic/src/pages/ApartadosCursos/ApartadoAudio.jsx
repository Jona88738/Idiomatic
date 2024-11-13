import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';


export default function ApartadoAudio(){

    const [infoAudios, setInfoAudios] = useState([])

    const location = useLocation();

    const { link,imagen,index } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    

    let completeAudio = JSON.parse(sessionStorage.getItem('completeAudio'))
    console.log(completeAudio[index].TotalComplete )

    useEffect(()=>{
        fetch(`/api/listaAudios?tema=${link}`)
            .then(res => res.json())
            .then(res => setInfoAudios(res))
    },[])

    return(<>
            <NavBar_Apartados/>
            
            <Head title="Audios" mycolor="rgba(0, 26, 255, 0.4)" ruta="/images/iconoAudios.png"/>


            {infoAudios.map((audio) =>{ 
                const recursoEjercicio = audio.respuesta;
                 return (
                    // Number(sessionStorage.getItem('completeVideo')) >= video.id_leccion ? 
                    completeAudio[index].TotalComplete < audio.id_leccion ? 
                    (<MyCard key={audio.idaudio}  title={audio.nombre}  imagen={imagen} index={index} page="/EjercicioAudio" recursoEjercicio={recursoEjercicio}  link={audio.link}  introduccion={audio.introduccion}  opacity="0.5"  pointerEvents="none" audioID={audio.id_leccion} />)://Bloqueado   //opacity="0.5"  pointerEvents="none"
                    completeAudio[index].TotalComplete === audio.id_leccion ?
                
                    (<MyCard key={audio.idaudio} title={audio.nombre}  imagen={imagen} index={index} page="/EjercicioAudio" recursoEjercicio={recursoEjercicio}  link={audio.link}  introduccion={audio.introduccion}  boxshadow={0}  audioID={audio.id_leccion}  />): // falta de realizar //completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)"
                    
                    completeAudio[index].TotalComplete  > audio.id_leccion ?  
                    (<MyCard key={audio.idaudio}  title={audio.nombre}  imagen={imagen} index={index} page="/EjercicioAudio" recursoEjercicio={recursoEjercicio}  link={audio.link}  introduccion={audio.introduccion}  completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)" audioID={audio.id_leccion}  />): // completado
                    "")

                //         (<MyCard key={video.idvideo} title={video.nombre} imagen={imagen} page="/video" link={video.link} introduccion={video.introduccion}  completeStyle="3px solid green" videoID={video.id_leccion}  />)
                //         :
                //         (<MyCard key={video.idvideo} title={video.nombre} imagen={imagen} page="/video" link={video.link} introduccion={video.introduccion} videoID={video.id_leccion}  />)
                // );
                })}

            {/* {infoAudios.map(audio => {
            const recursoEjercicio = audio.respuesta;
             return   <MyCard key={audio.idaudio} imagen={imagen} title={audio.nombre}  page="/EjercicioAudio" recursoEjercicio={recursoEjercicio}  link={audio.link} introduccion={audio.introduccion} />    
                
})} */}


            
    </>)
}