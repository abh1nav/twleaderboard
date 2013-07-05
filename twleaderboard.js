
Tweets = new Meteor.Collection("tweets");

if (Meteor.isClient) {
  Template.hello.tweets = function () {
    return Tweets.find({}, {sort: {_id: 1}});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
      twrapper.connect({
          consumer_key: "",
          consumer_secret: "",
          access_token: "",
          access_token_secret: ""
      }, Tweets);
  });
}
