import { Container, Box, Typography, Link, List, ListItem, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate  } from 'react-router-dom';

export default function Footer_Home() {

    const navigate = useNavigate();

    return (
        <Box sx={{ backgroundColor: '#3A3160', color: 'white', padding: '40px 0', boxShadow: '0px -6px 10px rgba(0, 0, 0, 0.3)' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                
                {/* Sección de Cursos */}
                <Box sx={{ marginBottom: '20px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Nuestros Cursos</Typography>
                    <List>
                        <ListItem sx={{ padding: 0 }}>
                            <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1rem', '&:hover': { color: '#FFD700' } }}>
                                Curso de inglés
                            </Link>
                        </ListItem>
                    </List>
                </Box>

                {/* Sección de Recursos */}
                <Box sx={{ marginBottom: '20px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Recursos</Typography>
                    <List>
                        <ListItem sx={{ padding: 0 }}>
                            <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1rem', '&:hover': { color: '#FFD700' } }}>
                                Test de nivel de inglés
                            </Link>
                        </ListItem>
                        <ListItem sx={{ padding: 0 }}>
                            <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1rem', '&:hover': { color: '#FFD700' } }}>
                                Test de tipo de aprendizaje
                            </Link>
                        </ListItem>
                    </List>
                </Box>

                {/* Sección Sobre Nosotros */}
                <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>Sobre Nosotros</Typography>
                    <List>
                        <ListItem sx={{ padding: 0 }}>
                            <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1rem', '&:hover': { color: '#FFD700' } }}>
                                Visión/Misión
                            </Link>
                        </ListItem>
                        <ListItem sx={{ padding: 0 }}>
                            <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1rem', '&:hover': { color: '#FFD700' } }}>
                                Nosotros
                            </Link>
                        </ListItem>
                        <ListItem onClick={() =>  navigate("/Privacidad")} sx={{ padding: 0 }}>
                            <Link   underline="none" color="inherit" sx={{ cursor:"pointer",fontSize: '1rem', '&:hover': { color: '#FFD700' } }}>
                                Aviso de privacidad
                            </Link>
                        </ListItem>
                        
                    </List>
                </Box>
                
                {/* Redes Sociales */}
                <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Síguenos</Typography>
                    <Box>
                        <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#3b5998' } }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#1DA1F2' } }}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#E1306C' } }}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#0A66C2' } }}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
            
            {/* Footer final con derechos reservados */}
            <Box sx={{ textAlign: 'center', padding: '20px 0', fontSize: '0.875rem', borderTop: '1px solid rgba(255, 255, 255, 0.2)', marginTop: '10px' , marginBottom: '-40px'}}>
                © 2024 IDIOMATIC. Todos los derechos reservados.
            </Box>
        </Box>
    );
}
