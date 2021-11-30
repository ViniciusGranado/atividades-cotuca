const database = require('../../config/database');

module.exports = class Cart {
  constructor(userId) {
    this.userId = userId;
  }

  static createCart(userId) {
    return database.execute('INSERT IGNORE INTO cart (userId) VALUES (?);', [
      userId,
    ]);
  }

  static deleteCart(userId) {
    return database.execute(`
      DELETE FROM cart WHERE userId = ?;
    `, [userId]);
  }

  static getCart(userId) {
    return database.execute(
      `SELECT * FROM product
        WHERE id IN (
        SELECT product_cart.productId FROM cart
        INNER JOIN product_cart
        WHERE (cart.id = product_cart.cartId) AND cart.userId = ?
      );`,
      [userId]
    );
  }

  static getCartIdByUserId(userId) {
    return database.execute('SELECT id FROM cart WHERE userId = ?;', [userId]);
  }

  static addToCart(cartId, productId) {
    return database.execute(
      'INSERT INTO product_cart (cartId, productId) VALUES (?, ?);',
      [cartId, productId]
    );
  }

  static removeFromCart(cartId, productId) {
    return database.execute(
      'DELETE FROM product_cart WHERE (cartId = ?) AND (productId = ?);',
      [cartId, productId]
    );
  }
};
