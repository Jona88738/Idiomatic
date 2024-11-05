import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import { Grid, Typography } from "@mui/material";

export default function NuestrosIdiomas() {
    return (
        <>
            <Typography variant="h4" className="TituloNuestrosIdiomas" style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic, monserrat', color: '#333' , fontWeight:'bold'}}>
                Nuestros idiomas
            </Typography>
            <Container className="contenedorIngles" maxWidth={false} disableGutters>
                <Container disableGutters>
                    <Typography variant="h5" style={{ padding: '25px 0' , textAlign: 'center', color: '#46467a', fontFamily: 'Tahoma', fontSize:'25px'}}>
                        Inglés
                    </Typography>
                    <Typography style={{ padding: '20px 60px 10px' , fontSize: '20px'}}>
                        El inglés es un idioma ampliamente hablado y utilizado en todo el mundo, tanto en contextos profesionales como cotidianos. Es el idioma predominante en áreas como la tecnología, los negocios, la ciencia y el entretenimiento.
                    </Typography>
                </Container>

                <Container className="contImagenIngles" disableGutters>
                    <img src="/images/cuadrado.png" width="70%" height="60%" style={{ position: 'relative', left: '15%', top: '9%' }} alt="Logo de mi página" />
                </Container>
            </Container>

            <Typography variant="h4" style={{ padding: '20px', textAlign: 'center',  fontFamily: 'Century Gothic, monserrat', color: '#333' , fontSize: '30px', marginTop: '20px'}}>
                Próximamente...
            </Typography>

            <Container className="ContenedorFrances" maxWidth={false} disableGutters>
                <Container className="ContenedorimgFran" disableGutters>
                    <img src="/images/francia.png" width="80%" height="70%" style={{ position: 'relative', left: '12%', top: '9%' }} alt="Logo de mi página" />
                </Container>

                <Container className="ContFrancesInfo" disableGutters>
                <Typography variant="h4" style={{ padding: '25px 0' , textAlign: 'center', color: '#46467a', fontFamily: 'Tahoma', fontSize:'25px'}}>
                Francés
                    </Typography>
                    <Typography style={{ padding: '20px 60px 10px' , fontSize: '20px'}}>
                        El francés es un idioma romántico que se habla en varios países de Europa, África y América del Norte. Es reconocido por su belleza y sofisticación, y es el idioma oficial de organizaciones internacionales como la ONU y la UNESCO.
                    </Typography>
                </Container>
            </Container>

            <Typography variant="h4" className="TituloOfrecemos" style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic, monserrat', color: '#333' , fontWeight: 'bold', marginBottom: '20px' , marginTop: '-40px'}}>
                Ofrecemos
            </Typography>

            <Container className="ConteOfrecemos" disableGutters>
            <Grid container spacing={4} justifyContent="center" marginTop='10px'>
                <Grid item xs={12} sm={4}>
                    <Container disableGutters className="EjercicioNivel" style={{ textAlign: 'center' }}>
                        <img src="/images/ElipseA1.png" width="70%" height="70%" alt="Ejercicios nivel A1" />
                        <Typography variant="h5" style={{ padding: '10px 0 20px', marginTop: '-30px' }}>
                            Ejercicios nivel A1 para ambos idiomas
                        </Typography>
                    </Container>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Container disableGutters className="Adaptacion" style={{ textAlign: 'center' }}>
                        <img src="/images/EyesPana.png" width="70%" height="70%" alt="Adaptación" />
                        <Typography variant="h5" style={{ padding: '10px 0' , marginTop: '5px'}}>
                            Adaptación a su estilo de aprendizaje
                        </Typography>
                    </Container>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Container disableGutters className="TestNivel" style={{ textAlign: 'center' }}>
                        <img src="/images/Ontest-pana.png" width="70%" height="70%" alt="Test de nivelación" />
                        <Typography variant="h5" style={{ padding: '10px 0' }}>
                            Test de nivelación y tipo de aprendizaje
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </Container>
        </>
    );
}
