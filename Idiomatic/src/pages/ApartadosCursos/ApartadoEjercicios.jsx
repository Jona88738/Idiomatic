import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function ApartadoEjercicios(){

    const [ejercicios, setEjercicios] = useState([]);

    const location = useLocation();

    const { link, imagen,index } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    let completeJuego = JSON.parse(sessionStorage.getItem('completeJuego'))
 


    useEffect(()=>{
        fetch(`/api/ejercicios?juegos=${link}`)
            .then(res => res.json())
            .then(res => setEjercicios(res))
    },[])
    
    return(<>
            <NavBar_Apartados/>

            
            <Head title="Ejercicios" mycolor="rgba(255, 0, 0, 0.4)" ruta="/images/iconoEjercicios.png"/>
            
            {ejercicios.map((ejercicio,contador) =>{ 
                 const recursosFront = ejercicio.recursos;
                 const recursoEjercicio = recursosFront.sentencia; 
                 return (
                    // Number(sessionStorage.getItem('completeVideo')) >= video.id_leccion ? 

                    completeJuego[index].TotalComplete < contador ? 
                    (<MyCard title={ejercicio.nombre}  imagen={imagen} index={index} page={"/"+ejercicio.ejercicio} link={link}  introduccion={ejercicio.introduccion} recursoFrontEje={recursosFront} recursoEjercicio={recursoEjercicio}   opacity="0.5"  pointerEvents="none" juegoID={ejercicio.id_leccion} />)://Bloqueado   //opacity="0.5"  pointerEvents="none"
                    completeJuego[index].TotalComplete === contador ?
                
                    (<MyCard title={ejercicio.nombre}  imagen={imagen} index={index} page={"/"+ejercicio.ejercicio} link={link}  introduccion={ejercicio.introduccion} recursoFrontEje={recursosFront} recursoEjercicio={recursoEjercicio}   boxshadow={0}  juegoID={ejercicio.id_leccion}  />): // falta de realizar //completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)"
                    
                    completeJuego[index].TotalComplete  > contador ?  
                    (<MyCard title={ejercicio.nombre}  imagen={imagen} index={index} page={"/"+ejercicio.ejercicio} link={link}  introduccion={ejercicio.introduccion} recursoFrontEje={recursosFront} recursoEjercicio={recursoEjercicio}   completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4)" juegoID={ejercicio.id_leccion}  />): // completado
                    "XD")



                })}



           
    </>)
}