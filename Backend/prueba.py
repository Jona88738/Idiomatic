import sys
import json
import librosa
import numpy as np
import torch
from pydub import AudioSegment
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor

name = sys.argv[1]
#print(name)
# Cargar el procesador y el modelo desde el almacenamiento local
w2v2_processor = Wav2Vec2Processor.from_pretrained("./configModeloIA/wav2vec2-base-960h-processor")
w2v2 = Wav2Vec2ForCTC.from_pretrained("./configModeloIA/wav2vec2-base-960h-model")

# Mover el modelo a la GPU si está disponible
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
w2v2.to(device)

# Especifica la ruta al archivo de audio
audio_file = './audiosTemporales/N.wav'#//+name
#prueba

#audio_data = AudioSegment.from_mp3(audio_file)

#audio_data = AudioSegment.from_mp3("./audiosTemporales/N.mp3") #
 # Cargar el archivo de audio y la tasa de muestreo original

audio_data, sr = librosa.load(audio_file, sr=None)
    #print(f'Audio loaded successfully. Sample rate: {sr}')


#audio_data, sr = librosa.load(audio_file, sr=None)  # sr=None para obtener la tasa de muestreo original

# Cambiar la frecuencia de muestreo a 16 kHz (16000 Hz)
audio_16k = librosa.resample(audio_data, orig_sr=sr, target_sr=16000)

# Procesar el audio
entrada = w2v2_processor(audio_16k, sampling_rate=16000, return_tensors="pt").input_values.to(device)

# Generar las probabilidades
with torch.no_grad():  # Desactiva el cálculo de gradientes para acelerar el proceso
    probabilidades = w2v2(entrada).logits

# Obtener las predicciones
predicciones = torch.argmax(probabilidades, dim=-1)

# Decodificar la transcripción
transcripcion = w2v2_processor.decode(predicciones[0])

resultFin = {"message": transcripcion}
print(json.dumps(resultFin))
sys.exit(0)

     
    
    
