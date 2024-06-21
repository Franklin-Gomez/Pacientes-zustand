import { usePatientStore } from "../store"
import PatienDetails from "./PatienDetails"

export default function PatientList() {

    const patiens = usePatientStore( state => state.patients )

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>

            { patiens ?  
                <>
                    { patiens.map(( patient ) => 
                        <div className=" bg-white shadow-md rounded-lg py-10 px-5 my-20 mx-2">
                            <PatienDetails
                                key={patient.id}
                                patients={patient}
                            />
                        </div>
                    )}
                </>
            
            :             
            
                <p className="text-lg mt-5 text-center mb-10">
                    Comienza Agregando pacientes  {''}
                    <span className="text-indigo-600 font-bold">y se mostraran</span>
                </p> 
            
            }
    

        </div>
    )
}
