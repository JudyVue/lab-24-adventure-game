'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('init playerService');

  let service = {};

  let turn = 0;

  let player = service.player = {
    name: 'Judy',
    location: 'Room1',
    hp: 10,
  };

  let history = service.history = [
    {
      turn,
      desc: mapService.mapData.Room1.desc,
      location: 'Room1',
      hp: player.hp,
    },
  ];

  service.loserMessage = 'Sorry, you\'re out of lives. :(';

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      ++turn;

      let currentLocation = player.location;
      let newLocation = mapService.mapData[currentLocation][direction];


      if(history[0].hp === 0){
        history.unshift({
          turn,
          desc: service.loserMessage,
          location: player.location,
          hp: 0,
        });
        return;
      }

      //if player did NOT answer correctly
      if(!newLocation){

        history.unshift({
          turn,
          desc: 'Nope, need to brush up on your geography, bruh',
          location: player.location,
          hp: --player.hp,
        });
        console.log('history: ', history);
        return reject('no room in that direction');
      }
      //else if player anwswered correctly
      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp,
      });
      console.log('history: ', history);
      player.location = newLocation;

      return resolve(player.location, player.hp);
    });
  };
  return service;
}
