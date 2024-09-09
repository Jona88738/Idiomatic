import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['http://localhost:3001/FotoPerfil/mision.png', 'http://localhost:3001/FotoPerfil/init.png','http://localhost:3001/FotoPerfil/vision.png'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose("null");
  };

  const handleListItemClick = (value) => {
    console.log(value)
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} fullScreen={true} >
      <DialogTitle sx={{ textAlign:"center",fontSize:"25px"}}>Elige tu foto de perfil</DialogTitle>
      <List sx={{ pt: 0 }}>

        {emails.map((email) => (
          <ListItem sx={{display:"inline"}} disableGutters key={email}>
            <ListItemButton sx={{display:"inline-block"}} onClick={() => handleListItemClick(email)}>
              <img src={email} alt="" width={160}/>
              
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            
            onClick={() => handleListItemClick('addAccount')}
          >
            
          </ListItemButton>
        </ListItem>
      </List>
      <Button autoFocus onClick={handleClose}>
            Salir
          </Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({setfoto,info}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    if(value === "null"){

    }else{
        setfoto({
            ...info,
            "foto":value
    
        })
    }
    
    //setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        
      </Typography>
      <br />
      <Button sx={{left:"28%"}}  variant="outlined" onClick={handleClickOpen}>
      Cambiar foto de perfil
      </Button>
      <SimpleDialog 
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}