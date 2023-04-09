import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import MiOrg from './component/MiOrg';
import Equipo from './component/Equipo';
import Footer from './component/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    favorito: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    favorito: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    favorito: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    favorito: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    favorito: true
  }
]); // Arreglo vacio o inicializado

// Lista de equipos
const [equipos, actualizarEquipos] =useState([
 {
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuid(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  }
])

  // Ternario --> condición ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar colaborador. Recibe los datos de Form
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador)
    // Spread operator [...colaboradores]. De una copia de valores actuales y se va agregar un nuevo colaborador [,colaborador]
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => { // Recibe de Colaborador el id
    console.log("Eliminar", id);
    // Filtra los calaboradores diferentes al id recibido
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores); // Al actualizar colaboradores se elimina el colaborador
  }

  const actualizarColor = (color,  id) => { // Recibe el nuevo color
    console.log("Actualizar", color, id);
    // Se ejecuta por cada equipo
    const equiposActualizados = equipos.map((equipo) => {
      // Si el id es el mismo que se esta recibiendo en la funcion
      if (equipo.id === id) {
        equipo.colorPrimario = color // Entonce cambia por el color recibido
      }
      return equipo; // map regresa un arreglo
    })
    actualizarEquipos(equiposActualizados) // indicamos a React que hay nuevos datos
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => { // Recibe la informacion
    console.log(nuevoEquipo)
    // Hace una copia del valor actual equipos, y luego se agrega un nuevo objeto
    // con los datos que llegan más el ID.
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
      const colaboradoresActualizados = colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito // Favorito va ser igual a la negacion de lo que llegue
        }
        return colaborador; // map regresa un arreglo
      })
      actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      {/* {Header()}
      <Header></Header> */}
      <Header />
      {/* {mostrarFormulario === true ? <Form /> : <div></div>} */}
      {/* {mostrarFormulario ? <Form /> : <></>} */}
      {/* <Form equipos={equipos.map((equipo) => equipo.titulo)} esta mandando solo el titulo a Select */}
      {
        mostrarFormulario && <Form 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
     { 
        // key={equipo.titulo} es necesario especificar un valor unico (key), en este caso se usa el nombre (titulo)
      // equipos.map((equipo) => {
      //   return <Equipo datos={equipo} key={equipo.titulo} />
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          // Filtra cada colaborador y solo regresa los colaboradores que pertenezcan a equipo.titulo
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} // Manda el colaborador a Equipo
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor} // Dispara el cambio
          like={like}
          />
          )
     }

     <Footer />
    </div>
  );
}

export default App;
