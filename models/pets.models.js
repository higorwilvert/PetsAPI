import db from '../db/db.js'

export const getItem = id => {
    try {
        const pet = db?.pets?.filter(pet => pet.id === parseInt(id))[0]
        return pet
    } catch (err) {
        console.error('Error', err)
        return err
    }
}

export const listItems = () => {
    try {
        return db?.pets
    } catch (err) {
        console.error('Error', err)
        return err
    }
}

export const editItem = (id, data) => {
    try {
        const index = db.pets.findIndex(pet => pet.id === parseInt(id))

        if (index === -1) 
            throw new Error('Pet not Found')
        else {
            data.id = parseInt(data.id)
            db.pets[index] = data
            return db.pets[index]
        }
    } catch (err) {
        console.error('Error', err)
        return err
    }
}

export const addItem = data => {
    try {
        const newPet = { id: db.pets.length + 1, ...data }
        db.pets.push(newPet)
        return newPet
    } catch (err) {
        console.error('Error', err)
        return err
    }
}

export const deleteItem = id => {
    try {
        const index = db.pets.findIndex(pet => pet.id === parseInt(id))

        if (index === -1) 
            throw new Error('Pet not found')
        else {
            db.pets.splice(index, 1)
            return db.pets
        }
    } catch (err) {
        console.error('Error', err)
        return err
    }
}