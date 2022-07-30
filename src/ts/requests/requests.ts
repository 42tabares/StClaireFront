import { specialtyInterface } from "../index.js"

export async function getAllSpecialties() {
    const response:Response = await fetch('http://localhost:8081/api/get/specialties')
  
    const data:specialtyInterface[] = await response.json()
  
    return data
  } 