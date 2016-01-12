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
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
