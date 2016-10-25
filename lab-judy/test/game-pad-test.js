'use strict';


describe('testing gamePadCtrl', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject($controller => {
      this.gamePadCtrl = new $controller('GamePadController');
    });
  });

  describe('testing initial properties', ()=> {
    it('should return an array with 8 values', () => {
      expect(this.gamePadCtrl.directions.length).toEqual(8);
      expect(Array.isArray(this.gamePadCtrl.directions)).toBe(true);
    });
  });
});
