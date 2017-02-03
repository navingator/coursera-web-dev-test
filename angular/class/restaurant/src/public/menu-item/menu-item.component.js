(function() {
'use strict';

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
});

MenuItemController.$inject = ['API_PATH'];
function MenuItemController(API_PATH) {
  var $ctrl = this;
  $ctrl.basePath = API_PATH;
}

}());
