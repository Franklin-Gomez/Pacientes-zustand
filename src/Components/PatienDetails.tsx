import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailList from "./PatientDetailList"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type PatientListProps = { 
    patients : Patient
}

export default function PatienDetails( { patients } : PatientListProps) {

    const deletePatient = usePatientStore( state => state.deletePatient)
    const getId = usePatientStore( state => state.getId )

    const handleDelete = () => { 
        deletePatient( patients.id )
        toast.error("Registro Eliminado Correctamente")
    }

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
                    onClick={ () =>  getId( patients.id )}
                > Editar Paciente </button>

                <button
                    type="button"
                    className=" py-3 px-6 font-bold text-white bg-red-600 rounded mt-4  w-full ml:w-1/2 cursor-pointer hover:bg-red-950"
                    onClick={ handleDelete }
                > Eliminar Paciente </button>

            </div>
            
        </div>
    )
}
