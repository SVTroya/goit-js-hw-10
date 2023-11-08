const mainChoiceEl = document.querySelector('.main-choice')

mainChoiceEl.addEventListener('click', onMainChoiceClick)

onLoad()
function onLoad() {
  localStorage.removeItem("pet-type")
}
function onMainChoiceClick({target}) {
  if (target.nodeName !== 'A' ) {
    return
  }
  localStorage.setItem("pet-type", target.dataset.petType)
}
