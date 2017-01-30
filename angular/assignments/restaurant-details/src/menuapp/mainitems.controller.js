(function() {
'use strict';

angular.module('MenuApp')
.controller('MainItemsController', MainItemsController);

MainItemsController.$inject = ['items']
function MainItemsController (items) {
  var itemsctrl = this;
  itemsctrl.items = items.menu_items;
  itemsctrl.category = items.category;
}

}());
