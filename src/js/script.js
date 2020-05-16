$(document).ready(function(event) {
    $('.feed__slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
    });
});

$(document).click(function(event){
    event.preventDefault();
    console.log(event.target)
})