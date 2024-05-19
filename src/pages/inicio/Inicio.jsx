import { Navbarr } from '../../components/navbar/Navbar.jsx'
import { Tarjeta } from '../../components/tarjetas/Tarjetas.jsx'
import './Inicio-estilo.css'
import { Carrusel } from "../../components/carruseles/carrusel-inicio.jsx"
import { Atencion } from "../../components/atencion/atencion.jsx"
import imagen01 from 'C:/react/projects/nombre/src/assets/tecnica.jpeg';
import { Footer } from "../../components/footer/Footer.jsx"
import { MdPsychology } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import {Especialidades} from "../../components/especialidades-componente/especialidades.jsx"
import imagen02 from "C:/react/projects/nombre/src/assets/wave-haikei.svg"

function Imagen(){

    return(

        <div className="contInicio">
            <div className="contImgInicio">
                <img className="in-img" src= {imagen01} />
            </div>    
                <div className="textInicio">
                    <h1>EEST Nro 2</h1>
                    <p>Gral. Ing. Manuel N. Savio, San Nicolas</p>
                    <p><b>100</b> años de aprendizaje ininterrumpido</p>
                </div>
            <div className="in-img-ola">
                <img src={imagen02} alt="" className='in-img-ola' />    
            </div> 
        </div>

    )
}

function SeccionDatos(){

    return(

        <>

        <article className='tarjetas-mb'>
            <Tarjeta num ={<MdPsychology size={40}/>} dato="Preparamos a nuestros estudiantes para ser líderes en sus campos técnicos"></Tarjeta>
            <Tarjeta num ={<MdOutlineWork size={40} />} dato="Con conexiones directas con empresas líderes, brindamos oportunidades laborales prácticas y reales"></Tarjeta>
            <Tarjeta num ={<IoMdSchool size={40} />} dato="Con un enfoque práctico y colaborativo, impulsamos el éxito de cada estudiante"></Tarjeta>
        </article>

        <article className='tarjetas'>
            <div className="tarjetas-contenedor">
            <Tarjeta num ={<MdPsychology size={70}/>} dato="Preparamos a nuestros estudiantes para ser líderes en sus campos técnicos"></Tarjeta>
            <Tarjeta num ={<MdOutlineWork size={70} />} dato="Con conexiones directas con empresas líderes, brindamos oportunidades laborales prácticas y reales"></Tarjeta>
            <Tarjeta num ={<IoMdSchool size={70} />} dato="Con un enfoque práctico y colaborativo, impulsamos el éxito de cada estudiante"></Tarjeta>
            </div>
        </article>

        </>
    )

}




export function Inicio(){

    return(

        <div className='inicio-cuerpo'>
            <Navbarr />

            <Imagen />
        
            <SeccionDatos />    
            
            <div className="margin-30">
                <Atencion />
            </div>

            <div className="margin-200">

                <Especialidades />

            </div>

            <div className="margin-30">
                <Carrusel />
            </div>

            <div className="margin-30">
                <Footer />
            </div>
        </div>
     )
}