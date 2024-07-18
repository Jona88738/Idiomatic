import { useParams } from "react-router-dom"
import NavBar_Apartados from "../../components/NavBar_Apartados"
import { useState } from "react"

export default function MainApartados(){

    const [apartado, setApartado  ] = useState(0)
    const {id} = useParams()
    const al = 32
    return(<>
    
            

            <h1>Aqui van los apartados xD </h1>

                
    
    
    </>)
}