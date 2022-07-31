import { patientInterface, specialtyInterface } from "./index.js";
import { deletePatient, deleteSpecialty } from "./requests/requests.js";

export function buildSpecialty(specialty : specialtyInterface){
    
    const specialties = document.querySelector('.specialties-container') as HTMLDivElement
    const specialtiesOptions = document.getElementById('specialties-options') as HTMLSelectElement

    //Specialty Info
    const specialtyMainDiv:HTMLDivElement = document.createElement('div');
    specialtyMainDiv.className = 'single-specialty-container'
    specialtyMainDiv.id = `specialty-${specialty.specialtyID}`
    
    const specialtyTitle:HTMLHeadElement = document.createElement('h2');
    specialtyTitle.className = "title-element"
    specialtyTitle.innerText = `${specialty.name}`

    const specialtyPhysician:HTMLParagraphElement = document.createElement('p');
    specialtyPhysician.className = "title-element"
    specialtyPhysician.innerText = `Physician in Charge: ${specialty.physician}`

    //Delete Button
    const deleteButton:HTMLButtonElement = document.createElement("button");
    deleteButton.className = "delete-button"
    deleteButton.type="submit"
    deleteButton.textContent = "Delete Specialty"
    deleteButton.addEventListener("click", () => deleteSpecialty(specialty.specialtyID))

    const patientsTitle:HTMLHeadElement = document.createElement('h4');
    patientsTitle.className = "subtitle-element"
    patientsTitle.innerText = `${specialty.name} Patients:`

    //Patients of Specialty Div
    const patientsDiv:HTMLDivElement = document.createElement('div')
    patientsDiv.id = `specialty-patients-${specialty.specialtyID}`
    patientsDiv.className = "specialty-patients-container"

    //Specialty Main Div Organizing
    specialtyMainDiv.append(specialtyTitle,specialtyPhysician,patientsTitle,patientsDiv)

    //Adding option to create Patient form
    const newOption:HTMLOptionElement = document.createElement('option')
    newOption.value         = `${specialty.specialtyID}`
    newOption.textContent   = `${specialty.name}`

    specialtiesOptions.append(newOption)
    specialties.append(specialtyMainDiv)

    if (specialty.patients.length === 0){
        patientsDiv.append(deleteButton)
    } else {
        specialty.patients.forEach(patient => buildPatient(patient))
    }
}


function buildPatient(patient : patientInterface){

    console.log("builtpatient")
    console.log(patient.fkSpecialtyID)

    const patientsDiv = document.getElementById(`specialty-patients-${patient.fkSpecialtyID}`)

    console.log(patientsDiv)

    //Patient Info
    const patientMainDiv:HTMLDivElement = document.createElement('div');
    patientMainDiv.className = 'single-patient-container'
    patientMainDiv.id = `specialty-${patient.patientID}`
    
    const patientName:HTMLHeadElement = document.createElement('h3');
    patientName.className = "title-element"
    patientName.innerText = `${patient.name}`

    const patientAge:HTMLParagraphElement = document.createElement('p');
    patientAge.className = "title-element"
    patientAge.innerText = `Patient's Age: ${patient.age}`

    const patientNofAppointments:HTMLParagraphElement = document.createElement('p');
    patientNofAppointments.className = "subtitle-element"
    patientNofAppointments.innerText = `Number of Appointments: ${patient.numberOfAppointments}`

    //Delete button
    const deleteButton:HTMLButtonElement = document.createElement("button");
    deleteButton.className = "delete-button"
    deleteButton.type="submit"
    deleteButton.textContent = "Delete Patient"
    deleteButton.addEventListener("click", () => deletePatient(patient.patientID))

    //Display User's Appointment Button... TODO!

    patientMainDiv.append(patientName,patientAge,patientNofAppointments,deleteButton)
    patientsDiv?.append(patientMainDiv)
}
