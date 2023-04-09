import "./Colaborador.css";
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai" // Iconos

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, favorito} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    return <div className="colaborador">
        {/* () => eliminarColaborador(id) No se llama esta funcion a menos que se de click 
        De otra manera eliminaria imediatamente el colaborador al renderizar*/}
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {/* si es igual a true muestra corazon rojo de lo contrario en blanco. Al dar click manda el ID */}
            {favorito ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador;