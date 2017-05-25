$(document).ready(function(){

	// Мобильное меню 
	$(".fa-bars").click(function(m){
		m.preventDefault();
		$(".header__menu-box").slideToggle(500);
	});
	// Конец Мобильное меню

	// Слайдер
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		spaceBetween: -250,
		slidesPerView: 'auto',
		coverflow: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,

		}
	});
    // конец слайдер
    
    // function func1() {
    // 	$('.current_item1').addClass('current_item2')
    // 	$('.current_item .current_item1').removeClass('current_item2');
    //     // $('.item-title').addClass('hide')
    //     $('.current_item .item-title').removeClass('hide');
    //     // $('.item-someth').addClass('hide')
    //     $('.current_item .item-someth').removeClass('hide');
    // }
    // $(function() {
    // 	$("#mySlider2").AnimatedSlider( { prevButton: "#btn_prev2", 
    // 		nextButton: "#btn_next2",
    // 		visibleItems: 5,
    // 		infiniteScroll: true,
    // 		willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
    // 		changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
    // 	});
    // 	$('#btn_next2, #btn_prev2').click(function(){
    // 		func1();
    // 	});
    // 	func1();
    // });









});//END READY
