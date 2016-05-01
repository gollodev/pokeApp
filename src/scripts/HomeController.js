(function() {
	'use strict';

	angular
		.module('pokeApp')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['getPokemonService'];

	function HomeController(getPokemonService) {
		var vm = this;					
		vm.isHome = true;
		
		getPokemonService
			.getAllPokemon()
			.then(function (pokemons) {
				vm.pokemons = pokemons;						
			})
			.catch(function (err) {
				console.error(err);
			})			
	}
})();