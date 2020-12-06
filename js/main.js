$(function(){

$('.banner-section__slider').slick({
    dots: true,
    prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprew"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
        {
          breakpoint: 940,
          settings: {
            arrows: false
          }
        }
    ]
})

$('.tab').on('click', function(e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

})

$('.products-item__favorite').on('click', function() {
    $(this).toggleClass('products-item__favorite--active')
})

$('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'<button class="products__slider-btn products__slider-btnprew"><img src="images/arrow-black-left.svg" alt=""></button>',
    nextArrow:'<button class="products__slider-btn products__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              arrows: false,
              dots: true,
            }
          },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
            }
          }
    ]
})

$('.filter-style').styler();

$('.filter__item-drop').on('click', function() {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle();
})

$(".js-range-slider").ionRangeSlider({

});

$('.item-list__select').styler();

$('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('catalog__filter-btn--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-btn--active');
    $('.products-item__wrapper').removeClass('products-item__wrapper--list');
})

$('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('catalog__filter-btn--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-btn--active');
    $('.products-item__wrapper').addClass('products-item__wrapper--list');
})

$(function () {
    $("#rateYo").rateYo({
        ratedFill: "#1C62CD",
        spacing: "5px",
        starWidth: "23px",
        normalFill: '#C4C4C4'
    });
  });

$('.menu__btn').on('click', function() {
    $('.menu__gamburger-list').toggleClass('menu__gamburger-list--active')
});

$('.footer-top__title').on('click', function() {
  $(this).next().slideToggle();
})

$('.catalog__btn').on('click', function() {
  $(this).next().slideToggle();
})

});

