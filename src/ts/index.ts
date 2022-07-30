import { buildSpecialty } from "./builders.js";
import { getAllSpecialties } from "./requests/requests.js";

const specialtiesForm: HTMLFormElement |null = 
document.querySelector('.specialties-form');

export interface specialtyInterface{
    specialtyID:number | null,
    name:string,
    physician:string,
}

export interface patientInterface{
    patientID: number | null,
    name:string,
    age:number,
}

export interface appointmentInterface{
    appointmentID: number | null,
    date : string,
}

getAllSpecialties().then(specialties => {
    specialties.forEach(specialty => {
        buildSpecialty(specialty) 
    });
})

