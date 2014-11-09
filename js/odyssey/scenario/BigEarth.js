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
			title : 'If Earth was 10000X its mass',
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
					// mass: 5.6846e26 * 1000,
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
			useBarycenter : false,
			defaultGuiSettings : { 
				planetScale : 10
			},
			help : "This scenario shows what would happen if, instantaneously at this moment, Earth's mass grew 1000 times larger."
		};

		return cnf;
		
	}
);