import { buildSpecialty } from "./builders.js";
import { createAppointment, createPatient, createSpecialty, getAllSpecialties, updateSpecialty } from "./requests/requests.js";

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
    appointments:Array<appointmentInterface>
}

export interface appointmentInterface{
    appointmentID: number | null,
    fkPatientID: number,
    date : string,
}

getAllSpecialties().then(specialties => {
    specialties.forEach(specialty => {
        buildSpecialty(specialty) 
    });
})

const specialtiesForm: HTMLFormElement |null = document.querySelector('.specialties-form');
specialtiesForm?.addEventListener('submit', (e) => handleSpecialtySubmit(e))

const patientsForm: HTMLFormElement |null = document.querySelector('.patients-form');
patientsForm?.addEventListener('submit', (e) => handlePatientSubmit(e))

const appointmentsForm: HTMLFormElement |null = document.querySelector('.appointments-form');
appointmentsForm?.addEventListener('submit', (e) => handleAppointmentSubmit(e))

const updateSpecialtyForm: HTMLFormElement |null = document.querySelector('.specialties-update-form');
updateSpecialtyForm?.addEventListener('submit', (e) => handleSpecialtyUpdate(e))


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

function handlePatientSubmit(e : SubmitEvent){
    e.preventDefault();

    const inputName = (document.getElementById("patient-name-input") as HTMLInputElement).value
    const inputAge = (document.getElementById("patient-age-input") as HTMLInputElement).value
    const select = document.getElementById('specialties-options') as HTMLSelectElement
    const inputSpecialtyID = select.options[select.selectedIndex].value;

    if((inputName.length >= 5 && inputName.length <= 40)){
        if((parseInt(inputAge) >= 0)){
            
            const newPatient: patientInterface = {
              patientID: null,
              fkSpecialtyID: parseInt(inputSpecialtyID),
              name: inputName,
              age: parseInt(inputAge),
              numberOfAppointments: 0,
              appointments: []
            }

            createPatient(newPatient).then(
                response => {
                  if(response.ok){
                    window.location.reload()
                }
            })

        } else {
            alert("Invalid age value, must be 0 as minimal")
        }
    } else {
        alert("Patient's name must be between 10 and 45 characters long!")
    }
}

function handleAppointmentSubmit(e: SubmitEvent){
    e.preventDefault();

    const inputDate = (document.getElementById("appointment-date-input") as HTMLInputElement).value
    const inputPatientID = (document.getElementById("appointment-patientid-input") as HTMLInputElement).value

    const newAppointment: appointmentInterface = {
        appointmentID : null,
        fkPatientID: parseInt(inputPatientID),
        date : inputDate
      }

      createAppointment(newAppointment).then(
          response => {
            if(response.ok){
              window.location.reload()
          }
      })
}

function handleSpecialtyUpdate(e: SubmitEvent){
    e.preventDefault();

    const specialtyIDInput = (document.getElementById("specialtyID-input-editor") as HTMLInputElement).value
    const inputName = (document.getElementById("specialty-name-input-editor") as HTMLInputElement).value
    const inputPhysician = (document.getElementById("specialty-physician-input-editor") as HTMLInputElement).value

    if((inputName.length >= 5 && inputName.length <= 100)){
        if((inputPhysician.length >= 10 && inputPhysician.length <= 40)){
            
            const toUpdateSpecialty: specialtyInterface = {
              specialtyID: parseInt(specialtyIDInput),
              name: inputName,
              physician: inputPhysician,
              patients: []
            }

            updateSpecialty(toUpdateSpecialty).then(
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
