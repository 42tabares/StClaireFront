import { specialtyInterface } from "../index.js"

export async function getAllSpecialties() {
    const response:Response = await fetch('http://localhost:8081/api/get/specialties')
  
    const data:specialtyInterface[] = await response.json()
    console.log(data)
    return data
}

export async function getSpecialtyPatients(specialtyID:number) {
    const response:Response = await fetch('http://localhost:8081/api/get/specialties' + specialtyID.toString())
  
    const data:specialtyInterface[] = await response.json()

    return data
}

export async function deleteSpecialty(specialtyID:number | null) {
    if (specialtyID != null){
        const response:Response = await fetch('http://localhost:8081/api/delete/specialty/' + specialtyID.toString(),
        {
            method: 'DELETE'
        })
        window.location.reload()
        return response;
    } 
} 