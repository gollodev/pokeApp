(function() {
	'use strict';

	angular.element(document).ready(function() {
	    angular.bootstrap(document.body, ['pokeApp']);
	});

  	angular.module('pokeApp', ['ui.router']);  		
  
})();