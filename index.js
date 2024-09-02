import { addPet, editPet, deletePet } from './mutations/pets.mutations.js'
import { listPets , getPet } from './queries/pets.queries.js'

/*  
typeDefs define os tipos de dados que podem ser consultados em nossa API (no nosso caso, o petobjeto), bem 
como a entrada para consultas/mutações (no nosso caso, PetToEdite PetToAdd).
Por fim, ele também define as consultas e mutações disponíveis para nossa API, declarando seus nomes, bem 
como seus valores de entrada e retorno. No nosso caso, temos duas consultas ( petse pet) e três mutações ( addPet, editPete deletePet).
*/

export const typeDefs = `#graphql
  # OBJECT TYPES
  # This "Pet" type defines the queryable fields for every pet in our data source.
  type Pet {
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  # INPUT TYPES
  # Define the input objects for addPet and editPet mutations
  input PetToEdit {
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  input PetToAdd {
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "pets" query returns an array of zero or more pets.
  # QUERY TYPES
  type Query {
    pets: [Pet],
    pet(id: ID!): Pet
  }

  # MUTATION TYPES
  type Mutation {
    addPet(petToAdd: PetToAdd!): Pet,
    editPet(petToEdit: PetToEdit!): Pet,
    deletePet(id: ID!): [Pet],
  }
`

/*
resolvers contêm a implementação real dos nossos tipos de consultas e mutações. 
Aqui estamos declarando cada consulta e mutação, e indicando o que cada uma deve fazer. 
No nosso caso, estamos vinculando-as com as consultas/mutações que estamos importando da nossa camada de consultas/mutações. 
*/

export const resolvers = {
    Query: {
        pets: () => listPets(),
        pet: (_, { id }) => getPet(id)
    },
     Mutation: {
        addPet: (_, { petToAdd }) => addPet(petToAdd),
        editPet: (_, { petToEdit }) => editPet(petToEdit),
        deletePet: (_, { id }) => deletePet(id)
     }
}