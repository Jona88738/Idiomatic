import { Container } from "@mui/material";


export default function CreateSentences(){

    let arr = ["","","","",""]
    let spa = false;
    function drag(ev){
        ev.dataTransfer.setData("text",ev.target.id)
    }

    function allodrop(e){
        e.preventDefault();
    }
    
    function drop(e){

        if(arr[parseInt(e.target.id)] == ""){

            if( spa === true){
                
                console.log("ya no puedes regresar")
                var data = e.dataTransfer.getData("text");
                arr[parseInt(e.target.id)] = "";
                e.target.appendChild(document.getElementById(data));
            }else{

        spa = true;

            var data = e.dataTransfer.getData("text");
            arr[parseInt(e.target.id)] = data;
            e.target.appendChild(document.getElementById(data));
            }
        }else if(arr[parseInt(e.target.id)] == "aus" || arr[parseInt(e.target.id)] == "am"){
            console.log("ya no puedes regresar")
            var data = e.dataTransfer.getData("text");
            arr[parseInt(e.target.id)] = "";
            e.target.appendChild(document.getElementById(data));
        }


        //verificar que este bien la oracion

        
    }

    return(<>

        

            <Container sx={{background:"rgba(119, 102, 198, 0.4)",borderRadius:"25px",height:"25vh"}} >
            <img src="/src/images/svgJuegos/cerebroLentes.svg" alt="" style={{float:"left"}}/>
            <h1 >Create Sentences</h1>

            </Container>
            <p style={{marginLeft:"5%"}} >Look at the sentences. Arrange the words so that they are grammatically correct,
                paying attention to the position of the adverbs and using appropiate puntuaction.

            </p>

        <Container sx={{display:"flex",margin:"0"}}>

            <Container sx={{display:"flex",flexDirection:"column",width:"10%",margin:"0"}} >

                <img src="/src/images/svgJuegos/star.svg" alt="" />
                <img src="/src/images/svgJuegos/star.svg" alt="" />
                <img src="/src/images/svgJuegos/star.svg" alt="" />
                <img src="/src/images/svgJuegos/star.svg" alt="" />
                <img src="/src/images/svgJuegos/star.svg" alt="" />


            </Container>



        <div onDrop={drop} onDragOver={allodrop} id="0" style={{display:"flex", flexWrap:"wrap", width:"60%",margin:"0"}}>
            
            <h3 style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}}  draggable="true" onDragStart={drag} id="aus" >Australia</h3>
            <h3 style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}}  draggable="true" onDragStart={drag} id="am" >Am</h3>
            <h3 style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}}  draggable="true" onDragStart={drag} id="from" >from</h3>
            <h3 style={{background:"rgba(119, 102, 198, 0.4)",height:"7vh",width:"135px",marginLeft:"2%",textAlign:"center",fontSize:"25px",display:"inline-block",borderRadius:"25px",marginTop:"0"}}  draggable="true" onDragStart={drag} id="I" >I</h3>
            
        </div>

        
        </Container>

        <div style={{border:"4px solid black",width:"100%",height:"20vh",marginTop:"2%",display:"flex"}} >
            <div style={{background:"rgba(119, 102, 198, 0.4)",marginLeft:"3%",width:"11%",height:"7vh",marginTop:"2%",borderRadius:"25px"}}  id="1" onDrop={drop} onDragOver={allodrop}></div>
            <div style={{background:"rgba(119, 102, 198, 0.4)",marginLeft:"3%",width:"11%",height:"7vh",marginTop:"2%",borderRadius:"25px"}}  id="2" onDrop={drop} onDragOver={allodrop}></div>
            <div style={{background:"rgba(119, 102, 198, 0.4)",marginLeft:"3%",width:"11%",height:"7vh",marginTop:"2%",borderRadius:"25px"}}  id="3" onDrop={drop} onDragOver={allodrop}></div>
            <div style={{background:"rgba(119, 102, 198, 0.4)",marginLeft:"3%",width:"11%",height:"7vh",marginTop:"2%",borderRadius:"25px"}}  id="4" onDrop={drop} onDragOver={allodrop}></div>
        </div>
            
    </>)
}