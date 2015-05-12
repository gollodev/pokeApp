(function (angular, undefined) {
	'use strict';

	angular.module('pokeApp')

	.controller('pokeController', ['$scope', 'getPokemons', pokeController]);

	function pokeController ($scope, getPokemons) {
		getPokemons.rattata().then(function (data) {
			console.log(data)
			$scope.rattatas = data;						
		}, function (error) {
			console.log(error)
		});	

		getPokemons.charmander().then(function (data) {
			console.log(data)
			$scope.charmanders = data;						
		}, function (error) {
			console.log(error)
		});	

		getPokemons.wartortle().then(function (data) {
			console.log(data)
			$scope.wartortles = data;						
		}, function (error) {
			console.log(error)
		});			
	};
})(angular);