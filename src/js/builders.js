export function buildSpecialty(specialty) {
    const specialties = document.querySelector('.specialties-container');
    //const create = (name:string) => {return document.createElement(name)}
    //Specialty Info
    const specialtyMainDiv = document.createElement('div');
    specialtyMainDiv.className = 'single-specialty-container';
    specialtyMainDiv.id = `specialty-${specialty.id}`;
    const specialtyTitle = document.createElement('h4');
    specialtyTitle.className = "title-element";
    specialtyTitle.innerText = `${specialty.name}`;
    const specialtyPhysician = document.createElement('p');
    specialtyPhysician.className = "title-element";
    specialtyPhysician.innerText = `Physician in Charge: ${specialty.physician}`;
    //Add Patient Input/Form
    const addPatientForm = document.createElement('form');
    const patientNameInput = document.createElement('input');
    patientNameInput.className = "text-input";
    patientNameInput.placeholder = "Patient's Name";
    patientNameInput.required = true;
    const patientAgeInput = document.createElement('input');
    patientAgeInput.className = "text-input";
    patientAgeInput.placeholder = "Patient's Age";
    patientAgeInput.required = true;
    const patientSpecialtyIDInput = document.createElement('input');
    patientSpecialtyIDInput.type = "hidden";
    patientAgeInput.value = `${specialty.id}`;
    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.type = "submit";
    addButton.textContent = "+";
    addPatientForm.append(patientNameInput, patientAgeInput, patientSpecialtyIDInput, addButton);
    //Patients of Specialty Div
    const patientsDiv = document.createElement('div');
    patientsDiv.className = `specialty-patients-${specialty.id}`;
    patientsDiv.id = "specialty-patients-container";
    //Specialty Main Div Organizing
    specialtyMainDiv.append(specialtyTitle, specialtyPhysician, addPatientForm, patientsDiv);
    specialties.append(specialtyMainDiv);
}
