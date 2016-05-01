(function() {
	'use strict';

	angular
		.module('pokeApp')
		.config(ConfigRoutes);    

  	ConfigRoutes.$inject = ['$stateProvider','$urlRouterProvider', '$locationProvider'];  		

	function ConfigRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.tpl.html',							
				controller: 'HomeController',
				controllerAs: 'vm'
			})
			.state('pokemon', {
				url: '/pokemon/:id',
				templateUrl: 'templates/pokemon.tpl.html',
				controller: 'PokemonController',
				controllerAs: 'vm'
			});

		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode({
		  	enabled: true,
		  	requireBase: false
		});	
	}		

})();