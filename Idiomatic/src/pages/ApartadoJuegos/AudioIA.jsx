import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function AudioIA() {
    const [recording, setRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    const location = useLocation();

    const { recursoFront, recursoEjercicio } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    
    // useEffect(() => {
    //     console.log("se puede enviar");
    // }, []);




    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);

            mediaRecorderRef.current.ondataavailable = event => {
                audioChunks.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioUrl(audioUrl);
                audioChunks.current = [];
                sendAudioToServer(audioBlob);
            };

            mediaRecorderRef.current.start();
            setRecording(true);
        } catch (error) {
            console.error('Error al iniciar la grabación:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setRecording(false);
        }
    };

    const sendAudioToServer = (blob) => {
        const formData = new FormData();
        formData.append('audio', blob, 'N.wav');

        fetch('/api/audioIA', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error al enviar el audio:', error));
    };

    
    return (
        <div style={{ background: "#E0DFFD", height: "100vh" }}>
            <br />
            <Container sx={{ background: "rgba(255, 194, 18, 0.65)", borderRadius: "25px", height: "25vh" }}>
                <img src="/src/images/svgJuegos/speak.svg" width="250px" style={{ float: "right", position: "relative", bottom: "18%" }} />
                <h1 style={{ paddingTop: "5%" }}>Speaking.- Was/Were</h1>
            </Container>
            <h1 style={{ paddingLeft: "5%" }}>Speak this sentence</h1>
            <Container sx={{ display: "flex" }}>
                <img src={recursoFront.icono} alt="" width="20%" style={{ marginLeft: "8%" }} />
                        {/*  ="/src/images/svgJuegos/perroDudaIA.png" */}
                <Container sx={{}}>
                    <div style={{ background: "rgba(255, 189, 0, 0.95)", height: "15vh", borderRadius: "22px", marginTop: "7%", border: "4px solid black" }}>
                        <h2 style={{ textAlign: "center", paddingTop: "1%" }}>{recursoEjercicio}</h2>
                    </div>
                </Container>
            </Container>
            <br />
            <MicIcon sx={{ fontSize: 9 }} />
            <Button
                id="record"
                onClick={startRecording}
                variant="outlined"
                sx={{ width: "30%", height: "10vh", fontSize: "25px", borderRadius: "22px", background: recursoFront.btnColor, color: "black", marginLeft: "20%" }}
            >
                Press to talk
                <MicIcon sx={{ fontSize: 50 }} />
            </Button>
            <Button
                id="stopRecord"
                onClick={stopRecording}
                variant="outlined"
                sx={{ width: "30%", height: "10vh", fontSize: "25px", borderRadius: "22px", background:recursoFront.btnColor, color: "black", marginLeft: "0%" }}
            >
                Press to stop Record
                <MicIcon sx={{ fontSize: 50 }} />
            </Button>
            
        </div>
    );
}
