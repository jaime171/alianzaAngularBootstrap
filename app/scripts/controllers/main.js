'use strict';
/**
 * @ngdoc function
 * @name alianzaV2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alianzaV2App
 */
angular.module('alianzaV2App')
  .controller('MainCtrl', function () {
  	

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
    for (var i = 0; i < 3; i++) {	
      $(container[i]).attr('src', allImg[i]);
	  counter++;
	  if (counter > 3 && counter < 7) {
	    $(container[i]).attr('src', allImg[i + 3]);
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
    setInterval( loadImages, 10000);
  };
  downImg.src = '/images/gallery-1.jpg';
});