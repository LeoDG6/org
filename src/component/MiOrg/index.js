// Estado - hooks
// useState
// useState()
// const [nombre de variable, funcion actualizar] = useState(valor inicial)

import {useState} from "react";
import "./MiOrg.css";

const MiOrg = (props) => {

    // const [mostrar,actualizarMostrar]= useState(true);
    // const manejarClick = () => {
    //     console.log("Mostrar", !mostrar);
    //     actualizarMostrar(!mostrar);
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;