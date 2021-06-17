'use strict';
const slides = document.querySelectorAll('.slide')

slides.forEach((slide, index) => {
  slide.addEventListener('click', function () {
    clearActiveClasses()

    slide.classList.add('active')
  })
})

function clearActiveClasses() {
  for (let slide of slides) {
    slide.classList.remove('active')
  }
}
