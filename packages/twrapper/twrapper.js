var Twit = Npm.require("twit");
var Fiber = Npm.require("fibers");

twrapper = {
    connect: function (creds, Tweets) {
        var T = new Twit(creds);
        var stream = T.stream('statuses/filter', { track: 'meteor' });
        stream.on('tweet', function(tweet) {
            Fiber(function() {
                Tweets.insert(tweet);
            }).run();
        });
    }
};