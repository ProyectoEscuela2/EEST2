import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import "./Footer-estilo.css"


export function Footer(){

    return(

        <>
        <div className="in-img-ola-footer">
                <img src="wave-haikei-oscuro.svg" alt="" className='in-img-ola-footer' />    
            </div> 

        <div className="footer">
            
        
        <div className="flex">    
            <div className="footer-contacto">
                <h4>Contacto</h4>
                <div className="f-contacto-telefono">
                    <BsTelephone id="telefono"/> <label htmlFor="telefono">3364 999999</label> 
                </div>
                <div className="f-contacto-mail">
                    <MdAlternateEmail id="mail"/> <label htmlFor="mail">direccionmail@gmail.com</label>
                </div>                
            </div>
            <div className="footer-redes">

                <h4>Redes</h4>

            <a href="instagram.com">
                <div className="f-redes-instagram">
                    <FaInstagram className="f-redes-texto" id="instagram" /> <label className="f-redes-texto" htmlFor="instagram">Instagram</label>
                </div>
            </a>
                
            <a href="facebook.com">
                <div className="f-redes-facebook">
                    <FaFacebook className="f-redes-texto" id="facebook" /> <label className="f-redes-texto" htmlFor="facebook">Facebook</label>
                </div>
            </a>

            <a href="whatsapp.com">
                <div className="f-redes-wsp">
                    <FaWhatsappSquare className="f-redes-texto" id="wsp" /> <label className="f-redes-texto" htmlFor="wsp">Grupo de difusion</label>
                </div>
            </a>

            <a href="https://www.linkedin.com/school/eestn2/">
                <div className="f-redes-linkedin">
                    <FaLinkedin className="f-redes-texto" id="linkedin" /> <label className="f-redes-texto" htmlFor="linkedin">Linkedin</label>
                </div>
            </a>
            </div>
        </div>
            
            <div className="footer-text">
                <h3 className="f-text-h">2024 - EEST Nº 2 - San Nicolas</h3>
            </div>
        </div>
        </>
    )

}