import { Container,Button } from "@mui/material";
import "../../styles/Libro.css"
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';

export default function PageLecturas() {


    const location = useLocation();
    const { lectura } = location.state || {}; // Usa un valor predeterminado para evitar errores si state es undefined
    console.log(lectura)

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
    
        console.log("xD")
     }



let portada = page.length;
console.log(typeof portada)
return (<>
<div style={{background:"rgba(119, 102, 198, 0.4)"}}>
    <br/>
<Container disableGutters sx={{ width: "90%", height: "12vh",borderRadius:"25px", background: "rgba(255, 0, 0, 0.4)", margin: "0", maxWidth: "1440px !important",marginLeft:"5%" }}>

    <img src="/images/ApartadosV/HeadVi.svg" alt="" width="8%" style={{ float: "left", marginLeft: "2%" }} />
    <h1 style={{marginTop: "0", textAlign: "center", position: "relative", right: "8%", top: "18%", color: "black" }} >{page.length === 0 ? (""):page[0].titulo}</h1>


</Container>
<Button variant="text" onClick={handleOnclick} style={{position:"absolute",left:"2%",top:"16%",fontSize:"1.2vw"}}> <ReplyIcon fontSize="large" style={{fontSize:"50px"}}/>Regresar</Button>
<br/>
<div className="ContenedorLibro">
    
    <div class="book" id="Createinput">

    
    
        
        {page.map((elemen,index) => {
           //  return    Minput();
             return<input key={index} type="checkbox" id={"c"+index} />
                     
           
        })}
    
         <div id="cover"> <img src={page.length === 0 ? (""):page[portada-1].img} width="78%" height="100%" alt="xD" /></div>
                                                            {/* "/src/images/fresa.jpg" 78 */}
        

        <div class="flip-book">  

    {page.map((element,index) =>{
        console.log("numero z-index: ",element.info)
        return(<>
                            
                <div class="flip" id={"p"+index}>
                        
                    <div class="back">
                        <img src={element.img} className="imgLibro" />
                        <label class="back-btn" htmlFor={"c"+index}>Back</label>
                    </div>

                    <div class="front">
                        <h2 style={{fontFamily:"Times New Roman",fontSize:"1.9vw",margin:"0",color:"orange",textAlign:"center"}}>{element.titulo }</h2>
                        <p style={{paddingLeft:"5%",paddingRight:"4%",fontSize:"1.6vw",textAlign:"justify",marginTop:"10%",fontFamily:"Times New Roman", lineHeight: "1.5"}}>{element.info}</p>
                        <label class="next-btn" htmlFor={"c"+index}>Next</label>
                    </div>
                </div>




                        
         </>)
        })}

    </div>
                

            {/* <input type="checkbox" id="c1" />
            <input type="checkbox" id="c2" />
            <input type="checkbox" id="c3" />


            <div id="cover"> <img src="/src/images/fresa.jpg" width="78%" height="100%" alt="xD" style={{boxShadow:"inset 20px 0 50px rgba(0,0,0,0.5) 0 2px 5px rgba(0,0,0,.5)"}}/></div>

                  <div class="flip-book">

                    <div class="flip" id="p1">

                        <div class="back">
                            <img src="/src/images/Doctor.png" className="imgLibro" />
                            <label class="back-btn" for="c1">Back</label>
                        </div>

                        <div class="front">
                            <h2>Apple</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto nam aliquam illum voluptatibus, eius, nobis ab aspernatur, dolore praesentium nesciunt laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas</p>
                            <label class="next-btn" for="c1">Next</label>
                        </div>
                    </div>

                    <div class="flip" id="p2">
                        <div class="back">
                            <img src="3.jpg" className="imgLibro" />
                            <label class="back-btn" for="c2">Back</label>
                        </div>

                        <div class="front">
                            <h2>Pineapple</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto nam aliquam illum voluptatibus, eius, nobis ab aspernatur, dolore praesentium nesciunt laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas</p>
                            <label class="next-btn" for="c2">Next</label>
                        </div>
                    </div>

                    <div class="flip" id="p3">
                        <div class="back">
                            <label class="back-btn" for="c3">Back</label>
                        </div>
                        
                        <div class="front">
                            <h2>Strawberry</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto nam aliquam illum voluptatibus, eius, nobis ab aspernatur, dolore praesentium nesciunt laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas</p>
                            <label class="next-btn" for="c3">Next</label>
                        </div>

                    </div>


                </div> */}



            </div>

</div>

</div>  
    </>)


//Antes

// <div className="ContenedorLibro">
//             <div class="book">

//                 <input type="checkbox" id="c1" />
//                 <input type="checkbox" id="c2" />
//                 <input type="checkbox" id="c3" />


//                 <div id="cover"> <img src="/src/images/pruebaLectura/manzawna.jpg" width="99%" height="100%" alt="xD"/></div>

//                 <div class="flip-book">

//                     <div class="flip" id="p1">
//                         <div class="back">
//                             <img src="/src/images/pruebaLectura/manzana.jpg" className="imgLibro" />
//                             <label class="back-btn" for="c1">Back</label>
//                         </div>

//                         <div class="front">
//                             <h2>Apple</h2>
//                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto nam aliquam illum voluptatibus, eius, nobis ab aspernatur, dolore praesentium nesciunt laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas</p>
//                             <label class="next-btn" for="c1">Next</label>
//                         </div>
//                     </div>

//                     <div class="flip" id="p2">
//                         <div class="back">
//                             <img src="3.jpg" className="imgLibro" />
//                             <label class="back-btn" for="c2">Back</label>
//                         </div>

//                         <div class="front">
//                             <h2>Pineapple</h2>
//                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto nam aliquam illum voluptatibus, eius, nobis ab aspernatur, dolore praesentium nesciunt laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas</p>
//                             <label class="next-btn" for="c2">Next</label>
//                         </div>
//                     </div>

//                     <div class="flip" id="p3">
//                         <div class="back">
//                             <label class="back-btn" for="c3">Back</label>
//                         </div>
                        
//                         <div class="front">
//                             <h2>Strawberry</h2>
//                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto nam aliquam illum voluptatibus, eius, nobis ab aspernatur, dolore praesentium nesciunt laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas unde maiores numquam voluptatem provident.laboriosam iste officiis voluptas</p>
//                             <label class="next-btn" for="c3">Next</label>
//                         </div>
//                     </div>


//                 </div>



//             </div>

//         </div>




}