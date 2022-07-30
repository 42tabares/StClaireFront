import { specialtyInterface } from "./index.js";

export function buildSpecialty(specialty : specialtyInterface){
    
    const specialties = document.querySelector('.specialties-container') as HTMLDivElement

    //const create = (name:string) => {return document.createElement(name)}

    //Specialty Info
    const specialtyMainDiv:HTMLDivElement = document.createElement('div');
    specialtyMainDiv.className = 'single-specialty-container'
    specialtyMainDiv.id = `specialty-${specialty.id}`
    
    const specialtyTitle:HTMLHeadElement = document.createElement('h4');
    specialtyTitle.className = "title-element"
    specialtyTitle.innerText = `${specialty.name}`

    const specialtyPhysician:HTMLParagraphElement = document.createElement('p');
    specialtyPhysician.className = "title-element"
    specialtyPhysician.innerText = `Physician in Charge: ${specialty.physician}`

    //Add Patient Input/Form
    const addPatientForm:HTMLFormElement = document.createElement('form');

    const patientNameInput:HTMLInputElement = document.createElement('input');
    patientNameInput.className = "text-input"
    patientNameInput.placeholder = "Patient's Name"
    patientNameInput.required = true

    const patientAgeInput:HTMLInputElement = document.createElement('input');
    patientAgeInput.className = "text-input"
    patientAgeInput.placeholder = "Patient's Age"
    patientAgeInput.required = true

    const patientSpecialtyIDInput:HTMLInputElement = document.createElement('input');
    patientSpecialtyIDInput.type = "hidden"
    patientAgeInput.value = `${specialty.id}`

    const addButton:HTMLButtonElement = document.createElement("button");
    addButton.className = "add-button"
    addButton.type="submit"
    addButton.textContent = "+"

    addPatientForm.append(patientNameInput,patientAgeInput,patientSpecialtyIDInput,addButton)

    //Patients of Specialty Div
    const patientsDiv:HTMLDivElement = document.createElement('div')
    patientsDiv.className = `specialty-patients-${specialty.id}`
    patientsDiv.id = "specialty-patients-container"

    //Specialty Main Div Organizing
    specialtyMainDiv.append(specialtyTitle,specialtyPhysician,addPatientForm,patientsDiv)

    specialties.append(specialtyMainDiv)
}