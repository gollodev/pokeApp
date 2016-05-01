(function() {
	'use strict';

	angular
		.module('pokeApp')
		.controller('PokemonController', PokemonController);

	PokemonController.$inject = ['$stateParams', 'getPokemonService', '$location'];

	function PokemonController($stateParams, getPokemonService, $location) {
		var vm = this;
		vm.isPokemon = true;		
		var pokemonId = $stateParams.id;

		getPokemonService
			.getPokemon(pokemonId)
			.then(function (pokemon) {				
				vm.pokemon = pokemon;
			})
			.catch(function (err) {
				console.error(err);
			})

		vm.toHome = function () {
			$location.path('/');
		}
	}
})();