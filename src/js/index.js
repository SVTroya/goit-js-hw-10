const mainChoiceEl = document.querySelector('.main-choice')

mainChoiceEl.addEventListener('click', onMainChoiceClick)

function onMainChoiceClick({target}) {
  if (target.nodeName !== 'A' ) {
    return
  }

  target.dataset.petType
}
