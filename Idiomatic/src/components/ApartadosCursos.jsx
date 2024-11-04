import { Container, fontSize } from "@mui/system"
import {InputBase, IconButton,Card, CardContent ,  CardMedia,Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

import { useEffect, useState } from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import '../styles/StylesApartados/ApartadoCursos.css';

export function Head({ruta,title,mycolor}){
    return(<> 
        <Container className="ContainerMainHead" > 
            <Container className="MainApartado" sx={{background:mycolor }}>

                <div style={{width:"100%",height:"75%"}}>
                <img className="imgMain" src={ruta}  height="auto"/>
                </div>
                <div style={{width:"100%",height:"20%"}}>
                <h1 className="TituloMainApartado"  >{title}</h1>
                </div>
            </Container>

            
            <Container className="ContainerBuscador" >
            <InputBase className="inputBuscador"  
                       />

            <IconButton  type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon  />
            </IconButton>

            </Container>

        </Container>
    </>)
}

export function MyCard({title,page,link,introduccion,imagen,recursoFrontEje,recursoEjercicio,lectura,completeStyle="3px solid black",videoID, boxshadow = "",opacity,pointerEvents,index,audioID,juegoID}){
  const navigate = useNavigate();

  

    return(
    
    
    // <Card className="CardApartados" onClick={()=> navigate(page,{state:{"link":link,"imagen":imagen,"recursoFront":recursoFrontEje,"recursoEjercicio":recursoEjercicio,"lectura":lectura,"videoID":videoID,"index":index,"audioID":audioID,"juegoID":juegoID}})}  sx={{ opacity: opacity,pointerEvents:pointerEvents ,position:"relative",display:"inline-block", width: "50%", minWidth: 45,maxWidth: 350,boxShadow:boxshadow ,background:"rgba(224, 223, 253, 0.41)",border:completeStyle,borderRadius:"30px",marginTop:"50px",marginLeft:"5%",cursor:"pointer", '&:hover': { transform: 'scale(1.1)', transition: 'transform 0.3s', boxShadow: "0 6px 10px rgba(0, 0, 0, 4.4)" } }}>
      
    <Card className="CardApartados" onClick={()=> navigate(page,{state:{"link":link,"imagen":imagen,"recursoFront":recursoFrontEje,"recursoEjercicio":recursoEjercicio,"lectura":lectura,"videoID":videoID,"index":index,"audioID":audioID,"juegoID":juegoID}})}  sx={{ opacity: opacity,pointerEvents:pointerEvents,boxShadow:boxshadow ,border:completeStyle }}>
      
      <CardMedia
        sx={{ height: 140 }}
        image={imagen}
        title={title}
      />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {title}
          
        </Typography>
        <Typography variant="body2" color="black" >
          {introduccion}
          
          {/* <button style={{background:"red",position:"relative",right:"15%",top:"5%",width:"15%",height:"5vh",cursor:"pointer"}} onClick={() => onDelete(indice)}><CloseIcon/></button> */}
          {boxshadow === "2px 4px 12px rgba(28, 195, 58, 4.4)" ?
          (<CheckCircleIcon color="success"  sx={{position:"absolute",fontSize: 40, right:"0" }}/>):
           boxshadow === 0 ?
          "":
          (<LockIcon sx={{position:"absolute",fontSize: 40, right:"0" }}/>)

        }
          
        </Typography>
      </CardContent>
     
    </Card>
    
    )
}


export function CardAdmin({title,page,link,introduccion,imagen,recursoFrontEje,recursoEjercicio,lectura,Borrar,datoEleminar}){
  const navigate = useNavigate();


 
    
    


    


  function onDelete(event,indice){
   // console.log("Borrado",event.target.attributes.name.value)
   
    if(indice === 1){
      event.stopPropagation();
     // console.log("Se borro");
      
    }else{
      event.stopPropagation();
      navigate(page,{state:{"link":link,"imagen":imagen,"recursoFront":recursoFrontEje,"recursoEjercicio":recursoEjercicio,"lectura":lectura}})
    }
  }

    return(
    
    <>
    <Card onClick={(e)=> onDelete(e,0) }  sx={{position:"relative",display:"inline-block", width: "50%",height:"45vh", minWidth: 45,maxWidth: 350,background:"rgba(224, 223, 253, 0.41)",border:"1px solid black",borderRadius:"30px",marginTop:"50px",marginLeft:"5%", '&:hover': { transform: 'scale(1.1)', transition: 'transform 0.3s', boxShadow: "0 6px 10px rgba(0, 0, 0, 4.4)" } }}>
      
      
      <CardMedia
        sx={{ height: 140 }}
        image={imagen}
        title={title}
      />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {title}
          <button name={datoEleminar}  style={{zIndex:"5",background:"red",position:"absolute",right:"0%",top:"0%",width:"15%",height:"5vh",cursor:"pointer"}} onClick={(e) => Borrar(e.target.attributes.name.value,e)}> <img name={datoEleminar}  src="cancelar.png" alt="" /> </button>

        </Typography>
        <Typography variant="body2" color="black">
          {introduccion}
          
        </Typography>
      </CardContent>
     
 
    </Card>


      </> 
    )
}