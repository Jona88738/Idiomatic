import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
export default function Notificacion({open, handleClose,titulo,img,btnTexto}) {
  
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
      padding: theme.spacing(2),
      
      borderRadius:"25px"
    },
    
  }));

  return (
    <div  >
      <BootstrapDialog
      
      open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      
      >

      {/* <Dialog
      
        
      > */}
        <DialogTitle  id="alert-dialog-title" >
          {titulo}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={img} width="40%" alt="XD" style={{position:"relative",left:"28%"}} />
           
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          {/* <Button onClick={handleClose}  autoFocus>
            Salir
          </Button> */}
          <Button onClick={handleClose} sx={{position:"relative",background:"rgba(255, 194, 18, 1)",right:"35%", width:"35%",borderRadius:"20px",color:"black",border:"2px solid black"}} variant="contained">{btnTexto}</Button>

        </DialogActions>
      {/* </Dialog> */}

    </BootstrapDialog>
    </div>
  );
}