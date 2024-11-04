import { Container,Button } from "@mui/material";
import "../../styles/Libro.css"
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';

export default function PageLecturas() {


    const location = useLocation();
    const { lectura } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    //console.log(lectura)

    const navigate = useNavigate();

    const [page, setPage] = useState([]);

    useEffect(()=>{
        fetch(`/api/getLectura?lectura=${lectura}`)
            .then(res => res.json())
            .then((res) => setPage(res))
    },[])


    function handleOnclick(){
        navigate(-1);
    }
    
   

     function Minput(){
        const div = document.getElementById("Createinput");
        const Myinput = document.createElement("input");
        Myinput.type = "checkbox"
        div.appendChild(Myinput);
    
       // console.log("xD")
     }



let portada = page.length;
//console.log(typeof portada)
return (<>
<div className="pageLecturaT">
    <br/>
<Container className="ContainerTitleLectura" disableGutters>

    <img className="TitleImg" src="/images/ApartadosV/HeadVi.svg" alt=""   />
    <h1 className="TitleLecturaContainer"  >{page.length === 0 ? (""):page[0].titulo}</h1>


</Container>
<Button className="RegresarLectura" variant="text" onClick={handleOnclick} > <ReplyIcon fontSize="large" style={{fontSize:"50px"}}/>Regresar</Button>
<br/>
<div className="ContenedorLibro">
    
    <div class="book" id="Createinput">

    
    
        
        {page.map((elemen,index) => {
           //  return    Minput();
             return<input key={index} type="checkbox" id={"c"+index} />
                     
           
        })}
    
         <div id="cover"> <img className="PortadaLectura" src={page.length === 0 ? (""):page[portada-1].img}  alt="xD" /></div>
                                                            {/* "/src/images/fresa.jpg" 78 */}
        

        <div class="flip-book">  

    {page.map((element,index) =>{
       // console.log("numero z-index: ",element.info)
        return(<>
                            
                <div class="flip" id={"p"+index}>
                        
                    <div class="back">
                        <img src={element.img} className="imgLibro" />
                        <label class="back-btn" htmlFor={"c"+index}>Back</label>
                    </div>

                    <div class="front">
                        <h2 className="TituloLectura" >{element.titulo }</h2>
                        <p className="parrafoLectura" >{element.info}</p>
                        <label class="next-btn" htmlFor={"c"+index}>Next</label>
                    </div>
                </div>




                        
         </>)
        })}

    </div>
                

            



            </div>

</div>

</div>  
    </>)


}