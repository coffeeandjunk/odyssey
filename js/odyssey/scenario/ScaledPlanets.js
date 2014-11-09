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
      name : 'Scaled planets',
      title : 'Scaled planets',
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
        jupiter:{
          mass: 5.6846e26,
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        },
        mercury:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        },
        venus:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        },
        earth:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        },
        mars:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        },
        saturn:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        },
        uranus:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        },
        neptune:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        },
        pluto:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1000000
        }
      },/**/
      secondsPerTick : {min: 3600, max: 3600 * 15, initial:3600 * 5},
      calculaionsPerTick : 100,
      usePhysics: false,
      calculateAll : false,
      useBarycenter : false,
      defaultGuiSettings : { 
        planetScale : 10
      },
      help : "Scaled version of the planets"
    };

    return cnf;
    
  }
);