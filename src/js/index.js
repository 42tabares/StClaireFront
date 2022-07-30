import { buildSpecialty } from "./builders.js";
import { getAllSpecialties } from "./requests/requests.js";
const specialtiesForm = document.querySelector('.specialties-form');
getAllSpecialties().then(specialties => {
    state = specialties;
    specialties.forEach(specialty => {
        buildSpecialty(specialty);
    });
});
let state = [];
