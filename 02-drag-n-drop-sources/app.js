const item = document.querySelector('.item'),
  placeholders = document.querySelectorAll('.placeholder')


function dragStart(event) { //Не рекомендуется обращаться к this
  setTimeout(() => event.target.classList.add('hide'), 0)
  event.target.classList.add('hold')
}

function dragEnd(event) {
  event.target.classList.remove('hide', 'hold')
}


function dragEnter(event) {
  event.target.classList.add('hovered')
}

function dragOver(event) {
  event.preventDefault()
}

function dragLeave(event) {
  event.target.classList.remove('hovered')
}

function dragDrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}


for (const placeholder of placeholders) {
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
}


item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)


