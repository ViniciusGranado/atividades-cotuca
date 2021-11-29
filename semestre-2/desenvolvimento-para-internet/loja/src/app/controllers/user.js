const User = require('../models/user');

module.exports.getSignUp = (req, res) => {
  res.render('sign-up', {
    pageTitle: 'Cadastro',
    path: '/sign-up',
    logged: req.query.logged,
  });
};

module.exports.postSignUp = (req, res) => {
  const user = new User(
    null,
    req.body.name,
    req.body.cpf,
    req.body.email,
    req.body.password
  );

  user
    .save()
    .then(() => {
      res.redirect('/home?logged=true');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.postLogin = (req, res) => {
  User.getUserByEmail(req.body.email)
    .then(([user]) => {
      if (user[0] && user[0].password === req.body.password) {
        res.redirect('/home?logged=true');
      } else {
        res.redirect('/home');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
