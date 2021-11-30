const database = require('../../config/database');

module.exports = class Product {
  constructor(title, price, description, imageUrl, featured) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.featured = featured;
  }

  save() {
    return database.execute(
      'INSERT INTO product (title, price, description, imageUrl, featured) VALUES (?, ?, ?, ?, ?)',
      [this.title, this.price, this.description, this.imageUrl, this.featured]
    );
  }

  static getAllProducts() {
    return database.execute('SELECT * FROM product');
  }

  static getAllFeaturedProducts() {
    return database.execute('SELECT * FROM product WHERE featured = 1');
  }

  static getProductById(id) {
    return database.execute('SELECT * FROM product WHERE id = ?', [id]);
  }

  static getProductsByIdList(idList) {
    return database.execute(`SELECT * FROM product WHERE id IN (${idList})`);
  }
};
