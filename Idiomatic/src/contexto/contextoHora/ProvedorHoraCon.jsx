import React, { useState, useEffect } from 'react';
import { HoraContext } from './HoraContext';
import { Outlet } from 'react-router-dom';

export default function  MyHora({children}){


    const [startTime, setStartTime] = useState(null);

    

    console.log("Empezo a contar")
  useEffect(() => {
    // Iniciar el tiempo cuando el usuario ingresa a la plataforma
    if (!startTime) {
      setStartTime(Date.now());
    }

    const handleUnload = () => {
      const endTime = Date.now();
      const durationInSeconds = Math.floor((endTime - startTime) / 1000); // Duración en segundos
      const durationInMinutes = Math.floor(durationInSeconds / 60); 
      console.log("Duracion en minutos: ",durationInMinutes);

      // Enviar la duración al servidor
      /*
      fetch('/api/saveDuration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'usuario123', duration })
      });
            */
      // Limpiar el tiempo
      localStorage.removeItem('startTime');
    };

    // Capturar el cierre de la ventana o la pestaña
    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [startTime]);


  const stopTime = async () => {
    const endTime = Date.now();
    const durationInSeconds = Math.floor((endTime - startTime) / 1000); // Duración en segundos
    const durationInMinutes = Math.floor(durationInSeconds / 60); 
    console.log("Duracion en minutos: ",durationInMinutes);
    //console.log("Esta fue la duracion ",duration)
    // Enviar el tiempo al servidor antes de cerrar sesión


    
    try {
      await fetch(`/api/tiempo?minutos=${durationInMinutes}`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // body: JSON.stringify({ userId: 'usuario123', duration })
      });
      console.log('Tiempo guardado correctamente');
    } catch (error) {
      console.error('Error al guardar el tiempo:', error);
    }
      
}




    return(

        <HoraContext.Provider value={{ stopTime }}>

            {<Outlet/>}

        </HoraContext.Provider>
    )
}
