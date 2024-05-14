import { Navbarr } from '../../components/navbar/Navbar.jsx'
import { Tarjeta } from '../../components/tarjetas/Tarjetas.jsx'
import './Inicio-estilo.css'
import { Carrusel } from "../../components/carrusel/carrusel.jsx"
import { Boton } from "../../components/botones/boton1.jsx"
import { Atencion } from "../../components/atencion/atencion.jsx"
import imagen01 from 'C:/react/projects/nombre/src/assets/tecnica.jpeg';
import { Footer } from "../../components/footer/Footer.jsx"


function Imagen(){

    return(

        <div className="contInicio">
            <div className="contImgInicio">
                <img className="in-img" src= {imagen01} />
            </div>    
                <div className="textInicio">
                    <h1>EEST Nro 2</h1>
                    <p>Gral. Ing. Manuel N. Savio, San Nicolas</p>
                </div> 
        </div>

    )
}

function SeccionDatos(){

    return(

        <article>
            <Tarjeta num ="999" dato="Alumnos"></Tarjeta>
            <Tarjeta num ="999" dato="Profesores"></Tarjeta>
            <Tarjeta num ="4" dato="Especialidades"></Tarjeta>
        </article>


    )

}




export function Inicio(){

    return(

        <>
        <Navbarr />

        <Imagen />

        <SeccionDatos />    

        <Carrusel />

        <Boton accion="" text='Ir a la galeria' />

        <Atencion />
 
        <Footer />
        </>
     )
}