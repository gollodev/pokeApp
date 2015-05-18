(function (angular, undefined) {
	'use strict'
	
	angular.module('pokeApp', ['ui.router', 'ngAnimate'])
	.config(ConfigFn)
	ConfigFn.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	
	function ConfigFn ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/index')		
		$stateProvider.state('home', {
			resolve: {
				getPokemons: 'PokeFactory'	
			},
			controller: 'PokeController',						
			url: '/index',
			templateUrl: '/views/poke.tpl.html'				
		})		
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
	}
})(angular);