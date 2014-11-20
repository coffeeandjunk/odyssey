

define(
	[
		'odyssey/NameSpace',
		'odyssey/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {
		
		var system =  {
			name : 'EarthMoon',
			title : 'Lunar Phases',
			commonBodies : ['earth', 'moon'],
			secondsPerTick : {min: 3600/2, max: 3600 * 5, initial:3600},
						defaultGuiSettings : { 
				planetScale : 100
			},
			help : "Only the Earth and its Moon to study the Phases of Moon."
		};

		return system;
		
	}
);