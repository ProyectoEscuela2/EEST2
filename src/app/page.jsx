"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { MdPsychology } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import {Especialidades} from "../components/especialidades-componente/especialidades.jsx"
import { Tarjeta } from '../components/tarjetas/Tarjetas.jsx'
import { Carrusel } from "../components/carruseles/carrusel-inicio.jsx"
import { Atencion } from "../components/atencion/atencion.jsx"



function Imagen(){

    return(

        <div className="contInicio">
            <div className={styles.contImgInicio}>
                <img src="/tecnica.jpeg" alt="Imagen Escuela" className={styles.inImg}/>
            </div>    
                <div className={styles.textInicio}>
                    <h1>EEST Nro 2</h1>
                    <p>Gral. Ing. Manuel N. Savio, San Nicolas</p>
                    <p><b>100</b> años de aprendizaje ininterrumpido</p>
                </div>
            <div className={styles.inImgOla}>
                <img src="wave-haikei.svg" alt="ola" className={styles.inImgOla} />
            </div> 
        </div>

    )
}

function SeccionDatos(){

    return(

        <>

        <article className={styles.tarjetasMb}>
            <Tarjeta num ={<MdPsychology size={40}/>} dato="Preparamos a nuestros estudiantes para ser líderes en sus campos técnicos"></Tarjeta>
            <Tarjeta num ={<MdOutlineWork size={40} />} dato="Con conexiones directas con empresas líderes, brindamos oportunidades laborales prácticas y reales"></Tarjeta>
            <Tarjeta num ={<IoMdSchool size={40} />} dato="Con un enfoque práctico y colaborativo, impulsamos el éxito de cada estudiante"></Tarjeta>
        </article>

        <article className={styles.tarjetas}>
            <div className={styles.tarjetasContenedor}>
            <Tarjeta num ={<MdPsychology size={70}/>} dato="Preparamos a nuestros estudiantes para ser líderes en sus campos técnicos"></Tarjeta>
            <Tarjeta num ={<MdOutlineWork size={70} />} dato="Con conexiones directas con empresas líderes, brindamos oportunidades laborales prácticas y reales"></Tarjeta>
            <Tarjeta num ={<IoMdSchool size={70} />} dato="Con un enfoque práctico y colaborativo, impulsamos el éxito de cada estudiante"></Tarjeta>
            </div>
        </article>

        </>
    )

}




  export default function Inicio(){

    return<>

      
        <Imagen />
        
        <SeccionDatos />
      
      <div className={`${styles.centro} ${styles.margin100}`}>
        <Atencion />
      </div>
    
    <div className={styles.margin100}>
      <Especialidades />
    </div>

    <div className={`${styles.centro} ${styles.margin100}`}>
      <Carrusel />
    </div>

    
    </>
}

