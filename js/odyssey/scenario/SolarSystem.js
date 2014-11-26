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
			title : 'सौर मंडल',
			commonBodies : [
				'sun',
				'mercury',
				'venus',
				'earth',
				// 'moon',
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
			help : "ये एनवायरनमेंट सौर मंडल की सारी ग्रहों को दिखाता है।"
		};

		return cnf;
		
	}
);