import { useForm } from "react-hook-form"
import InputsError from "./InputsError";
import { DraftPatient } from "../types";
import { usePatientStore } from "../store";
import { useEffect } from "react";


export default function PatientForm() {
    
    const { register , handleSubmit , setValue , formState : { errors  } , reset } = useForm<DraftPatient>();

    // extraemos los funciones del zustand
    //const { addPatient } = usePatientStore()
    const addPatient = usePatientStore( state => state.addPatient)
    const updataPatient = usePatientStore( state => state.updataPatient)
    const validId = usePatientStore( state => state.validId)
    const patients = usePatientStore( state => state.patients)

    const registerPatient = ( data  : DraftPatient ) => { 

        if( validId ) { 
            updataPatient( data )
        } else { 
            addPatient( data )
        }
        
        // reiniciando el formulario 
        reset();
    }

    useEffect(() => { 

        if( validId  ) { 

            const activePatient = patients.filter(( pat ) => pat.id == validId )[0]
            setValue('name',activePatient.name)
            setValue('caretaker',activePatient.caretaker)
            setValue('email',activePatient.email)
            setValue('date',activePatient.date)
            setValue('symptoms',activePatient.symptoms)

            return;
        } 

        reset()

    }, [ validId ])


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    
            <p className="text-lg mt-5 text-center mb-9">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
    
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={ handleSubmit( registerPatient ) }
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Paciente" 
                        {...register('name',{ 
                            required : 'este campo es obligatorio'
                        })}
                    />
                    { errors.name && <InputsError> { errors.name?.message  } </InputsError>}
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario 
                    </label>
                    <input  
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Propietario" 
                        {...register('caretaker',{ 
                            required : 'el nombre del propietario es obligatorio'
                        })}
                    />
                    { errors.caretaker && <InputsError> { errors.caretaker?.message?.toString() } </InputsError>}
                </div>
    
                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email 
                    </label>
                    <input  
                        id="email"
                        className="w-full p-3  border border-gray-100"  
                        type="email" 
                        placeholder="Email de Registro" 
                        {...register('email',{ 
                            required : 'El email es obligatorio'
                        })}
                    />
                    { errors.email && <InputsError> { errors.email?.message?.toString() } </InputsError>}
                </div>
    
                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta 
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"  
                        type="date" 
                        {...register('date',{ 
                            required : 'la fecha es obligatorio'
                        })}
                    />
                    { errors.date && <InputsError> { errors.date?.message?.toString() } </InputsError>}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Síntomas 
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Síntomas del paciente" 
                        {...register('symptoms',{ 
                            required : 'la descripcion de los sintomas son obligatorio'
                        })}
                    />
                    { errors.symptoms && <InputsError> { errors.symptoms?.message?.toString() } </InputsError>}
                </div>
    
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded "
                    value='Guardar Paciente'
                />
            </form> 
        </div>
      )
}
