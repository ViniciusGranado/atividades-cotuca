const database = require('../../config/database');

module.exports = class User {
  id;
  name;
  age;
  cep;
  number;

  constructor(id, name, age, cep, number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.cep = cep;
    this.number = number;
  }

  get id() {
    return this.id;
  }

  set id(id) {
    if (id === undefined || typeof id !== 'number' || isNaN(id) || id !== parseInt(id) || id <= 0) {
        
    }
    this.id = id;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    if (name === undefined || typeof name !== 'string') {
      throw new Error('Nome inválido');
    }
    this.name = name;
  }

  get age() {
    return this.age;
  }

  set age(age) {
    if (age === undefined || typeof age !== 'string') {
      throw new Error('Idade inválida');
    }
    this.age = age;
  }

  get cep() {
    return this.cep;
  }

  set cep(cep) {
    if (cep === undefined || typeof cep !== 'string') {
      throw new Error('Cep inválido');
    }
    this.cep = cep;
  }

  get number() {
    return this.number;
  }

  set number(number) {
    if (number === undefined || typeof number !== 'string') {
      throw new Error('Número inválido');
    }
    this.number = number;
  }    
}