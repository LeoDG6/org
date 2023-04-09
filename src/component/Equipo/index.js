import "./Equipo.css"
import Colaborador from "../Colaborador/index";
import hexToRgba from 'hex-to-rgba'; // Libreria para opacar el color

const Equipo = (props) => {
    // Destructuración
    const {colorPrimario, colorSecundario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    const obj = {
        //backgroundColor: colorSecundario
        backgroundColor: hexToRgba(colorPrimario, 0.6) // Actualiza todo lo que tenga color primario
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <>
        {
            colaboradores.length > 0 && // Los colaboradores que no tienen contenido no se muestran
            <section className="equipo" style={obj}>
                <input 
                    type="color"
                    className="input-color"
                    //value={colorSecundario}
                    value={colorPrimario} // Actualiza el color del control input
                    onChange={(evento) =>{ // Cada que existe un cambio. Quita la responsabilidad del control
                        actualizarColor(evento.target.value, id); // Indica los cambios a App
                    }} 
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores"> 
                    {
                        colaboradores.map((colaborador, index) => <Colaborador // Regresa un colaborardor por cada elemento que exista en el arreglo
                            datos={colaborador} 
                            key={index} 
                            //colorPrimario={colorPrimario} 
                            colorPrimario={colorPrimario} 
                            eliminarColaborador={eliminarColaborador} // Lo recibe de App y lo manda a Colaboraores
                            like={like} // Se lo manda a colaborador
                        />) 
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;