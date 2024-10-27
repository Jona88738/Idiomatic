import { Container, Button} from "@mui/material";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Notificacion from "../../components/ComponenteNotificacion/Notificacion";
import { useState } from "react";

export default function CreateSentences(){

    const location = useLocation();
    const navigate = useNavigate();
    const { link,imagen, recursoFront, recursoEjercicio,juegoID,index } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    const [arre, setArre] = useState([])
    const [Noti, setNoti] = useState(false);
    
    

    // let arr = ["","","","",""]
    let valor = recursoEjercicio.length+1;
    const arr = new Array(valor).fill("");
    
    //console.log(arr)

    let spa = true; //false


    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //navigate("/Ejercicios",{state:{"link":link,"imagen":imagen}})
  };

    function drag(ev){
        ev.dataTransfer.setData("text",ev.target.id)
    }

    function allodrop(e){
        e.preventDefault();
    }
    
    function drop(e){
        
    if(isNaN(parseInt(e.target.id))){
        console.log("error")
    }else{
        if(arr[parseInt(e.target.id)] === "" && parseInt(e.target.id) !== arr.length-1){

            if( spa === true){

                console.log("Entro",arr[parseInt(e.target.id)] )

                var data = e.dataTransfer.getData("text");
                const index = arr.findIndex(elemento => elemento === data);
                if(index !== -1){

                    arr[index] = "";
                    console.log(e.target.id)
                    arr[parseInt(e.target.id)] = data; // ""
                    e.target.appendChild(document.getElementById(data));
                    console.log("ya no puedes regresar1" ,arr)

                }else{
                    console.log(e.target.id)
                    arr[parseInt(e.target.id)] = data; // ""
                    e.target.appendChild(document.getElementById(data));
                    console.log("ya no puedes regresar1" ,arr)
                }
                
                
            }
            
        }else if(arr[parseInt(e.target.id)] !== "" || parseInt(e.target.id) === arr.length-1  ){
            
            var data = e.dataTransfer.getData("text");
            console.log(data)
            const index = arr.findIndex(elemento => elemento === data);
            if(index !== -1){
                arr[index] = "";
                e.target.appendChild(document.getElementById(data));
                console.log("ya no puedes regresar2",arr)
            }
           
            
        }
    }

        //verificar que este bien la oracion

        
    }

    function enviar(){
        //const arregloFinal = ["","","","",""];
        const respuesta = "Hello!, My name is Idiomatic"
        
        const arrAux = arr.filter(element => element !== "")
        console.log(arrAux.length)
        const resultado = arrAux.join(' '); 

        console.log(resultado)

        if(arrAux.length === 5){ 

        

        fetch(`https://api.textgears.com/grammar?text=${resultado}&language=en-US&ai=false`,{
            headers:{
                Authorization: "Basic d96UAhwRk6kmjSXp"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.response.errors.length === 0 ){


                    let completeJuego = JSON.parse(sessionStorage.getItem('completeJuego'))
        
                    completeJuego[0].Total += 1;
                    console.log("El tipo es: ",completeJuego[index].TotalComplete);
                    
                    if(completeJuego[index].TotalComplete <=  juegoID){
            
                        completeJuego[index].TotalComplete = completeJuego[index].TotalComplete +1;
                    console.log("entro")
                    
                    console.log(completeJuego[index].TotalComplete )
            
                    sessionStorage.setItem('completeJuego',JSON.stringify(completeJuego) );
                    console.log("Objeto actualizado: ",JSON.parse(sessionStorage.getItem('completeJuego')))
                    completeJuego = JSON.parse(sessionStorage.getItem('completeJuego'));
            
            
            
            
                        //let complete = Number(sessionStorage.getItem('completeVideo')) +1;
                        console.log("entro al if xD")
            
                       // sessionStorage.setItem('completeVideo', complete);
                
                      //  console.log("NumLeccionVideo: ",sessionStorage.getItem('completeVideo'));
                
                        fetch(`/api/progresoUsuarioGeneral?TemaEjercicio=ejercicio&completeV=${completeJuego}`,{
                            method:"PATCH",
                            headers:{
                
                                "Content-Type":'application/json'
                            },
                            body: JSON.stringify({
                                "completeVideo": completeJuego,
                              }),
                        })
                        .then(res => res.json())
                        .then(res => console.log(res))
            
                    }







                    console.log("Felicidades es correcto el ejercicio")
             setNoti(true);
             setArre(resultado);
           
             handleClickOpen ()






                }else{

                 console.log("Tienes un error en la sentencia ")
          
                handleClickOpen()

                }
                
            })

        }else{

            console.log("Tienes un error en la sentencia ")
          
                handleClickOpen()

        }

    }

    return(<>


            <Container sx={{marginLeft:"4%",marginRight:"2%",background:"rgba(119, 102, 198, 0.4)",borderRadius:"25px",height:"25vh",marginTop:"5vh"}} >
            <img src={recursoFront.icono} width="16%" alt="" style={{float:"left"}}/>             
            <h1  >Create Sentences</h1>
            </Container>

            
            <p style={{marginLeft:"5% ",marginTop:"5vh",marginBottom:"5vh"}} >Look at the sentences. Arrange the words so that they are grammatically correct,
                paying attention to the position of the adverbs and using appropiate puntuaction.
            </p>

        <Container sx={{display:"flex",margin:"0"}}>

            <Container sx={{display:"flex",flexDirection:"column",width:"10%",margin:"0"}} >

                <img src="/images/svgJuegos/star.svg" alt="" />
                <img src="/images/svgJuegos/star.svg" alt="" />
                <img src="/images/svgJuegos/star.svg" alt="" />
                <img src="/images/svgJuegos/star.svg" alt="" />
                
            </Container>



            <div onDrop={drop} onDragOver={allodrop} id={recursoEjercicio.length} style={{display:"flex", flexWrap:"wrap", width:"60%",margin:"0"}}>

                {recursoEjercicio.map((palabra,index) => {
                    return  <h3 key={index} style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}} name={palabra}  draggable="true" onDragStart={drag} id={palabra} >{palabra}</h3>
            
                } )}
            
            {/* <h3 style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}}  draggable="true" onDragStart={drag} id="aus" >Australia</h3>
            <h3 style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}}  draggable="true" onDragStart={drag} id="am" >Am</h3>
            <h3 style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}}  draggable="true" onDragStart={drag} id="from" >from</h3>
            <h3 style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}}  draggable="true" onDragStart={drag} id="I" >I</h3>
             */}
            </div>

        
        </Container>

        
        <div style={{display:"flex", position:"relative"}}>
            <div style={{width:"70%",height:"20vh",marginTop:"2%",display:"flex"}} >

            {recursoEjercicio.map((palabra,index) => {
                    return  <div key={index} style={{background:recursoFront.inputColor,marginLeft:"4%",width:"15%",height:"7vh",marginTop:"4%",borderRadius:"25px"}} name={palabra}  id={index} onDrop={drop} onDragOver={allodrop}></div>
            
                } )}

            {/* <div style={{background:"rgba(119, 102, 198, 0.4)",marginLeft:"4%",width:"15%",height:"7vh",marginTop:"4%",borderRadius:"25px"}}  id="1" onDrop={drop} onDragOver={allodrop}></div>
            <div style={{background:"rgba(119, 102, 198, 0.4)",marginLeft:"4%",width:"15%",height:"7vh",marginTop:"4%",borderRadius:"25px"}}  id="2" onDrop={drop} onDragOver={allodrop}></div>
            <div style={{background:"rgba(119, 102, 198, 0.4)",marginLeft:"4%",width:"15%",height:"7vh",marginTop:"4%",borderRadius:"25px"}}  id="3" onDrop={drop} onDragOver={allodrop}></div>
            <div style={{background:"rgba(119, 102, 198, 0.4)",marginLeft:"4%",width:"15%",height:"7vh",marginTop:"4%",borderRadius:"25px"}}  id="4" onDrop={drop} onDragOver={allodrop}></div> */}

        </div>
        <Button onClick={enviar} sx={{position:"absolute",background:recursoFront.btnColor,right:"5%",top:"45%", width:"15%",borderRadius:"20px",color:"black",border:"2px solid black"}} variant="contained">Enviar</Button>

        </div>
        {Noti === false ? (<Notificacion open={open} handleClose={handleClose} titulo="Cometiste un error en la sentencia." btnTexto="Salir" img="/src/images/svgJuegos/dogEquivocado.png"/>) : 
         (<Notificacion open={open} handleClose={handleClose} titulo="Felicidades conseguiste completar el ejercicio con exito!!!" btnTexto="Completar" img="/src/images/svgJuegos/dogFelicidades.png"/>)}
        
         
        </>)
}