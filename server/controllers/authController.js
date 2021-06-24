const db = require('../models/planitModels')

const authContoller = {};

authContoller.oAuthLogin = (req, res, next) => {
  if(req.user){
    next()
  } else {
    res.sendStatus(401)
  }
};

authContoller.login = (req, res, next) => {
  const { email, password } = req.body
  // `SELECT username, email, password FROM public."Users" WHERE email=${email} AND password=${password}`
  const queryText = `SELECT username, email, password FROM public."Users" WHERE email='${email}' AND password='${password}'`
  db.query(queryText, (err, results) => {
    if(err) return next(err)
    res.locals.user = results
    return next()
  })
};

authContoller.register = (req, res, next) => {
  const { username, email, password } = req.body;
  const queryParams = [username, email, password];
  const queryText = 'INSERT INTO public."Users"(username, email, password) VALUES ($1, $2, $3)';
  db.query(queryText, queryParams, (err, results) =>{
    if(err) return next(err)
    res.locals.user = results;
    return next()
  })
}

module.exports = authContoller;