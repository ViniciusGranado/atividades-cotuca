CREATE DATABASE Loja;
--DROP DATABASE Loja;
GO



create table cliente (
	id int not null identity(1,1) PRIMARY KEY,
	nome varchar(30),
	cidade varchar(30) default 'Campinas',
	dt_cadastro datetime not null default getdate()
);

INSERT INTO cliente VALUES('João dos Santos', 'São Paulo', getdate());
INSERT INTO cliente VALUES('Kieza Valadim ', 'Campinas', getdate());
INSERT INTO cliente VALUES('Jénifer Lacerda Mondragão', 'Belo Horizonte', getdate());
INSERT INTO cliente VALUES('Mellyssa Semedo Abrantes', 'São Paulo', getdate());
INSERT INTO cliente VALUES('Zaqueu Galvão Caniça', 'Belo Horizonte', getdate());
INSERT INTO cliente VALUES('Filipe Albernaz Janes', 'Valinhos', getdate());
INSERT INTO cliente VALUES('Iara Gois Anhaia', 'Jundiaí', getdate());
INSERT INTO cliente VALUES('Nikol Lameira Teles', 'Campinas', getdate());
INSERT INTO cliente VALUES('Vanessa Carvalhosa Vergueiro', 'Paulínia', getdate());
INSERT INTO cliente VALUES('Michele Sanches Cambezes', 'Cosmópolis', getdate());

SELECT * FROM cliente;

create table pedido (
	id int not null identity(1,1) PRIMARY KEY,
	id_cli int not null,
	dt_pedido datetime not null default getdate()
);

INSERT INTO pedido VALUES (5, getdate());
INSERT INTO pedido VALUES (9, getdate());
INSERT INTO pedido VALUES (8, getdate());
INSERT INTO pedido VALUES (8, getdate());
INSERT INTO pedido VALUES (2, getdate());
INSERT INTO pedido VALUES (7, getdate());
INSERT INTO pedido VALUES (4, getdate());
INSERT INTO pedido VALUES (3, getdate());
INSERT INTO pedido VALUES (10, getdate());
INSERT INTO pedido VALUES (2, getdate());
INSERT INTO pedido VALUES (5, getdate());
INSERT INTO pedido VALUES (6, getdate());
INSERT INTO pedido VALUES (2, getdate());
INSERT INTO pedido VALUES (10, getdate());
INSERT INTO pedido VALUES (3, getdate());
INSERT INTO pedido VALUES (10, getdate());
INSERT INTO pedido VALUES (1, getdate());
INSERT INTO pedido VALUES (2, getdate());
INSERT INTO pedido VALUES (4, getdate());
INSERT INTO pedido VALUES (7, getdate());

SELECT * FROM pedido;

create table produto (
	id int not null identity(1,1) PRIMARY KEY,
	nome varchar(30),
	apelido varchar(30),
	dt_cadastro datetime not null default getdate(),
	valor float default 0,
	qtd int default 0
);

INSERT INTO produto VALUES ('Lápis', 'Lápis', getdate(), 1.45, 20);
INSERT INTO produto VALUES ('Garrafa', 'Garrafa', getdate(), 20.99, 14);
INSERT INTO produto VALUES ('Copo', 'Copo', getdate(), 1.99, 35);
INSERT INTO produto VALUES ('Livro', 'Livro', getdate(), 35.5, 12);
INSERT INTO produto VALUES ('Celular', 'Celular', getdate(), 1299.99, 4);
INSERT INTO produto VALUES ('Prato', 'Prato', getdate(), 22.99, 13);
INSERT INTO produto VALUES ('Fone de Ouvido', 'Fone de Ouvido', getdate(), 89.99, 5);
INSERT INTO produto VALUES ('Mouse', 'Mouse', getdate(), 22.35, 8);
INSERT INTO produto VALUES ('Colher', 'Colher', getdate(), 0.99, 16);

SELECT * FROM produto;

create table itempedido (
	id int not null identity(1,1) PRIMARY KEY,
	id_ped int not null ,
	id_prod int not null ,
	qtd int not null ,
	valor float not null
);

INSERT INTO itempedido VALUES(1, 7, 2, 89.99);
INSERT INTO itempedido VALUES(2, 4, 1, 35.50);
INSERT INTO itempedido VALUES(2, 5, 1, 1299.99);
INSERT INTO itempedido VALUES(2, 6, 1, 22.99);
INSERT INTO itempedido VALUES(3, 3, 1, 1.99);
INSERT INTO itempedido VALUES(3, 5, 3, 1299.99);
INSERT INTO itempedido VALUES(3, 8, 1, 22.35);
INSERT INTO itempedido VALUES(3, 9, 1, 0.99);
INSERT INTO itempedido VALUES(4, 9, 2, 0.99);
INSERT INTO itempedido VALUES(5, 3, 1, 1.99);
INSERT INTO itempedido VALUES(5, 6, 1, 22.99);
INSERT INTO itempedido VALUES(6, 2, 2, 20.99);
INSERT INTO itempedido VALUES(6, 4, 1, 35.50);
INSERT INTO itempedido VALUES(6, 5, 3, 1299.99);
INSERT INTO itempedido VALUES(7, 7, 1, 89.99);
INSERT INTO itempedido VALUES(8, 1, 1, 1.45);
INSERT INTO itempedido VALUES(9, 3, 1, 1.99);
INSERT INTO itempedido VALUES(9, 8, 4, 22.35);
INSERT INTO itempedido VALUES(9, 9, 1, 0.99);
INSERT INTO itempedido VALUES(10, 6, 1, 22.99);
INSERT INTO itempedido VALUES(11, 5, 2, 1299.99);
INSERT INTO itempedido VALUES(11, 9, 2, 0.99);
INSERT INTO itempedido VALUES(12, 2, 1, 20.99);
INSERT INTO itempedido VALUES(12, 4, 6, 35.50);
INSERT INTO itempedido VALUES(13, 2, 1, 20.99);
INSERT INTO itempedido VALUES(13, 8, 4, 22.35);
INSERT INTO itempedido VALUES(13, 9, 1, 0.99);
INSERT INTO itempedido VALUES(14, 3, 2, 1.99);
INSERT INTO itempedido VALUES(14, 7, 1, 89.99);
INSERT INTO itempedido VALUES(14, 8, 2, 22.35);
INSERT INTO itempedido VALUES(15, 9, 1, 0.99);
INSERT INTO itempedido VALUES(16, 3, 1, 1.99);
INSERT INTO itempedido VALUES(16, 7, 6, 89.99);
INSERT INTO itempedido VALUES(16, 7, 1, 89.99);
INSERT INTO itempedido VALUES(17, 1, 4, 1.45);
INSERT INTO itempedido VALUES(17, 8, 1, 22.35);
INSERT INTO itempedido VALUES(19, 2, 2, 20.99);
INSERT INTO itempedido VALUES(20, 6, 1, 22.99);
INSERT INTO itempedido VALUES(20, 8, 1, 22.35);
