import { buildSpecialty } from "./builders.js";
import { getAllSpecialties } from "./requests/requests.js";
const specialtiesForm = document.querySelector('.specialties-form');
getAllSpecialties().then(specialties => {
    specialties.forEach(specialty => {
        buildSpecialty(specialty);
    });
});
