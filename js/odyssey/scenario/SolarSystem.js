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
			name : 'SolarSystem',
			title : 'Solar System',
			commonBodies : [
				'sun',
				'mercury',
				'venus',
				'earth',
				//'moon',
				'mars',
				'jupiter',
				'saturn',
				'uranus',
				'neptune',
				'pluto'
				// ,'halley'
			],
			secondsPerTick : {min: 3600*5, max: 3600 * 25, initial:3600 * 10},
			defaultGuiSettings : { 
				planetScale : 1,
				usePhysics: true
			},
			help : "This environment shows all the planets of the Solar System."
		};

		return cnf;
		
	}
);