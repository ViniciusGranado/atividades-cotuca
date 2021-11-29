module.exports.getIndex = (req, res) => {
  res.render('index', {
    pageTitle: 'Loja',
    path: '/',
    logged: req.cookies.logged,
  });
};
