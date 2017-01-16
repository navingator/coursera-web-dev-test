(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;
	toBuy.items = ShoppingListCheckOffService.getToBuyItems();
	
	toBuy.buyItem = function (itemIndex) {
		ShoppingListCheckOffService.buyItem(itemIndex);
	};
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var bought = this;
	bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
	var service=this;
	
	var toBuyList = [
		{
			name: "Milk",
			quantity: "2"
		},
		{
			name: "Donuts",
			quantity: "200"
		},
		{
			name: "Cookies",
			quantity: "300"
		},
		{
			name: "Chocolate",
			quantity: "5"
		},
		{
			name: "Fruit",
			quantity: "1"
		}
	];
	
	var boughtList = [];
	
	service.getToBuyItems = function () {
		return toBuyList;
	}
	
	service.getBoughtItems = function () {
		return boughtList;
	}
	
	service.buyItem = function (itemIndex) {
		// get item that was bought
		var item = toBuyList[itemIndex];
		
		// remove from to buy and add to bought
		toBuyList.splice(itemIndex,1);
		boughtList.push(item);
	}
}

})();