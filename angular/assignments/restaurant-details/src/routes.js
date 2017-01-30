(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories Page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'MainCategoriesController as catctrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/main-items.template.html',
    controller: 'MainItemsController as itemsctrl',
    resolve: {
      items: ['MenuDataService', '$stateParams',
        function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
    }
  });
}

}());
