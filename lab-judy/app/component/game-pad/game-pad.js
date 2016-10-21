'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl',
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService){
  $log.debug('init gamePadCtrl');

  this.directions = ['north', 'northeast', 'northwest', 'south', 'southeast', 'southwest', 'east', 'west'];

  this.moveDirection = this.directions[0];

  this.movePlayer = function(){
    playerService.movePlayer(this.moveDirection)
    .then( location => {
      $log.log(`player at new location: ${location}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}
