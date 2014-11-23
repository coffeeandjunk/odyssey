

define(
	[
		'odyssey/NameSpace',
		'odyssey/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {
		
		var system =  {
			name : 'EarthSunMoon',
			title : 'The Sun, Moon and the Earth',
			commonBodies : ['sun','earth', 'moon'],
			// secondsPerTick : {min: 3600/2, max: 3600 * 5, initial:3600},
			secondsPerTick : {min: 1, max: 3600, initial:60},
						defaultGuiSettings : { 
				planetScale : 1
			},
			help : "The Sun, Earth and its moon."
		};

		return system;
		
	}
);