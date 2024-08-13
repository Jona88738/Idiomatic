import { useState, useEffect} from 'react'
import {Button,TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar_Home';

function Login() {
  const [datos, setDatos] = useState({})

  const navigate = useNavigate();

/*
  useEffect(()=>{

      fetch("/api/signUser?nombre=Jonathan")
      .then(res =>  res.json())
      .then(re => console.log(re))
      

      .catch(error =>{
        console.error("Hubo un Error")
      })
  },[]) 
*/
  function enviarDatos(event){
    event.preventDefault()
    console.log(datos.correo)

    fetch(`/api/signUser?correo=${datos.correo}&password=${datos.contraseña}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.resultado)

        if(res.resultado === "true"){
          navigate("/User_Home")
        }else{
          console.log("El usuario no existe");
        }
        
       
        
      })
  }

  function handleChange(event){
    setDatos({
      ...datos,
      [event.target.name]:event.target.value,
    })

   
  }

  return (
    <>
      
      <NavBar/>
      <h1>Login</h1>
      <form onSubmit={enviarDatos}>

          <TextField id="outlined-basic" label="Usuario" name='correo' variant="outlined" onChange={handleChange} />
          <br/>
          <br/>
          <TextField id="outlined-basic2" label="Password" name='contraseña' type="password" onChange={handleChange} />
          <br/>
          <br/>
          <button>Ingresar</button>
           
          
      </form>

      <br/>
      <Button href="/User_Home" sx={{left:'10%',bottom:'5px',color:'black',background:'purple'}}>Te lleva a la vista del<br/> Dashboard User</Button>
      <br/>
      <br/>
      <Button href="/Admin_Home" sx={{left:'10%',bottom:'10px',color:'black',background:'purple'}}>Te lleva a la vista del<br/> Dashboard Administrador</Button>

      <br/>
      <br/>
      <Button href="/TestAprendizaje" sx={{left:'10%',bottom:'10px',color:'black',background:'purple'}}>Te lleva a la<br/> vista TestAprendizaje</Button>

      <br/>
      <br/>
      <Button href="/TestIngles" sx={{left:'10%',bottom:'10px',color:'black',background:'purple'}}>Te lleva a la vista<br/> Test Ingles</Button>

      

    </>
  )
}

export default Login