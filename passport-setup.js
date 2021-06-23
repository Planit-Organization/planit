const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err,user);
  });
});


passport.use(new GoogleStrategy({
    clientID: '731546886517-apol8ksguu7pfdchd0djcqvjdj2mroe5.apps.googleusercontent.com',
    clientSecret: 'jBc4eoj33VLWeSpUMCVfmwoG',
    callbackURL: "http://localhost:8080"
  },
  (accessToken, refreshToken, profile, done) => {
    // use the profile info (mainly profile id) to check if the user is registered with the db
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, profile, user);
    });
  }
));