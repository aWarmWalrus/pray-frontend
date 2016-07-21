(function () {
  'use strict';

  console.log("Ran timestamp filter");

  angular
    .module('Pray')
    .filter('formatTimestamp', function() {
      return function(timestamp) {
        console.log(timestamp + " | " + Date.parse(timestamp));
        return new Date(timestamp).toDateString();
      };
    });
})();
