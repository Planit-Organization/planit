const { urlencoded } = require("express");
const express = require("express");
const passport = require('passport')
const cookieSession = require ('cookie-session');
require ('./GoogleAuth')
const path = require("path");
const authContoller = require("./controllers/authController");
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

app.use("/build", express.static(path.resolve(__dirname, "../build")));


app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
});
app.get('/failed', (req, res) => {
  res.sec('YOU FAILED TO LOGIN WEEB')
})

app.post('/login', authContoller.login, (req, res) => {
  res.status(200).json(res.locals.user)
})

app.post('/register', authContoller.register, (req, res) => {
  res.status(200).json(res.locals.user)
})

app.get('/logout', (req, res) => {
  req.session = null;
  req.logOut();
  res.redirect('/');
})

app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

// app.get('/google/callback', passport.authenticate('google', {scope: ['email', 'profile']}, { failureRedirect: '/failed' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/home');
//   });

app.get('/tester', (req, res) => {
  console.log('working')
})

app.use((err, req, res, next) => {
  console.log('Error handler hit', err);
  const defaultErr = {
    status: 500,
    log: `Problem in some middleware. ${err.message}`,
    message: err.message,
  };
  const errObject = Object.assign(defaultErr, err);
  res.status(errObject.status).send(errObject.message);
});
  
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
