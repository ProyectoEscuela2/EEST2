import './boton1.css'

export function Boton({accion,text}){

   return(
    <div className="div-boton">
        <button onClick={accion} className="div-boton-cont">{text}</button>
    </div>
    )

}