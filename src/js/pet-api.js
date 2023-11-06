const URL_BREEDS = `https://api.the${animalType}api.com/v1/breeds`
const URL_BREED_INFO = 'https://api.the${animalType}api.com/v1/images/search?breed_ids='
const DOG_API_KEY = 'live_Mlq52c1ZOJh91BuIHgCjbsbMLNU9HiGamBhos6dGnoOpfCwYihzaY62fc640KidM'
const CAT_API_KEY = 'live_FDfPizYGe5KVsKSxrn22ndt8Htokk5XB9VMOuH7S7qFxcCFxyX8LVE81ev0QxQO8'

let animalType = null
let key = null

export function fetchBreeds(petType) {
  initPetType(petType)
  return fetch(URL_BREEDS, { headers: { Accept: "application/json", 'x-api-key': key } })
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status.toString())
    }
    return response.json()
  })
}

export function fetchDogByBreed(petType, breedId) {
  initPetType(petType)
  return fetch(URL_BREED_INFO + breedId, { headers: { Accept: "application/json", 'x-api-key': key } })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.status.toString())
      }
      return response.json()
    })
}

function initPetType(petType) {
  animalType = petType
  switch (animalType) {
    case 'dog': key = DOG_API_KEY
      break
    case 'cat': key = CAT_API_KEY
      break
  }
}