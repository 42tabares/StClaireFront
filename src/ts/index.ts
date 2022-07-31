import { buildSpecialty } from "./builders.js";
import { createSpecialty, getAllSpecialties } from "./requests/requests.js";

export interface specialtyInterface{
    specialtyID:number | null,
    name:string,
    physician:string,
    patients:Array<patientInterface>,
}

export interface patientInterface{
    patientID: number | null,
    fkSpecialtyID: number,
    numberOfAppointments: number,
    name:string,
    age:number,
}

export interface appointmentInterface{
    appointmentID: number | null,
    date : string,
}

getAllSpecialties().then(specialties => {
    specialties.forEach(specialty => {
        console.log(specialty)
        buildSpecialty(specialty) 
    });
})

const specialtiesForm: HTMLFormElement |null = document.querySelector('.specialties-form');
specialtiesForm?.addEventListener('submit', (e) => handleSpecialtySubmit(e))

const patientsForm: HTMLFormElement |null = document.querySelector('.patients-form');



function handleSpecialtySubmit(e : SubmitEvent){
    e.preventDefault();

    const inputName = (document.getElementById("specialty-name-input") as HTMLInputElement).value
    const inputPhysician = (document.getElementById("specialty-physician-input") as HTMLInputElement).value

    if((inputName.length >= 5 && inputName.length <= 100)){
        if((inputPhysician.length >= 10 && inputPhysician.length <= 40)){
            
            const newSpecialty: specialtyInterface = {
              specialtyID: null,
              name: inputName,
              physician: inputPhysician,
              patients: []
            }

            createSpecialty(newSpecialty).then(
                response => {
                  if(response.ok){
                    window.location.reload()
                }
            })

        } else {
            alert("Physician's name must be between 10 and 45 characters long!")
        }
    } else {
        alert("Specialty's name must be between 5 and 100 characters long!")
    }
}



