import { deleteAppointment, deletePatient, deleteSpecialty } from "./requests/requests.js";
export function buildSpecialty(specialty) {
    const specialties = document.querySelector('.specialties-container');
    const specialtiesOptions = document.getElementById('specialties-options');
    //Specialty Info
    const specialtyMainDiv = document.createElement('div');
    specialtyMainDiv.className = 'single-specialty-container';
    specialtyMainDiv.id = `specialty-div-${specialty.specialtyID}`;
    const specialtyTitle = document.createElement('h2');
    specialtyTitle.className = "title-element";
    specialtyTitle.id = `specialty-${specialty.specialtyID}`;
    specialtyTitle.innerText = `${specialty.name}`;
    const specialtyPhysician = document.createElement('p');
    specialtyPhysician.className = "title-element";
    specialtyPhysician.innerText = `Physician: ${specialty.physician}`;
    //Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "submit";
    deleteButton.textContent = "Delete Specialty";
    deleteButton.addEventListener("click", () => deleteSpecialty(specialty.specialtyID));
    const patientsTitle = document.createElement('h4');
    patientsTitle.className = "subtitle-element";
    patientsTitle.innerText = `${specialty.name} Patients:`;
    //Update button
    const updateButton = document.createElement("button");
    updateButton.className = "edit-button";
    updateButton.type = "submit";
    updateButton.textContent = "Edit Specialty";
    updateButton.addEventListener("click", () => updateSpecialtyInfoDisplay(specialty));
    //Patients of Specialty Div
    const patientsDiv = document.createElement('div');
    patientsDiv.id = `specialty-patients-${specialty.specialtyID}`;
    patientsDiv.className = "specialty-patients-container";
    //Specialty Main Div Organizing
    specialtyMainDiv.append(specialtyTitle, specialtyPhysician, updateButton, patientsTitle, patientsDiv);
    //Adding option to create Patient form
    const newOption = document.createElement('option');
    newOption.value = `${specialty.specialtyID}`;
    newOption.textContent = `${specialty.name}`;
    specialtiesOptions.append(newOption);
    specialties.append(specialtyMainDiv);
    if (specialty.patients.length === 0) {
        patientsDiv.append(deleteButton);
    }
    else {
        specialty.patients.forEach(patient => buildPatient(patient));
    }
}
function buildPatient(patient) {
    const patientsDiv = document.getElementById(`specialty-patients-${patient.fkSpecialtyID}`);
    //Patient Info
    const patientMainDiv = document.createElement('div');
    patientMainDiv.className = 'single-patient-container';
    patientMainDiv.id = `specialty-${patient.patientID}`;
    const patientName = document.createElement('h3');
    patientName.className = "title-element";
    patientName.innerText = `${patient.name}`;
    const patientAge = document.createElement('p');
    patientAge.className = "title-element";
    patientAge.innerText = `Patient's Age: ${patient.age}`;
    const patientNofAppointments = document.createElement('p');
    patientNofAppointments.className = "subtitle-element";
    patientNofAppointments.innerText = `Number of Appointments: ${patient.numberOfAppointments}`;
    //Appointments button
    const appointmentsButton = document.createElement("button");
    appointmentsButton.className = "action-button";
    appointmentsButton.type = "submit";
    appointmentsButton.textContent = "Appointments";
    appointmentsButton.addEventListener("click", () => appointmentsInfoDisplay(patient));
    //Delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "submit";
    deleteButton.textContent = "Delete Patient";
    deleteButton.addEventListener("click", () => deletePatient(patient.patientID));
    patientMainDiv.append(patientName, patientAge, patientNofAppointments, appointmentsButton, deleteButton);
    patientsDiv === null || patientsDiv === void 0 ? void 0 : patientsDiv.append(patientMainDiv);
}
function appointmentsInfoDisplay(patient) {
    const editor = document.getElementById("appointments-editor");
    const specialtyTitle = document.getElementById(`specialty-${patient.fkSpecialtyID}`);
    const specialtyName = specialtyTitle.textContent;
    const patientIDInput = document.getElementById("appointment-patientid-input");
    const patientInfo = document.getElementById("appointments-patientinfo");
    const appointmentsList = document.getElementById("appointments-list");
    patientInfo.innerText = `${specialtyName} appointments of ${patient.name} `;
    patientIDInput.value = `${patient.patientID}`;
    appointmentsList.innerHTML = "";
    editor.style.display = "flex";
    if (patient.numberOfAppointments == 0) {
        const noAppointments = document.createElement("li");
        noAppointments.textContent = "No appointments yet";
        appointmentsList.append(noAppointments);
        return;
    }
    patient.appointments.forEach(appointment => {
        const appointElement = document.createElement("li");
        appointElement.textContent = `${appointment.date}`;
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.type = "submit";
        deleteButton.textContent = "x";
        deleteButton.addEventListener("click", () => deleteAppointment(appointment.appointmentID));
        appointElement.append(deleteButton);
        appointmentsList.append(appointElement);
    });
}
function updateSpecialtyInfoDisplay(specialty) {
    const editor = document.getElementById("specialty-editor");
    const editorSpecialtyInfo = document.getElementById("editor-specialty-info");
    const specialtyIDInput = document.getElementById("specialtyID-input-editor");
    const specialtyNameInput = document.getElementById("specialty-name-input-editor");
    const specialtyPhysicianInput = document.getElementById("specialty-physician-input-editor");
    editorSpecialtyInfo.textContent = `Editing ${specialty.name} specialty`;
    specialtyIDInput.value = `${specialty.specialtyID}`;
    specialtyNameInput.value = `${specialty.name}`;
    specialtyPhysicianInput.value = `${specialty.physician}`;
    editor.style.display = "flex";
}
