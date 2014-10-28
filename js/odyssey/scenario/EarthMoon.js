

define(
	[
		'odyssey/NameSpace',
		'odyssey/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {
		
		var system =  {
			name : 'EarthMoon',
			title : 'The Moon and the Earth',
			commonBodies : ['earth', 'moon'],
			secondsPerTick : {min: 3600/2, max: 3600 * 5, initial:3600},
						defaultGuiSettings : { 
				planetScale : 100
			},
			help : "Only the Earth and its moon."
		};

		return system;
		
	}
);