$('.header .tab').on('click', function() {
    $(this).addClass('active')
           .siblings()
           .removeClass('active')
    $(this).parents('.container')
           .find('.panel')
           .eq($(this).index())
           .addClass('active')
           .siblings()
           .removeClass('active')
})