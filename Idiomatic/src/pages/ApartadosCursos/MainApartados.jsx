import NavBar_Apartados from "../../components/NavBar_Apartados"
import { useState } from "react"

export default function MainApartados(){

    const [apartado, setApartado  ] = useState()
    return(<>
    
            <NavBar_Apartados/>

            <h1>Aqui van los apartados xD</h1>


    
    
    </>)
}