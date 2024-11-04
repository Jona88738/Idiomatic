import { Container } from "@mui/material";
import { useState,useEffect } from "react";
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import '../../styles/StylesApartados/PageVideo.css'
export default function PageVideos(){
   

    

    const location = useLocation();

    const { link,videoID,index } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    console.log("videoID: ",videoID)

    function handleEnd(){

        console.log("Termino Video");
      
        let completeV = JSON.parse(sessionStorage.getItem('completeV'))
        
        completeV[0].Total += 1;
        console.log("El tipo es: ",completeV[index].Total);
        
        if(completeV[index].TotalComplete <=  videoID){

            completeV[index].TotalComplete = completeV[index].TotalComplete +1;
        console.log("entro")
        
        console.log(completeV[index].TotalComplete )

        sessionStorage.setItem('completeV',JSON.stringify(completeV) );
        console.log("Objeto actualizado: ",JSON.parse(sessionStorage.getItem('completeV')))
        completeV = JSON.parse(sessionStorage.getItem('completeV'));




            //let complete = Number(sessionStorage.getItem('completeVideo')) +1;
            console.log("entro al if xD")

           // sessionStorage.setItem('completeVideo', complete);
    
          //  console.log("NumLeccionVideo: ",sessionStorage.getItem('completeVideo'));
    
            fetch(`/api/progresoUsuarioGeneral?TemaEjercicio=video&completeV=${completeV}`,{
                method:"PATCH",
                headers:{
    
                    "Content-Type":'application/json'
                },
                body: JSON.stringify({
                    completeVideo: completeV,
                  }),
            })
            .then(res => res.json())
            .then(res => console.log(res))

        }
      
    }

    const [path, setpath] = useState("");

    return(<div style={{background:"#E0DFFD",height:"100Vh"}}>
        <Container className="NavPageVideo" disableGutters >

            <img className="imgIconoPageVideo" src="/images/ApartadosV/HeadVi.svg" alt="" />
            <h1 className="TitleNavPageVideo"  >Types of verbs</h1>

            
        </Container>
        
        <div className="ReactPlayerX" >
        <ReactPlayer  className="react-player" onEnded={handleEnd} width="100%" height="70vh" style={{}} url={link} controls/>
        </div>
        </div>)
}


[{"Total": 0, "title": "saludos y despedidas"}, {"Total": 2, "title": "presentaciones personales"}, {"Total": 3, "title": "Dar informacion personal"}, {"Total": 4, "title": "verb to be"}, {"Total": 5, "title": "Present Simple"}, {"Total": 6, "title": "Present Continuo"}, {"Total": 7, "title": "Futuro Will"}, {"Total": 8, "title": "Pasado Simple"}]