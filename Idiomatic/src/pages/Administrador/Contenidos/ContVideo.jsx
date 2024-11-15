import {Head,CardAdmin} from "../../../components/ApartadosCursos"
import {Container,Button} from '@mui/material';
import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NotificacionAdmin from "../../../components/ComponenteNotificacion/NotificacionAdmin";
export default function ContTemaVideo(){

    const [Noti, setNoti] = useState(false);
    const [open, setOpen] = useState(false);
    const [mensaje,setMensaje] = useState("");
    const [Videos,setVideos] = useState([]);

    const [UploadVideo,setUploadVideo] = useState({});

    const [BorrarVideo, setBorrarVideo]= useState("");

    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (event) => {
        event.stopPropagation();
        setOpen(false);
        

      };

      const Enviar = () => {
        // console.log(UploadVideo);

        const numeroDeElementos = Object.keys(UploadVideo).length;

        console.log("Número de elementos:", UploadVideo);

        if(numeroDeElementos === 5){

            let data = {
                "Nombre":UploadVideo.Nombre,
                "introduccion":UploadVideo.Introduccion,
                "Tema":UploadVideo.Tema,
                "link":UploadVideo.link,
                "img":"/images/ApartadosTemas/"+UploadVideo.Imagen
            }


         fetch('/api/SubirVideo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Añade este encabezado
        },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(res => setBorrarVideo("XD"))

        
      setUploadVideo({
        ...UploadVideo,
        "Nombre":"",
        "Introduccion":"",
        "Tema":"none",
        "link":"",
        "Imagen":"",
        // "AudioCargado":null
      })

      setMensaje("Acabas de agregar un nuevo elemento!!!")
      setNoti(false);
      handleClickOpen();

        }else{

            setMensaje("Termina de rellenar los campos")
            setNoti(false);
              handleClickOpen();
        }


      }

      const handleChange = (event) => {
      
        setUploadVideo({
          ...UploadVideo,
          [event.target.name]:event.target.value,
        })
       // setAge(event.target.value);
      };

      function BasicSelect({name,MyValue,value1,value2,value3,value4,value5,value6,value7,label}) {
    
  
        return (
          <Box sx={{ minWidth: 120, display:"inline-block",marginBottom:"2%",position:"relative",bottom:"12px",marginLeft:"2%"}}>
             <FormControl variant="filled" className="TextFieldAudio" sx={{ m: 1, minWidth: 120 }}>
              
            <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={MyValue}
              name={name}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem  value={value1}>{value1}</MenuItem>
              <MenuItem value={value2}>{value2}</MenuItem>
              <MenuItem value={value3}>{value3}</MenuItem>
              <MenuItem value={value4}>{value4}</MenuItem>
              <MenuItem value={value5}>{value5}</MenuItem>
              <MenuItem value={value6}>{value6}</MenuItem>
              <MenuItem value={value7}>{value7}</MenuItem>
            </Select>
          </FormControl>
          </Box>
        );
      }

    //   const VisuallyHiddenInput = styled('input')({
    //     clip: 'rect(0 0 0 0)',
    //     clipPath: 'inset(50%)',
    //     height: 1,
    //     overflow: 'hidden',
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     whiteSpace: 'nowrap',
    //     width: 1,
    //   });
      
    //   function InputFileUpload() {
    //     return (
    //       <Button
    //         component="label"
    //         role={undefined}
    //         variant="contained"
    //         // name="SubirAudio"
            
    //         tabIndex={-1}
    //         startIcon={<CloudUploadIcon />}
    //         sx={{marginLeft:"2%",marginBottom:"3%"}}
    //       >
    //         Upload files
    //         <VisuallyHiddenInput
    //            type="file"
    //           accept="audio/*"
    //           name="AudioCargado" 
    //           onChange={(event) => {
    //             console.log(event.target.files); 
              
    //             setUploadAudio({
    //               ...UploadAudio,
    //               [event.target.name]:event.target.files,
    //             })
    //           } }
    //           // multiple
    //         />
    //       </Button>
    //     );
    //   }


      function getIdVideoDelete(nombreLectura,event){
        event.stopPropagation();
        setBorrarVideo(nombreLectura)
        setNoti(true);
        handleClickOpen();
        console.log("Page ContLectura: ",nombreLectura)

       

    }

      const handleCloseBorrar = () => {
        console.log("Id del juego Borrado",BorrarVideo);

        fetch("/api/deleteVideo",{
            method:'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "idVideo":BorrarVideo,
            })
  
          })
            .then(res => res.json())
            .then(res => setBorrarVideo(""))

        setOpen(false);
      }

      useEffect(()=>{
        fetch("/api/getAllVideos")
            .then(res => res.json())
            .then(res => setVideos(res))
},[BorrarVideo])
    
    return(<>
    
    {/* <NavBar_Apartados/> */}

            
    <Head title="Temas de Videos" mycolor="rgba(255, 194, 18, 0.4)" ruta="/images/iconoVideos.svg"/>

    <Container style={{marginTop:"2%",marginLeft:"0",marginRight:"0", maxWidth:"1440px"}}>
      <h1 style={{marginBottom:"4%",marginLeft:"2%"}}>Agregar Contenido</h1>
      {/* <label htmlFor="">Nombre:</label> */}
      <TextField id="filled-basic" className="TextFieldAudio" label="Nombre" name="Nombre" value={UploadVideo.Nombre}   variant="filled" onChange={handleChange} />
      <TextField id="filled-basic" className="TextFieldAudio" label="Introduccion" name="Introduccion" value={UploadVideo.Introduccion} variant="filled"  onChange={handleChange} />

      <BasicSelect name="Tema" MyValue={UploadVideo.Tema} label="Tema" value1="saludos y despedidas" value2="presentaciones personales" value3="Dar informacion personal" value4="verb to be" value5="Present Simple" value6="Present Continuo" value7="Futuro Will"  />

      <TextField id="filled-basic" className="TextFieldAudio"  label="link" name="link" value={UploadVideo.link} variant="filled" onChange={handleChange}  />

      <BasicSelect name="Imagen" MyValue={UploadVideo.Imagen} label="Imagen" value1="greetings and farewells.png" value2="PersonalPresentations.png" value3="PersonaLInformation.png"  value4="VerbToBe.png" value5="PresentSimple.png" value6="PresentContinuo.png" value7="FutureWill.png" />

      <br />
    {/* <InputFileUpload/> */}
    {/* <label htmlFor="">{UploadAudio.AudioCargado != null  ? ("...Audio cargado"):("")}</label> */}

    <Button variant="contained" onClick={Enviar} sx={{marginLeft:"2%", width:"10%",marginBottom:"3%"}}>Enviar</Button>


    </Container>




    {/* <CardAdmin title={"saludos y despedidas"} imagen="/images/ApartadosTemas/greetings and farewells.png"  page="/Videos" link={"saludos y despedidas"}  introduccion={"Empieza y termina tus conversaciones con confianza"} /> 
    <CardAdmin title={"presentaciones personales"} imagen="/images/ApartadosTemas/PersonalPresentations.png"   page="/Videos" link={"presentaciones personales"}  introduccion={"¡Preséntate como un profesional! Mira el video para aprender a destacar en cualquier situación."} />
    <CardAdmin title={"Dar informacion personal"} imagen="/images/ApartadosTemas/PersonaLInformation.png"   page="/Videos" link={"Dar informacion personal"}  introduccion={"Aprende a preguntar y compartir información personal de manera natural."} />
    <CardAdmin title={"verb to be"} imagen="/images/ApartadosTemas/VerbToBe.png"   page="/Videos" link={"verb to be"}  introduccion={"Tu primer paso hacia el dominio del inglés: Domina el verbo ‘to be’ con este video."} />
    <CardAdmin title={"Present Simple"} imagen="/images/ApartadosTemas/PresentSimple.png"   page="/Videos" link={"Present Simple"}  introduccion={"El tiempo de tus acciones: Domina el Present Simple y exprésate con confianza.."} />
    <CardAdmin title={"Present Continuo"} imagen="/images/ApartadosTemas/PresentContinuo.png"   page="/Videos" link={"Present Continuo"}  introduccion={"Habla sobre lo que está sucediendo ahora: Domina el Present Continuous."} />
    <CardAdmin title={"Futuro Will"} imagen="/images/ApartadosTemas/FutureWill.png"  page="/Videos" link={"Futuro Will"}  introduccion={"Predice el futuro con confianza: Aprende a usar ‘will’ en inglés."} />
    <CardAdmin title={"Pasado Simple"} imagen="/images/ApartadosTemas/PastSimple.png"   page="/Videos" link={"Pasado Simple"}  introduccion={"Revive el pasado: Aprende a usar el Simple Past para hablar de experiencias y eventos."} />
     */}
    {Videos.map((video,contador) =>{ 
                 return (
                    
                    <CardAdmin title={video.nombre} imagen={video.img}   index={300} page="/video" link={video.link}  introduccion={video.introduccion}  boxshadow={0}  videoID={video.id_leccion} Borrar={getIdVideoDelete} datoEleminar={video.idvideo} />) // falta de realizar //completeStyle={Element.completeStyle} boxshadow="2px 4px 12px rgba(28, 195, 58, 4.4
                    //
                })}
        
    {Noti === false ? (<NotificacionAdmin open={open} handleClose={handleClose} titulo={mensaje} btnTexto="Salir" img="/images/svgJuegos/dogherramientas.png"   texto="Tuviste un Error" condicion="0"/>) : 
         (<NotificacionAdmin open={open} handleClose={handleClose} handleCloseBorrar={handleCloseBorrar} titulo="¿Estas seguro de eliminar el contenido completo?" btnTexto="Completar" img="/images/svgJuegos/perroDuda.png" />)}
     

    
    </>)
}