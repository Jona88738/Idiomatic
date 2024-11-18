import { useState } from "react";
import { datosContext } from "./UserContexto";

export default function Datos({children}){

    const [num, setNum] =useState(0);

    const suma= ()=>{
        setNum(num +1)
    }

    
    return(

        <datosContext.Provider value={{suma,num}}>

            {children}

        </datosContext.Provider>

        
    )
}