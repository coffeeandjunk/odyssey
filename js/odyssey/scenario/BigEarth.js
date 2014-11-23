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
			name : 'BigEarth',
			title : 'भारी पृथ्वी',
			commonBodies : [
				'sun',
				'mercury',
				'venus',
				'earth',
				'mars',
				'jupiter',
				'saturn',
				'uranus',
				'neptune',
				'pluto'
			],
			
			bodies:{
				sun : {
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				mercury:{
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				venus:{
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				earth:{
					mass: 5.9736e24 * 10000,
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				mars:{
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				jupiter:{
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				saturn:{
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				uranus:{
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				neptune:{
					forceTrace: true,
					traceRelativeTo : 'universe'
				},
				pluto:{
					forceTrace: true,
					traceRelativeTo : 'universe'
				}
			},/**/
			secondsPerTick : {min: 3600, max: 3600 * 15, initial:3600 * 5},
			calculaionsPerTick : 100,
			usePhysics: true,
			calculateAll : true,
			useBarycenter : true,
			defaultGuiSettings : { 
				planetScale : 100
			},
			help : "इस एनवायरनमेंट में अगर अचानक पृथ्वी के द्रव्यमान १०००० गुना बढ़ जाती है तो क्या होगा पता चलता है।"
		};

		return cnf;
		
	}
);