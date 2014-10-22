/** 

mass : kg
dist : km
apeed : km/s
radius: km

*/

define(
	[
		'odyssey/NameSpace',
		'odyssey/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {

		var cnf = {
			name : 'EarthSunMoon',
			title : 'The Sun, Earth and its Moon',
			commonBodies : [
				'earth',
				'moon',
				'sun'
			],
			bodies : {
				moon : {
					calculateFromElements : true
				}
			},
			secondsPerTick : {min: 3600, max: 3600 * 15, initial:3600 * 5},//3600 * 24 * 2,
			defaultGuiSettings : { 
				planetScale : 10
			},
			help:"Includes only the Sun, the Earth and its Moon"
		};

		return cnf;
		
	}
);