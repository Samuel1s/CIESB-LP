// jQuery - Using with Bootstrap.
let check = false

/* -- Carousel Timeout -- */
$('.carousel').carousel({
    interval: 4000 
})

/* -- Open Dialog -- */
$('#enroll-button').on('click', function(){
    check = true
})

$(document).ready(function () {
    setTimeout(function() {
        if(check !== true) {
            $('#my-modal-dialog').modal('show')
        }
    }, 60000)
})

/* -- Droping Collapse -- */
$('.collapse').collapse()

