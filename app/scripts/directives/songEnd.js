(function() {
  function dlSongEnd() {

    return {
      restrict: 'A',
      scope: {
        value: '@',
        max: '@'
      },
      link: function(scope, element, attributres) {

        /**
        * @method attributes.$observe
        * @desc Watches the time elapsed to track when to trigger the next song
        */
        attributes.$observe('value', function(newValue) {
          var time = newValue;
        });

        
      }
    }

  }

  angular
    .module('blocJams')
    .directive('dlSongEnd', ['SongPlayer', dlSongEnd]);
})();
