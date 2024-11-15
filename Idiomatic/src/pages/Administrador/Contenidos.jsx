import {Container,Button} from '@mui/material';
//import {MyCard} from '../../components/ApartadosCursos'
import {InputBase, IconButton,Card, CardContent ,  CardMedia,Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';


export default function Contenidos(){

  const navigate = useNavigate();


  function handleOnclick(){
    navigate(-1);
}


    function MyCard({title,page,link,introduccion,imagen,recursoFrontEje,recursoEjercicio,lectura}){
        const navigate = useNavigate();
      
          return(
          
          <Card onClick={()=> navigate(page,{state:{"link":link,"imagen":imagen,"recursoFront":recursoFrontEje,"recursoEjercicio":recursoEjercicio,"lectura":lectura}})}  sx={{display:"inline-block", width: "50%", minWidth: 45,maxWidth: 350,background:"rgba(224, 223, 253, 0.41)",border:"1px solid black",borderRadius:"30px",marginTop:"3%",marginLeft:"5%",cursor:"pointer", '&:hover': { transform: 'scale(1.1)', transition: 'transform 0.3s', boxShadow: "0 6px 10px rgba(0, 0, 0, 4.4)" } }}>
            <CardMedia
              sx={{ height: "13vw" }} //140
              image={imagen}
              title={title}
              
            />
            <CardContent style={{background:"rgba(255, 194, 18, 0.43)", height:"5vw",padding:"0"}}>
              <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center",fontSize:"3.5vw"}}>
                {title}
              </Typography>
              <Typography variant="body2" color="black">
                {introduccion}
              </Typography>
            </CardContent>
           
          </Card>
      
          )
      }





    return (<>
        {/* <br/> */}
        <Container style={{background:"rgb(70, 70, 122)",margin:"0",maxWidth:"100%"}}>
          <h1 style={{textAlign:"center",color:"white"}}>Contenidos</h1>
          
        </Container>
        <Button variant="text" onClick={handleOnclick} style={{position:"absolute",left:"2%",top:"16%",fontSize:"1.2vw"}}> <ReplyIcon fontSize="large" style={{fontSize:"50px"}}/>Regresar</Button>
        <Container style={{marginLeft:"15%", width:"80%"}}> 
            <MyCard title={"Videos"} imagen="/images/Contenidos/Video.png"  page="/ContVideoTema"/>
            <MyCard title={"Audios"} imagen="/images/Contenidos/Audio.png" page="/ContAudioTema"/>
            <MyCard title={"Lecturas"} imagen="/images/Contenidos/Lectura.png"  page="/ContLectura" />
            <MyCard title={"Ejercicios"} imagen="/images/Contenidos/Ejercicio.png" page="/ContEjercicio" />


        </Container>
    </>)
}