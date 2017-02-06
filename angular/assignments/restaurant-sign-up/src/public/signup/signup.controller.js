(function() {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService', '$q'];
function SignUpController(MenuService, UserService, $q) {
  var $ctrl = this;
  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.favoriteShortName).then(function (response) {
      if ($ctrl.favoriteShortName === response.short_name) {
        console.log(response);
        $ctrl.user.favoriteItem = response;
        UserService.storeUser($ctrl.user);
        $ctrl.saved = true;
      } else {
        $ctrl.saved = false;
      }
    });
  };

}

}());
