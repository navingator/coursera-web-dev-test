(function () {
'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['REST_API_BASE',"$http"];
  function MenuDataService(REST_API_BASE, $http) {
    var service = this;
    /*
    Function that returns a promise that results from the $http service
    that grabs the categories from the REST API endpoint
    */
    service.getAllCategories = function () {
      return $http ({
        method: 'GET',
        url: REST_API_BASE + '/categories.json'
      }).then (function (response) {
        return response.data;
      })

      return promise;
    };

    /*
    Function that returns a promise that results from the $http service that
    grabs the items for a specific category from the REST API endpoint
    */
    service.getItemsForCategory = function (categoryShortName) {
      return $http ({
        method: 'GET',
        url: REST_API_BASE + '/menu_items.json',
        params: { category: categoryShortName }
      }).then (function (response) {
        return response.data;
      });
    };
  }
})();
