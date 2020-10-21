/*let sidebarButtons = document.querySelectorAll(".aside__side-bar__button");


for (let button of sidebarButtons){
button.addEventListener("click", function (event) {
    console.log(event)
    let id = event.target.getAttribute('data-target')
    console.log(id)
    document.getElementById(id).classList.toggle("aside__side-bar__button__checkbox_toggle")
})
}*/

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
