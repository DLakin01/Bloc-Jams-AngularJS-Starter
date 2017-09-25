(function() {
  function seekBar($document) {

    var calculatePercent = function(seekBar, event) {
      var offsetX = event.pageX - seekBar.offset().left;
      var seekBarWidth = seekBar.width();
      var offsetXPercent = offsetX / seekBarWidth;
      offsetXPercent = Math.max(0, offsetXPercent);
      offsetXPercent = Math.min(1, offsetXPercent);
      return offsetXPercent;
    };

    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: {
        onChange: '&',

      },
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
        * @method attributes.$observe
        * @desc These two methods set an observer on the currentTime and duration of the
        *       currntly playing song. When that value changes, continuously in the case
        *       'value,' thse methods update the scope.
        */
        attributes.$observe('value', function(newValue) {
          scope.value = newValue;
        });
        attributes.$observe('max', function(newValue) {
          scope.max = newValue;
        });

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
        scope.fillStyle = function(time) {
            return {width: percentString()}
        };

        scope.thumbStyle = function(value) {
            return {left: percentString()}
        };

        scope.onClickSeekBar = function(event) {
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max;
          notifyOnChange(scope.value);
        };

        scope.trackThumb = function() {
          $document.bind('mousemove.thumb', function(event) {
          var percent = calculatePercent(seekBar, event);
          scope.$apply(function() {
            scope.value = percent * scope.max
            notifyOnChange(scope.value);
         });
       });

        $document.bind('mouseup.thumb', function() {
          $document.unbind('mousemove.thumb');
          $document.unbind('mouseup.thumb');
        });
       };

       var notifyOnChange = function(newValue) {
         if(typeof scope.onChange === 'function') {
           scope.onChange({value: newValue});
         }
       };
      }
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', ['$document', seekBar]);
})();
