(function() {
	'user strict';

	/**
	* Define Module pokeApp
	*/
	angular.module('pokeApp')

	/**
	* Define Service PokeFactoryFn
	*/
	.factory('PokeFactory', PokeFactoryFn);

	/**
	* [$inject dependencies safe for minified]
 	* @type {Array}
	*/
	PokeFactoryFn.$inject = ['$http', 'API']; 

	/**
	 * [PokeFactoryFn function a consuming API]
	 * @param {[type]} $http [http service]
	 * @param {[type]} API   [api rest pokemon]
	 */
	function PokeFactoryFn ($http, API) {
		return {
		    // GET rattata 
			rattata: function () {
			    return $http({
			        method: 'GET', 
			        url: API.rattata
			    });			           						        
			},

			// GET charmander
			charmander: function () {
			    return $http({
				    method: 'GET', 
				    url: API.charmander
			    });			           						        
			},

			// GET wartortle
			wartortle: function () {
				return $http({
				  	method: 'GET', 
				  	url: API.wartortle
				});			           						        
			},

			// GET blastoise
			blastoise: function () {
				return $http({
					method: 'GET', 
					url: API.blastoise
				});			           						        
			},

			// GET caterpie
			caterpie: function () {
				return $http({
					method: 'GET', 
					url: API.caterpie
				});			           						        
			},

			// GET metapod
			metapod: function () {
				return $http({
					method: 'GET', 
					url: API.metapod
				});			           						        
			},

			// GET butterfree
			butterfree: function () {
				return $http({
					method: 'GET', 
					url: API.butterfree
				});			           						        
			},

			// GET spearow
			spearow: function () {
				return $http({
					method: 'GET', 
					url: API.spearow
				});			           						        
			},

			// GET kakuna
			kakuna: function () {
				return $http({
					method: 'GET', 
					url: API.kakuna
				});			           						        
			},

			// GET beedrill
			beedrill: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.beedrill
				});			           						        
			},

			// GET pidgey
			pidgey: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.pidgey
				});			           						        
			},	

			// GET raticate
			raticate: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.raticate
				});			           						        
			},	

			// GET fearow
			fearow: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.fearow
				});			           						        
			},	

			// GET pikachu
			pikachu: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.pikachu
				});			           						        
			},	

			// GET arbok
			arbok: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.arbok
				});			           						        
			},	

			// GET ekans
			ekans: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.ekans
				});			           						        
			},	

			// GET nidorina
			nidorina: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.nidorina
				});			           						        
			},

			// GET sandshrew
			sandshrew: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.sandshrew
				});			           						        
			},	

			// GET nidoranm
			nidoranm: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.nidoranm
				});			           						        
			},	

			// GET nidoranf
			nidoranf: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.nidoranf
				});		           						        
			},	

			// GET clefabe
			clefabe: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.clefabe
				});			           						        
			},	

			// GET jigglypuff
			jigglypuff: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.jigglypuff
				});			           						        
			},	

			// GET vulpix
			vulpix: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.vulpix
				});			           						        
			},	

			// GET ninetales
			ninetales: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.ninetales
				});			           						        
			},	

			// GET zubat
			zubat: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.zubat
				});			           						        
			},	

			// GET venonat
			venonat: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.venonat
				});			           						        
			},	

			// GET meowth
			meowth: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.meowth
				});			           						        
			},	

			// GET oddish
			oddish: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.oddish
				});			           						        
			},	

			// GET gloom
			gloom: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.gloom
				});			           						        
			},	

			// GET vileplume
			vileplume: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.vileplume
				});			           						        
			},	

			// GET paras
			paras: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.paras
				});			           						        
			},

			// GET parasect
			parasect: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.parasect
				});			           						        
			},		

			// GET venomoth
			venomoth: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.venomoth
				});			           						        
			},		

			// GET diglett
			diglett: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.diglett
				});			           						        
			},		

			// GET dugtrio
			dugtrio: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.dugtrio
				});			           						        
			},		

			// GET persian
			persian: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.persian
				});			           						        
			},		

			// GET psyduck
			psyduck: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.psyduck
				});			           						        
			},		

			// GET mankey
			mankey: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.mankey
				});			           						        
			},		

			// GET growlithe
			growlithe: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.growlithe
				});			           						        
			},		

			// GET arcanine
			arcanine: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.arcanine
				});			           						        
			},		

			// GET poliwag
			poliwag: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.poliwag
				});			           						        
			},		

			// GET abra
			abra: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.abra
				});			           						        
			},		

			// GET machop
			machop: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.machop
				});			           						        
			},		

			// GET bellsprout
			bellsprout: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.bellsprout
				});			           						        
			},		

			// GET ivysaur
			ivysaur: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.ivysaur
				});			           						        
			},		

			// GET squirtle
			squirtle: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.squirtle
				});			           						        
			},		

			// GET weedle
			weedle: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.weedle
				});			           						        
			},		

			// GET graveler
			graveler: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.graveler
				});			           						        
			},

			// GET geodude
			geodude: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.geodude
				});			           						        
			},	

			// GET ponyta
			ponyta: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.ponyta
				});			           						        
			},	

			// GET rapidash
			rapidash: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.rapidash
				});			           						        
			},		

			// GET slowbro
			slowbro: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.slowbro
				});			           						        
			},	

			// GET grimer
			grimer: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.grimer
				});			           						        
			},	

			// GET farfetchd
			farfetchd: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.farfetchd
				});			           						        
			},	

			// GET magnemite
			magnemite: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.magnemite
				});			           						        
			},	

			// GET doduo
			doduo: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.doduo
				});			           						        
			},	

			// GET seel
			seel: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.seel
				});			           						        
			},	

			// GET dodrio
			dodrio: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.dodrio
				});			           						        
			},	

			// GET dewgong
			dewgong: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.dewgong
				});			           						        
			},	

			// GET gastly
			gastly: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.gastly
				});			           						        
			},	

			// GET cloyster
			cloyster: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.cloyster
				});			           						        
			},

			// GET muk
			muk: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.muk
				});			           						        
			},

			// GET krabby
			krabby: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.krabby
				});			           						        
			},

			// GET haunter
			haunter: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.haunter
				});			           						        
			},

			// GET gengar
			gengar: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.gengar
				});			           						        
			},

			// GET onix
			onix: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.onix
				});			           						        
			},

			// GET drowzee
			drowzee: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.drowzee
				});			           						        
			},

			// GET hypno
			hypno: function () {
				return $http({
				  	method: 'GET', 
				   	url: API.hypno
				});			           						        
			}							           
		};
	}
})();

