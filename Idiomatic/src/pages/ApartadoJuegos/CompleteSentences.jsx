import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function CompleteSentences(){
    return(
    <div style={{backgroundImage:"linear-gradient(#F9B0C3,#936873)",marginBottom:"0px",height:"100vh"}}>
   
        
        <br/>

        <Container sx={{background:"rgba(255, 194, 18, 0.76)",borderRadius:"25px", height:"25vh",marginTop:"0%"}}>

        <img src="/src/images/svgJuegos/cerebroLentes.svg" alt="" style={{float:"left"}} />
        <h1 style={{textAlign:"center",marginTop:"50px",marginLeft:"20%",display:"inline-block"}}>Complete Sentences</h1>
        <img src='/src/images/svgJuegos/perroDuda.png' width="15%" style={{float:"right"}} />

        </Container>

    <Container sx={{background:"rgba(255, 194, 18, 0.76)",display:"flex", borderRadius:"25px",marginTop:"2%",paddingBottom:"8%" }}>

        
            <Container sx={{}}>

            <h3 style={{display:"contents"}}>I am</h3>
            <input style={{borderRadius:"25px",marginLeft:"7%",marginTop:"5%",height:"13%"}} type="text" />
            
            <br/>
            
            <h3 style={{display:"contents",marginTop:"85px"}}>you are</h3>
            <input style={{borderRadius:"25px",marginLeft:"7%",marginTop:"5%",height:"13%"}} type="text" />
            
           
            <br/>
            

            <h3 style={{display:"contents"}}>he is</h3>
            <input style={{borderRadius:"25px",marginLeft:"7%",marginTop:"5%",height:"13%"}} type="text" />

            
           
            <br/>
            

            <h3 style={{display:"contents"}}>she is</h3>
            <input style={{borderRadius:"25px",marginLeft:"7%",marginTop:"5%",height:"13%"}} type="text" />
            
            
            
            <br/>

            
            <h3 style={{display:"contents"}}>it is</h3>
            <input style={{borderRadius:"25px",marginLeft:"7%",marginTop:"5%",height:"13%"}} type="text" />

            </Container>
        
            


            


            <Container>
            <h3 style={{display:"contents"}}>we are</h3>
            <input style={{borderRadius:"25px",marginLeft:"5%",marginTop:"5%",height:"13%"}} type="text" />
            
            <br/>
            <h3 style={{display:"contents"}}>you are</h3>
            <input style={{borderRadius:"25px",marginLeft:"5%",marginTop:"5%",height:"13%"}} type="text" />

            <br/>
            <h3 style={{display:"contents"}}>they are</h3>
            <input style={{borderRadius:"25px",marginLeft:"5%",marginTop:"5%",height:"13%"}} type="text" />
            </Container>

            
    </Container>
        
    <Button sx={{marginTop:"2%",marginLeft:"40%",borderRadius:"25px",width:"15%"}} variant='contained'>Enviar</Button> 
    </div>)
}