import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"

export default function Vocabulariobasico(){
    return(<>

            <NavBar_Apartados/>

            <Head title="Vocabulario basico" mycolor="rgba(146, 7, 255, 0.4)" ruta="/images/iconoEjercicios.svg" />
            
            <MyCard title={"Clothes"} imagen="/src/images/Clothescard.png"  page="/Clothes"  link={""}  introduccion={"Exprésate a través de la moda y aprende a describir tu estilo personal con confianza."} /> 
            <MyCard title={"Family"} imagen="/src/images/Familycard.png"  page="/Family" link={"presentaciones personales"}  introduccion={"Conoce y comparte sobre tus seres queridos, fortaleciendo la conexión con aquellos que amas."} />
            <MyCard title={"Numbers"} imagen="/src/images/numberscard.png" page="/Numbers"  link={"Dar informacion personal"}  introduccion={"Domina los números y abre la puerta a nuevas oportunidades, desde contar hasta realizar transacciones."} />
            <MyCard title={"Colors"} imagen="/src/images/Colorscard.png" page="/Colors"  link={"Dar informacion personal"}  introduccion={"Descubre el mundo de los colores y cómo añaden vida y emoción a tu comunicación diaria."} />
            <MyCard title={"Jobs"} imagen="/src/images/Jobscard.png" page="/Jobs"  link={"Dar informacion personal"}  introduccion={"Descubre el vocabulario esencial sobre trabajos y ocupaciones."} />
            <MyCard title={"Verbs"} imagen="/src/images/ApartadosTemas/Food.png" page="/Ejercicios"  link={"Dar informacion personal"}  introduccion={"Descubre el vocabulario esencial sobre alimentos y comidas en inglés."} />

    
    </>)
}