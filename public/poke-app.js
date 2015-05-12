(function (angular, undefined) {
	'use strict'

	angular.module('pokeApp', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index')
		$stateProvider.state('home', {
			resolve: {
				getPokemons: 'pokeFactory'	
			},
			controller: 'pokeController',						
			url: '/index',
			templateUrl: '/views/poke.tpl.html'	
		})
	})	
})(angular);