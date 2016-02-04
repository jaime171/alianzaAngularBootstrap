'use strict';

/**
 * @ngdoc function
 * @name alianzaV2App.controller:InfraCtrl
 * @description
 * #InfraCtrl
 * Controller of the alianzaV2App
 */
angular.module('alianzaV2App')
  .controller('InfraCtrl', function () {
    
    window.onscroll = function(){
		  var trigger = $('.jumbotron').height() - 150,
		  comparation,
		  scroll = $(window).scrollTop(),
		  headerSel = $('nav');
		  comparation = (scroll >= trigger) ? headerSel.addClass('toggleColor') : headerSel.removeClass('toggleColor');
	  }
    var counter = 0;
    var container = $('#slideshow img');
    var allImg = [
      'images/infra-slider-1.jpg',
      'images/infra-slider-2.jpg',
      'images/infra-slider-3.jpg',
      'images/infra-slider-4.jpg',
      'images/infra-slider-5.jpg',
      'images/infra-slider-6.jpg'
    ];
  var i = 0;
  var downImg = new Image();
  function loadImages() {
	  $(container).attr('src', allImg[i]);
	  i++;
    if(i >= allImg.length) {
	    i = 0;
    }
  }
  downImg.onload = function(){
    loadImages();
    setInterval(loadImages, 4000);
  };
  downImg.src = 'images/infra-slider-1.jpg';
  });
