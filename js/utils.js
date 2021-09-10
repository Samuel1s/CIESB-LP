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
    }, 10000)
})

/* -- Submit Dialog -- */
$('#mc-embedded-subscribe').submit(function(e) {
    e.preventDefault()
        $('#my-modal-dialog').modal('hide')
    return false
})

/* -- Droping Collapse -- */
$('.collapse').collapse()

