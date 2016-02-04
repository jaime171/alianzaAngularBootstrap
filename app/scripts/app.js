'use strict';

/**
 * @ngdoc overview
 * @name alianzaV2App
 * @description
 * # alianzaV2App
 *
 * Main module of the application.
 */
angular
  .module('alianzaV2App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'MainCtrl'
      })
      .when('/infrastructure', {
        templateUrl: 'views/infrastructure.html',
        controller: 'InfraCtrl',
        controllerAs: 'infra'
      })
      .when('/location', {
      	templateUrl: 'views/location.html',
      	controller: 'MainCtrl'
      })
      .when('/masterplan', {
      	templateUrl: 'views/masterplan.html',
      	controller: 'MainCtrl'
      })
      .when('/contact', {
      	templateUrl: 'views/contact.html',
      	controller: 'MainCtrl',
      	controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
