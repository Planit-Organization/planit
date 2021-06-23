const { urlencoded } = require("express");
const express = require("express");
const passport = require('passport')
const cookieSession = require ('cookie-session');
require('../passport-setup')
const path = require("path");
const authContoller = require("./authController");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(cookieSession({
  name: 'planit-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
//app.use(passport.session());

app.use(express.static(path.join(__dirname, "../client/assets")));

app.use("/build", express.static(path.join(__dirname, "../build")));


app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});
app.get('/failed', (req, res) => {
  res.sec('YOU FAILED TO LOGIN WEEB')
})

app.get('/loginPage', (req, res) => {
  res.redirect('/login')
})

app.post('')

app.get('/logout', (req, res) => {
  req.session = null;
  req.logOut();
  res.redirect('/');
})

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  });


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
