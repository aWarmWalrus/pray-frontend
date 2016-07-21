(function () {
  'use strict';

  console.log("Ran dash controller");

  angular
  .module('Pray')
  .controller('DashController', DashController);

  DashController.$inject = ['$http'];
  function DashController($http) {
    var ctrl = this;

    ctrl.getAllPrayers = getAllPrayers;

    function getAllPrayers() {
      $http.get("https://salty-cliffs-76440.herokuapp.com/prayers/")
        .then(
          function(response) {
            console.log("success! ", response);
            ctrl.prayers = response.data;
          },
          function(data) {
            console.log("error... ",data);
          });
    }
    
  };
})();
