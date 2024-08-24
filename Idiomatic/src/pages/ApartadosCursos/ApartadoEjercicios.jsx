import NavBar_Apartados from "../../components/NavBar_Apartados"
import {Head,MyCard} from "../../components/ApartadosCursos"
import Container from '@mui/material/Container';

export default function ApartadoEjercicios(){

    return(<>
            <NavBar_Apartados/>

            
            <Head title="Ejercicios" mycolor="rgba(255, 0, 0, 0.4)" ruta="/src/images/iconoEjercicios.svg"/>
            
            <MyCard title="Vocabulary"  page="/Vocabulary"/>
            <MyCard title="Create Sentences " page="/CreateSentences" />
            <MyCard title="Memorama" page />
            <MyCard title="personal pronouns" page="/DragImage" />
            <MyCard title="Complete Sentences" page="/CompleteSentences" />
            <MyCard title="Audio IA" page="/AudioIA" />
            
    </>)
}