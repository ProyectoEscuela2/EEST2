import { MdElectricBolt } from "react-icons/md";
import { FaMicrochip } from "react-icons/fa6";
import { AiFillExperiment } from "react-icons/ai";
import { MdApartment } from "react-icons/md";
import "./especialidades-comp.css";

export function Especialidades(){

    return<>

        
        <h2 className="especialidades-titulo">Nuestras Especialidades</h2>
        <div className="contenedor-especialidades">            
            <div className="especialidad">
                <div className="align"><MdElectricBolt size={40}/><br /><p>Electromecanica</p></div>
            </div>
            <div className="especialidad">
                <div className="align"><FaMicrochip size={40}/><br /><p>Informatica</p></div>          
            </div>
            <div className="especialidad">
                <div className="align"><AiFillExperiment size={40}/><br /><p>Quimica</p></div>           
            </div>
            <div className="especialidad">
                <div className="align"><MdApartment size={40}/><br /><p>Construcciones</p></div>
            </div>

        </div>
    
    
    </>
}