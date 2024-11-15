import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useEffect,useState } from "react"
import { useLocation } from 'react-router-dom';

export default function ApartadoVideos(){

    const [infoVideos, setInfoVideos] =  useState([]);

    const location = useLocation();

    const { link, imagen,index } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    let completeV = JSON.parse(sessionStorage.getItem('completeV'))
    console.log("complete",completeV[index].Complete )
    console.log("Mi index: ", index )
   

    useEffect(()=>{

        fetch(`/api/listaVideos?tema=${link}`)
            .then(res => res.json(res))
            .then(res =>  setInfoVideos(res))

    },[])

    //Prueba XD
    // [{"Tema":"saludos y despedidas","TotalComplete":0,},{"Tema":"presentaciones personales","TotalComplete":0,}

    //  ]

    //console.log(infoVideos)
   
    return(<>

            <NavBar_Apartados/>

            
            <Head title={link} mycolor="rgba(255, 194, 18, 0.4)" ruta="/images/iconoVideos.svg"/>
            
            {infoVideos.map((video,contador) =>{ 
                 return (
                    // Number(sessionStorage.getItem('completeVideo')) >= video.id_leccion ? 
                    completeV[index].TotalComplete < contador ? 
                    (<MyCard title={video.nombre}  imagen={imagen} index={index} page="/video" link={video.link}  introduccion={video.introduccion}  opacity="0.5"  pointerEvents="none" videoID={video.id_leccion} />)://Bloqueado   //opacity="0.5"  pointerEvents="none"
                    completeV[index].TotalComplete === contador ?
                
                    (<MyCard title={video.nombre}  imagen={imagen} index={index} page="/video" link={video.link}  introduccion={video.introduccion}  boxshadow={0}  videoID={video.id_leccion}  />): // falta de realizar //completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)"
                    
                    completeV[index].TotalComplete  > contador ?  
                    (<MyCard title={video.nombre}  imagen={imagen} index={index} page="/video" link={video.link}  introduccion={video.introduccion}  completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)" videoID={contador}  />): // completado
                    "")

                //         (<MyCard key={video.idvideo} title={video.nombre} imagen={imagen} page="/video" link={video.link} introduccion={video.introduccion}  completeStyle="3px solid green" videoID={video.id_leccion}  />)
                //         :
                //         (<MyCard key={video.idvideo} title={video.nombre} imagen={imagen} page="/video" link={video.link} introduccion={video.introduccion} videoID={video.id_leccion}  />)
                // );
                })}
                 
            {/* //    return <MyCard key={video.idvideo} title={video.nombre} imagen={imagen}  page="/video" link={video.link} introduccion={video.introduccion} /> }
                */}
            

                
            
    </>)
}