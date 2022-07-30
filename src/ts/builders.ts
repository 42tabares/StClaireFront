import { patientInterface, specialtyInterface } from "./index.js";
import { deleteSpecialty, getSpecialtyPatients} from "./requests/requests.js";

export function buildSpecialty(specialty : specialtyInterface){
    
    const specialties = document.querySelector('.specialties-container') as HTMLDivElement
    const specialtiesOptions = document.getElementById('specialties-options') as HTMLSelectElement

    //Specialty Info
    const specialtyMainDiv:HTMLDivElement = document.createElement('div');
    specialtyMainDiv.className = 'single-specialty-container'
    specialtyMainDiv.id = `specialty-${specialty.specialtyID}`
    
    const specialtyTitle:HTMLHeadElement = document.createElement('h4');
    specialtyTitle.className = "title-element"
    specialtyTitle.innerText = `${specialty.name}`

    const specialtyPhysician:HTMLParagraphElement = document.createElement('p');
    specialtyPhysician.className = "title-element"
    specialtyPhysician.innerText = `Physician in Charge: ${specialty.physician}`

    const deleteButton:HTMLButtonElement = document.createElement("button");
    deleteButton.className = "delete-button"
    deleteButton.type="submit"
    deleteButton.textContent = "Delete Specialty"
    deleteButton.addEventListener("click", () => deleteSpecialty(specialty.specialtyID))

    //Patients of Specialty Div
    const patientsDiv:HTMLDivElement = document.createElement('div')
    patientsDiv.id = `specialty-patients-${specialty.specialtyID}`
    patientsDiv.className = "specialty-patients-container"

    //Specialty Main Div Organizing
    specialtyMainDiv.append(specialtyTitle,specialtyPhysician,deleteButton,patientsDiv)

    //Adding option to create Patient form
    const newOption:HTMLOptionElement = document.createElement('option')
    newOption.value         = `${specialty.specialtyID}`
    newOption.textContent   = `${specialty.name}`

    specialtiesOptions.append(newOption)
    specialties.append(specialtyMainDiv)
}


/*
async function buildPatientsofSpecialty(specialtyID:number){
    getSpecialtyPatients(specialtyID).then(patients => {
        patients.forEach(patient => {
            buildPatient(specialtyID , patient) 
        });
    })
}






function buildPatient(specialtyID : number , patient : patientInterface){

    const patients = document.getElementById(`specialty-patients-${specialtyID}`)

    //Specialty Info
    const patientMainDiv:HTMLDivElement = document.createElement('div');
    patientMainDiv.className = 'single-specialty-container'
    patientMainDiv.id = `specialty-${specialty.specialtyID}`
    
    const patientName:HTMLHeadElement = document.createElement('h4');
    patientName.className = "title-element"
    patientName.innerText = `${specialty.name}`

    const patientAge:HTMLParagraphElement = document.createElement('p');
    patientAge.className = "title-element"
    patientAge.innerText = `Physician in Charge: ${specialty.physician}`

    const deleteButton:HTMLButtonElement = document.createElement("button");
    deleteButton.className = "delete-button"
    deleteButton.type="submit"
    deleteButton.textContent = "Delete Specialty"
    deleteButton.addEventListener("click", () => deleteSpecialty(specialty.specialtyID))

    


}

*/