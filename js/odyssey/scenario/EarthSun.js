

define(
	[
		'odyssey/NameSpace',
		'odyssey/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {
		
		var system =  {
			name : 'EarthSun',
			title : 'The Sun and the Earth',
			commonBodies : ['earth', 'sun'],
			secondsPerTick : {min: 3600/2, max: 3600 * 5, initial:3600},
			help : "Only the Sun and the Earth"
		};

		return system;
		
	}
);