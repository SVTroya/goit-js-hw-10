import axios from 'axios'
import { fetchBreeds, fetchDogByBreed } from './pet-api'

const DOG_HEADER = "You are right, DOGS are the best 😊!!!"
const CAT_HEADER = "I'm disappointed 🥺. But ok."

const breedSelectEl = document.querySelector('select.breed-select')
const breedSelectorEl = document.querySelector('.selector')
const breedInfoEl = document.querySelector('div.breed-info')
const headerEl = document.querySelector('h1.choice')
const loaderEl = document.querySelector('p.loader')

//let animalType = 'cat'
let animalType = ''

window.addEventListener('load', onLoad)
breedSelectEl.addEventListener('change', onSelect)

function onLoad() {
  animalType = localStorage.getItem("pet-type") || 'dog'
  localStorage.removeItem("pet-type")
  let headerText = "I don't know what an animal it is 🤷‍♀️. But ok."
  switch (animalType) {
    case 'dog': headerText = DOG_HEADER
      break
    case 'cat': headerText = CAT_HEADER
      break
  }
  headerEl.textContent = headerText
  fetchBreeds(animalType)
    .then(data => {
      const storedBreeds = data.filter(dogInfo => dogInfo.image?.url != null)
      const optionsMarkup = storedBreeds.map(breedInfo => `<option value='${breedInfo.id}'>${breedInfo.name}</option>`).join('')
      breedSelectEl.insertAdjacentHTML('afterbegin', optionsMarkup)
      breedSelectorEl.classList.toggle('is-hidden')
      loaderEl.classList.toggle('is-hidden')
    })
    .catch(function(error) {
      console.log(error)
    })
}

function onSelect(event) {
  loaderEl.classList.toggle('is-hidden')
  breedSelectorEl.classList.toggle('is-hidden')
  breedInfoEl.classList.add('is-hidden')
  fetchDogByBreed(animalType, event.target.value)
    .then(dogInfo => {
      if (!dogInfo.length) {
        return
      }
      const {url, breeds: [{ bred_for, temperament, name, description }]} = dogInfo[0]
      breedInfoEl.innerHTML =
        `<img class='animal-img' src='${url}' alt='${name}' width='400' loading='lazy'/>
      <div class='breed-info-right'>
        <h2 class='breed-name'>${name}</h2>
        <p>${description || bred_for || ''}</p>
        <p class='temper'><span class='temperament-header'>Temperament: </span>${temperament}</p>
      </div>`
      loaderEl.classList.toggle('is-hidden')
      breedInfoEl.classList.toggle('is-hidden')
      breedSelectorEl.classList.toggle('is-hidden')
    })
    .catch(function(error) {
      console.log(error)
    })
}


