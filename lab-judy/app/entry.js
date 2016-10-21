'use strict';

//webpack assets
require('./scss/main.scss');

//require angular
const angular = require('angular');

//create angular module
angular.module('ngAdventure', []);

//services
require('./services/map-service.js');
require('./services/player-service.js');

//components
require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/game-history/game-history.js');
