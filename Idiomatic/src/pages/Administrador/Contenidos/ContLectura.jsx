import {Head,CardAdmin} from "../../../components/ApartadosCursos"
import {Container,Button} from '@mui/material';
import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom";


export default function ContLectura(){

    const [lecturas, setLecturas]= useState([]);

    const navigate = useNavigate();

    


    function handleOnclick(){
      navigate(-1);
  }

    useEffect(()=>{

        fetch("/api/getAllLecturas")
        .then(res => res.json())
        .then(res => setLecturas(res))

    },[])

    return(<>
    
        <Head title="Lecturas" mycolor="rgba(0, 26, 255, 0.4)" ruta="/images/iconoAudios.svg"/>
        

        {lecturas.map((element,index) =>{
               return <CardAdmin key={index} title={element.nombre} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/PageLecturas" lectura={element.rutaLectura}    introduccion={element.introduccion} /> 
            })}


  

        
    </>)
}