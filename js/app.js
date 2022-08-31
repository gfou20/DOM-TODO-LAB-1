const BtnElement = document.getElementById('submit-button')
const inputElement = document.getElementById('input')
const ulElement = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')


BtnElement.addEventListener('click', function(evt) {
  let newList = document.createElement('li')
  newList.textContent = inputElement.value
  ulElement.appendChild(newList)
  inputElement.value = ''
})

ulElement.addEventListener('click', function(evt) {
  let ulList = evt.target.ulList
  ulList.removeChild(evt.target)
})


resetBtn.addEventListener('click', function(evt) {
  ulElement.textContent = ''
})
