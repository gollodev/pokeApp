(function (angular, undefined) {
	'user strict';	
	
	var url = 'http://pokeapi.co/';
	angular.module('pokeApp')
	
	// rattata
	.constant('rattata', url + 'api/v1/pokemon/19/')

	//charmander
	.constant('charmander', url + 'api/v1/pokemon/4/')

	// charmeleon
	.constant('charmeleon', url + 'api/v1/pokemon/5/')

	// wartortle
	.constant('wartortle', url + 'api/v1/pokemon/8/')

	// blastoise
	.constant('blastoise', url + 'api/v1/pokemon/9/')

	// caterpie
	.constant('caterpie', url + 'api/v1/pokemon/10/')

	// metapod
	.constant('metapod', url + 'api/v1/pokemon/11/')

	// butterfree
	.constant('butterfree', url + 'api/v1/pokemon/12/')

	// spearow
	.constant('spearow', url + 'api/v1/pokemon/21/')

	// kakuna
	.constant('kakuna', url + 'api/v1/pokemon/14/')

	// beedrill
	.constant('beedrill', url + 'api/v1/pokemon/15/')

	// pidgey
	.constant('pidgey', url + 'api/v1/pokemon/16/')

	// pidgeotto
	.constant('pidgeotto', url + 'api/v1/pokemon/17/')

	// pidgeot
	.constant('pidgeot', url + 'api/v1/pokemon/18/')

	// raticate
	.constant('raticate', url + 'api/v1/pokemon/20/')

	// fearow
	.constant('fearow', url + 'api/v1/pokemon/22/')

	// pikachu
	.constant('pikachu', url + 'api/v1/pokemon/25/')

	// raichu
	.constant('raichu', url + 'api/v1/pokemon/26/')

	// arbok
	.constant('arbok', url + 'api/v1/pokemon/24/')

	// ekans
	.constant('ekans', url + 'api/v1/pokemon/23/')

	// nidorina
	.constant('nidorina', url + 'api/v1/pokemon/30/')

	// sandshrew
	.constant('sandshrew', url + 'api/v1/pokemon/27/')

	// nidoran-m
	.constant('nidoran-m', url + 'api/v1/pokemon/32/')

	// nidoran-f
	.constant('nidoran-f', url + 'api/v1/pokemon/29/')

	// nidoqueen
	.constant('nidoqueen', url + 'api/v1/pokemon/31/')

	// nidorino
	.constant('nidorino', url + 'api/v1/pokemon/33/')

	// nidoking
	.constant('nidoking', url + 'api/v1/pokemon/34/')

	// clefable
	.constant('clefable', url + 'api/v1/pokemon/36/')

	// jigglypuff
	.constant('jigglypuff', url + 'api/v1/pokemon/39/')

	// vulpix
	.constant('vulpix', url + 'api/v1/pokemon/37/')

	// ninetales
	.constant('ninetales', url + 'api/v1/pokemon/38/')

	// wigglytuff
	.constant('wigglytuff', url + 'api/v1/pokemon/40/')

	// zubat
	.constant('zubat', url + 'api/v1/pokemon/41/')

	// venonat
	.constant('venonat', url + 'api/v1/pokemon/48/')

	// meowth
	.constant('meowth', url + 'api/v1/pokemon/52/')

	// oddish
	.constant('oddish', url + 'api/v1/pokemon/43/')

	// gloom
	.constant('gloom', url + 'api/v1/pokemon/44/')

	// vileplume
	.constant('vileplume', url + 'api/v1/pokemon/45/')

	// paras
	.constant('paras', url + 'api/v1/pokemon/46/')

	// parasect
	.constant('parasect', url + 'api/v1/pokemon/47/')

	// venomoth
	.constant('venomoth', url + 'api/v1/pokemon/49/')

	// diglett 	
	.constant('diglett', url + 'api/v1/pokemon/50/')

	// dugtrio
	.constant('dugtrio', url + 'api/v1/pokemon/51/')

	// persian
	.constant('persian', url + 'api/v1/pokemon/53/')

	// psyduck
	.constant('psyduck', url + 'api/v1/pokemon/54/')

	// golduck
	.constant('golduck', url + 'api/v1/pokemon/55/')

	// mankey
	.constant('mankey', url + 'api/v1/pokemon/56/')

	// growlithe
	.constant('growlithe', url + 'api/v1/pokemon/58/')

	// arcanine
	.constant('arcanine', url + 'api/v1/pokemon/59/')

	// poliwag
	.constant('poliwag', url + 'api/v1/pokemon/60/')

	// poliwhirl
	.constant('poliwhirl', url + 'api/v1/pokemon/61/')

	// poliwrath
	.constant('poliwrath', url + 'api/v1/pokemon/62/')

	// abra
	.constant('abra', url + 'api/v1/pokemon/63/')

	// kadabra
	.constant('kadabra', url + 'api/v1/pokemon/64/')

	// machop
	.constant('machop', url + 'api/v1/pokemon/66/')

	// machoke
	.constant('machoke', url + 'api/v1/pokemon/67/')

	// machamp
	.constant('machamp', url + 'api/v1/pokemon/68/')

	// bellsprout
	.constant('bellsprout', url + 'api/v1/pokemon/69/')

	// ivysaur
	.constant('ivysaur', url + 'api/v1/pokemon/2/')

	// venusaur
	.constant('venusaur', url + 'api/v1/pokemon/3/')

	// squirtle
	.constant('squirtle', url + 'api/v1/pokemon/7/')

	// weedle
	.constant('weedle', url + 'api/v1/pokemon/13/')

	// graveler
	.constant('graveler', url + 'api/v1/pokemon/75/')

	// geodude
	.constant('geodude', url + 'api/v1/pokemon/74/')

	// golem
	.constant('golem', url + 'api/v1/pokemon/76/')

	// ponyta
	.constant('ponyta', url + 'api/v1/pokemon/77/')

	// rapidash
	.constant('rapidash', url + 'api/v1/pokemon/78/')

	// slowbro
	.constant('slowbro', url + 'api/v1/pokemon/80/')

	// grimer
	.constant('grimer', url + 'api/v1/pokemon/88/')

	// farfetchd
	.constant('farfetchd', url + 'api/v1/pokemon/83/')

	// magnemite
	.constant('magnemite', url + 'api/v1/pokemon/81/')

	// magneton
	.constant('magneton', url + 'api/v1/pokemon/82/')

	// doduo
	.constant('doduo', url + 'api/v1/pokemon/84/')

	// seel
	.constant('seel', url + 'api/v1/pokemon/86/')

	// dodrio
	.constant('dodrio', url + 'api/v1/pokemon/85/')

	// dewgong
	.constant('dewgong', url + 'api/v1/pokemon/87/')

	// gastly
	.constant('gastly', url + 'api/v1/pokemon/92/')

	// cloyster
	.constant('cloyster', url + 'api/v1/pokemon/91/')

	// muk
	.constant('muk', url + 'api/v1/pokemon/89/')

	// krabby
	.constant('krabby', url + 'api/v1/pokemon/98/')

	// haunter
	.constant('haunter', url + 'api/v1/pokemon/93/')

	// gengar
	.constant('gengar', url + 'api/v1/pokemon/94/')

	// onix
	.constant('onix', url + 'api/v1/pokemon/95/')

	// drowzee
	.constant('drowzee', url + 'api/v1/pokemon/96/')

	// hypno
	.constant('hypno', url + 'api/v1/pokemon/97/')

})(angular);