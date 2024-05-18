import "./atencion-estilo.css"

export function Atencion(){
   
    return(

        <div className="seccion">
            <div className="sec-titulo">
                <h2 className="sec-titulo-texto">HORARIOS DE ATENCION</h2>
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
    )

}