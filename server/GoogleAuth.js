const passport = require('passport')
const keys = require('../api_keys')
const GoogleStrategy = require('passport-google-oauth2').Strategy;





passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: "/tester",
    passReqToCallBack: true
  },
  (accessToken, refreshToken, profile, done) => {
    // use the profile info (mainly profile id) to check if the user is registered with the db
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, profile);
    // });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err,user);
  });
});