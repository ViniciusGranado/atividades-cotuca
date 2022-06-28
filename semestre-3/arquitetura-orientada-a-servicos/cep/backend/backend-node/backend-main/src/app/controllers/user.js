const User = require('../models/user');
const Comunicado = require('../models/comunidado');
const AdressUser = require('../models/adressUser');
const db = require('../../config/database');
const axios = require('axios');
const Adress = require('../models/adress');


module.exports.getUsers = async (req, res) => {
	const connection = db.getConnection();
	const sql = 'SELECT * FROM tb_user';

	const result = await connection.query(sql);

	if (result === undefined) {
		const error = new Comunicado('CBD', 'Sem conexão com o banco de dados', 'Não foi possível estabelecer comunição com o banco de dados.');
		return res.status(500).json(error.getObject());
	}

	return res.status(200).json(result.rows);
}

module.exports.getUserById = async (req, res) => {
	const userId = req.params.id;

	const connection = db.getConnection();
	const sql = 'SELECT * FROM tb_user WHERE id = $1';
	const queryData = [userId];

	const result = await connection.query(sql, queryData);

	if (result === undefined) {
		const error = new Comunicado('CBD', 'Sem conexão com o banco de dados', 'Não foi possível estabelecer comunição com o banco de dados.');
		return res.status(500).json(error.getObject());
	}

	if (result.rows.length !== 1) {
		const error = new Comunicado('IDI', 'ID Inexistente', 'Não foi encontrar o ID solicitado.');
		return res.status(500).json(error.getObject());
	}

	const queryResult = result.rows[0];
	let adressResult = await axios.get(`https://api.postmon.com.br/v1/cep/${queryResult.cep}`).then((res) => res.data);

	if (adressResult === undefined) {
		const error = new Comunicado('EBE', 'Erro ao buscar endereço', 'Não foi encontrar o endereço do usuário solicitado.');
		return res.status(500).json(error.getObject());
	}

	let user;
	let adress;
	try {
		user = new User(queryResult.id, queryResult.name, queryResult.age, queryResult.cep, queryResult.number);
		adress = new Adress(adressResult.logradouro, adressResult.bairro, adressResult.cidade, adressResult.estado);
	} catch(e) {
		const error = new Comunicado('EBE', 'Erro ao buscar endereço', e.message);
		return res.status(500).json(error);
	}

	return res.status(200).json(new AdressUser( adress, user).getObject());
}

module.exports.insert = async (req, res) => {
	const data = req.body;

	if (Object.values(data).length !== 4 || !data.name || !data.age || !data.cep || !data.number) {
		const error = new Comunicado('DDI', 'Dados inesperados', 'Não foram fornecidos exatamente as informações esperadas de um usuário (name, age, cep, number)');
		return res.status(422).json(error.getObject());
	};

	let newUser;
	try {
		newUser = new User(null, data.name, data.age, data.cep, data.number);
	} catch(e) {
		const error = new Comunicado('DDI', 'Dados de tipos errados', 'Dados inválidos');
		return res.status(422).json(error.getObject());
	}

	const connection = db.getConnection();
	const sql = 'INSERT INTO tb_user (name, age, cep, number) VALUES ($1, $2, $3, $4)';
	const queryData = [newUser.name, newUser.age, newUser.cep, newUser.number];

	const result =  await connection.query(sql, queryData);

	if (result === undefined) {
		const error = new Comunicado('CBD', 'Sem conexão com o banco de dados', 'Não foi possível estabelecer comunição com o banco de dados.');
		return res.status(500).json(error.getObject());
	}

	if (result === false) {
		const error = new Comunicado('UJE', 'Usuário já existe', 'Este usuário já está cadastrado');
		return res.status(409).json(error.getObject());
	}

	return res.status(201).json(data);
}

module.exports.update = async (req, res) => {
	const data = req.body;

	if (Object.values(data).length !== 5 || !data.id || !data.name || !data.age || !data.cep || !data.number) {
		const error = new Comunicado('DDI', 'Dados inesperados', 'Não foram fornecidos exatamente as informações esperadas de um usuário (id, name, age, cep, number)');
		return res.status(422).json(error.getObject());
	};
	
	let updatedUser;
	try {
		updatedUser = new User(data.id, data.name, data.age, data.cep, data.number);
	} catch(e) {
		const error = new Comunicado('DDI', 'Dados de tipos errados', 'Dados inválidos');
		return res.status(422).json(error);
	}

	const connection = db.getConnection();
	const sql = 'UPDATE tb_user SET name = $1, age = $2, cep = $3, number = $4 WHERE id = $5';
	const queryData = [updatedUser.name, updatedUser.age, updatedUser.cep, updatedUser.number, updatedUser.id];

	const result =  await connection.query(sql, queryData);

	if (result === undefined) {
		const error = new Comunicado('CBD', 'Sem conexão com o banco de dados', 'Não foi possível estabelecer comunição com o banco de dados.');
		return res.status(500).json(error.getObject());
	}

	if (result.rowCount === 0) {
		const error = new Comunicado('UNE', 'Usuário não encontrado', 'Este usuário não existe');
		return res.status(409).json(error.getObject());
	}

	return res.status(200).json(data);
}

module.exports.delete = async (req, res) => {
	const data = req.body;

	if (Object.values(data).length !== 5 || !data.id || !data.name || !data.age || !data.cep || !data.number) {
		const error = new Comunicado('DDI', 'Dados inesperados', 'Não foram fornecidos exatamente as informações esperadas de um usuário (id, name, age, cep, number)');
		return res.status(422).json(error.getObject());
	};
	
	let deletedUser;
	try {
		deletedUser = new User(data.id, data.name, data.age, data.cep, data.number);
	} catch(e) {
		const error = new Comunicado('DDI', 'Dados de tipos errados', 'Dados inválidos');
		return res.status(422).json(error);
	}

	const connection = db.getConnection();
	const sql = 'DELETE FROM tb_user WHERE id = $1';
	const queryData = [deletedUser.id];

	const result =  await connection.query(sql, queryData);

	if (result === undefined) {
		const error = new Comunicado('CBD', 'Sem conexão com o banco de dados', 'Não foi possível estabelecer comunição com o banco de dados.');
		return res.status(500).json(error.getObject());
	}

	if (result.rowCount === 0) {
		const error = new Comunicado('UNE', 'Usuário não encontrado', 'Este usuário não existe');
		return res.status(409).json(error.getObject());
	}

	return res.status(200).json(data);
}