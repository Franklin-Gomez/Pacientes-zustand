import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = { 
    patient : Patient
}

export default function PatientDetails( { patient } : PatientDetailsProps) {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailsItem label='id' data={patient.id} />
            <PatientDetailsItem label='nombre' data={patient.name} />
            <PatientDetailsItem label='propietario' data={patient.caretaker} />
            <PatientDetailsItem label='email' data={patient.email} />
            <PatientDetailsItem label='Fecha Alta' data={patient.date.toString()} />
            <PatientDetailsItem label='sintomas' data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                >Eliminar</button>

            </div>
        </div>

    )
}
