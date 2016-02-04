'use strict';
/**
 * @ngdoc function
 * @name alianzaV2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alianzaV2App
 */
angular.module('alianzaV2App')
  .controller('MainCtrl', function($scope, $route, $location) {

    $('#refresh').on('click', function(){
    	// $window.location.reload();

    	// $route.reload();

    	console.log($location)
    	// var location = $location.url().toString();
    	// var locationArr = location.split("");
    	// var finalPath = [];
    	// for (var i = 0; i < locationArr.length; i++) {
    	// 	if (location[i] === "/") {
     //      finalPath.push(location[i]);
    	// 	};
    	// };
    	// var pathJoin = finalPath.join("");
    	// console.log();
    });

    $('.menu-toggle').on('click', function(){
      $('.navbar-collapse').removeClass('in') 
    });
    
  	window.onscroll = function(){
		  var trigger = $('.jumbotron').height() - 150,
		  comparation,
		  scroll = $(window).scrollTop(),
		  headerSel = $('nav');
		  comparation = (scroll >= trigger) ? headerSel.addClass('toggleColor') : headerSel.removeClass('toggleColor');
	  } 

    var counter = 0;
    var container = $('.img-slider img');
    var allImg = [
      'images/gallery-1.jpg',
      'images/gallery-2.jpg',
      'images/gallery-3.jpg',
      'images/gallery-4.jpg',
      'images/gallery-5.jpg',
      'images/gallery-6.jpg',
      'images/gallery-7.jpg',
      'images/gallery-8.jpg',
      'images/gallery-9.jpg'
    ];
    var downImg = new Image();
  function loadImages() {
    for (var i = 0; i < 4; i++) {	
      $(container[i]).attr('src', allImg[i]);
	  counter++;
	  if (counter > 4 && counter < 8) {
	    $(container[i]).attr('src', allImg[i + 4]);
	  } 
	  if (counter > 6) {
	    $(container[i]).attr('src', allImg[i + 6]);
	  }
      if(counter >= allImg.length) {
	      counter = 0;
      }
    } 
  }
  downImg.onload = function(){
    loadImages();
    setInterval( loadImages, 6000);
  };
  downImg.src = '/images/gallery-1.jpg';




//*slider

var slidesWrapper = $('.cd-hero-slider');

	//check if a .cd-hero-slider exists in the DOM 
	if ( slidesWrapper.length > 0 ) {
		var primaryNav = $('.cd-primary-nav'),
			sliderNav = $('.cd-slider-nav'),
			navigationMarker = $('.cd-marker'),
			slidesNumber = slidesWrapper.children('li').length,
			visibleSlidePosition = 0,
			autoPlayId,
			autoPlayDelay = 5000;



		//autoplay slider
		setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);

	}

	function nextSlide(visibleSlide, container, pagination, n){
		visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			visibleSlide.removeClass('is-moving');
		});

		container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');

	}

	function prevSlide(visibleSlide, container, pagination, n){
		visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			visibleSlide.removeClass('is-moving');
		});

		container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
	}

	function updateSliderNavigation(pagination, n) {
		var navigationDot = pagination.find('.selected');
		navigationDot.removeClass('selected');
		pagination.find('li').eq(n).addClass('selected');
	}

	function setAutoplay(wrapper, length, delay) {
		if(wrapper.hasClass('autoplay')) {
			clearInterval(autoPlayId);
			autoPlayId = window.setInterval(function(){autoplaySlider(length)}, delay);
		}
	}

	function autoplaySlider(length) {
		if( visibleSlidePosition < length - 1) {
			nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, visibleSlidePosition + 1);
			visibleSlidePosition +=1;
		} else {
			prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, 0);
			visibleSlidePosition = 0;
		}
		updateNavigationMarker(navigationMarker, visibleSlidePosition+1);
		updateSliderNavigation(sliderNav, visibleSlidePosition);
	}




	function updateNavigationMarker(marker, n) {
		marker.removeClassPrefix('item').addClass('item-'+n);
	}

	$.fn.removeClassPrefix = function(prefix) {
		//remove all classes starting with 'prefix'
	    this.each(function(i, el) {
	        var classes = el.className.split(" ").filter(function(c) {
	            return c.lastIndexOf(prefix, 0) !== 0;
	        });
	        el.className = $.trim(classes.join(" "));
	    });
	    return this;
	};
});