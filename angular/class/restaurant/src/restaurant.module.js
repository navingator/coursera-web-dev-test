(function() {
'use strict';

/**
 * Restaurant Module that includes the public module as a dependency
 */

angular.module('restaurant', ['public'])
.config(config)

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {
  // If the user goes to a path that doesn't exist, redirect to root
  $urlRouterProvider.otherwise('/');
}

}());
