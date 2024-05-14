import './Tarjetas-estilos.css'

export function Tarjeta({num,dato}){

    return(
    
        <li className="datos">
            <div className="numero">{num}</div>
            <p>{dato}</p>
        </li>
    )
}