import { create} from "zustand";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from 'uuid';
import { devtools } from "zustand/middleware";

// firmas - types 
type PatientState = { 
    patients :  Patient[]
    validId : Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getId: (id: Patient['id']) => void

}

const addID = ( data : DraftPatient ) => { 
    return { id : uuidv4() , ...data }
}

export const usePatientStore = create<PatientState>() (
    
    devtools(

        ( set ) => ({
    
            // states
            patients : [],
            validId : '',
            

            // funciones 
            addPatient : ( data ) =>  {

                const newPatient = addID ( data )
                
                set((state) => ({ 

                    patients : [ ...state.patients , newPatient ]
                    
                }))
            },

            deletePatient : ( id ) => { 
                set (( state ) => ({

                    patients : state.patients.filter( (patient) => patient.id != id)

                }))
            },

            getId : ( id ) => { 
                set(() => ({
                    validId : id
                }))
            }
    
    
        })
    ) // cierre devtools
)