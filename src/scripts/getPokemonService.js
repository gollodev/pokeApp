(function() {
	'use strict';

	angular
		.module('pokeApp')
		.factory('getPokemonService', getPokemonService);

	getPokemonService.$inject = ['$http', '$q', 'POKEMON_DATA', 'POKEMON_DETAIL'];

	function getPokemonService($http, $q, POKEMON_DATA, POKEMON_DETAIL) {
		
		return {			
			getAllPokemon: getAllPokemon,
			getPokemon: getPokemon
		}		

		function getAllPokemon() {
			var deferred = $q.defer();					

			$http
				.get(POKEMON_DATA)
				.then(function(res) {					
					if (res.status === 200) {
						deferred.resolve(res.data);												
					}					
				})
				.catch(function(err) {
					deferred.reject(err);					
				}) 

			return deferred.promise;
		}

		function getPokemon(id) {
			var deferred = $q.defer();

			 $http
			 	.get(POKEMON_DETAIL + id + '.json')
				.then(function(res) {					
					if (res.status === 200) {
						deferred.resolve(res.data);																	
					}					
				})
				.catch(function(err) {
					deferred.reject(err);					
				})

			return deferred.promise;
		}		
	}
})();