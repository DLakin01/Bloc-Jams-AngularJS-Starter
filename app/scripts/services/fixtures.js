(function() {
  function Fixtures($location) {
    var Fixtures = {};

    var albumBonIver = {
      title: "22, A Million",
      id: "bon-iver",
      artist: "Bon Iver ",
      label: "Jagjaguwar",
      year: "2016",
      albumArtUrl: '/assets/images/album_covers/22aMillion.jpeg',
      albumURL: '/album.html?albumID=1',
      songs: [
        {title: "22 (OVER S∞∞N)", duration: "168.1", audioUrl: "assets/music/22, A Million/22 (OVER SN)"},
        {title: "10 d E A T h b R E a s T ⚄ ⚄", duration: "145.1", audioUrl: "assets/music/22, A Million/10 d E A T h b R E a s T"},
        {title: "715 - CR∑∑KS", duration: "132", audioUrl: "assets/music/22, A Million/715 - CRKS"},
        {title: "33 \"GOD\"", duration: "207", audioUrl: "assets/music/22, A Million/33 GOD"},
        {title: "29 #Strafford APTS", duration: "246", audioUrl: "assets/music/22, A Million/29 Strafford APTS"},
        {title: "666 ʇ", duration: "254", audioUrl: "assets/music/22, A Million/666"},
        {title: "21 M◊◊N WATER", duration: "190", audioUrl: "assets/music/22, A Million/21 MN WATER"},
        {title: "8 (Circle)", duration: "311", audioUrl: "assets/music/22, A Million/8 (Circle)"},
        {title: "____45_____", duration: "168", audioUrl: "assets/music/22, A Million/45"},
        {title: "000000 (Million)", duration: "235", audioUrl: "assets/music/22, A Million/00000 (Million)"}
      ]
    };

    var albumFooFighters = {
      title: "Color and the Shape",
      id: "foo-fighters",
      artist: "Foo Fighters ",
      label: "Roswell/Capitol",
      year: "1997",
      albumArtUrl: "/assets/images/album_covers/ColorAndTheShape.jpeg",
      albumURL: '/album.html?albumID=2',
      songs: [
        {title: "Doll", duration: "83", audioUrl: "assets/music/The Color and the Shape/Doll"},
        {title: "Monkey Wrench", duration: "231", audioUrl: "assets/music/The Color and the Shape/Monkey Wrench"},
        {title: "Hey, Johnny Park!", duration: "248", audioUrl: "assets/music/The Color and the Shape/Hey, Johnny Park!"},
        {title: "My Poor Brain", duration: "213", audioUrl: "assets/music/The Color and the Shape/My Poor Brain"},
        {title: "Everlong", duration: "251", audioUrl: "assets/music/The Color and the Shape/Everlong"}
      ]
    };

    var albumSufjan = {
      title: "Come On! Feel the Illinoise!",
      id: "sufjan",
      artist: "Sufjan Stevens ",
      label: "Asthmatic Kitty Records",
      year: "2005",
      albumArtUrl: '/assets/images/album_covers/Illinoise.jpeg',
      albumURL: '/album.html?albumID=3',
      songs: [
        {title: "Concerning the UFO Sighting near Highland, Illinois", duration: "128", audioUrl: "assets/music/Come On! Feel the Illinoise!/Concerning the UFO Sighting Near Highland, Illinois"},
        {title: "The Black Hawk War", duration: "134", audioUrl: "assets/music/Come On! Feel the Illinoise!/The Black Hawk War"},
        {title: "Come On! Feel the Illinoise!", duration: "405", audioUrl: "assets/music/Come On! Feel the Illinoise!/Come On! Feel the Illinoise!"},
        {title: "John Wayne Gacy, Jr.", duration: "199", audioUrl: "assets/music/Come On! Feel the Illinoise!/John Wayne Gacy, Jr."},
        {title: "Jacksonville", duration: "324", audioUrl: "assets/music/Come On! Feel the Illinoise!/Jacksonville"}
      ]
    };

    var albumSleighBells = {
      title: "Treats",
      id: "sleigh-bells",
      artist: "Sleigh Bells ",
      label: "N.E.E.T./Mom + Pop",
      year: "2010",
      albumArtUrl: "/assets/images/album_covers/Treats.jpg",
      songs: [
        {title: "Tell 'Em'", duration: "179", audioUrl: "assets/music/Treats/Tell 'Em"},
        {title: "Kids", duration: "167", audioUrl: "assets/music/Treats/Kids"},
        {title: "Riot Rhythm", duration: "183", audioUrl: "assets/music/Treats/Riot Rhythm"},
        {title: "Infinity Guitars", duration: "161", audioUrl: "assets/music/Treats/Infinity Guitars"},
        {title: "Run the Heart", duration: "162", audioUrl: "assets/music/Treats/Run the Heart"},
        {title: "Rill Rill", duration: "237", audioUrl: "assets/music/Treats/Rill Rill"},
        {title: "Crown on the Ground", duration: "230", audioUrl: "assets/music/Treats/Crown on the Ground"},
        {title: "A/B Machines", duration: "215", audioUrl: "assets/music/Treats/AB Machines"},
        {title: "Treats", duration: "219", audioUrl: "assets/music/Treats/Treats"}
      ]
    };

    var albumPostalService = {
      title: "Give Up",
      id: "postal-service",
      artist: "The Postal Service ",
      label: "Sub Pop Records",
      year: "2003",
      albumArtUrl: "/assets/images/album_covers/GiveUp.jpg",
      songs: [
        {title: "The District Sleeps Alone Tonight", duration: "250", audioUrl: "assets/music/Give Up/The District Sleeps Alone Tonight"},
        {title: "Such Great Heights", duration: "270", audioUrl: "assets/music/Give Up/Such Great Heights"},
        {title: "Sleeping In", duration: "262", audioUrl: "assets/music/Give Up/Sleeping In"},
        {title: "Nothing Better", duration: "227", audioUrl: "assets/music/Give Up/Nothing Better"},
        {title: "Recycled Air", duration: "270", audioUrl: "assets/music/Give Up/Recycled Air"},
        {title: "Clark Gable", duration: "295", audioUrl: "assets/music/Give Up/Clark Gable"},
        {title: "We Will Become Sillhouettes", duration: "233", audioUrl: "assets/music/Give Up/We Will Become Sillhouettes"},
        {title: "This Place is a Prison", duration: "235", audioUrl: "assets/music/Give Up/This Place is a Prison"},
        {title: "Brand New Colony", duration: "253", audioUrl: "assets/music/Give Up/Brand New Colony"},
        {title: "Natural Anthem", duration: "308", audioUrl: "assets/music/Give Up/Natural Anthem"}
      ]
    };

    Fixtures.getCollection = function() {
      return [albumBonIver, albumFooFighters, albumSufjan, albumSleighBells, albumPostalService];
    };

    Fixtures.getAlbum = function(albumID) {
      if(albumID === "bon-iver"){return albumBonIver}
      else if(albumID === "foo-fighters"){return albumFooFighters}
      else if(albumID === "sufjan"){return albumSufjan}
      else if(albumID === "sleigh-bells"){return albumSleighBells}
      else if(albumID === "postal-service"){return albumPostalService}
    };

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();
