// MyJs ES6 

/* -- Sticky: To reduce a navbar height -- */
window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle('sticky', window.scrollY > 0)
})

/* -- Year to Copyright -- */
document.querySelector('#year').innerHTML = new Date().getFullYear()
