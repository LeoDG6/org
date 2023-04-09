import { useState } from "react";
import "./Form.css";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

const Form = (props) => {
    const [nombre, actualizarNombre] = useState(""); // Colocar un valor en useState("") toma el control del navegador
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (evento) => {
        evento.preventDefault(); // Ya no se recarga la pagina
        let datosAEnviar = { // Se crea un objeto con los datos para posible uso
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color}); // Envia los datos en forma de objeto
    }

    return <section className="formulario">
        {/* onSubmit para poder tener acceso a los valores de los input */}
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Input 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <Input 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />
            <Input 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto} 
            />
            <Select 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo} 
                equipos={props.equipos}
            />
            <Button texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Input 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
            />
            <Input 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Button texto="Registra Equipo"/>
        </form>
    </section>
}

export default Form;