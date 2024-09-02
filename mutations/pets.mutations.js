import { editItem, addItem, deleteItem } from '../models/pets.models.js'

export const addPet = petToAdd => {
    try {
        const resp = addItem(petToAdd)
        return resp
    } catch (err) {
        return err
    }
}

export const editPet = petToEdit => {
    try {
        const resp = editItem(petToEdit?.id, petToEdit)
        return resp
    } catch (err) {
        return err
    }
}

export const deletePet = id => {
    try {
        const resp = deleteItem(id)
        return resp
    } catch (err) {
        return err
    }
}