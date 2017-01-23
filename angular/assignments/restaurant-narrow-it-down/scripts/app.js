(function () {
	'use strict';
	
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);
	
	function FoundItemsDirective () {
		var ddo = {
			scope: {
				foundItems: '<',
				onRemove: '&',
			},
			restrict: 'E',
			templateUrl: 'templates/narrowed-list.html',
		};
		return ddo;
	}
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController (MenuSearchService) {
		var narrow = this;

		narrow.searchTerm = "";
		narrow.items = [];
		
		narrow.NarrowItDown = function () {
			narrow.items = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
		}
		
		narrow.removeItem = function (index) {
			MenuSearchService.removeItem(index);
		};
	}
	
	MenuSearchService.$inject = ['$http']
	function MenuSearchService ($http) {
		var searchServ = this;
		searchServ.items = [];
		
		searchServ.removeItem = function (index) {
			searchServ.items.splice(index, 1);
		}
		
		searchServ.getMatchedMenuItems = function (searchTerm) {
			
			searchServ.items = [];
			
			if (searchTerm.length > 0) {
				$http({
					method: 'GET',
					url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
				})
				.then (function success(response) {
					
					searchTerm = searchTerm.toLowerCase();
					var menuItems = response.data.menu_items;
					searchMenuItems(menuItems, searchTerm); // adds items to searchServ.items
					
				}, function error(response) {
					console.log(response); // log the response upon error
					searchServ.items.error = 'Error retrieving items. Check your internet connection.';
				});
			} else {
				searchServ.items.error='Nothing Found';
			}
			return searchServ.items;
		};
		
		function searchMenuItems (menuItems, searchTerm) {
			for (var i = 0; i < menuItems.length; i++) {
				var rawItem = menuItems[i];
				var description = rawItem.description;
				if (description.toLowerCase().indexOf(searchTerm) !== -1) {
					var item = {
						name: rawItem.name,
						shortName: rawItem.short_name,
						description: description
					};
					searchServ.items.push(item);
				}
			}
			
			if (searchServ.items.length === 0) {
				searchServ.items.error = 'Nothing Found';
			}
		}
	}
	
})();