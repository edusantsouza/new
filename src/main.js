import './style.css'

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const divCatcher = document.querySelector('div');

const eventoLink = document.querySelector('.link');

eventoLink.addEventListener('click', (e)=>{
e.preventDefault();
divCatcher.classList.toggle('hidden')
})
