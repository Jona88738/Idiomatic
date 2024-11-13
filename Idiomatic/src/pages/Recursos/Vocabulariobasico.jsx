import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"

export default function Vocabulariobasico(){
    return(<>

            <NavBar_Apartados/>

            <Head title="Vocabulario basico" mycolor="rgba(146, 7, 255, 0.4)" ruta="/images/iconoEjercicios.svg" />
            
            <MyCard title={"Clothes"} imagen="/images/Clothescard.png"  page="/Clothes"  link={""}  introduccion={"Exprésate a través de la moda y aprende a describir tu estilo personal con confianza."} boxshadow={0}  /> 
            <MyCard title={"Family"} imagen="/images/Familycard.png"  page="/Family" link={"presentaciones personales"}  introduccion={"Conoce y comparte sobre tus seres queridos, fortaleciendo la conexión con aquellos que amas."} boxshadow={0}  />
            <MyCard title={"Numbers"} imagen="/images/numberscard.png" page="/Numbers"  link={"Dar informacion personal"}  introduccion={"Domina los números y abre la puerta a nuevas oportunidades, desde contar hasta realizar transacciones."} boxshadow={0}  />
            <MyCard title={"Colors"} imagen="/images/Colorscard.png" page="/Colors"  link={"Dar informacion personal"}  introduccion={"Descubre el mundo de los colores y cómo añaden vida y emoción a tu comunicación diaria."} boxshadow={0}  />
            <MyCard title={"Jobs"} imagen="/images/jobscard.png" page="/Jobs"  link={"Dar informacion personal"}  introduccion={"Descubre el vocabulario esencial sobre trabajos y ocupaciones."} boxshadow={0}  />
            <MyCard title={"Verbs"} imagen="/images/ApartadosTemas/Food.png" page="/Vocabulariobasico"  link={"Dar informacion personal"}  introduccion={"Descubre el vocabulario esencial sobre alimentos y comidas en inglés."} boxshadow={0}  />

    
    </>)
}