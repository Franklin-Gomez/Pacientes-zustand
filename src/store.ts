import { create} from "zustand";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from 'uuid';
import { devtools , persist , createJSONStorage } from "zustand/middleware";

// firmas - types 
type PatientState = { 
    patients :  Patient[]
    validId : Patient['id']

    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getId: (id: Patient['id']) => void
    updataPatient: ( data : DraftPatient ) => void

}

const addID = ( data : DraftPatient ) => { 
    return { id : uuidv4() , ...data }
}

export const usePatientStore = create<PatientState>() (
    
    devtools(
            persist ( ( set ) => ({
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

                        patients : state.patients.filter( (patient) => patient.id != id),
                        validId : ''
                    }))
                },

                getId : ( id ) => { 
                    set(() => ({
                        validId : id
                    }))
                },

                updataPatient : ( data ) =>{
                    
                    set ((state) => ({
                        patients : state.patients.map( (patient) => patient.id == state.validId ? { id : patient.id , ...data } : patient),

                        validId : ''
                    }))
                }                                                                                                                                                                                                                                                                                                                                                                                                            
            }) , { 
                // Configuracion localStorage
                name : 'Patient-Storage' ,
                storage : createJSONStorage(() => sessionStorage)
            }
        ) // Cierre persist
    ) // cierre devtools
)