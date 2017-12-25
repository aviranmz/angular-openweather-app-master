'use strict';
/* Filters */

angular.module('openWeatherApp.filters', [])

  .filter('interpolate', ['version', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])

  .filter('placeholder', [function () {

    return function (input, temp) {
      
      if (input.list != undefined) {
        var arr = $.grep(input.list, function (a) {
          return a.main.temp > 21 && a.main.humidity > 40 && a.main.humidity < 60;
        })
      }
      input.list = arr;
      return input;
    };

  }])
