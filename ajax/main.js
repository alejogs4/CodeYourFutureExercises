const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const button = document.querySelector('.button')
const list = document.querySelector('.users')

button.addEventListener('click', function() {
  fetch(USERS_URL)
    .then((response) => {
      return response.json()
    })
    .then(info => {
      list.innerHTML = ''
      info.forEach(user => {
        list.innerHTML += `<li>${user.name}</li>`
      })
    })
})