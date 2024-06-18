import { create } from "zustand";
import { Patient } from "./types";

type PatientState = { 
    patients : Patient[]
}

// Creando Store
export const usePatientStore = create<PatientState> (() => ({
    // states y funciones que la modifican

    // states
    patients : []
}))