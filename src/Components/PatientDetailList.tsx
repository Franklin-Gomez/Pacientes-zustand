
type PatientDetailsList = { 
    label : string
    valor : string
}

export default function PatientDetailList( { label , valor } : PatientDetailsList ) {
  return (
    <>
      <p className=" font-bold text-indigo-600"> { label } :  {' '}  <span className=" font-normal text-black  "> { valor} </span></p>
    </>
  )
}
