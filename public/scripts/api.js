(function (angular, undefined) {
	'user strict';	
	
	var url = 'http://pokeapi.co/';
	angular.module('pokeApp')	
	.constant('API', 
		{
		    rattata: 	url + 'api/v1/pokemon/19/'
		  , charmander: url + 'api/v1/pokemon/4/'
		  , wartortle: 	url + 'api/v1/pokemon/8/'
		  , blastoise: 	url + 'api/v1/pokemon/9/'
		  , caterpie: 	url + 'api/v1/pokemon/10/'
		  , metapod: 	url + 'api/v1/pokemon/11/'
		  , butterfree: url + 'api/v1/pokemon/12/'
		  , spearow: 	url + 'api/v1/pokemon/21/'
		  , kakuna: 	url + 'api/v1/pokemon/14/'
		  , beedrill: 	url + 'api/v1/pokemon/15/'
		  , pidgey: 	url + 'api/v1/pokemon/16/'		  	
		  , raticate: 	url + 'api/v1/pokemon/20/'
		  , fearow: 	url + 'api/v1/pokemon/22/'	
		  , pikachu: 	url + 'api/v1/pokemon/25/'		  	
		  , arbok: 	url + 'api/v1/pokemon/24/'	
		  , ekans: 	url + 'api/v1/pokemon/23/'	
		  , nidorina: 	url + 'api/v1/pokemon/30/'	
		  , sandshrew: 	url + 'api/v1/pokemon/27/'	
		  , nidoranm: 	url + 'api/v1/pokemon/32/'
		  , nidoranf: 	url + 'api/v1/pokemon/29/'			  	
		  , clefabe: 	url + 'api/v1/pokemon/36/'	
		  , jigglypuff: url + 'api/v1/pokemon/39/'
		  , vulpix: 	url + 'api/v1/pokemon/37/'	
		  , ninetales: 	url + 'api/v1/pokemon/38/'		
		  , zubat: 	url + 'api/v1/pokemon/41/'
		  , venonat: 	url + 'api/v1/pokemon/48/'
		  , meowth: 	url + 'api/v1/pokemon/52/'
		  , oddish: 	url + 'api/v1/pokemon/43/'
		  , gloom: 	url + 'api/v1/pokemon/44/'	
		  , vileplume: 	url + 'api/v1/pokemon/45/'	
		  , paras: 	url + 'api/v1/pokemon/46/'	
		  , parasect: 	url + 'api/v1/pokemon/47/'	
		  , venomoth: 	url + 'api/v1/pokemon/49/'
		  , diglett: 	url + 'api/v1/pokemon/50/'	
		  , dugtrio: 	url + 'api/v1/pokemon/51/'
		  , persian: 	url + 'api/v1/pokemon/53/'	
		  , psyduck: 	url + 'api/v1/pokemon/54/'			  	
		  , mankey: 	url + 'api/v1/pokemon/56/'	
		  , growlithe: 	url + 'api/v1/pokemon/58/'
		  , arcanine: 	url + 'api/v1/pokemon/59/'	
		  , poliwag: 	url + 'api/v1/pokemon/60/'		  	
		  , abra: 	url + 'api/v1/pokemon/63/'			 	
		  , machop: 	url + 'api/v1/pokemon/66/'			  
		  , bellsprout: url + 'api/v1/pokemon/69/'	
		  , ivysaur: 	url + 'api/v1/pokemon/2/'		  	
		  , squirtle: 	url + 'api/v1/pokemon/7/'	
		  , weedle: 	url + 'api/v1/pokemon/13/'
		  , graveler: 	url + 'api/v1/pokemon/75/'	
		  , geodude: 	url + 'api/v1/pokemon/74/'		 
		  , ponyta: 	url + 'api/v1/pokemon/77/'	
		  , rapidash: 	url + 'api/v1/pokemon/78/'	
		  , slowbro: 	url + 'api/v1/pokemon/80/'	
		  , grimer: 	url + 'api/v1/pokemon/88/'
		  , farfetchd: 	url + 'api/v1/pokemon/83/'
		  , magnemite: 	url + 'api/v1/pokemon/81/'			  	
		  , doduo: 	url + 'api/v1/pokemon/84/'	
		  , seel: 	url + 'api/v1/pokemon/86/'
		  , dodrio: 	url + 'api/v1/pokemon/85/'	
		  , dewgong: 	url + 'api/v1/pokemon/87/'	
		  , gastly: 	url + 'api/v1/pokemon/92/'	
		  , cloyster: 	url + 'api/v1/pokemon/91/'	
		  , muk: 	url + 'api/v1/pokemon/89/'
		  , krabby: 	url + 'api/v1/pokemon/98/'	
		  , haunter: 	url + 'api/v1/pokemon/93/'	
		  , gengar: 	url + 'api/v1/pokemon/94/'	
		  , onix: 	url + 'api/v1/pokemon/95/'
		  , drowzee: 	url + 'api/v1/pokemon/96/'	
		  , hypno: 	url + 'api/v1/pokemon/97/'	
		});
})(angular);
