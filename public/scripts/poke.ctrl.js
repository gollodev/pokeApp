(function (angular, undefined) {
	'use strict';

	angular.module('pokeApp')

	.controller('pokeController', ['$scope', 'getPokemons', pokeController]);

	function pokeController ($scope, getPokemons) {

		getPokemons.then(function (data) {
			console.log(data)
		}, function (error) {
			console.log(error)
		})
		
	};
})(angular);