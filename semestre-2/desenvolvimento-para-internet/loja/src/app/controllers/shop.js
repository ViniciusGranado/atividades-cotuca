const Product = require('../models/product');
const Cart = require('../models/cart');

module.exports.getIndex = (req, res) => {
  if (req.cookies.logged === 'true') {
    Product.getAllFeaturedProducts()
      .then(([products]) => {
        return res.render('index', {
          pageTitle: 'Loja',
          products: products,
          path: '/',
          logged: req.cookies.logged,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.render('index', {
      pageTitle: 'Loja',
      path: '/',
      logged: false,
    });
  }
};

module.exports.getProducts = (req, res) => {
  Product.getAllProducts()
    .then(([products]) => {
      res.render('products', {
        pageTitle: 'Produtos',
        products: products,
        path: '/products',
        logged: req.cookies.logged,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getProduct = (req, res) => {
  const id = req.params.id;

  Product.getProductById(id)
    .then(([product]) => {
      res.render('product', {
        pageTitle: product[0].title,
        product: product[0],
        path: '/products',
        logged: req.cookies.logged,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getCart = (req, res) => {
  const userId = req.cookies.userId;

  Cart.getCart(userId)
    .then(([products]) => {
      res.render('cart', {
        pageTitle: 'Carrinho',
        products: products,
        path: '/cart',
        logged: req.cookies.logged,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.postCart = (req, res) => {
  const userId = req.cookies.userId;
  prodQty = req.body;

  const products = [];
  for (i = 0; i < prodQty.qty.length; i++) {
    products.push({
      id: Number.parseInt(prodQty.id[i]),
      qty: prodQty.qty[i],
    });
  }

  Cart.deleteCart(userId)
    .then(() => {
      const producsIdList = prodQty.id.join(', ');
      Product.getProductsByIdList(producsIdList).then(
        ([productsInfo]) => {
          products.forEach((product) => {
            const productInfo = productsInfo.find((p) => p.id === product.id);

            product.title = productInfo.title;
            product.price = productInfo.price;
          });

          res.render('concluded', {
            pageTitle: 'Pedido Concluido',
            products: products,
            path: '/',
            logged: req.cookies.logged,
          });
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getAddToCart = (req, res) => {
  const userId = req.cookies.userId;
  const productId = req.params.id;

  Cart.createCart(userId)
    .then(() => {
      Cart.getCartIdByUserId(userId).then(([cartId]) => {
        Cart.addToCart(cartId[0].id, productId).then(() => {
          res.redirect('/cart');
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getRemoveFromCart = (req, res) => {
  const userId = req.cookies.userId;
  const productId = req.params.id;

  Cart.getCartIdByUserId(userId)
    .then(([cartId]) => {
      Cart.removeFromCart(cartId[0].id, productId).then(() => {
        res.redirect('/cart');
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
