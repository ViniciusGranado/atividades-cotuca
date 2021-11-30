const User = require('../models/user');

module.exports.getSignUp = (req, res) => {
  res.render('sign-up', {
    pageTitle: 'Cadastro',
    path: '/sign-up',
    logged: req.cookies.logged,
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

  user.save()
    .then(() => {
      User.getUserByEmail(req.body.email)
        .then(([newUser]) => {
          res.cookie('logged', true);
          res.cookie('userId', newUser[0].id);
          res.redirect('/home');
        })
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.postLogin = (req, res) => {
  User.getUserByEmail(req.body.email)
    .then(([user]) => {
      if (user[0] && user[0].password === req.body.password) {
        res.cookie('logged', true);
        res.cookie('userId', user[0].id);
        res.redirect('/home');
      } else {
        res.redirect('/home');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getLogout = (req, res) => {
  res.clearCookie('logged');
  res.clearCookie('userId');
  res.redirect('/home');
};
