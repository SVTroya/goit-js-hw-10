import { fetchBreeds, fetchDogByBreed } from './pet-api'

const DOG_HEADER = "You are right, DOGS are the best 😊!!!"
const CAT_HEADER = "I'm disappointed 🥺. But ok."

const breedSelectEl = document.querySelector('#breed')
const breedSelectorEl = document.querySelector('.selector')
const breedInfoEl = document.querySelector('div.breed-info')
const headerEl = document.querySelector('h1.choice')
const loaderEl = document.querySelector('p.loader')
const errorEl = document.querySelector('p.error')

let animalType = ''

window.addEventListener('load', onLoad)
breedSelectEl.addEventListener('change', onSelect)

function onLoad() {
  loaderEl.classList.remove('is-hidden')
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
      let storedBreeds = [{id: -1, name:''}]
      storedBreeds.push(...data.filter(dogInfo => dogInfo.image?.url != null))
      const optionsMarkup = storedBreeds.map(breedInfo => `<option value='${breedInfo.id}'>${breedInfo.name}</option>`).join('')
      breedSelectEl.insertAdjacentHTML('afterbegin', optionsMarkup)
      breedSelectorEl.classList.remove('is-hidden')
      loaderEl.classList.add('is-hidden')
    })
    .catch(onError)
}

function onSelect({ target: {value} }) {
  if (value === '-1') {
    breedInfoEl.classList.add('is-hidden')
    return
  }
  loaderEl.classList.remove('is-hidden')
  breedSelectorEl.classList.add('is-hidden')
  breedInfoEl.classList.add('is-hidden')
  errorEl.classList.add('is-hidden')
  fetchDogByBreed(animalType, value)
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
      loaderEl.classList.add('is-hidden')
      breedInfoEl.classList.remove('is-hidden')
      breedSelectorEl.classList.remove('is-hidden')
    })
    .catch(function(error) {
      onError(error)
      breedSelectorEl.classList.remove('is-hidden')
    })
}

function onError(error) {
  errorEl.classList.remove('is-hidden')
  loaderEl.classList.add('is-hidden')
  console.log(error)
}


