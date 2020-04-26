$(document).ready(function() {
    'use strict'

    // scroll to top
    $('body').prepend('<div class="go-top"><span id="top"><i class="fa fa-angle-up"></i></span></div>')
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('.go-top').fadeIn(600)
        } else {
            $('.go-top').fadeOut(600)
        }
    })
    $('#top').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 1200)
        return false
    })

    //Fixed Navbar
    function windowResize() {
        $('body').css('paddingTop', $('.esticky').outerHeight())
    }
    windowResize()
    $(window).resize(function() {
        windowResize()
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.sticky-scroll').addClass('scrolled')
        } else {
            $('.sticky-scroll').removeClass('scrolled')
        }
    })


    // mobile menu
    $(".menu-trigger").click(function(){
        $(".mobile-menu-sec").addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $(".menu-trigger-close").click(function(){
        $(".mobile-menu-sec").removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    
})

// File upload scripts
;(function(document, window, index) {
    var inputs = document.querySelectorAll('.inputfile')
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML

        input.addEventListener('change', function(e) {
            var fileName = ''
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length)
            else fileName = e.target.value.split('\\').pop()

            if (fileName) label.querySelector('span').innerHTML = fileName
            else label.innerHTML = labelVal
        })

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus')
        })
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus')
        })
    })
})(document, window, 0)
