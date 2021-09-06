// MyJs ES6 

/* -- fixed-top: Is a Bootstrap class. -- */
window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle('sticky', window.scrollY > 0)
})

/* -- Year to Copyright -- */
document.querySelector('#year').innerHTML = new Date().getFullYear()
