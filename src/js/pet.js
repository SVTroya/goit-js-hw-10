import axios from 'axios'
import { fetchBreeds, fetchDogByBreed } from './pet-api'

const DOG_HEADER = "You are right, DOGS are the best 😊!!!"
const CAT_HEADER = "I'm disappointed 🥺. But ok."

const breedSelectEl = document.querySelector('select.breed-select')
const breedInfoEl = document.querySelector('div.breed-info')
const headerEl = document.querySelector('h1.choice')

let animalType = null

window.addEventListener('load', onLoad)
breedSelectEl.addEventListener('change', onSelect)

function onLoad() {
  let headerText = "I don't what an animal it is 🤷‍♀️. But ok."
  switch (animalType) {
    case 'dog': headerText = DOG_HEADER
      break
    case 'cat': headerText = CAT_HEADER
      break
  }
  headerEl.textContent = headerText

  fetchBreeds()
    .then(data => {
      const storedBreeds = data.filter(dogInfo => dogInfo.image?.url != null)
      const optionsMarkup = storedBreeds.map(breedInfo => `<option value='${breedInfo.id}'>${breedInfo.name}</option>`).join('')
      breedSelectEl.insertAdjacentHTML('afterbegin', optionsMarkup)
    })
    .catch(function(error) {
      console.log(error)
    })
}

function onSelect(event) {
  fetchDogByBreed(event.target.value)
    .then(dogInfo => {
      if (!dogInfo.length) {
        return
      }
      const { breeds, url } = dogInfo[0]
      breedInfoEl.innerHTML =
        `<img src='${url}' alt='${breeds[0].name}' width='400'/>
      <div>
        <h2>${breeds[0].name}</h2>
        <p>${breeds[0].bred_for || ''}</p>
        <p><span class='temperament-header'>Temperament: </span>${breeds[0].temperament}</p>
      </div>`
    })
    .catch(function(error) {
      console.log(error)
    })
}


