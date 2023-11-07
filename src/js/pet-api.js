import axios from 'axios'

const DOG_API_KEY = 'live_Mlq52c1ZOJh91BuIHgCjbsbMLNU9HiGamBhos6dGnoOpfCwYihzaY62fc640KidM'
const CAT_API_KEY = 'live_FDfPizYGe5KVsKSxrn22ndt8Htokk5XB9VMOuH7S7qFxcCFxyX8LVE81ev0QxQO8'

export async function fetchBreeds(petType) {
  getKey(petType)
  const urlBreeds = `https://api.the${petType}api.com/v1/breeds`
  const response = await axios.get(urlBreeds)
  return response.data;
}

export async function fetchDogByBreed(petType, breedId) {
  getKey(petType)
  const urlBreedInfo = `https://api.the${petType}api.com/v1/images/search?breed_ids=${breedId}`
  const response = await axios.get(urlBreedInfo)
  return response.data
}

function getKey(petType) {
  switch (petType) {
    case 'dog': axios.defaults.headers.common["x-api-key"] = DOG_API_KEY
      break
    case 'cat': axios.defaults.headers.common["x-api-key"] = CAT_API_KEY
      break
  }
}

/*export async  function fetchBreeds(petType) {
  const urlBreeds = `https://api.the${petType}api.com/v1/breeds`
  return fetch(urlBreeds, { headers: { Accept: "application/json", 'x-api-key': getKey(petType) } })
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status.toString())
    }
    return response.json()
  })
}

export function fetchDogByBreed(petType, breedId) {
  const urlBreedInfo = `https://api.the${petType}api.com/v1/images/search?breed_ids=${breedId}`
  return fetch(urlBreedInfo, { headers: { Accept: "application/json", 'x-api-key': getKey(petType) } })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.status.toString())
      }
      return response.json()
    })
}

function getKey(petType) {
  switch (petType) {
    case 'dog': return DOG_API_KEY
    case 'cat': return CAT_API_KEY
  }
}*/

