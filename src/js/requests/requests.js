var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getAllSpecialties() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8081/api/get/specialties');
        const data = yield response.json();
        return data;
    });
}
export function createSpecialty(specialty) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8081/api/create/specialty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(specialty)
        });
        return response;
    });
}
/*
export async function getSpecialtyPatients(specialtyID:number) {
    const response:Response = await fetch('http://localhost:8081/api/get/specialties' + specialtyID.toString())
  
    const data:specialtyInterface[] = await response.json()

    return data
}
*/
//This is such a bad practice... i could collapse these three functions into one...
export function deleteSpecialty(specialtyID) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8081/api/delete/specialty/' + (specialtyID === null || specialtyID === void 0 ? void 0 : specialtyID.toString()), {
            method: 'DELETE'
        });
        if (response.ok) {
            window.location.reload();
        }
    });
}
export function deletePatient(patientID) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8081/api/delete/patient/' + (patientID === null || patientID === void 0 ? void 0 : patientID.toString()), {
            method: 'DELETE'
        });
        if (response.ok) {
            window.location.reload();
        }
    });
}
export function deleteAppointment(patientID) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8081/api/delete/appointment/' + (patientID === null || patientID === void 0 ? void 0 : patientID.toString()), {
            method: 'DELETE'
        });
        if (response.ok) {
            window.location.reload();
        }
    });
}
