import { Container } from "@mui/material";

export default function DragImage(){
    let arr = ["","","",""]
    function drag(ev){
        ev.dataTransfer.setData("text",ev.target.id)

    }

    function allodrop(e){
        e.preventDefault();
    }
    
    function drop(e){

        if(arr[parseInt(e.target.id)] == ""){

            var data = e.dataTransfer.getData("text");
            arr[parseInt(e.target.id)] = data;
            
            if(e.target.id === 0){
            const da = document.getElementById(data)
            da.style.border = "4px solid black"
            e.target.appendChild(da);

            }
            
            e.target.appendChild(document.getElementById(data));

        }else if(arr[parseInt(e.target.id)] === "they" || arr[parseInt(e.target.id)] === "he" || arr[parseInt(e.target.id)] === "it" ){
            console.log("ya no puedes regresar")
            var data = e.dataTransfer.getData("text");
            arr[parseInt(e.target.id)] = "";
            const da = document.getElementById(data)
            da.style.border = ""

            e.target.appendChild(da);
        }
    }

    return(<>
    <br/>
    <Container sx={{background:"rgba(119, 102, 198, 0.4)",borderRadius:"25px",height:"20vh"}} >

    <img src="/src/images/svgJuegos/cerebroLentes.svg" width="13%" alt=""  style={{float:"left"}}/>
    <h1> Arrastra donde corresponde xD</h1>

    </Container>
    
    <div onDrop={drop} onDragOver={allodrop} id="0" style={{display:"flex", flexWrap:"wrap", width:"100%",height:"33vh",justifyContent:"space-evenly"}}>
    <img style={{borderRadius:"25px",border:"4px solid black",marginLeft:"8%",marginTop:"3%"}} src="/src/images/dragImage/they.png" width="200" height="180"  draggable="true" onDragStart={drag} id="they"/>

    <img style={{borderRadius:"25px",border:"4px solid black",marginLeft:"8%",marginTop:"3%"}} src="/src/images/dragImage/he.png" width="200" height="180" draggable="true" onDragStart={drag} id="he"/>

    <img style={{borderRadius:"25px",border:"4px solid black",marginLeft:"8%",marginTop:"3%"}} src="/src/images/dragImage/it.png" width="200" height="180"  draggable="true" onDragStart={drag} id="it"/>

    
    </div>      
    

    <div className="figure" style={{width:"100%",height:"35vh",display:"flex",justifyContent:"space-evenly",marginTop:"2%"}} >
        <div style={{width:"20%"}}>
            <div style={{border:"4px solid #7766C6",width:"100%",height:"100%",borderRadius:"35px"}}  id="1" onDrop={drop} onDragOver={allodrop}></div>
            
            <div style={{position:"absolute",border:"2px solid black",width:"25%",height:"9vh",bottom:"3%",left:"8%",borderRadius:"25px",background:"white"}}>
                 <h2  style={{textAlign:"center",marginTop:"2%"}} >it</h2> 
            </div>
            
        </div>

        <div  style={{width:"20%"}}>

            <div style={{border:"4px solid #7766C6",width:"100%",height:"100%",borderRadius:"35px"}}  id="2" onDrop={drop} onDragOver={allodrop}></div>
            <div style={{position:"absolute",border:"2px solid black",width:"25%",height:"9vh",bottom:"3%",left:"38%",borderRadius:"25px",background:"white"}}>
                 <h2  style={{textAlign:"center",marginTop:"2%"}}>they</h2> 
            </div>

        </div>

        <div  style={{width:"20%"}}>
            <div style={{border:"4px solid #7766C6",width:"100%",height:"100%",borderRadius:"35px"}}  id="3" onDrop={drop} onDragOver={allodrop}></div>
            <div style={{position:"absolute",border:"2px solid black",width:"25%",height:"9vh",bottom:"3%",left:"68%",borderRadius:"25px",background:"white"}}>
                 <h2  style={{textAlign:"center",marginTop:"2%"}}>he</h2> 
            </div>

        </div>
    </div>
    </>)
}
