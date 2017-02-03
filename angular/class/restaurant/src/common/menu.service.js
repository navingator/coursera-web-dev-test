(function() {
'use strict';

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'API_PATH'];
function MenuService ($http, API_PATH) {
  var service = this;

  service.getCategories = function () {
    return $http.get(API_PATH + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }
    return $http.get(API_PATH + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
}

}());
