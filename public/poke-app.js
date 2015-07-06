(function() {
	'use strict';
	
	angular.module('pokeApp', ['ui.router', 'ngAnimate', 'ngMaterial'])
	.config(ConfigFn);

	ConfigFn.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider'];	
	function ConfigFn ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider.state('home', {
			resolve: {
				getPokemons: 'PokeFactory'	
			},
			controller: 'PokeController',						
			url: '/index',
			templateUrl: '/views/poke.tpl.html'				
		});
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

		$mdThemingProvider.theme('default').primaryPalette('red');
	}
})();
