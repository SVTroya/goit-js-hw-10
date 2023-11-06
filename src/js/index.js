const mainChoiceEl = document.querySelector('.main-choice')

mainChoiceEl.addEventListener('click', onMainChoiceClick)

window.onload = () => {
  localStorage.removeItem("pet-type")
}
function onMainChoiceClick({target}) {
  if (target.nodeName !== 'A' ) {
    return
  }
  localStorage.setItem("pet-type", target.dataset.petType)
}
