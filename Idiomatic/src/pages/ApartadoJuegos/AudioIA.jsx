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

            <h1>Audios</h1>

            <button id="record" onClick={fun}>Grabar</button>
            <button id="stopRecord" disabled>Detener</button>
            <audio id="audio" controls></audio>
    
    
    </div>)
}