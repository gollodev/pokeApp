(function (angular, undefined) {
	'user strict';

	angular.module('pokeApp')
	.factory('pokeFactory', ['pokedex', '$http', pokeFactory]);

	function pokeFactory (rattata, $http) {
		var _getPokedex = function () {
			return $http({
				method: 'get',
				url: rattata
			})
		}
		return {
			getPokedex: _getPokedex
		}
	};
})(angular);