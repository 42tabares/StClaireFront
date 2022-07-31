import { buildSpecialty } from "./builders.js";
import { createSpecialty, getAllSpecialties } from "./requests/requests.js";
getAllSpecialties().then(specialties => {
    specialties.forEach(specialty => {
        buildSpecialty(specialty);
    });
});
const specialtiesForm = document.querySelector('.specialties-form');
specialtiesForm === null || specialtiesForm === void 0 ? void 0 : specialtiesForm.addEventListener('submit', (e) => handleSpecialtySubmit(e));
const patientsForm = document.querySelector('.patients-form');
function handleSpecialtySubmit(e) {
    e.preventDefault();
    const inputName = document.getElementById("specialty-name-input").value;
    const inputPhysician = document.getElementById("specialty-physician-input").value;
    if ((inputName.length >= 5 && inputName.length <= 100)) {
        if ((inputPhysician.length >= 10 && inputPhysician.length <= 40)) {
            const newSpecialty = {
                specialtyID: null,
                name: inputName,
                physician: inputPhysician
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
