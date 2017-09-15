(function() {
  function seekBar($document) {

    var calculatePercent = function(seekBar, event) {
      var offsetX = event.pageX - seekBar.offset().left;
      var seekBarWidth = seekBar.width();
      var offsetXPercent = offsetX / seekBarWidth;
      offsetXPercent = Math.max(0, offsetXPercent);
      offsetXPercent = Math.min(100, offsetXPercent);
      return offsetXPercent;
    }

    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: {},
      link: function(scope, element, attributes) {

        /**
        * @method scope.value @method scope.max
        * @desc These two methods hold the default/current value of the seek bar's thumb
        *       and fill, and their max value.
        */
        scope.value = 0;
        scope.max = 100;

        /**
        * @var seekBar
        * @desc Holds the seek-bar element as a jQuery object
        */
        var seekBar = $(element);

        /**
        * @function percentString()
        * @desc A function that calculates a percent based on the value and max value of
        *       the seek bar
        */
        var percentString = function() {
          var value = scope.value;
          var max = scope.max;
          var percent = value/max * 100;
          return percent + "%"
        };

        /**
        * @method scope.fillStyle
        * @desc Returns the width of the seek bar fill based on the calculated percent
        */
        scope.fillStyle = function() {
          return {width: percentString()};
        };

        scope.thumbStyle = function() {
          return {left: percentString()};
        }

        scope.onClickSeekBar = function(event) {
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max;
        };

        scope.trackThumb = function() {
          $document.bind('mousemove.thumb', function(event) {
          var percent = calculatePercent(seekBar, event);
          scope.$apply(function() {
            scope.value = percent * scope.max;
         });
       });

        $document.bind('mouseup.thumb', function() {
          $document.unbind('mousemove.thumb');
          $document.unbind('mouseup.thumb');
        });
       };
      }
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', ['$document', seekBar]);
})();
