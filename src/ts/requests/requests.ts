import { patientInterface, specialtyInterface } from "../index.js"

export async function getAllSpecialties() {
    const response:Response = await fetch('http://localhost:8081/api/get/specialties')
    const data:specialtyInterface[] = await response.json()
    return data
}


export async function createSpecialty(specialty:specialtyInterface) {
    const response:Response = await fetch('http://localhost:8081/api/create/specialty', 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(specialty)
  })

  return response;
}

export async function createPatient(patient:patientInterface) {
    const response:Response = await fetch('http://localhost:8081/api/create/patient', 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(patient)
  })

  return response;
}


/*
export async function getSpecialtyPatients(specialtyID:number) {
    const response:Response = await fetch('http://localhost:8081/api/get/specialties' + specialtyID.toString())
  
    const data:specialtyInterface[] = await response.json()

    return data
}
*/


//This is such a bad practice... i could collapse these three functions into one...
export async function deleteSpecialty(specialtyID:number | null) {
    const response:Response = await fetch('http://localhost:8081/api/delete/specialty/' + specialtyID?.toString(),
    {
        method: 'DELETE'
    })
    if (response.ok){
         window.location.reload()
    } 
}

export async function deletePatient(patientID:number | null) {
    const response:Response = await fetch('http://localhost:8081/api/delete/patient/' + patientID?.toString(),
    {
        method: 'DELETE'
    })
    if (response.ok){
        window.location.reload()
    } 
}

export async function deleteAppointment(appointmentID:number | null) {
    const response:Response = await fetch('http://localhost:8081/api/delete/appointment/' + appointmentID?.toString(),
    {
        method: 'DELETE'
    })
    if (response.ok){
        window.location.reload()
    } 
}
