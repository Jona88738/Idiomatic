import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import SchoolIcon from '@mui/icons-material/School';  // Importamos el ícono de "escuela" o cualquier otro ícono de aprendizaje
import Typography from '@mui/material/Typography';
import { Search } from '@mui/icons-material';  
import { useNavigate } from 'react-router-dom';



export default function Tipo_Aprendizaje({ suscripcion, tipoAprendizaje }) {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    // Información de los estilos de aprendizaje
    const infoEstilos = {
        visual: "Las personas con estilo de aprendizaje visual prefieren utilizar imágenes, gráficos y diagramas para comprender y retener información. Suelen ser buenos para recordar lo que ven, y pueden beneficiarse enormemente de representaciones visuales de conceptos. Los aprendices visuales tienden a concentrarse más en los detalles visuales de las situaciones y son muy buenos para aprender a través de medios visuales como infografías, mapas mentales, videos y otros recursos gráficos. También pueden tener una excelente memoria espacial y pueden recordar fácilmente la ubicación de los objetos o de la información presentada en una página.",
        auditivo: "El estilo auditivo implica aprender mejor escuchando, como mediante conferencias, discusiones o grabaciones. Los aprendices auditivos suelen beneficiarse de escuchar explicaciones y hablar sobre los temas que están aprendiendo. Pueden recordar detalles específicos de las conversaciones o lecciones y tienden a entender mejor la información cuando se presenta de manera verbal. Estos aprendices a menudo disfrutan de estudiar en grupos, ya que les gusta discutir conceptos y compartir ideas. También son buenos para recordar instrucciones dadas verbalmente y a menudo prefieren leer en voz alta para captar mejor la información.",
        kinestesico: "Los aprendices kinestésicos aprenden mejor haciendo, a través de experiencias prácticas y movimiento. Prefieren actividades que involucren la acción física y tienden a sentirse más cómodos cuando pueden interactuar físicamente con el entorno. Este tipo de aprendizaje implica el uso del cuerpo para explorar conceptos, como realizar experimentos, manipular objetos o participar en actividades físicas. Los aprendices kinestésicos a menudo tienen buena coordinación y disfrutan de las experiencias prácticas que les permiten aprender de manera activa. Son menos propensos a sentarse quietos por largos períodos y pueden beneficiarse de enfoques de aprendizaje más dinámicos, como juegos, simulaciones y ejercicios prácticos.",
        // Agregar más estilos si es necesario
    };

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const [open, setOpen] = useState(false);

  // Función para abrir el modal
  const handleOpen = () => setOpen(true);

  // Función para cerrar el modal
  const handleClose = () => setOpen(false);

    const Redireccionar = (direccion) => {
        console.log(direccion);
        navigate(direccion);
    };

    return (
        <>
            <Box
                sx={{
                    background: "rgba(249, 176, 195, 0.34)",
                    height: "20vh",
                    borderRadius: "50px",
                    marginTop: "30px",
                    width: "100%",
                }}
            >
                <img
                    src="/images/Estilos.png"
                    style={{ float: "left", height: "95%", paddingLeft: '40px' }}
                    alt="Estilo de aprendizaje"
                />
                <h1 style={{ textAlign: "center", fontSize: "4vw" , marginTop: '10px', paddingTop: '20px', marginRight: '60px'}}>
                    Estilo de aprendizaje
                </h1>
            </Box>

            {tipoAprendizaje !== "" ? (
        <Button
        variant="contained"
        sx={{
            background: "rgba(119, 102, 198, 0.67)", 
            color: "black", 
            borderRadius: '20px', 
            marginTop: '15px', 
            float: 'right', 
            marginRight: '30px',
            display: 'flex',
            width: '140px',
            alignItems: 'center',
            '&:hover': { // Aquí agregamos el efecto al pasar el mouse
                background: "rgba(89, 71, 154, 0.67)",  // Nuevo color cuando el mouse está sobre el botón
            }
        }}
    >
        {/* Ícono de Material-UI al lado del texto */}
        <SchoolIcon sx={{ marginRight: '8px' }} /> {/* Añadimos un espacio entre el ícono y el texto */}
        {tipoAprendizaje}
        </Button>
) : (
    ""
)}

            <h2 style={{ marginTop: '50px' , fontFamily: 'Century Gothic'}}>¿Qué es un estilo de aprendizaje?</h2>
            <Paper
                elevation={3}
                sx={{ background: "#e0dffd", marginTop: '40px' }}
            >
                <p
                    style={{
                        marginLeft: "3%",
                        paddingBottom: "4%",
                        paddingTop: "4%",
                        textAlign: 'justify',
                        paddingRight: '3%',
                        fontFamily: 'tahoma'
                    }}
                >
                    Los estilos de aprendizaje son las distintas formas en que cada
                    persona comprende y retiene mejor la información, ya sea viendo,
                    escuchando, haciendo o razonando. Los estilos de aprendizaje ayudan
                    a cada persona a descubrir cómo maximizar su potencial y disfrutar el
                    proceso. ¡Conoce el tuyo y aprende de forma más efectiva!
                </p>
            </Paper>

            <Stack direction="row">
                {tipoAprendizaje !== "" ? (
                    <Button
                        sx={{
                            background: "rgba(255, 194, 18, 1)",
                            borderRadius: "25px", marginTop: '20px',
                            '&:hover': { // Aquí agregamos el efecto al pasar el mouse
                            background: "#46467A",  // Nuevo color cuando el mouse está sobre el botón
            }
                        }}
                        variant="contained"
                        onClick={handleOpenModal}
                    >
                        Saber más acerca de mi estilo
                    </Button>
                ) : (
                    <Button
                        sx={{
                            background: "rgba(255, 194, 18, 1)",
                            borderRadius: "25px", marginTop: '20px'
                        }}
                        onClick={() => {
                            const direccion = "/TestAprendizaje";
                            Redireccionar(direccion);
                        }}
                        variant="contained"
                    >
                        ¡Conocer mi estilo de aprendizaje!
                    </Button>
                )}
            </Stack>

            <h2 style={{ marginTop: '50px' , fontFamily: 'Century Gothic'}}>Guía de aprendizaje</h2>

            {tipoAprendizaje && (
                <Box sx={{ textAlign: "center", marginTop: "20px" , marginBottom: "30px"}}>
                    <img
                        src={`/images/guia_${tipoAprendizaje.toLowerCase()}.png`}
                        alt={`Guía para el estilo ${tipoAprendizaje}`}
                        style={{ maxWidth: "80%", height: "auto" , marginLeft: "-40px", marginTop: "-40px"}}
                    />
                </Box>
            )}

            {/* Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: "10px",
                        textAlign: "justify"
                    }}
                >
                    <Typography id="modal-title" variant="h4" component="h2" color='#46467A' fontFamily='Century Gothic' fontWeight= 'bold' textAlign= 'center' marginBottom='30px' >
                        Sobre mi estilo de aprendizaje
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2, fontFamily: 'tahoma', fontSize: '17px', marginLeft: '35px', marginRight: '35px'}}>
                        {infoEstilos[tipoAprendizaje.toLowerCase()] ||
                            "Información no disponible para este estilo."}
                    </Typography>
                    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                    <img
                        src={`/images/${tipoAprendizaje.toLowerCase()}.png`}
                        alt={`Guía para el estilo ${tipoAprendizaje}`}
                        style={{ maxWidth: "30%", height: "auto" , marginLeft: "-40px", marginTop: "-10px"}}
                    />
                    </Box>
                    
                    <Button
                        sx={{ background: '#7766c6',marginTop: "20px", float: 'right', marginRight: '40px',borderRadius: '20px', width: '150px' , '&:hover': { // Aquí agregamos el efecto al pasar el mouse
                            background: "#46467A",  // Nuevo color cuando el mouse está sobre el botón
            }}}
                        variant="contained"
                        onClick={handleCloseModal}
                    >
                        Cerrar
                    </Button>
                </Box>
            </Modal>

            <div >
      {/* Botón que abre el modal */}
      <Button
        onClick={handleOpen}
        style={{
          marginTop: '50px',
          marginLeft: '40px',
          fontFamily: 'Century Gothic',
          cursor: 'pointer',
          background: '#46467a',
          color: '#ffffff',
          fontWeight: 'bold',
          borderRadius: '15px',
          display: 'flex',  // Asegura que el texto y el ícono estén alineados
          alignItems: 'center',  // Centra verticalmente el ícono y el texto
          marginBottom: '40px',  // Espacio debajo del botón
        }}
      >
        {/* Ícono de lupa al lado del texto */}
        <Search style={{ marginRight: '8px' }} />  {/* Ícono de lupa */}
        Recomendaciones
      </Button>

      <Box>

      </Box>

      {/* Modal con la imagen */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: 24,
            maxWidth: '80%',
            maxHeight: '80%',
            overflow: 'auto',
          }}
        >
          <h2 id="modal-title" style={{ fontFamily: 'Century Gothic', textAlign: 'center' }}>
            Recomendaciones para el estilo {tipoAprendizaje}
          </h2>
          <Box sx={{ textAlign: "center", marginTop: "-30px" }}>
            <img
              src={`/images/recomendaciones_${tipoAprendizaje.toLowerCase()}.png`}
              alt={`Guía para el estilo ${tipoAprendizaje}`}
              style={{
                maxWidth: "100%", height: "auto", marginTop: "-10px",
                display: 'block', marginLeft: 'auto', marginRight: 'auto'
              }}
            />
          </Box>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>



        </>
    );
}
