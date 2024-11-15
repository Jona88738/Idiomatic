import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { styled } from '@mui/material/styles';


export default function NotificacionAdmin({open, handleClose,titulo,img,btnTexto,texto,indice = [],test = "",handleCloseBorrar,condicion="1"}) {
  console.log("ultimo test: ",test.length)
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
          {/* {titulo} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={img} width="40%" alt="XD" style={{float:"right"}} />
            <h1 style={{fontSize:"2.3vw",color:"black",position:"relative",top:"15px",fontFamily:"Arial"}}> {titulo}</h1>
           {
           
           test.length !== 0 ? (

            <>
             
            
              <h3 style={{color:"black"}}> {test}</h3>
               {/* <p>{"Incorrecto: " + Element.bad}</p>
              <p>{"Recomendacion: " + Element.better}</p> */}
             </>  

           ):""
           }
            
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          {/* <Button onClick={handleClose}  autoFocus>
            Salir
          </Button> */}
          {condicion === "0" ? (
              <Button onClick={handleClose} sx={{position:"relative",background:"rgba(255, 194, 18, 1)",right:"25%", width:"55%",borderRadius:"20px",color:"black",border:"2px solid black"}} variant="contained">Salir</Button>
          ):(
            <>
            <Button onClick={handleClose} sx={{position:"relative",background:"rgba(255, 194, 18, 1)",right:"20%", width:"35%",borderRadius:"20px",color:"black",border:"2px solid black"}} variant="contained">NO</Button>
            <Button onClick={handleCloseBorrar} sx={{position:"relative",background:"rgba(255, 194, 18, 1)",right:"15%", width:"35%",borderRadius:"20px",color:"black",border:"2px solid black"}} variant="contained">Si</Button>

            
            </>
          )
          }
          
        </DialogActions>
      {/* </Dialog> */}

    </BootstrapDialog>
    </div>
  );
}