(function () {
  'use strict';

  console.log("Ran app.js");

  angular
    .module('Pray', ['ngRoute', 'ngMaterial'])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        controller: 'DashController',
        templateUrl: 'views/dash.html',
        controllerAs: 'ctrl',
      })
      .otherwise({ redirectTo: '/' });
  }

  run.$inject = ['$log'];
  function run($log) {
    $log.debug("Pray is still under construction...");
    $log.debug("But...welcome Anna and Helen. This is where the rabbit hole begins");
  }
})();
