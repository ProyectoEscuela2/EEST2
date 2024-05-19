import "./atencion-estilo.css"
import  MapComponent  from "../mapa/mapa.jsx"
export function Atencion(){
   
    return(

        <div className="centro">
        <div className="seccion">
            <div className="sec-titulo">
                <h2 className="sec-titulo-texto">HORARIOS DE ATENCION</h2>
            </div>
        
            <div className="sec-cuerpo">

                <div className="sec-mapa">
                    
                    <MapComponent style={{height:'250px', width:'250px'}} />


                    <p><a className="mapa-texto" href="https://maps.app.goo.gl/UF7fcaGr9yyzdUxbA">Abrir en Maps</a></p>
                </div>            


            <div className="sec-horarios">
                

                <div className="sec-hor-manana">

                    <p className="sec-hor-man-texto1">Lunes a Viernes</p>    
                    <p className="sec-hor-texto0">8:30hs a 11:30hs</p>
                
                </div>

                <div className="sec-hor-tarde">

                    <p className="sec-hor-texto0">14:00hs a 17:30hs</p>
                    <p className="sec-hor-man-texto1">Av. Mariano Moreno 74</p>    
                
                </div>
                

            </div>
            </div>


        </div>
        </div>
    )

}