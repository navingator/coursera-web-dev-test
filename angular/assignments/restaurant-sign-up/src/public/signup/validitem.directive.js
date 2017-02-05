(function() {
'use strict';

angular.module('public')
.directive('validItem', ValidItem);

ValidItem.$inject = ['MenuService'];
function ValidItem (MenuService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      if (ctrl) {
        ctrl.$asyncValidators.menuValidator = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || MenuService.getMenuItem(modelValue);
        }
      }
    }
  }
}

}());
