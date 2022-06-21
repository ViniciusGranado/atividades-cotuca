const database = require('../../config/database');

module.exports = class User {
    constructor(id, name, age, cep, number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.cep = cep;
        this.number = number;
    }

    save() {
        return database.execute(
					'INSERT INTO user (name, age, cep, number) VALUES (?, ?, ?, ?)',
					[this.name, this.cpf, this.email, this.password]
        );
    };

		static getUsers() {
			return database.execute('SELECT * FROM user');
		}

		static getUserById(id) {
			return database.execute('SELECT * FROM user WHERE id = ?', [id]);
		}

		static updateUser() {
			return database.execute('UPDATE user SET name = ?, age = ?, cep = ?, number = ? WHERE id = ?', [this.id]);
		}
}