import { Container } from "@mui/system"
import {InputBase, IconButton,Card, CardContent ,  CardMedia,Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import NotificacionAdmin from "../components/ComponenteNotificacion/NotificacionAdmin";
import { useEffect, useState } from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import '../styles/StylesApartados/ApartadoCursos.css';

export function Head({ruta,title,mycolor}){
    return(<> 
        <Container sx={{display:"flex",margin:"0"}}> 
            <Container sx={{background:mycolor,height:"30vh", borderRadius:"25px",width:"80%",marginTop:"2%",marginLeft:"0",display:"flex", boxShadow: "0 6px 10px rgba(0, 0, 0, 4.4)" }}>

                <img style={{}} src={ruta} width="30%" height="auto"/>
                <h1 style={{marginTop:"10%",marginLeft:"29%"}} >{title}</h1>
            </Container>

            
            <Container sx={{width:"50%"}}>
            <InputBase   sx={{marginLeft:"20%",marginTop:"40%",width:"65%", background:"rgba(119, 102, 198, 0.3)",borderRadius:"20px"}}
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
        <Typography variant="body2" color="black">
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


export function CardAdmin({title,page,link,introduccion,imagen,recursoFrontEje,recursoEjercicio,lectura}){
  const navigate = useNavigate();


  const [Noti, setNoti] = useState(false);
    
    const [open, setOpen] = useState(false);

    const [numError, setnumError] = useState();


    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (event) => {
        event.stopPropagation();
        setOpen(false);
        
      };

      const handleCloseComplete = () => {
        setOpen(false);
        navigate(-1)
        
      };


  function onDelete(event,indice){
    console.log("Borrado",indice)
   
    if(indice === 1){
      event.stopPropagation();
      console.log("Se borro");
      setNoti(true);
      handleClickOpen();
    }else{
      navigate(page,{state:{"link":link,"imagen":imagen,"recursoFront":recursoFrontEje,"recursoEjercicio":recursoEjercicio,"lectura":lectura}})
    }
  }

    return(
    
    <>
    <Card onClick={(e)=> onDelete(e,0) }  sx={{position:"relative",display:"inline-block", width: "50%", minWidth: 45,maxWidth: 350,background:"rgba(224, 223, 253, 0.41)",border:"1px solid black",borderRadius:"30px",marginTop:"50px",marginLeft:"5%", '&:hover': { transform: 'scale(1.1)', transition: 'transform 0.3s', boxShadow: "0 6px 10px rgba(0, 0, 0, 4.4)" } }}>
      
      
      <CardMedia
        sx={{ height: 140 }}
        image={imagen}
        title={title}
      />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {title}
          <button  style={{background:"red",position:"absolute",right:"0%",top:"0%",width:"15%",height:"5vh",cursor:"pointer"}} onClick={(e) => onDelete(e,1)}><CloseIcon/></button>

        </Typography>
        <Typography variant="body2" color="black">
          {introduccion}
          
        </Typography>
      </CardContent>
     
     
{Noti === false ? (<NotificacionAdmin open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png" indice={numError}  texto="Tuviste un Error"/>) : 
         (<NotificacionAdmin open={open} handleClose={handleClose} titulo="¿Estas seguro de eliminar el contenido completo?" btnTexto="Completar" img="/src/images/svgJuegos/perroDuda.png" />)}
      
    </Card>


      </> 
    )
}