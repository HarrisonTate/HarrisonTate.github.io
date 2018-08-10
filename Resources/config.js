$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '1245984943',
        limit: 100,
        resolution: 'standard_resolution',
        accessToken: '1245984943.1677ed0.2763e23906a2422980a1ede31a318b7c',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
