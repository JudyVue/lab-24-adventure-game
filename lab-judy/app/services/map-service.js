'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);
function mapService($log){
  $log.debug('init mapService');

  let service = {};

  service.mapData = {
    Room1: {
      desc: 'Brussels is _______ of Paris.',
      northeast: 'Room2',
    },
    Room2: {
      desc: 'Bhutan is _______ of Nepal.',
      east: 'Room3',
    },
    Room3: {
      desc: 'Lesotho is ______ of Swaziland.',
      southwest: 'Room4',
    },
    Room4: {
      desc: 'Uruguay is _______ of Paraguay.',
      south: 'Room5',
    },
    Room5: {
      desc: 'Chad is _______ of Mauritania.',
      west: 'Room6',
    },
    Room6: {
      desc: 'Mongolia is _______ of Kazakhstan.',
      west: 'Room7',
    },
    Room7: {
      desc: 'Congrats, you made it to Freedom!',
    },
  };
  return service;
}
