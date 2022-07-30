import { buildSpecialty } from "./builders.js";
import { getAllSpecialties } from "./requests/requests.js";

const specialtiesForm: HTMLFormElement |null = 
document.querySelector('.specialties-form');

export interface specialtyInterface{
    id:number|null,
    name:string,
    physician:string,
}

getAllSpecialties().then(specialties => {
    state = specialties
    specialties.forEach(specialty => {
        buildSpecialty(specialty) 
    });
})

let state:specialtyInterface[] = []
