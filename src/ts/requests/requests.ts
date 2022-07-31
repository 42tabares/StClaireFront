import { specialtyInterface } from "../index.js"

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


/*
export async function getSpecialtyPatients(specialtyID:number) {
    const response:Response = await fetch('http://localhost:8081/api/get/specialties' + specialtyID.toString())
  
    const data:specialtyInterface[] = await response.json()

    return data
}
*/

export async function deleteSpecialty(specialtyID:number | null) {
    if (specialtyID != null){
        const response:Response = await fetch('http://localhost:8081/api/delete/specialty/' + specialtyID.toString(),
        {
            method: 'DELETE'
        })
        if (response.ok){
            window.location.reload()
        } 
    }
} 