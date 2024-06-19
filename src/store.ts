import { create } from "zustand";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from "uuid";

type PatientState = { 
    patients : Patient[]
    activeId : Patient['id']
    addPatient : ( data : DraftPatient ) => void
    deletePatient: (id: any) => void
    getPatientById: (id: any) => void
}

// agregandole el id
const createPatient = ( patient : DraftPatient) : Patient => { 
    return {...patient , id : uuidv4() }
}

// Creando Store
export const usePatientStore = create<PatientState> (( set) => ({
    // states y funciones que la modifican

    // states
    patients : [],
    activeId : '',

    // funciones 
    addPatient : ( data ) => { 
        const newPatient = createPatient( data )
        set ( (state) => ({
            patients : [...state.patients ,  newPatient ]
        }))
    },

    deletePatient: ( id ) => { 
        set ( ( state) => ({
            patients : state.patients.filter((patient) => patient.id !== id )
        }))
    },

    getPatientById : ( id ) => { 
        set ( () => ({
            activeId : id
        }))
    }

}))