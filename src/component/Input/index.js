import "./Input.css"

const Input = (props) => {

    // Destructuracion. Por defecto se asigna a todos los input como tipo text
    const {type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value); // Recibe lo que se escribe
    }
    // puede tener nombre de clase campo o campo-color
    return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder}
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Input;