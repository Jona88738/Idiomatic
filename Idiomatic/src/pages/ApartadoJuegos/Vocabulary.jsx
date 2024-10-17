import { Container } from "@mui/material";


function mi(){
    console.log("Hola xD")
}

export default function ConstructingSentences(){
    return(<>
            
            <Container sx={{background:"rgba(119, 102, 198, 0.84)",borderRadius:"25px",height:"20vh",width:"40%",marginLeft:"6%",position:"relative",top:"10px",border:"4px solid black"}}>
            <br/>
            <img style={{float:"right",position:"relative",bottom:"15%"}} src="/images/svgJuegos/dogherramientas.png" alt="" width="25%" />

            <h1 style={{marginTop:"5%"}}>Jobs and occupations</h1>
            
            </Container>

            <Container sx={{backgroundImage:"url('/images/svgJuegos/fondoVocabulario.png')",width:"95%",height:"75vh",border:"4px solid black",borderRadius:"25px"}}>

                <h1> Selecciona la imagen de la profesion que se te indica

                </h1>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>

                <div onClick={mi} style={{width:"25%",height:"35vh",background:"gray",border:"2px solid black",borderRadius:"25px"}}></div>
                <div style={{width:"25%",height:"35vh",background:"gray",border:"2px solid black",borderRadius:"25px"}}>
                
                {/* <img style={{float:"right",position:"relative",bottom:"15%"}} src="/src/images/Doctor.png" alt="" width="80%" /> */}

                </div>
                <div style={{width:"25%",height:"35vh",background:"gray",border:"2px solid black",borderRadius:"25px"}}></div>
                </div>

                <h2 style={{background:"white",border:"2px solid black",borderRadius:"25px",width:"25%",textAlign:"center",marginLeft:"35%"}}>Doctor</h2>  
                <h2 style={{background:"white",border:"2px solid black",borderRadius:"25px",width:"10%",textAlign:"center",marginLeft:"43%"}}>1/10</h2>  
            </Container>
    
            
    
    </>)
}