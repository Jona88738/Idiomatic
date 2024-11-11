import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function Tipo_Aprendizaje({suscripcion,tipoAprendizaje}){

    const navigate = useNavigate();

    console.log("este es mi tipo de aprendizaje: ",tipoAprendizaje)

    function Redireccionar(direccion){
        console.log(direccion)
        navigate(direccion)
      }



    return(<>


        <Box sx={{background:"rgba(249, 176, 195, 0.34)",height:"20vh",borderRadius:"50px",marginTop:"5%",width:"100%"}}>

        <img src="/images/Estilos.png" style={{float:"left",height:"95%"}} alt="" />
        <h1 style={{textAlign:"center",fontSize:"4vw"}}>Estilo de aprendizaje</h1>

        
        </Box>

        {tipoAprendizaje !== "" ? (<Button variant="contained" sx={{background:"rgba(119, 102, 198, 0.67)",color:"black"}}>{tipoAprendizaje}</Button>
        ):("")}

        <h2>¿Qué es un estilo de aprendizaje?</h2>
        <Paper  elevation={3} sx={{background:"rgba(119, 102, 198, 0.1)"}}>

            <p style={{marginLeft:"3%",paddingBottom:"5%",paddingTop:"2%"}}> Los estilos de aprendizaje son las distintas formas en que cada persona comprende y retiene mejor la información, ya sea viendo, escuchando, haciendo o razonando. Los estilos de aprendizaje ayudan a cada persona a descubrir cómo maximizar su potencial y disfrutar el proceso. Conoce el tuyo y aprende de forma más efectiva!.</p>
        </Paper>

        <Stack direction="row" sx={{}}>

        {tipoAprendizaje !== "" ?  (<Button  sx={{background:"rgba(255, 194, 18, 1)",borderRadius:"25px"}} variant="contained">Saber mas acerca de mi estilo</Button>)
        
        
        :(<Button  sx={{background:"rgba(255, 194, 18, 1)",borderRadius:"25px"}} onClick={() => {const direccion = "/TestAprendizaje"; Redireccionar(direccion);}} variant="contained">¡Conocer mi estilo de aprendizaje!</Button>)}
        
        

        </Stack>
        
        <h2>Guia de aprendizaje</h2>
        

    </>)
}