// Carousel Timeout - Using jQuery with Bootstrap.
$('.carousel').carousel({
    interval: 4000
})

// Open Dialog - Using jQuery with Bootstrap.
$(document).ready(function () {
    setTimeout(function() {
        $('#my-modal-dialog').modal('show')
    }, 10000)
})

// Droping Collapse - Using jQuery with Bootstrap.
$('.collapse').collapse()
