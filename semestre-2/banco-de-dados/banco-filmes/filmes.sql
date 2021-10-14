CREATE DATABASE Filmes;
GO

USE Filmes;
GO

create table personagem (
	per_id int PRIMARY KEY identity(1,1),
	per_nome varchar(30),
	per_cidade varchar(30) default 'Campinas',
	dt_cadastro datetime not null default getdate()
)
GO

INSERT INTO personagem values('John Rambo', 'Bowie', getdate());
GO
INSERT INTO personagem values('John Wick', 'Padhorje', getdate());
GO
INSERT INTO personagem values('Lara Croft', 'Londres', getdate());
GO
INSERT INTO personagem values('Tony Stark', 'Nova York', getdate());

create table filme (
	fil_id int PRIMARY KEY identity(1,1),
	fil_nome varchar(30),
	fil_dt datetime not null default getdate(),
)
GO

INSERT INTO filme VALUES('Rambo: First Blood', getdate());
GO
INSERT INTO filme VALUES('Rambo II', getdate());
GO
INSERT INTO filme VALUES('Rambo III', getdate());
GO
INSERT INTO filme VALUES('Rambo IV', getdate());
GO
INSERT INTO filme VALUES('Rambo V: Last Blood', getdate());
GO

INSERT INTO filme VALUES('John Wick', getdate());
GO
INSERT INTO filme VALUES('John Wick: Chapter 2', getdate());
GO
INSERT INTO filme VALUES('John Wick: Chapter 3', getdate());
GO

INSERT INTO filme VALUES('Lara Croft: Tomb Raider', getdate());
GO
INSERT INTO filme VALUES('Lara Croft: Tomb Raider 2', getdate());
GO

INSERT INTO filme VALUES('Iron Man', getdate());
GO
INSERT INTO filme VALUES('Iron Man 2', getdate());
GO
INSERT INTO filme VALUES('Iron Man 3', getdate());
GO

create table casting (
	per_id int FOREIGN KEY REFERENCES personagem(per_id),
	fil_id int FOREIGN KEY REFERENCES filme(fil_id),
	PRIMARY KEY (per_id, fil_id),
)
GO

INSERT INTO casting VALUES(1, 1);
GO
INSERT INTO casting VALUES(1, 2);
GO
INSERT INTO casting VALUES(1, 3);
GO
INSERT INTO casting VALUES(1, 4);
GO
INSERT INTO casting VALUES(1, 5);
GO

INSERT INTO casting VALUES(2, 6);
GO
INSERT INTO casting VALUES(2, 7);
GO
INSERT INTO casting VALUES(2, 8);
GO

INSERT INTO casting VALUES(3, 9);
GO
INSERT INTO casting VALUES(3, 10);
GO

INSERT INTO casting VALUES(4, 11);
GO
INSERT INTO casting VALUES(4, 12);
GO
INSERT INTO casting VALUES(4, 13);
GO

create table local (
	loc_id int PRIMARY KEY identity(1,1),
	loc_descr varchar(30),
)
GO

INSERT INTO local VALUES('Hope');
GO
INSERT INTO local VALUES('Thailand');
GO
INSERT INTO local VALUES('Afghanistan');
GO
INSERT INTO local VALUES('Bowie');
GO

INSERT INTO local VALUES('New York');
GO


INSERT INTO local VALUES('Angkor');
GO
INSERT INTO local VALUES('Tanzania');
GO

create table baixas (
	bai_id int PRIMARY KEY identity(1,1),
	fil_id int FOREIGN KEY REFERENCES filme(fil_id),
	per_id int FOREIGN KEY REFERENCES personagem(per_id),
	loc_id int FOREIGN KEY REFERENCES local(loc_id),
	bix_dt datetime not null default getdate(),
	qtd int default 0,
)

INSERT INTO baixas VALUES(1, 1, 1, getdate(), 1);
GO
INSERT INTO baixas VALUES(2, 1, 2, getdate(), 75);
GO
INSERT INTO baixas VALUES(3, 1, 3, getdate(), 115);
GO
INSERT INTO baixas VALUES(4, 1, 2, getdate(), 254);
GO
INSERT INTO baixas VALUES(5, 1, 4, getdate(), 46);
GO

INSERT INTO baixas VALUES(6, 2, 5, getdate(), 77);
GO
INSERT INTO baixas VALUES(7, 2, 5, getdate(), 128);
GO
INSERT INTO baixas VALUES(8, 2, 5, getdate(), 94);
GO

INSERT INTO baixas VALUES(9, 3, 6, getdate(), 17);
GO
INSERT INTO baixas VALUES(10, 3, 7, getdate(), 22);
GO

INSERT INTO baixas VALUES(11, 4, 5, getdate(), 43);
GO
INSERT INTO baixas VALUES(12, 4, 5, getdate(), 31);
GO
INSERT INTO baixas VALUES(13, 4, 5, getdate(), 34);
GO