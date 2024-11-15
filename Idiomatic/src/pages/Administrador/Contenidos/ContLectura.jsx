import {Head,CardAdmin} from "../../../components/ApartadosCursos"
import {Container,Button} from '@mui/material';
import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom";
import NotificacionAdmin from "../../../components/ComponenteNotificacion/NotificacionAdmin";

export default function ContLectura(){

    const [lecturas, setLecturas]= useState([]);
    const [Borrarlecturas, setBorrarLecturas]= useState("");


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
       

        fetch("/api/deleteLectura",{
          method:'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "lectura":Borrarlecturas,
          })

        })
          .then(res => res.json())
          .then(res => setBorrarLecturas(""))
          
        // setActualizarLecturas(true)
        

        
        setOpen(false);
        
        console.log("Se Borro la lectura")
         
      };
    


    function Lectura(nombreLectura,event){
        event.stopPropagation();
        setBorrarLecturas(nombreLectura)
        setNoti(true);
        handleClickOpen();
        console.log("Page ContLectura: ",nombreLectura)

    }

    // function BorrarLectura(){

    // }
    useEffect(()=>{

        fetch("/api/getAllLecturas")
        .then(res => res.json())
        .then(res => setLecturas(res))
        console.log("Se actualizo",lecturas)
    
    },[Borrarlecturas])

    return(<>
    
        <Head title="Lecturas" mycolor="rgba(0, 26, 255, 0.4)" ruta="/images/iconoAudios.svg"/>
        

        {lecturas.map((element,index) =>{
               return <CardAdmin key={index} title={element.nombre} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/PageLecturas" lectura={element.rutaLectura}    introduccion={element.introduccion} Borrar={Lectura} datoEleminar={element.nombre} /> 
            })}


  
     
{Noti === false ? (<NotificacionAdmin open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png"   texto="Tuviste un Error"/>) : 
         (<NotificacionAdmin open={open} handleClose={handleClose} handleCloseBorrar={handleCloseBorrar} titulo="¿Estas seguro de eliminar el contenido completo?" btnTexto="Completar" img="/src/images/svgJuegos/perroDuda.png" />)}
     
        
    </>)
}