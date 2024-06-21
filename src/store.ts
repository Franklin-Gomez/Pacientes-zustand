import { create} from "zustand";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from 'uuid';

// firmas - types 
type PatientState = { 
    patients :  Patient[]
    addPatient: (data: DraftPatient) => void
}

const addID = ( data : DraftPatient ) => { 
    return { id : uuidv4() , ...data }
}

export const usePatientStore = create<PatientState>() (( set ) => ({
    
    // states
    patients : [],
    

    // funciones 

    addPatient : ( data ) =>  {

        const newPatient = addID ( data )
        
        set((state) => ({ 

            patients : [ ...state.patients , newPatient ]
            
        }))
    }

    
}))