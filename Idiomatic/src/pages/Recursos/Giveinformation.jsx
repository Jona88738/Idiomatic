import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"

export default function Vocabulariobasico(){
    return(<>

            <NavBar_Apartados/>

            <Head title="Dar información" mycolor="rgba(146, 7, 255, 0.4)" ruta="/images/iconoEjercicios.svg" />
            
            <MyCard title={"Clock"} imagen="/src/images/Clock.png" page="/Clock" link={""} introduccion={"Aprende a decir la hora correctamente y gestiona tu día con confianza."} />
            <MyCard title={"Formal titles"} imagen="/src/images/titles.png" page="/Formaltitles" link={"presentaciones personales"} introduccion={"Domina los títulos formales y establezca relaciones profesionales en contextos formales."} />
            <MyCard title={"Nationalities"} imagen="/src/images/nation.png" page="/Nationalities" link={"Dar informacion personal"} introduccion={"Familiarízate con las nacionalidades y descubre cómo presentarte en un entorno internacional."} />

    
    </>)
}