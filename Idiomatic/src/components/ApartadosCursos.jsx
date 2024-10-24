import { Container } from "@mui/system"
import {InputBase, IconButton,Card, CardContent ,  CardMedia,Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

export function Head({ruta,title,mycolor}){
    return(<> 
        <Container sx={{display:"flex",margin:"0"}}> 
            <Container sx={{background:mycolor,height:"30vh", borderRadius:"25px",width:"80%",marginTop:"2%",marginLeft:"0",display:"flex", }}>

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

export function MyCard({title,page,link,introduccion,imagen,recursoFrontEje,recursoEjercicio,lectura}){
  const navigate = useNavigate();

    return(
    
    <Card onClick={()=> navigate(page,{state:{"link":link,"imagen":imagen,"recursoFront":recursoFrontEje,"recursoEjercicio":recursoEjercicio,"lectura":lectura}})}  sx={{display:"inline-block", width: "50%", minWidth: 45,maxWidth: 350,background:"rgba(224, 223, 253, 0.41)",border:"1px solid black",borderRadius:"30px",marginTop:"50px",marginLeft:"5%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imagen}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="black">
          {introduccion}
        </Typography>
      </CardContent>
     
    </Card>

    )
}