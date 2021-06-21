const container = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['green', 'red', 'purple', 'orange', 'pink']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  container.append(square)

  square.addEventListener('mouseover', () => {
    setColor(square)

  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })


}

function setColor(element) {
  const color = colors[getRandomColors()]

  element.style.backgroundColor = `${color}`
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = `#1d1d1d`

  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColors() {
  const index = Math.floor(Math.random() * colors.length)
  return index
}