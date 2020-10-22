/*let sidebarButtons = document.querySelectorAll(".aside__side-bar__button");


for (let button of sidebarButtons){
button.addEventListener("click", function (event) {
    console.log(event)
    let id = event.target.getAttribute('data-target')
    console.log(id)
    document.getElementById(id).classList.toggle("aside__side-bar__button__checkbox_toggle")
})
}*/
/* + / - Скрытый сайдбар */
$('.jsOpenCheck').click(function() {
    if ($(this).hasClass("open-services-mob")) {
        $(this).removeClass('open-services-mob').next().slideDown();
        let qw = $(this).find('.jsBtnPlus');
        let qwe = $(this).find('.jsBtnMinus');
        setTimeout(function() {
            qw.toggleClass('btn-active')
        }, 250);
        setTimeout(function() {
            qwe.toggleClass('btn-active')
        }, 250)
    } else {
        $(this).addClass(' open-services-mob').next().slideUp();
        let qw = $(this).find('.jsBtnPlus');
        let qwe = $(this).find('.jsBtnMinus');
        setTimeout(function() {
            qw.toggleClass('btn-active')
        }, 250);
        setTimeout(function() {
            qwe.toggleClass('btn-active')
        }, 250)
    }
});
/* Скрывающиеся навигационное меню */
/*
$('.jsOpenNavMenu').click(function() {
    $('.jsOpenNavMenu').toggleClass('activeBtn');
    $('.jsNavMenu').toggleClass('active-nav');
    if ($('.jsNavOverlay').hasClass('active-filter-overlay')) {
        $('.jsNavOverlay').removeClass('active-filter-overlay').css('display', 'none');
        $('.jsNavMenu').removeClass('active-nav');
        $('.jsShowMenu').removeClass('active-nav-drop')
    } else {
        $('.jsNavOverlay').addClass('active-filter-overlay').css('display', 'block')
    }
});
if (window.innerWidth < 1250) {
    $('.jsOpenMenu').click(function() {
        $('.jsNavMenu').toggleClass('active-nav');
        $('.jsShowMenu').toggleClass('active-nav-drop')
    })
}
$('.jsMenuPrev').click(function() {
    $('.jsNavMenu').toggleClass('active-nav');
    $('.jsShowMenu').toggleClass('active-nav-drop')
});
$('.jsNavOverlay').click(function() {
    $('.jsOpenNavMenu').removeClass('activeBtn');
    $('.jsNavMenu').removeClass('active-nav');
    $('.jsShowMenu').removeClass('active-nav-drop');
    $('.jsNavOverlay').removeClass('active-filter-overlay').css('display', 'none')
});
*/



