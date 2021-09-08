// jQuery - Using with Bootstrap.

/* -- Carousel Timeout -- */
$('.carousel').carousel({
    interval: 4000
})

/* -- Open Dialog -- */
$(document).ready(function () {
    setTimeout(function() {
        $('#my-modal-dialog').modal('show')
    }, 10000)
})

/* -- Droping Collapse -- */
$('.collapse').collapse()
