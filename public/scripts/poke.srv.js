(function (angular, undefined) {
	'user strict';

	angular.module('pokeApp')
	.factory('pokeFactory', ['pokedex', '$http', pokeFactory]);

	function pokeFactory (pokedex, $http) {
		var _getPokedex = function () {
			return $http({
				method: 'get',
				url: pokedex
			})
		}
		return {
			getPokedex: _getPokedex
		}
	};
})(angular);