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
      name : 'ScaledPlanets 1',
      title : 'बड़े ग्रह १',
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
          traceRelativeTo : 'universe',
          radius : 6.96342e5
        },
        mercury:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 2439 * 3000
        },
        venus:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 6051 * 3000
        },
        earth:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 3443.9307 * ns.NM_TO_KM * 3000
        },
        mars:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 3376 * 3000
        },
        jupiter:{
          mass: 5.6846e26,
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 71492 * 3000
        },
        saturn:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 58232 * 3000,
          ring : {
          innerRadius : 74500 * 3000,
          outerRadius : 117580 * 3000,
          map : 'img/saturnrings.png'
          }
        },
        uranus:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 25559 * 3000
        },
        neptune:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 24764 * 3000
        },
        pluto:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 1153 * 3000
        }
      },/**/
      secondsPerTick : {min: 3600, max: 3600 * 15, initial:3600 * 5},
      calculaionsPerTick : 100,
      usePhysics: true,
      calculateAll : false,
      useBarycenter : false,
      defaultGuiSettings : { 
        planetScale : 1
      },
      help : "The size of the planets increased by 3000 times to make them visible and enable visual comparision of their sizes in their actual positions. The Sun's size has been kept the same so that the Planets may reside within their actual Orbits."
    };

    return cnf;
    
  }
);