import { Container } from "@mui/material";
import "../../styles/Libro.css"
import { useState } from "react";
export default function PageLecturas() {

    const [page, setPage] = useState();



    return (<>

        <Container disableGutters sx={{ width: "100%", height: "15vh", background: "black", margin: "0", maxWidth: "1440px !important" }}>

            <img src="/src/images/ApartadosV/HeadVi.svg" alt="" width="9%" style={{ float: "left", marginLeft: "2%" }} />
            <h1 style={{ marginTop: "0", textAlign: "center", position: "relative", right: "8%", top: "18%", color: "white" }} >Prueba</h1>


        </Container>

        <div className="ContenedorLibro">
            <div class="book">

                <input type="checkbox" id="c1" />
                <input type="checkbox" id="c2" />
                <input type="checkbox" id="c3" />


                <div id="cover"> <img src="/src/images/pruebaLectura/manzawna.jpg" width="99%" height="100%" alt="xD"/></div>

                <div class="flip-book">

                    <div class="flip" id="p1">
                        <div class="back">
                            <img src="/src/images/pruebaLectura/manzana.jpg" className="imgLibro" />
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


                </div>



            </div>

        </div>
    </>)
}