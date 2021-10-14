// jQuery - Using with Bootstrap.
let check = false // If the person click in button before 60 seconds.

/* -- Carousel Timeout -- */
$('.carousel').carousel({
    interval: 4000 
})

/* -- Open Dialog -- */
$('#enroll-button').on('click', function() {
    check = true
}) 
    
$(document).ready(function () {
    setTimeout(function() {
        if(!check && !localStorage.getItem('thisPersonSubmittedForm')) {
            $('#my-modal-dialog').modal('show')
        }
    }, 60000)
})

/* -- Droping Collapse -- */
$('.collapse').collapse()

