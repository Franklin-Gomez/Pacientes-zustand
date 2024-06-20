import PatientForm from "./Components/PatientForm"
import PatientList from "./Components/PatientList"

function App() {

  return (
    <div className=" container mx-auto mt-20 ">
        <h1 className=" font-black text-center text-5xl md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes <span className=" text-indigo-700">Veterinaria</span> 
        </h1>

        <div className=" mt-12 md:flex">
          <PatientForm/>
          <PatientList/>
        </div>

    </div>
  )
}

export default App
