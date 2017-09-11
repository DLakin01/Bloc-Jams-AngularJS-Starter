(function() {
  function CollectionCtrl() {
    this.albums = [];
    for (var i=0; i < albumList.length; i++) {
      this.albums.push(angular.copy(albumList[i]));
    }
  }

  var albumList = [albumBonIver, albumFooFighters, albumSufjan];

  angular
    .module('blocJams')
    .controller('CollectionCtrl', CollectionCtrl);
})();
