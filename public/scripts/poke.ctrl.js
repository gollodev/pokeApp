(function () {
	'use strict';

	/**
	* Define Module pokeApp
	*/
	angular.module('pokeApp')

	/**
	* Define Controller PokeController
	*/
	.controller('PokeController', PokeControllerFn);

	/**
	* [$inject dependencies safe for minified]
 	* @type {Array}
	*/
	PokeControllerFn.$inject = ['$scope', 'getPokemons'];

	/**
	* [PokeControllerFn function get pokemons from PokeFactory]
	* @param {[type]} $scope      [scope model]
	* @param {[type]} getPokemons [dependency service]
	*/
	function PokeControllerFn ($scope, getPokemons) {			

		getPokemons.rattata().then(function (data) {
			console.log(data);
			$scope.rattatas = data;
		}, function (error) {
			console.log(error);
		});	

		getPokemons.charmander().then(function (data) {
			console.log(data);
			$scope.charmanders = data;
			}, function (error) {
			console.log(error);
		});	

		getPokemons.wartortle().then(function (data) {
			console.log(data);
			$scope.wartortles = data;								
		}, function (error) {
			console.log(error);
		});	

		getPokemons.blastoise().then(function (data) {
			console.log(data);
			$scope.blastoides = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.caterpie().then(function (data) {
			console.log(data);
			$scope.caterpies = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.metapod().then(function (data) {
			console.log(data);
			$scope.metapods = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.butterfree().then(function (data) {
			console.log(data);
			$scope.butterfrees = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.spearow().then(function (data) {
			console.log(data);
			$scope.spearows = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.kakuna().then(function (data) {
			console.log(data);
			$scope.kakunas = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.beedrill().then(function (data) {
			console.log(data);
			$scope.beedrills = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.pidgey().then(function (data) {
			console.log(data);
			$scope.pidgeys = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.raticate().then(function (data) {
			console.log(data);
			$scope.raticates = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.fearow().then(function (data) {
			console.log(data);
			$scope.fearows = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.pikachu().then(function (data) {
			console.log(data);
			$scope.pikachus = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.arbok().then(function (data) {
			console.log(data);
			$scope.arboks = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.ekans().then(function (data) {
			console.log(data);
			$scope.ekansas = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.nidorina().then(function (data) {
			console.log(data);
			$scope.nidorinas = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.sandshrew().then(function (data) {
			console.log(data);
			$scope.sandshrews = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.nidoranm().then(function (data) {
			console.log(data);
			$scope.nidoranms = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.nidoranf().then(function (data) {
			console.log(data);
			$scope.nidoranfs = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.clefabe().then(function (data) {
			console.log(data);
			$scope.clefabes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.jigglypuff().then(function (data) {
			console.log(data);
			$scope.jigglypuffs = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.vulpix().then(function (data) {
			console.log(data);
			$scope.vulpixes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.ninetales().then(function (data) {
			console.log(data);
			$scope.ninetaleses = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.zubat().then(function (data) {
			console.log(data);
			$scope.zubats = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.venonat().then(function (data) {
			console.log(data);
			$scope.venonats = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.meowth().then(function (data) {
			console.log(data);
			$scope.meowths = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.oddish().then(function (data) {
			console.log(data);
			$scope.oddishses = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.gloom().then(function (data) {
			console.log(data);
			$scope.gloomses = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.vileplume().then(function (data) {
			console.log(data);
			$scope.vileplumes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.paras().then(function (data) {
			console.log(data);
			$scope.parases = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.parasect().then(function (data) {
			console.log(data);
			$scope.parasectes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.venomoth().then(function (data) {
			console.log(data);
			$scope.venomothes = data;						
		}, function (error) {
			console.log(error);
		});

		getPokemons.diglett().then(function (data) {
			console.log(data);
			$scope.diglettes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.dugtrio().then(function (data) {
			console.log(data);
			$scope.dugtrios = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.persian().then(function (data) {
			console.log(data);
			$scope.persians = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.psyduck().then(function (data) {
			console.log(data);
			$scope.psyducks = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.mankey().then(function (data) {
			console.log(data);
			$scope.mankeys = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.growlithe().then(function (data) {
			console.log(data);
			$scope.growlithes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.arcanine().then(function (data) {
			console.log(data);
			$scope.arcanines = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.poliwag().then(function (data) {
			console.log(data);
			$scope.poliwags = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.abra().then(function (data) {
			console.log(data);
			$scope.abras = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.machop().then(function (data) {
			console.log(data);
			$scope.machops = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.bellsprout().then(function (data) {
			console.log(data);
			$scope.bellsprouts = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.ivysaur().then(function (data) {
			console.log(data);
			$scope.ivysaurs = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.squirtle().then(function (data) {
			console.log(data);
			$scope.squirtles = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.weedle().then(function (data) {
			console.log(data);
			$scope.weedles = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.graveler().then(function (data) {
			console.log(data);
			$scope.gravelers = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.geodude().then(function (data) {
			console.log(data);
			$scope.geodudes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.ponyta().then(function (data) {
			console.log(data);
			$scope.ponytas = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.rapidash().then(function (data) {
			console.log(data);
			$scope.rapidashes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.slowbro().then(function (data) {
			console.log(data);
			$scope.slowbros = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.grimer().then(function (data) {
			console.log(data);
			$scope.grimers = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.farfetchd().then(function (data) {
			console.log(data);
			$scope.farfetchdes = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.magnemite().then(function (data) {
			console.log(data);
			$scope.magnemite = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.doduo().then(function (data) {
			console.log(data);
			$scope.doduos = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.seel().then(function (data) {
			console.log(data);
			$scope.seels = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.dodrio().then(function (data) {
			console.log(data);
			$scope.dodrios = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.dewgong().then(function (data) {
			console.log(data);
			$scope.dewgongs = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.gastly().then(function (data) {
			console.log(data);
			$scope.gastlys = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.cloyster().then(function (data) {
			console.log(data);
			$scope.cloysters = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.muk().then(function (data) {
			console.log(data);
			$scope.muks = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.krabby().then(function (data) {
			console.log(data);
			$scope.krabbys = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.haunter().then(function (data) {
			console.log(data);
			$scope.haunters = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.gengar().then(function (data) {
			console.log(data);
			$scope.gengars = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.onix().then(function (data) {
			console.log(data);
			$scope.onixs = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.drowzee().then(function (data) {
			console.log(data);
			$scope.drowzees = data;						
		}, function (error) {
			console.log(error);
		});	

		getPokemons.hypno().then(function (data) {
			console.log(data);
			$scope.hypnos = data;						
		}, function (error) {
			console.log(error);
		});			
	}
		
})();