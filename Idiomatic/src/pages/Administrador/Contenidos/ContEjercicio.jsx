import NavBar_Apartados from "../../../components/NavBar_Apartados"
import {Head,CardAdmin} from "../../../components/ApartadosCursos"
import Container from '@mui/material/Container';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificacionAdmin from "../../../components/ComponenteNotificacion/NotificacionAdmin";

export default function ContEjercicioTema(){

    const [juegos,setJuegos] = useState([]);

    // const [lecturas, setLecturas]= useState([]);
     const [BorrarJuego, setBorrarJuego]= useState("");


    const [open, setOpen] = useState(false);

    const [ActualizarLecturas, setActualizarLecturas] = useState(false);
    const [Noti, setNoti] = useState(false);

    const navigate = useNavigate();
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (event) => {
        event.stopPropagation();
        setOpen(false);
        
      };

      const handleCloseBorrar = () => {

        console.log("Id del juego Borrado",BorrarJuego)
        

        fetch("/api/deleteJuego",{
            method:'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "juego":BorrarJuego,
            })
  
          })
            .then(res => res.json())
            .then(res => setBorrarJuego(""))
            // .then(res => )
      
            setOpen(false);
        }

        function getIdJuegoDelete(nombreLectura,event){
            event.stopPropagation();
            setBorrarJuego(nombreLectura)
            setNoti(true);
            handleClickOpen();
            console.log("Page ContLectura: ",nombreLectura)
    
        }
    

    useEffect(()=>{
            fetch("/api/getAllJuegos")
                .then(res => res.json())
                .then(res => setJuegos(res))
    },[BorrarJuego])

   

    return(<>
            {/* <NavBar_Apartados/> */}

            
            <Head title="Temas Ejercicios" mycolor="rgba(255, 0, 0, 0.4)" ruta="/images/iconoEjercicios.svg"/>
            

            {juegos.map((ejercicio) =>{
                const recursosFront = ejercicio.recursos;
                const recursoEjercicio = recursosFront.sentencia;
                // console.log(ejercicio.img) 
                //console.log(recursosFront.sentencia);
                return  <CardAdmin title={ejercicio.tema}  introduccion={ejercicio.introduccion} page={"/"+ejercicio.ejercicio} recursoFrontEje={recursosFront} recursoEjercicio={recursoEjercicio} imagen={ejercicio.img} Borrar={getIdJuegoDelete} datoEleminar={ejercicio.idjuegos} /> //link={link}
            })} 
            
            
            {Noti === false ? (<NotificacionAdmin open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png"   texto="Tuviste un Error"/>) : 
         (<NotificacionAdmin open={open} handleClose={handleClose} handleCloseBorrar={handleCloseBorrar} titulo="¿Estas seguro de eliminar el contenido completo?" btnTexto="Completar" img="/src/images/svgJuegos/perroDuda.png" />)}
     
    </>)
}