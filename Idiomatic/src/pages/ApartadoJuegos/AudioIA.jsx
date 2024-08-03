import Container from '@mui/material/Container';

export default function AudioIA(){


  async function fun(){
        let recorder, stream;
//document.getElementById('record').addEventListener('click', async () => {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);
    recorder.start();
    document.getElementById('stopRecord').disabled = false;
    document.getElementById('record').disabled = true;


    recorder.addEventListener('dataavailable', e => {
        document.getElementById('audio').src = URL.createObjectURL(e.data);
        document.getElementById('audio').controls = true;
    });
//});

document.getElementById('stopRecord').addEventListener('click', () => {
    recorder.stop();
    document.getElementById('stopRecord').disabled = true;
    document.getElementById('record').disabled = false;
    convertToWav();
});
    }

    function obtenerAudio(){
        const audioBlob = new Blob([document.getElementById('audio').src], { type: 'audio/wav' });
    
    }


    return(<div  style={{background:"#E0DFFD",height:"100Vh"}} >

        <br/>

            <Container sx={{background:"rgba(255, 194, 18, 0.65)",borderRadius:"25px",height:"25vh"}}>

                <img src="/src/images/svgJuegos/speak.svg" width="250px"  style={{float:"right",position:"relative",bottom:"18%"}} />
                <h1 style={{paddingTop:"5%"}} >Speaking.- Was/Were</h1>
            </Container>

            <h1 style={{paddingLeft:"5%"}}>Speak this sentence</h1>

            <Container sx={{display:"flex"}}>

            <img src="/src/images/svgJuegos/perroDudaIA.png" alt="" width="20%" style={{marginLeft:"8%"}}/>
            
                <Container sx={{}}>

                    <div style={{background:"rgba(255, 189, 0, 0.95)",height:"15vh",borderRadius:"22px",marginTop:"7%",border:"4px solid black"}}>

                        <h2 style={{textAlign:"center",paddingTop:"1%"}}>My father wasn’t at the office 
                        yesterday</h2>
                    </div>

                    
                </Container>


            </Container>

            <br/>
            
           <button id="record" onClick={fun}>Grabar</button>
            <button id="stopRecord" disabled>Detener</button>
            <audio id="audio" controls></audio>
    
    
    </div>)
}