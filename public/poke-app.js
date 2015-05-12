(function (angular, undefined) {
	'use strict'

	angular.module('pokeApp', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/index')
		$stateProvider.state('home', {
			resolve: {
				getPokemons: function($http){
		           var url = 'http://pokeapi.co/';
		           
		           return {
		           		// GET rattata 
			           	rattata: function () {
			           		return $http({
			           			method: 'GET', 
			           			url: url + 'api/v1/pokemon/19/'
			           		})			           						        
			           	},

			           	// GET charmander
			           	charmander: function () {
			           		return $http({
			           			method: 'GET', 
			           			url: url + 'api/v1/pokemon/4/'
			           		})			           						        
			           	},

			           	// GET wartortle
			           	wartortle: function () {
			           		return $http({
			           			method: 'GET', 
			           			url: url + 'api/v1/pokemon/8/'
			           		})			           						        
			           	},
		           }			        
		        }	
			},
			controller: function ($scope, getPokemons) {
				getPokemons.rattata().then(function (data) {
					console.log(data)
					$scope.rattatas = data;						
				}, function (error) {
					console.log(error)
				});	

				getPokemons.charmander().then(function (data) {
					console.log(data)
					$scope.charmanders = data;						
				}, function (error) {
					console.log(error)
				});	

				getPokemons.wartortle().then(function (data) {
					console.log(data)
					$scope.wartortles = data;						
				}, function (error) {
					console.log(error)
				});						
			},			
			url: '/index',
			templateUrl: '/views/poke.tpl.html'	
		})
	})	

})(angular);