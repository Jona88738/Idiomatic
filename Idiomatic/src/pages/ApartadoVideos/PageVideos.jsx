import { Container } from "@mui/material";
import { useState,useEffect } from "react";
import ReactPlayer from 'react-player';

export default function PageVideos(){
   

    const [path, setpath] = useState("");

    return(<div style={{background:"#E0DFFD",height:"100Vh"}}>
        <Container disableGutters sx={{width:"100%",height:"20vh",background:"rgba(119, 102, 198, 0.4)",margin:"0",maxWidth:"1440px !important"}}>

            <img src="/src/images/ApartadosV/HeadVi.svg" alt="" style={{float:"left",marginLeft:"2%"}}/>
            <h1 style={{marginTop:"0",textAlign:"center",position:"relative",right:"8%",top:"18%"}} >Types of verbs</h1>

            
        </Container>
        

        <ReactPlayer style={{marginLeft:"25%",marginTop:"5%"}} url="/api/videos/Caballos.mp4" controls/>
    
        </div>)
}