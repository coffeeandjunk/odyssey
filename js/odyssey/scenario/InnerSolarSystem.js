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
			name : 'InnerSolarSystem',
			title : 'आंतरिक सौर प्रणाली',
			commonBodies : [
				'sun',
				'mercury',
				'venus',
				'earth',
				'moon',
				'mars'
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
			help:"इसमें बुध से मंगल ग्रह, तथा पृथ्वी का चंद्रमा शामिल है।"
		};

		return cnf;
		
	}
);