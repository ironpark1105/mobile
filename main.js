$(function(){
    $('.gallery-box img').click(function(){
        var bigimg = $(this).attr('src');
        $('#big-img img').attr('src', bigimg),
        $('#big-img img').fadeIn('fast')
    }
    )
    $('#big-img img').click(function(){
        $(this).fadeOut('fast')
    })
})