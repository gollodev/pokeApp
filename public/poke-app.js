(function (angular, undefined) {
	'use strict'
	
	angular.module('pokeApp', ['ui.router', 'ngAnimate'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index')		
		$stateProvider.state('home', {
			resolve: {
				getPokemons: 'PokeFactory'	
			},
			controller: 'PokeController',						
			url: '/index',
			templateUrl: '/views/poke.tpl.html'				
		})		
	})	
})(angular);