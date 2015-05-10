(function (angular, undefined) {
	'use strict';

	angular.module('pokeApp')

	.controller('pokeController', ['pokeFactory', '$scope', pokeController]);

	function pokeController (pokeFactory, $scope) {

		$scope.damePokemones = function () {
			pokeFactory.getPokedex()
			.then(function (data) {
				console.log(data);
				$scope.pokemones = data;
			}, function (error) {
				console.log(error);
			});
		}
	};
})(angular);