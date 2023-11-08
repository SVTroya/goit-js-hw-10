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

onLoad()
breedSelectEl.addEventListener('change', onSelect)

function onLoad() {
  showEls(loaderEl)
  animalType = localStorage.getItem("pet-type") || 'dog'
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
      let storedBreeds = []
      storedBreeds.push(...data.filter(dogInfo => dogInfo.image?.url != null))
      const optionsMarkup = storedBreeds.map(breedInfo =>
        `<option value='${breedInfo.id}'>${breedInfo.name}</option>`)
        .join('')
      breedSelectEl.insertAdjacentHTML('afterbegin', optionsMarkup)
      showPetInfo(breedSelectEl.value)
      showEls(breedSelectorEl)
      hideEls(loaderEl)
    })
    .catch(onError)
}

function onSelect({ target: {value} }) {
  showPetInfo(value)
}

function onError(error) {
  showEls(errorEl)
  hideEls(loaderEl)
  console.log(error)
}

function renderPetInfo(petInfo) {
  const { url, breeds: [{ bred_for, temperament, name, description }] } = petInfo
  breedInfoEl.innerHTML =
    `<img class='animal-img' src='${url}' alt='${name}' width='400' loading='lazy'/>
      <div class='breed-info-right'>
        <h2 class='breed-name'>${name}</h2>
        <p>${description || bred_for || ''}</p>
        <p class='temper'><span class='temperament-header'>Temperament: </span>${temperament}</p>
      </div>`
}

function hideEls(...elements) {
  elements.forEach(element => element.classList.add('is-hidden'))
}

function showEls(...elements) {
  elements.forEach(element => element.classList.remove('is-hidden'))
}

function showPetInfo(id) {
  showEls(loaderEl)
  hideEls(breedSelectorEl, breedInfoEl, errorEl)
  fetchDogByBreed(animalType, id)
    .then(response => {
      if (!response.length) {
        return
      }
      renderPetInfo(response[0])
      hideEls(loaderEl)
      showEls(breedSelectorEl, breedInfoEl)
    })
    .catch(function(error) {
      onError(error)
      showEls(breedSelectorEl)
    })
}


