import { buildSpecialty } from "./builders.js";
import { createAppointment, createPatient, createSpecialty, getAllSpecialties } from "./requests/requests.js";
getAllSpecialties().then(specialties => {
    specialties.forEach(specialty => {
        buildSpecialty(specialty);
    });
});
const specialtiesForm = document.querySelector('.specialties-form');
specialtiesForm === null || specialtiesForm === void 0 ? void 0 : specialtiesForm.addEventListener('submit', (e) => handleSpecialtySubmit(e));
const patientsForm = document.querySelector('.patients-form');
patientsForm === null || patientsForm === void 0 ? void 0 : patientsForm.addEventListener('submit', (e) => handlePatientSubmit(e));
const appointmentsForm = document.querySelector('.appointments-form');
appointmentsForm === null || appointmentsForm === void 0 ? void 0 : appointmentsForm.addEventListener('submit', (e) => handleAppointmentSubmit(e));
function handleSpecialtySubmit(e) {
    e.preventDefault();
    const inputName = document.getElementById("specialty-name-input").value;
    const inputPhysician = document.getElementById("specialty-physician-input").value;
    if ((inputName.length >= 5 && inputName.length <= 100)) {
        if ((inputPhysician.length >= 10 && inputPhysician.length <= 40)) {
            const newSpecialty = {
                specialtyID: null,
                name: inputName,
                physician: inputPhysician,
                patients: []
            };
            createSpecialty(newSpecialty).then(response => {
                if (response.ok) {
                    window.location.reload();
                }
            });
        }
        else {
            alert("Physician's name must be between 10 and 45 characters long!");
        }
    }
    else {
        alert("Specialty's name must be between 5 and 100 characters long!");
    }
}
function handlePatientSubmit(e) {
    e.preventDefault();
    const inputName = document.getElementById("patient-name-input").value;
    const inputAge = document.getElementById("patient-age-input").value;
    const select = document.getElementById('specialties-options');
    const inputSpecialtyID = select.options[select.selectedIndex].value;
    if ((inputName.length >= 5 && inputName.length <= 40)) {
        if ((parseInt(inputAge) >= 0)) {
            const newPatient = {
                patientID: null,
                fkSpecialtyID: parseInt(inputSpecialtyID),
                name: inputName,
                age: parseInt(inputAge),
                numberOfAppointments: 0,
                appointments: []
            };
            createPatient(newPatient).then(response => {
                if (response.ok) {
                    window.location.reload();
                }
            });
        }
        else {
            alert("Invalid age value, must be 0 as minimal");
        }
    }
    else {
        alert("Patient's name must be between 10 and 45 characters long!");
    }
}
function handleAppointmentSubmit(e) {
    e.preventDefault();
    const inputDate = document.getElementById("appointment-date-input").value;
    const inputPatientID = document.getElementById("appointment-patientid-input").value;
    const newAppointment = {
        appointmentID: null,
        fkPatientID: parseInt(inputPatientID),
        date: inputDate
    };
    createAppointment(newAppointment).then(response => {
        if (response.ok) {
            window.location.reload();
        }
    });
}
