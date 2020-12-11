$(document).ready(function () {

	/* + / - Скрытый сайдбар */


	if ($('.jsOpenCheck').length > 0) {
		$('.jsOpenCheck').click(function () {
			if ($(this).hasClass("open-services-mob")) {
				$(this).removeClass('open-services-mob').next().slideDown();
				let qw = $(this).find('.jsBtnPlus');
				let qwe = $(this).find('.jsBtnMinus');
				setTimeout(function () {
					qw.toggleClass('btn-active')
				}, 250);
				setTimeout(function () {
					qwe.toggleClass('btn-active')
				}, 250)
			} else {
				$(this).addClass(' open-services-mob').next().slideUp();
				let qw = $(this).find('.jsBtnPlus');
				let qwe = $(this).find('.jsBtnMinus');
				setTimeout(function () {
					qw.toggleClass('btn-active')
				}, 250);
				setTimeout(function () {
					qwe.toggleClass('btn-active')
				}, 250)
			}
		});
	}

	/* Скрывающиеся навигационное меню */
	const navMenu = $('.jsOpenNavMenu');
	if (navMenu.length > 0) {
		$(navMenu).click(function () {
			$(navMenu).toggleClass('activeBtn');
			$('.jsNavMenu').toggleClass('active-nav');
			if ($('.jsNavOverlay').hasClass('active-filter-overlay')) {
				$('.jsNavOverlay').removeClass('active-filter-overlay').css('display', 'block');
				$('.jsNavMenu').removeClass('active-nav');
				$('.jsShowMenu').removeClass('active-nav-drop');
				let logo = $(this).find('.jsMenuLogo');
				let logoActive = $(this).find('.jsMenuLogoActive');
				setTimeout(function () {
					logo.toggleClass('btn-active')
				}, 150);
				setTimeout(function () {
					logoActive.toggleClass('btn-active')
				}, 150)
			} else {
				$('.jsNavOverlay').addClass('active-filter-overlay').css('display', 'block');
				let logo = $(this).find('.jsMenuLogo');
				let logoActive = $(this).find('.jsMenuLogoActive');
				setTimeout(function () {
					logo.toggleClass('btn-active')
				}, 150);
				setTimeout(function () {
					logoActive.toggleClass('btn-active')
				}, 150)
			}
		});
	}


	if ($('.jsMenuPrev').length > 0) {
		$('.jsMenuPrev').click(function () {
			$('.jsNavMenu').toggleClass('active-nav');
			$('.jsShowMenu').toggleClass('active-nav-drop')
		});
	}
	if ($('.jsNavOverlay').length > 0) {
		$('.jsNavOverlay').click(function () {
			$(navMenu).removeClass('activeBtn');
			$('.jsNavMenu').removeClass('active-nav');
			$('.jsShowMenu').removeClass('active-nav-drop');
			$('.jsNavOverlay').removeClass('active-filter-overlay').css('display', 'block');
			let logo = $('.jsOpenNavMenu').find('.jsMenuLogo');
			let logoActive = $('.jsOpenNavMenu').find('.jsMenuLogoActive');
			setTimeout(function () {
				logo.toggleClass('btn-active')
			}, 150);
			setTimeout(function () {
				logoActive.toggleClass('btn-active')
			}, 150)
		});
	}
	/*

	Для скрытия сайд-бара и отображения кнопки его откытия на мобильной версии

	 */
	if ($('.jsShowFilter').length > 0) {
		$('.jsShowFilter').click(function () {
			$('.jsOpenFilter').addClass('active-filter');
			$('.jsFilterOverlay').addClass('active-filter-overlay').css({
				'transition': 'all ease 1s'
			});
			$('.jsShowFilter').css({
				'display': 'none',
				'transition': 'all ease 0s'
			})
		});
	}
	if ($('.jsHideFilter').length > 0) {
		$('.jsHideFilter').click(function () {
			$('.jsOpenFilter').removeClass('active-filter');
			$('.jsFilterOverlay').removeClass('active-filter-overlay').css({
				'transition': 'all ease 0s'
			});
			$('.jsShowFilter').css({
				'display': 'block',
				'transition': 'all ease 1s'
			})
		});
	}
	if ($('.jsFilterOverlay').length > 0) {
		$('.jsFilterOverlay').click(function () {
			$('.jsOpenFilter').removeClass('active-filter');
			$('.jsFilterOverlay').removeClass('active-filter-overlay').css({
				'transition': 'all ease 0s'
			});
			$('.jsShowFilter').css({
				'display': 'block',
				'transition': 'all ease 1s'
			})
		});
	}
	/* Select2 плагин на выбор города*/
	if ($('.js-example-basic-single').length > 0) {
		$('.js-example-basic-single').select2({
			placeholder: 'Select an option',
			allowClear: !0,
			minimumResultsForSearch: -1
		});
	}
	$('.select2-selection').css('border-radius', '0px')
	$('.select2-container').children().css('border-radius', '0px')
});


