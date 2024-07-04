import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
export default function NavBar_UserDesplegada() {

    return(<>
        
        <h1>Mi barra desplegada</h1>
        
        <Container disableGutters myvalor={1} maxWidth="false" sx={{position:'relative',left:'15px',borderRadius:'50px',width:'470px',background: 'rgba(70, 70, 122, 0.05)', height:'80vh',  boxShadow:'5px 8px 2px GRAY',margin:'0'}}>
      
      <IconButton aria-label="Home" href='/User_Home'>
        <HomeIcon />
      </IconButton>
      
      <IconButton aria-label="Cursos" href='/User_Cursos'>
        <NoteAltIcon  />
      </IconButton>

      <IconButton aria-label="Informes" >
        <QueryStatsIcon  />
      </IconButton>

      <IconButton aria-label="Notificaciones" href='/User_Notificaciones' >
        <NotificationsNoneIcon />
      </IconButton>

      <IconButton aria-label="Ajustes" href='/User_Ajustes' >
        <SettingsIcon  />
      </IconButton>

      <IconButton aria-label="Salir" href='/' >
        <LogoutIcon   />
      </IconButton>
        
        
      </Container>
        </>);
}