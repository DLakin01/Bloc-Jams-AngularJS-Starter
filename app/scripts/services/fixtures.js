(function() {
  function Fixtures($location) {
    var Fixtures = {};

    var albumBonIver = {
      title: "22, A Million",
      id: "?" + "id=bon-iver",
      artist: "Bon Iver ",
      label: "Jagjaguwar",
      year: "2016",
      albumArtUrl: '/assets/images/album_covers/22aMillion.jpeg',
      albumURL: '/album.html?albumID=1',
      songs: [
        {title: "22 (OVER S∞∞N)", duration: "2:48", audioUrl: "assets/music/22, A Million/22 (OVER SN)"},
        {title: "10 d E A T h b R E a s T ⚄ ⚄", duration: "2:24", audioUrl: "assets/music/22, A Million/10 d E A T h b R E a s T"},
        {title: "715 - CR∑∑KS", duration: "2:12", audioUrl: "assets/music/22, A Million/715 - CRKS"},
        {title: "33 \"GOD\"", duration: "3:33", audioUrl: "assets/music/22, A Million/33 GOD"},
        {title: "29 #Strafford APTS", duration: "4:05", audioUrl: "assets/music/22, A Million/29 Strafford APTS"},
        {title: "666 ʇ", duration: "4:12", audioUrl: "assets/music/22, A Million/666"},
        {title: "21 M◊◊N WATER", duration: "3:08", audioUrl: "assets/music/22, A Million/21 MN WATER"},
        {title: "8 (Circle)", duration: "5:09", audioUrl: "assets/music/22, A Million/8 (Circle)"},
        {title: "____45_____", duration: "2:46", audioUrl: "assets/music/22, A Million/45"},
        {title: "000000 (Million)", duration: "3:53", audioUrl: "assets/music/22, A Million/00000 (Million)"}
      ]
    };

    var albumFooFighters = {
      title: "Color and the Shape",
      id: "?" + "id=foo-fighters",
      artist: "Foo Fighters ",
      label: "Roswell/Capitol",
      year: "1997",
      albumArtUrl: "/assets/images/album_covers/ColorAndTheShape.jpeg",
      albumURL: '/album.html?albumID=2',
      songs: [
        {title: "Doll", duration: "1:23", audioUrl: "assets/music/The Color and the Shape/Doll"},
        {title: "Monkey Wrench", duration: "3:51", audioUrl: "assets/music/The Color and the Shape/Monkey Wrench"},
        {title: "Hey, Johnny Park!", duration: "4:08", audioUrl: "assets/music/The Color and the Shape/Hey, Johnny Park!"},
        {title: "My Poor Brain", duration: "3:33", audioUrl: "assets/music/The Color and the Shape/My Poor Brain"},
        {title: "Everlong", duration: "4:11", audioUrl: "assets/music/The Color and the Shape/Everlong"}
      ]
    };

    var albumSufjan = {
      title: "Come On! Feel the Illinoise!",
      id: "?" + "id=sufjan",
      artist: "Sufjan Stevens ",
      label: "Asthmatic Kitty Records",
      year: "2005",
      albumArtUrl: '/assets/images/album_covers/Illinoise.jpeg',
      albumURL: '/album.html?albumID=3',
      songs: [
        {title: "Concerning the UFO Sighting near Highland, Illinois", duration: "2:08", audioUrl: "assets/music/Come On! Feel the Illinoise!/Concerning the UFO Sighting Near Highland, Illinois"},
        {title: "The Black Hawk War", duration: "2:14", audioUrl: "assets/music/Come On! Feel the Illinoise!/The Black Hawk War"},
        {title: "Come On! Feel the Illinoise!", duration: "6:45", audioUrl: "assets/music/Come On! Feel the Illinoise!/Come On! Feel the Illinoise!"},
        {title: "John Wayne Gacy, Jr.", duration: "3:19", audioUrl: "assets/music/Come On! Feel the Illinoise!/John Wayne Gacy, Jr."},
        {title: "Jacksonville", duration: "5:24", audioUrl: "assets/music/Come On! Feel the Illinoise!/Jacksonville"}
      ]
    };

    Fixtures.getCollection = function() {
      return [albumBonIver, albumFooFighters, albumSufjan];
    };

    Fixtures.getAlbum = function() {
      var searchObject = unescape($location.search());
      console.log(searchObject)
      /*if(searchObject.id === "bon-iver"){return albumBonIver}
      else if(searchObject.id === "foo-fighters"){return albumFooFighters}
      else if(searchObject.id === "sufjan"){return albumSufjan}*/
    };

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', ['$location', Fixtures]);
})();
