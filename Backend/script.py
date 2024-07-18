import sys
import json

import librosa
import numpy as np
import torch

from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor


# Cargar el procesador desde el almacenamiento local
w2v2_processor = Wav2Vec2Processor.from_pretrained("./wav2vec2-base-960h-processor")

# Cargar el modelo desde el almacenamiento local
w2v2 = Wav2Vec2ForCTC.from_pretrained("./wav2vec2-base-960h-model")


import librosa

# Especifica la ruta al archivo de audio
audio_file = '1.wav'

# Cargar el archivo de audio y la tasa de muestreo original
audio_data, sr = librosa.load(audio_file, sr=None)  # sr=None para obtener la tasa de muestreo original

# Cambiar la frecuencia de muestreo a 16 kHz (16000 Hz)
audio_16k = librosa.resample(audio_data, orig_sr=sr, target_sr=16000)

# Imprimir la nueva tasa de muestreo

entrada = w2v2_processor(audio_16k, sampling_rate=16000, return_tensors="pt").input_values

probabilidades = w2v2(entrada).logits

predicciones = torch.argmax(probabilidades, dim=-1)

transcripcion = w2v2_processor.decode(predicciones[0])


resultFin = {"message": transcripcion}

print(json.dumps(resultFin))
sys.exit(0)
