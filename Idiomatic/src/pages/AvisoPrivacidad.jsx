import { Container, Box, Typography} from "@mui/material";
import NavBar from '../components/NavBar_Home';

export default function AvisoPrivacidad(){

    return(<>

        <NavBar/>
    
        <Box sx={{paddingLeft:"9%",paddingRight:"9%"}}>

        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"center" }}>Aviso de privacidad</Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"left" }}>Introduccion</Typography>

        <Typography paragraph sx={{  marginBottom: '10px',textAlign:"justify", lineHeight: "1.9",fontSize:"20px"}}>
            
        En Idiomatic, respetamos tu privacidad y estamos comprometidos a proteger
         tus datos personales. Este aviso de privacidad explica cómo recopilamos,
          utilizamos, compartimos y protegemos tu información cuando usas nuestra
           plataforma de aprendizaje de inglés.
            
            </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',marginTop:"1%",textAlign:"left" }}>1. Información que Recopilamos</Typography>

        <Typography paragraph sx={{  marginBottom: "1%",textAlign:"justify",fontSize:"20px"}}>
            
        Recopilamos la siguiente información para proporcionarte nuestros 
        servicios y mejorar tu experiencia en nuestra plataforma:
            
            </Typography>

        <Typography paragraph sx={{ marginBottom: '1%',textAlign:"left",fontSize:"20px" }}><li>Información personal: <p style={{display:"inline"}}>Nombre y correo electrónico.</p> </li> </Typography>
        <Typography paragraph sx={{ marginBottom: '1%',textAlign:"left",fontSize:"20px",paddingRight:"0" }}><li style={{ }}>Datos de uso:  <p style={{display:"inline" }}>Información sobre cómo usas la plataforma, como las lecciones completadas, tiempo de estudio y progreso en el curso.</p> </li> </Typography>
        {/* <li style={{display:"inline"}}>Información personal: <p>Nombre y correo electrónico.</p> </li> */}
        
        
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"left",fontSize:"20px" }}>2. Cómo Utilizamos Tu Información</Typography>

        <Typography paragraph sx={{  marginBottom: '1%',fontSize:"20px" }}>
            
        Usamos tu información para los siguientes fines:
            </Typography>
        
        
        
        
            <Typography paragraph sx={{  marginBottom: '1%',textAlign:"left",fontSize:"20px" }}><li>Para personalizar y mejorar tu experiencia en la plataforma.</li> </Typography>
            <Typography paragraph sx={{  marginBottom: '1%',textAlign:"left",fontSize:"20px" }}><li>Para enviarte notificaciones sobre actualizaciones, nuevos contenidos o cambios en el servicio.</li> </Typography>
            <Typography paragraph sx={{  marginBottom: '1%',textAlign:"left",fontSize:"20px" }}><li>Para gestionar tu cuenta y brindarte soporte técnico.</li> </Typography>
            <Typography paragraph sx={{  marginBottom: '1%',textAlign:"left",fontSize:"20px" }}><li>Para mejorar nuestro contenido y entender mejor las necesidades de nuestros usuarios.</li> </Typography>
        
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"left",fontSize:"20px" }}>3. Cómo Compartimos Tu Información</Typography>

            <Typography  paragraph sx={{  marginBottom: '1%',textAlign:"justify",fontSize:"20px" }}>
            
            No compartimos tu información personal con terceros, excepto en las siguientes situaciones:
            </Typography>
            
            <Typography paragraph sx={{  marginBottom: '1%',textAlign:"justify",fontSize:"20px" }}><li>Proveedores de servicios:  <p style={{display:"inline"}}>Podremos compartir tu información con proveedores de servicios que nos ayuden a operar y mejorar la plataforma, como herramientas de corrección de gramática.</p> </li> </Typography>
            <Typography paragraph sx={{  marginBottom: '1%',textAlign:"left",fontSize:"20px" }}><li>Requisitos legales:  <p style={{display:"inline"}}>Podremos divulgar tu información si así lo exige la ley o en respuesta a solicitudes legales válidas.</p> </li> </Typography>
       
       
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"left",fontSize:"20px" }}>4. Seguridad de la Información</Typography>
            <Typography paragraph sx={{  marginBottom: '1%',lineHeight: "1.9",textAlign:"justify",fontSize:"20px" }}>
            
            Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, la alteración o el uso indebido. Sin embargo, no podemos garantizar la seguridad absoluta de los datos transmitidos a través de internet.
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"left",fontSize:"20px" }}>5. Retención de Datos</Typography>
            <Typography paragraph sx={{  marginBottom: '1%',lineHeight:"1.9",textAlign:"justify",fontSize:"20px" }}>
            
            Conservamos tus datos personales mientras mantengas una cuenta en nuestra plataforma o según sea necesario para proporcionarte nuestros servicios. Puedes solicitar la eliminación de tus datos personales en cualquier momento, en cuyo caso los borraremos en la medida permitida por la ley.
           </Typography>
           <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"left",fontSize:"20px" }}>6. Tus Derechos</Typography>
            
        
       
           <Typography paragraph sx={{  marginBottom: '1%',textAlign:"left",fontSize:"20px" }}><li>Acceder y actualizar tu información personal.</li> </Typography>
           <Typography paragraph sx={{  marginBottom: '1%',textAlign:"left" ,fontSize:"20px"}}><li>Solicitar la eliminación de tus datos personales.</li> </Typography>
           <Typography paragraph sx={{  marginBottom: '1%',textAlign:"left" ,fontSize:"20px"}}><li>Acceder a cualquier apartado que tiene idiomatic.</li> </Typography>
           <Typography paragraph sx={{  marginBottom: '1%',fontSize:"20px" }}>
            
           Para ejercer tus derechos, contáctanos a través del siguiente correo electrónico: [idiomatic@gmail.com].
            </Typography>
       
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"left" ,fontSize:"20px"}}>7. Cambios en el Aviso de Privacidad</Typography>
            <Typography paragraph sx={{  marginBottom: '1%',lineHeight:"1.9",textAlign:"justify",fontSize:"20px" }}>
            
            Podemos actualizar este aviso de privacidad en cualquier momento. Te notificaremos sobre cambios importantes mediante un aviso en la plataforma o a través de tu correo electrónico.
             </Typography>
             <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:"left",fontSize:"20px" }}>8. Contacto</Typography>
            <Typography paragraph sx={{ fontSize:"20px" }}>
            
            Si tienes preguntas o dudas sobre este aviso de privacidad, puedes contactarnos en:
            <br/>  Correo electrónico: [idiomatic@gmail.com]

            </Typography>
        </Box>
        <h1></h1>

    </>)
}