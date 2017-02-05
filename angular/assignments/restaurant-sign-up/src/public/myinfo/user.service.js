(function() {
'use strict';

angular.module('public')
.service('UserService', UserService);

function UserService() {
  var service = this;

  service.storeUser = function (user) {
    service.user = user;
  }

  service.getUser = function () {
    return service.user;
  }
}

}());
