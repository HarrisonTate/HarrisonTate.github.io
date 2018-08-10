$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '1313568202',
        limit: 100,
        resolution: 'standard_resolution',
        accessToken: '1313568202.1677ed0.4a3e9a97d8c14ef8ba8144c17c4e8980',
        sortBy: 'most-recent',
        template: '<div class="col-lg-5 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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
