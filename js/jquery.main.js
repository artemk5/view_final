
$( document ).ready(function() {
    $('.slider').slick({
        rows: 0,
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        adaptiveHeight: true
    });

    $('.menu__btn').click(function(event){
        $('.menu__btn,.menu__menu-list').toggleClass('active');
        $('body').toggleClass('lock');
    }) 

    $('.hero__btn').click(function(event){
        $('.hero__btn,.tabs').toggleClass('active');
    })

    var tabContainers = $('.tabs__container > div');
    tabContainers.hide().filter(':first').show();
    $('ul.tabs__navigation li a').click(function(){
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('ul.tabs__navigation a').parent('li').removeClass('selected');
        $(this).parent('li').addClass('selected');
        return false;
        }).filter(':first').click();
        
        $('.services__block-link').click(function(event){
            $('.services__block-link').removeClass("active");
            // $('.services__block-link').addClass('active');
            // $(this).remove("active");
            $(this).addClass('active');
        })
    
});
$(function () {
    var location = window.location.href;
    var cur_url = location.split('/').pop();
    var cur_bc = cur_url.split('.').shift();
    $('.menu__menu-list li').each(function () {
        var link = $(this).find('a').attr('href');
        if (cur_url == link) {
            $(this).addClass('current');
        }
    });
});
$(function(){
    var test = document.title;
    $('.header__bc').append(test);
})