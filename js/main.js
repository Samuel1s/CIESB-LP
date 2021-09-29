// MyJs ES6 

/* -- Sticky: To reduce a navbar height -- */
window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle('sticky', window.scrollY > 0)
})

/* -- Form Validation -- */
const formEl = document.querySelector('#mc-embedded-subscribe-form')
const emailEl = document.querySelector('#mce-EMAIL')
const FnameEl = document.querySelector('#mce-FNAME')
const LnameEl = document.querySelector('#mce-LNAME')
const phoneEl = document.querySelector('#mce-PHONE')

formEl.addEventListener('submit', (e) => {
   if (emailEl.value === '' || FnameEl.value === '' || LnameEl.value === '' || phoneEl.value === null) {
      e.preventDefault()
   }
})
