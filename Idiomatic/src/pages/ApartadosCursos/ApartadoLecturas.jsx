import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"

export default function ApartadoLecturas(){
    
        //Eliminar pestaña
    return(<>

            <NavBar_Apartados/>
            
            <Head title="Lecturas" mycolor="rgba(249, 176, 195, 0.54)" ruta="/images/iconoLecturas.png"/>
            <MyCard title="Lectura de ejemplos"    page="/PageLecturas"     />

            {/* <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" />
            <MyCard title="" /> */}
    </>)
}