const Adress = require('./adress');
const User = require('./user');

module.exports = class AdressUser {
  adress;
  user;

  constructor(adress, user) {
    this.adress = adress;
    this.user = user;
  };

  get adress() {
    return this.adress;
  }

  set adress(adress) {
    if (adress === undefined || !adress instanceof Adress) {
      throw new Error('Endereço inválido');
    }

    this.adress = adress;
  }

  get user() {
    return this.user;
  }

  set user(user) {
    if (user === undefined || !user instanceof User) {
      throw new Error('user inválido');
    }

    this.user = user;
  }

  getObject() {
    return { adress: this.adress, user: this.user };
  }
}