window.onload = function () {

	/** Перенос текста в другой блок home-page */
	function transferEl(el, parentEl, minWidth, maxWidth) {
		let width = window.innerWidth;

		if (el && parentEl) { 	/** проверка на существование элементов */
			width <= minWidth ? parentEl.appendChild(el) : false;
			width >= maxWidth ? parentEl.appendChild(el) : false
		}
	}

	let secondParentEl = document.querySelector(".content-wrapper__search-job__content-block-text");
	let el = document.querySelector(".content-wrapper__search-job__content-block-footer-text");
	let parentEl = document.querySelector(".content-wrapper__search-job-content-inner__button-parent");
	transferEl(el, parentEl, "973");
	transferEl(el, secondParentEl, "550");


	/** Смена роли кнопки поиска */
	let searchVacancy = document.querySelector('[data-search]');
	let toggleRole = document.querySelector("#toggleRole");
	if (toggleRole) {
		toggleRole.addEventListener("change", () => {
			if (toggleRole.checked) {
				(searchVacancy) ? searchVacancy.innerHTML = "НАЙТИ СОТРУДНИОВ" : false;
			} else {
				(searchVacancy) ? searchVacancy.innerHTML = "НАЙТИ ВАКАНСИИ" : false;
			}
		});
	}
};


/*
'use strict';
if ($('.home__slider').length > 0) {
 $('.home__slider').slick({
     verticalSwiping: !0,
     vertical: !0,
     arrows: !0,
     prevArrow: '<button type="button" class="prevSlickHome"><img src="/images/arrow-down.svg"></button>',
     nextArrow: '<button type="button" class="nextSlickHome"><img src="/images/arrow-up.svg"></button>',
     slidesToShow: 3,
     autoplay: !0,
     autoplaySpeed: 2000,
     responsive: [{
         breakpoint: 1500,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
         }
     }, {
         breakpoint: 992,
         settings: {
             arrows: !1,
             slidesToShow: 2,
             slidesToScroll: 1,
         }
     }, {
         breakpoint: 576,
         settings: {
             arrows: !0,
             slidesToShow: 1,
             slidesToScroll: 1,
             vertical: !1,
             verticalSwiping: !1,
         }
     }]
 })
}
if ($('.home__form-select-js').length > 0) {
 $('.home__form-select-js').select2({
     placeholder: "Вакансии",
     minimumResultsForSearch: Infinity
 })
}
if ($('.jsModalSelectResume').length > 0) {
 $('.jsModalSelectResume').select2({
     placeholder: "Выберите вакансию",
     minimumResultsForSearch: Infinity
 })
}
if ($('.jsModalSelectVacancy').length > 0) {
 $('.jsModalSelectVacancy').select2({
     placeholder: "Выберите резюме",
     minimumResultsForSearch: Infinity
 })
}
$(document).ready(function() {
 if ($('#sidebar').length > 0 && window.innerWidth > 993) {
     let stickySidebar = new StickySidebar('#sidebar',{
         topSpacing: 0,
         bottomSpacing: 20,
         containerSelector: '.v-content-bottom',
         innerWrapperSelector: '.sidebar-inner',
         resizeSensor: !0
     })
 }
 if ($('#sidebar-vr').length > 0 && window.innerWidth > 993) {
     let stickySidebar = new StickySidebar('#sidebar-vr',{
         topSpacing: 0,
         bottomSpacing: 0,
         containerSelector: '.container-for-sidebar',
         innerWrapperSelector: '.sidebar-inner',
         resizeSensor: !0
     })
 }
 if ($('#sidebar-single').length > 0 && window.innerWidth > 993) {
     let stickySidebar = new StickySidebar('#sidebar-single',{
         topSpacing: 20,
         bottomSpacing: 20,
         containerSelector: '.single-block-slider',
         innerWrapperSelector: '.sidebar-inner',
         resizeSensor: !0
     })
 }
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
 $('.jsShowContacts').click(function() {
     $('.jsOpenContacts').toggleClass('active-single-contacts');
     $('.jsHeaderIndex').css({
         'z-index': '3',
         'transition': 'all ease .1s'
     })
 });
 $('.jsHideContacts').click(function() {
     $('.jsOpenContacts').removeClass('active-single-contacts');
     $('.jsHeaderIndex').css({
         'z-index': '8',
         'transition': 'all ease 6s'
     })
 });
 $('.jsShowFilter').click(function() {
     $('.jsOpenFilter').addClass('active-filter');
     $('.jsFilterOverlay').addClass('active-filter-overlay').css({
         'transition': 'all ease 1s'
     });
     $('.jsShowFilter').css({
         'display': 'none',
         'transition': 'all ease 0s'
     })
 });
 $('.jsHideFilter').click(function() {
     $('.jsOpenFilter').removeClass('active-filter');
     $('.jsFilterOverlay').removeClass('active-filter-overlay').css({
         'transition': 'all ease 0s'
     });
     $('.jsShowFilter').css({
         'display': 'block',
         'transition': 'all ease 1s'
     })
 });
 $('.jsFilterOverlay').click(function() {
     $('.jsOpenFilter').removeClass('active-filter');
     $('.jsFilterOverlay').removeClass('active-filter-overlay').css({
         'transition': 'all ease 0s'
     });
     $('.jsShowFilter').css({
         'display': 'block',
         'transition': 'all ease 1s'
     })
 });
 $(document).on('click', '.jsLogin', function(event) {
     event.preventDefault();
     $('.jsModal').fadeIn();
     $('.jsModalLogin').fadeIn();
     $('body').addClass('body-overflow')
 });
 var modalActive = $('.jsActive');
 if (modalActive.length > 0) {
     $('.jsModal').fadeIn();
     $('.jsModalSuccess').fadeIn();
     $('body').addClass('body-overflow')
 }
 $('.jsRegForm').click(function() {
     $('.jsModalLogin').fadeOut(1);
     $('.jsModalReg').fadeIn()
 });
 $('.jsLoginForm').click(function() {
     $('.jsModalReg').fadeOut(1);
     $('.jsModalLogin').fadeIn()
 });
 $('.jsForgotPass').click(function() {
     $('.jsModalLogin').fadeOut(1);
     $('.jsForgotPassModal').fadeIn()
 });
 $('.jsBackLogin').click(function() {
     $('.jsForgotPassModal').fadeOut(1);
     $('.jsModalLogin').fadeIn()
 });
 $('.jsSendMessage').click(function() {
     var resume_id = $(this).attr('data-id');
     if (resume_id !== undefined)
         $("input[name=resume_resume_id]").val(resume_id);
     $('.jsModal').fadeIn();
     $('.jsModalMessage').fadeIn();
     $('body').addClass('body-overflow')
 });
 $('.jsVacancyModal').click(function() {
     var vacancy_id = $(this).attr('data-id');
     if (vacancy_id !== undefined)
         $("input[name=vacancy_vacancy_id]").val(vacancy_id);
     $('.jsModal').fadeIn();
     $('.jsModalMessageVacancy').fadeIn();
     $('body').addClass('body-overflow')
 });
 $('.jsCompanyModal').click(function() {
     var company_id = $(this).attr('data-id');
     if (company_id !== undefined)
         $("input[name=company_company_id]").val(company_id);
     $('.jsModal').fadeIn();
     $('.jsModalMessageCompany').fadeIn();
     $('body').addClass('body-overflow')
 });
 $('.jsModalClose').click(function() {
     $('.jsModal').fadeOut();
     $('.jsModalLogin').fadeOut(1);
     $('.jsModalReg').fadeOut();
     $('.jsModalMessage').fadeOut();
     $('.jsModalMessageVacancy').fadeOut();
     $('.jsModalSuccess').fadeOut();
     $('.jsForgotPassModal').fadeOut();
     $('body').removeClass('body-overflow')
 });
 if (window.innerWidth > 1251) {
     $('.jsOpenMenu').mouseenter(function() {
         $('.jsShowMenu').fadeIn().css('display', 'flex')
     });
     $('.jsMenu').mouseleave(function(e) {
         if (!$('.jsShowMenu').is(e.target) || !$('.jsOpenMenu').is(e.target)) {
             $('.jsShowMenu').fadeOut()
         }
     })
 }
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
 if ($('#jsInitialTab').val() === 'login') {
     $('.jsLogin').click()
 }
 $('#registration-form').submit(function() {
     gtag('event', 'register', {
         'event_category': 'form',
         'event_action': 'register',
     });
     yaCounter53666866.reachGoal('register')
 });
 $('#reset_token_form').submit(function(e) {
     e.preventDefault();
     $.ajax({
         type: 'POST',
         url: '/reset-password/send-token',
         dataType: 'json',
         data: $(this).serialize(),
         success: function(data) {
             if (data != !1) {
                 $('.jsForgotPassModal').fadeOut(1);
                 $('.jsModalSuccess').fadeIn();
                 $('.jsModalSuccess p')[0].innerText = 'Сообщение с дальнейшими инструкциями было отправлено на ваш Email'
             }
         }
     })
 });
 $('.jsClickShowPhone').click(function() {
     $(this).fadeOut(1);
     $('.jsShowPhone').fadeIn(1);
     let url = '';
     if ($(this).attr('data-type') === 'vacancy') {
         url = '/vacancy/default/click-phone'
     } else if ($(this).attr('data-type') === 'resume') {
         url = '/resume/default/click-phone'
     } else if ($(this).attr('data-type') === 'company') {
         url = '/company/default/click-phone'
     }
     $.ajax({
         type: 'POST',
         url: url,
         data: {
             csrf: $('meta[name=csrf-token]').attr('content'),
             id: $(this).attr('data-id')
         },
         success: function(response) {}
     })
 });
 if ($('.jsAcceptScroll').length > 0) {
     let btnAcceptTop = $('.jsAcceptScroll').offset().top;
     function btnAcceptScroll() {
         if (($(window).scrollTop() + $(window).height()) > (btnAcceptTop - 150)) {
             $('.jsAcceptScrollFixed').fadeOut(300)
         } else {
             $('.jsAcceptScrollFixed').fadeIn(300)
         }
     }
     btnAcceptScroll();
     $(window).scroll(function() {
         btnAcceptScroll()
     })
 }
 if (window.innerWidth < 992) {
     $(".jsCitiesBtn .part__head").next().hide();
     $(".jsCitiesBtn .part__head").click(function() {
         if ($(this).hasClass("open-services-mob")) {
             $(".jsCitiesBtn .part__head").removeClass("open-services-mob").next().slideUp()
         } else {
             $(".jsCitiesBtn .part__head.open-services-mob").not(this).removeClass("open-services-mob").next().slideUp();
             $(this).addClass(" open-services-mob").next().slideToggle()
         }
     })
 }
});
if ($('.jsCitiesSelect').length > 0) {
 $('.jsCitiesSelect').select2({
     placeholder: "Выберите город",
     allowClear: !0
 })
}
if ($('.jsCountriesSelect').length > 0) {
 $('.jsCountriesSelect').select2({
     placeholder: "Выберите регион",
     allowClear: !0
 })
}
if ($('.jsDutiesSelect').length > 0) {
 $('.jsDutiesSelect').select2({
     placeholder: "Выберите навыки"
 })
}
if ($('.jsOpenCountrySelect').length > 0) {
 $('.jsOpenCountrySelect').click(function() {
     $(this).next().toggle();
     $('.country-select').toggleClass('country-select-active')
 });
 $('.jsOpenCountrySelectUrl').click(function(e) {
     e.preventDefault();
     $('.jsOpenCountrySelect').html($(this).html());
     $('.jsOpenCountrySelect').next().hide();
     $('.country-select').removeClass('country-select-active');
     $.ajax({
         type: "POST",
         url: "/main_page/default/select-country",
         data: {
             country: $(this).attr('data-id'),
             _csrf: $('meta[name=csrf-token]').attr("content")
         },
         success: function(result) {
             window.location.replace('/' + result)
         }
     })
 });
 $('body').click(function(e) {
     if (!$(e.target).closest('div').hasClass('country-select')) {
         $('.jsOpenCountrySelect').next().hide();
         $('.country-select').removeClass('country-select-active')
     }
 })
}
if ($('.jsCityHeaderSelect').length > 0) {
 $('.jsCityHeaderSelect').select2({
     placeholder: "Выберите Страну",
     allowClear: !0
 }).on('change', function() {
     $.ajax({
         type: "POST",
         url: "/main_page/default/select-country",
         data: {
             country: $(this).val(),
             _csrf: $('meta[name=csrf-token]').attr("content")
         },
         success: function(result) {
             window.location.reload()
         }
     })
 })
}

*/

