import { Container } from "@mui/system"
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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

export function MyCard({title,}){
    return(
    
    <Card  sx={{display:"inline-block", width: "50%", minWidth: 45,maxWidth: 350,background:"rgba(224, 223, 253, 0.41)",borderRadius:"30px",marginTop:"50px",marginLeft:"3%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/images/vector(cursoGramatica).svg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ejercicios
        </Typography>
        <Typography variant="body2" color="black">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
    </Card>

    )
}