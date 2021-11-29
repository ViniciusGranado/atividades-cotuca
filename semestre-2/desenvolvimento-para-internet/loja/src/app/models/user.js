const database = require('../../config/database');

module.exports = class User {
  constructor(id, name, cpf, email, password) {
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.password = password;
  }

  save() {
    return database.execute(
      'INSERT INTO user (name, cpf, email, password) VALUES (?, ?, ?, ?)',
      [this.name, this.cpf, this.email, this.password]
    );
  }

  static getUserByEmail(email) {
    return database.execute('SELECT * FROM user WHERE email = ?', [email]);
  }
};
