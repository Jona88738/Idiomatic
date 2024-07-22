import { Container } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export function Notificaciones(){

    return(<>
        <h1>Notificaciones</h1>
        <Container sx={{display:"flex",background:"rgba(224, 223, 253, 0.5)",borderRadius:"25px"}}>

            
            
            <p>Al pausar las notificaciones estas solo se<br/> 
                silenciarán pero seguiran llegando a tu buzon.
         
                </p>

                <FormControlLabel
                    value="top"
                    control={<Switch color="primary" />}
                    label="on/off"
                    labelPlacement="top"
                    
                    />
        </Container>
        
        </>
    )
}

export function Cursos(){
    return(<>
    
        <h1>Cursos</h1>
    </>)
}

export function RestaurarSuscrip(){
    return(<>
            <h1>Restaurar Suscripcion</h1>
    </>)
}

export function Fedback(){
    return(<>
            <h2>Enviar Comentarios</h2>
        
            <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          fullWidth='true'

          sx={{display:"block"}}
        />
        <br/>
            <Button variant="contained">Cancelar</Button>
            <Button variant="contained"sx={{marginLeft:"25px"}}>Enviar</Button>
        </>)
}

export function Main(){
    return(<>
    
    
    <h1>Editar Perfil</h1>
    </>)
}

