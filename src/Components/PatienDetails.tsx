import { Patient } from "../types"
import PatientDetailList from "./PatientDetailList"

type PatientListProps = { 
    patients : Patient
}

export default function PatienDetails( { patients } : PatientListProps) {
  return (
    <div >
        <PatientDetailList label = 'id' valor={patients.id } />
        <PatientDetailList label = 'Nombre Paciente' valor={patients.name } />
        <PatientDetailList label = 'Nombre Propietario' valor={patients.caretaker } />
        <PatientDetailList label = 'Email' valor={patients.email } />
        <PatientDetailList label = 'Fecha Alta' valor={patients.date.toString() } />
        <PatientDetailList label = 'Sintomas' valor={patients.symptoms } />

        <div className=" flex flex-col gap-2 md:flex-row ">

            <button
                type="button"
                className=" py-3 px-6 font-bold text-white bg-indigo-600 rounded mt-4 w-full ml:w-1/2  cursor-pointer hover:bg-indigo-950 "
            > Editar Paciente </button>

            <button
                type="button"
                className=" py-3 px-6 font-bold text-white bg-red-600 rounded mt-4  w-full ml:w-1/2 cursor-pointer hover:bg-red-950"
            > Eliminar Paciente </button>

        </div>
       
    </div>
  )
}
