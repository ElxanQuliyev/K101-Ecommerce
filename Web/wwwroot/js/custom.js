/*===============================================================================
@File: Tezno Template JS

* This file contains the JS for the actual template, this
is the file you need to edit to change the look of the
template.

This files table contents are outlined below>>>>>
=================================================================================*/

// Mean Menu
// Preloader
// Nice Select JS
// Header Sticky
// Tezno Slider Wrap
// Partners Wrap
// weekly specials Slider Wrap
// Trendy specials Slider Wrap
// Slider Instagram Wrap
// Sales Wrap
// Electronics News Wrap
// Best Product Jewelry Wrap
// Jewelry Slider Wrap
// Offer For Online
// Go to Top
// Click Event
// Count Time 
// Animation
// Tabs
// Tooltip
// Popup Image
// Popup Video
// Subscribe form
// AJAX MailChimp
// MixItUp Shorting
// Search Popup JS
// Input Plus & Minus Number JS
// Product View Slider
// LayerSlider


(function($) {
	'use strict';
	jQuery(document).on('ready', function(){ 
		
		// Mean Menu
		jQuery('.mean-menu').meanmenu({ 
			meanScreenWidth: "991"
		});

		// Preloader
		jQuery(window).on('load', function() {
            $('.preloader').fadeOut();
		});

		// Nice Select JS
        $('select').niceSelect();
		
		// Header Sticky
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >150){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
		});

		// Tezno Slider Wrap
		$('.tezno-slider-wrap').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			mouseDrag: false,
			thumbs: true,
            thumbsPrerendered: true,
			items:1,
			dots: false,
			autoHeight: true,
			autoplay: true,
			smartSpeed:1500,
			autoplayHoverPause: true,
			navText: [
				"<i class='flaticon-back'></i>",
				"<i class='flaticon-right'></i>",
			],
		});

		// Partners Wrap
		$('.partners-wrap').owlCarousel({ 
			items:1,
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 0,
			center: false,
			dots: false,
			smartSpeed:1500,
			responsive:{
				0:{
					items:2
				},
				576:{
					items:3
				},
				768:{
					items:4,
				},
				992:{
					items:5,
				},
				1200:{
					items:5,
				}
			}
		});

		// weekly specials Slider Wrap
		$('.weekly-specials-slider-wrap').owlCarousel({ 
			items:1,
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 30,
			center: false,
			dots: true,
			smartSpeed:1500,
			responsive:{
				0:{
					items:1,
				},
				576:{
					items:2,
					margin: 20,
				},
				768:{
					items:3,
					margin: 20,
				},
				992:{
					items:3,
				},
				1200:{
					items:3,
				}
			}
		});

		// Trendy specials Slider Wrap
		$('.trendy-specials-slider-wrap').owlCarousel({ 
			items:1,
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 30,
			center: false,
			dots: true,
			smartSpeed:1500,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				768:{
					items:3,
				},
				992:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});

		// Slider Instagram Wrap
		$('.slider-instagram-wrap').owlCarousel({ 
			items:1,
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 0,
			center: false,
			dots: false,
			smartSpeed:1500,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				768:{
					items:3,
				},
				992:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});

		// Sales Wrap
		$('.sales-wrap').owlCarousel({ 
			items:1,
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 30,
			center: false,
			dots: true,
			smartSpeed:1500,
		});

		// Electronics News Wrap
		$('.electronics-news-wrap').owlCarousel({ 
			items:1,
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 30,
			center: false,
			dots: false,
			smartSpeed:1500,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:1
				},
				768:{
					items:1
				},
				992:{
					items:1
				},
				1200:{
					items:2
				}
			}
		});

		// Best Product Jewelry Wrap
		$('.best-product-jewelry-wrap').owlCarousel({ 
			items:1,
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 30,
			center: false,
			dots: true,
			smartSpeed:1500,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});

		// Jewelry Slider Wrap
		$('.jewelry-slider-wrap').owlCarousel({ 
			items:1,
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 0,
			center: false,
			dots: true,
			smartSpeed:1500,
		});

		// Offer For Online
		$('.offer-for-online').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			mouseDrag: false,
			thumbs: false,
            thumbsPrerendered: true,
			items:1,
			dots: false,
			autoHeight: true,
			autoplay: true,
			smartSpeed:1500,
			autoplayHoverPause: true,
			animateOut: "slideOutDown",
            animateIn: "slideInDown",
		});

		// Go to Top
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});  

		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});

		// FAQ Accordion
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});

		// Count Time 
        function makeTimer() {
            var endTime = new Date("march  30, 2020 17:00:00 PDT");			
            var endTime = (Date.parse(endTime)) / 1000;
            var now = new Date();
            var now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            $("#days").html(days + "<span>Days</span>");
            $("#hour").html(hours + "<span>Hour</span>");
            $("#minu").html(minutes + "<span>Minu</span>");
            $("#seco").html(seconds + "<span>Seco</span>");
        }
		setInterval(function() { makeTimer(); }, 300);

		// Animation
		new WOW().init();

		// Tabs 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			// tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});

		// Tooltip
		$('[data-toggle="tooltip"]').tooltip()

		 // Popup Image
		 $('.popup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled:true
            }
        });

		// Popup Video
        $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
		});

		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
			// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			} else {
				// everything looks good!
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		
		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
			callback: callbackFunction
		});
		
		// MixItUp Shorting
		$('.shorting').mixItUp();
		
		// Search Popup JS
        $('.close-btn').on('click',function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });
        $('.search-btn').on('click',function() {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.close-btn').addClass('active');
		});

		// Input Plus & Minus Number JS
        $('.input-counter').each(function() {
            var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
            
            btnUp.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
		});

		// Product View Slider
		var bigimage = $("#big");
		var thumbs = $("#thumbs");
		//var totalslides = 10;
		var syncedSecondary = true;
		
		bigimage
			.owlCarousel({
			items: 1,
			slideSpeed: 2000,
			nav: true,
			autoplay: true,
			dots: false,
			loop: true,
			responsiveRefreshRate: 200,
			navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>",
			]
		})
		.on("changed.owl.carousel", syncPosition);
		
		thumbs
			.on("initialized.owl.carousel", function() {
			thumbs
			.find(".owl-item")
			.eq(0)
			.addClass("current");
		})
			.owlCarousel({
			items: 5,
			dots: false,
			nav: false,
			navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>",
			],
			smartSpeed: 200,
			slideSpeed: 500,
			slideBy: 4,
			responsiveRefreshRate: 100
		})
		.on("changed.owl.carousel", syncPosition2);
		
		function syncPosition(el) {
			//if loop is set to false, then you have to uncomment the next line
			//var current = el.item.index;
		
			//to disable loop, comment this block
			var count = el.item.count - 1;
			var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
		
			if (current < 0) {
				current = count;
			}
			if (current > count) {
				current = 0;
			}
			//to this
			thumbs
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
			var onscreen = thumbs.find(".owl-item.active").length - 1;
			var start = thumbs
			.find(".owl-item.active")
			.first()
			.index();
			var end = thumbs
			.find(".owl-item.active")
			.last()
			.index();
		
			if (current > end) {
				thumbs.data("owl.carousel").to(current, 100, true);
			}
			if (current < start) {
				thumbs.data("owl.carousel").to(current - onscreen, 100, true);
			}
		}
		function syncPosition2(el) {
			if (syncedSecondary) {
				var number = el.item.index;
				bigimage.data("owl.carousel").to(number, 100, true);
			}
		}
		thumbs.on("click", ".owl-item", function(e) {
			e.preventDefault();
			var number = $(this).index();
			bigimage.data("owl.carousel").to(number, 300, true);
		});

		// LayerSlider
		$('#slider').layerSlider({
			sliderVersion: '6.0.0',
			type: 'fullwidth',
			responsiveUnder: 1200,
			maxRatio: 1,
			slideBGSize: 'auto',
			skin: 'numbers',
			globalBGColor: '#fbfbfa',
			thumbnailNavigation: 'always',
			tnWidth: 170,
			tnHeight: 120,
			skinsPath: 'assets/skins/'
		});
	});
})(jQuery);