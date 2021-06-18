'use strict';
const slides = document.querySelectorAll('.slide')

function selectSlide(activeSlide = 0) {
  slides[activeSlide].classList.add('active')

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
}

selectSlide()