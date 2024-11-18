import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"

export default function Vocabulariobasico(){
    return(<>

            <NavBar_Apartados/>

            <Head title="Dar información" mycolor="rgba(146, 7, 255, 0.4)" ruta="/images/iconoEjercicios.png" />
            
            <MyCard title={"Clock"} imagen="/images/Clock.png" page="/Clock" link={""} introduccion={"Aprende a decir la hora correctamente y gestiona tu día con confianza."} boxshadow={0}  />
            <MyCard title={"Formal titles"} imagen="/images/titles.png" page="/Formaltitles" link={"presentaciones personales"} introduccion={"Domina los títulos formales y establezca relaciones profesionales en contextos formales."} boxshadow={0}  />
            <MyCard title={"Nationalities"} imagen="/images/nation.png" page="/Nationalities" link={"Dar informacion personal"} introduccion={"Familiarízate con las nacionalidades y descubre cómo presentarte en un entorno internacional."} boxshadow={0}  />

    
    </>)
}