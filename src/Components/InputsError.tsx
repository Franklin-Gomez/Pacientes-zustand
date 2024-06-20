type InputsError = { 
    children : React.ReactNode
}

export default function InputsError( { children } : InputsError ) {
    return (
        <div className=" bg-red-600 text-white font-bold py-1 w-full text-center mt-3 uppercase ">
            { children }
        </div>
    )
}
