const start = document.querySelector('#start'),
  screens = document.querySelectorAll('.screen'),
  timeList = document.querySelector('#time-list'),
  board = document.querySelector('#board');

let time = 0,
  score = 0,
  timeEl = document.querySelector('#time');

start.addEventListener('click', (e) => {
  e.preventDefault()

  screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = parseInt(e.target.getAttribute('data-time'))
    startGame()
    console.log(time)
  }
})

function startGame() {
  screens[1].classList.add('up')
  createRandomCircle()
  setInterval(decreaseTime, 1000)
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
  board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
  timeEl.parentNode.classList.add('hide')
}

function createRandomCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  board.append(circle)

  const size = getRandomNum(10, 60),
    { width, height } = board.getBoundingClientRect(),
    x = getRandomNum(0, width - size),
    y = getRandomNum(0, height - size);

  circle.style.top = `${y}px`
  circle.style.left = `${x}px`

  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
}

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++
    e.target.remove()
    createRandomCircle()
  }
})
