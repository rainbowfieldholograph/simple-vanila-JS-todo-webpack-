import './styles.css'
import './defaultStyles.css'

const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let totalCount = 0

//add event

btn.addEventListener('click', (e) => {
  // result.innerHTML += `<li class="todo-item">${input.value}</li>`
  if (!input.value) return
  createDeleteElement(input.value)
  input.value = ''
})

const createDeleteElement = (value) => {
  totalCount++
  const p = document.createElement('p')
  const li = document.createElement('li')
  const btn = document.createElement('button')
  li.className = 'todo-item'
  btn.className = 'todo-item-btn'
  btn.textContent = 'delete'
  p.textContent = value
  li.appendChild(p)
  li.appendChild(btn)
  result.appendChild(li)
  btn.addEventListener('click', (e) => {
    result.removeChild(li)
    totalCount--
    total.textContent = totalCount
  })
  li.addEventListener('click', (e) => {
    li.classList.toggle('todo-item-active')
  })
  total.textContent = totalCount
}
