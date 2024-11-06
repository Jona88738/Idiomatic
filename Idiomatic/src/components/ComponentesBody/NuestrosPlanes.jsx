import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Navigate, useNavigate } from "react-router-dom";

export default function NuestrosPlanes() {
    const router = useNavigate(); // Inicializar el router de Next.js

    // Función para manejar redireccionamiento
    const handleRedirect = (path) => {
        router.push(path); // Redirigir a la ruta proporcionada
    };

    return (
        <Box sx={{
            textAlign: 'center',
            padding: '20px',
            background: '#fffff',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden',
            color: '#3f3d56',
            marginBottom: '60px'
        }}>
            {/* Círculos decorativos */}
            <Box sx={{
                position: 'absolute',
                width: '220px',
                height: '220px',
                backgroundColor: '#FFD700',
                borderRadius: '50%',
                top: '50px',
                left: '20px',
                zIndex: 1,
            }} />
            
            <Box sx={{
                position: 'absolute',
                width: '250px',
                height: '250px',
                backgroundColor: '#FFD700',
                borderRadius: '50%',
                top: '250px',
                right: '50px',
                zIndex: 1,
            }} />
            <Box sx={{
                position: 'absolute',
                width: '150px',
                height: '150px',
                backgroundColor: '#FFD700',
                borderRadius: '50%',
                top: '190px',
                right: '580px',
                zIndex: 1,
            }} />

            <Typography variant="h4" sx={{
                fontFamily: 'Century Gothic, Montserrat',
                fontWeight: 'bold',
                marginBottom: '50px',
                marginTop: '40px',
                zIndex: 2,
                position: 'relative',
                color: '#333'
            }}>
                Nuestros planes
            </Typography>

            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '20px',
                zIndex: 2,
                position: 'relative'
            }}>
                {/* Plan Gratuito */}
                <Card sx={{
                    width: '280px',
                    padding: '20px',
                    backgroundColor: '#fff',
                    border: '2px solid #8c8c8c',
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Tahoma' , color: '#46467A'}}>
                        GRATUITO
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', color: '#666' }}>
                        Tiempo ilimitado
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, color: '#333', textAlign: 'left' , fontSize: '16px'}}>
                        <li>• Contenido limitado</li>
                        <li>• Anuncios</li>
                        <li>• Acceso a AI</li>
                        <li>• Juegos y ejercicios variados</li>
                    </ul>
                    <Button 
                        variant="contained" 
                        sx={{
                            marginTop: '40px',
                            backgroundColor: '#3f3d56',
                            color: '#fff',
                            borderRadius: '20px',
                            padding: '8px 16px',
                            fontSize: '14px',
                            '&:hover': { backgroundColor: '#5a5a78' }
                        }}
                        onClick={() => Navigate('/Sign_up')} 
                    >
                        Registrarse ahora
                    </Button>
                </Card>

                {/* Plan Plus (resaltado) */}
                <Card sx={{
                    width: '280px',
                    padding: '20px',
                    backgroundColor: '#fff',
                    border: '4px solid #7766c6',
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Sombra más intensa
                    transform: 'scale(1.05)',
                    zIndex: 3,
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Efecto de transición
                    '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                    }
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '5px',  fontFamily: 'Tahoma' , color: '#46467A' }}>
                        PLUS
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', color: '#666' }}>
                        Tiempo ilimitado
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, color: '#333', textAlign: 'left' }}>
                        <li>• Sin anuncios</li>
                        <li>• Acceso a contenido exclusivo</li>
                        <li>• Acceso a AI</li>
                        <li>• Pruebas de tipo de aprendizaje y de nivelación</li>
                        <li>• Contenido apoyo para pruebas de certificación</li>
                    </ul>
                    <Button 
                        variant="contained" 
                        sx={{
                            marginTop: '20px',
                            backgroundColor: '#3f3d56',
                            color: '#fff',
                            borderRadius: '20px',
                            padding: '8px 16px',
                            fontSize: '14px',
                            '&:hover': { backgroundColor: '#5a5a78' }
                        }}
                        onClick={() => navigate('/ruta-plus')} // Cambia '/ruta-plus' por la ruta deseada
                    >
                        Pruébalo por 80 MXN
                    </Button>
                </Card>
            </Container>
        </Box>
    );
}
