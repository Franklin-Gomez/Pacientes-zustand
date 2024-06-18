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
        </div>
    )
}
