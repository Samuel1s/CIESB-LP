// MyJs ES6 
var registrationPermissionDenied = false

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
   if (registrationPermissionDenied === true) {
      cookieContainerEl.classList.add('show-cookie')
      e.preventDefault()
   }

   if (emailEl.value === '' || FnameEl.value === '' || LnameEl.value === '' || phoneEl.value === null) {
      e.preventDefault()

   } else {
      localStorage.setItem('thisPersonSubmittedForm', true)
   }
})

/* -- Cookie container. -- */
const cookieContainerEl = document.querySelector('.cookie-container')
const cookieButtonAceptedEl = document.querySelector('.cookie-button-acepted')
const cookieButtonRejectedEl = document.querySelector('.cookie-button-rejected')

cookieButtonAceptedEl.addEventListener('click', ()=> {
   cookieContainerEl.classList.remove('show-cookie')
   localStorage.setItem('cookieBannerDisplayed', true)
})

// To reject button - the submission will be denied.
cookieButtonRejectedEl.addEventListener('click', () => {
   cookieContainerEl.classList.remove('show-cookie')
   registrationPermissionDenied = true
})

setTimeout(() => {
   if (!localStorage.getItem('cookieBannerDisplayed')) {
      cookieContainerEl.classList.add('show-cookie')
   }
}, 4000)
