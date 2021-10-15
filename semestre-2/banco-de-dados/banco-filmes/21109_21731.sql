-- LISTA DE EXERCICIOS BANCO DE DADOS II
-- NATALIE GOMES DE MORAES RA: 21109	
-- VINICIUS RAFAEL GRANADO RA: 21731

-- 1
CREATE VIEW qtdDeFilmesPorPersonagem AS
	SELECT personagem.per_nome AS nomePersonagem, COUNT(personagem.per_nome) AS qtdFilmes FROM filme
	INNER JOIN casting
	ON filme.fil_id = casting.fil_id
	INNER JOIN personagem
	ON personagem.per_id = casting.per_id
	GROUP BY personagem.per_nome;

SELECT nomePersonagem FROM qtdDeFilmesPorPersonagem
WHERE qtdFilmes = (SELECT MAX(qtdFilmes) FROM qtdDeFilmesPorPersonagem);

-- 2
SELECT nomePersonagem FROM qtdDeFilmesPorPersonagem
WHERE qtdFilmes = (SELECT MIN(qtdFilmes) FROM qtdDeFilmesPorPersonagem);

-- 3
SELECT filme.fil_nome AS nomeFilme, COUNT(personagem.per_id) AS qtdPersonagens FROM filme
INNER JOIN casting
ON filme.fil_id = casting.fil_id
INNER join personagem
ON personagem.per_id = casting.per_id
GROUP BY filme.fil_nome;

-- 4
SELECT filme.fil_nome AS nomeFilme, baixas.qtd AS qtdBaixas FROM filme
INNER JOIN baixas
ON filme.fil_id = baixas.fil_id;

-- 5
CREATE VIEW qtdBaixasPorLocal AS
	SELECT local.loc_descr AS local, SUM(baixas.qtd) AS qtdBaixas FROM local
	INNER JOIN baixas
	ON local.loc_id = baixas.loc_id
	GROUP BY local.loc_descr;

SELECT * FROM qtdBaixasPorLocal;

-- 6
SELECT local FROM qtdBaixasPorLocal
WHERE qtdBaixas = (SELECT MAX(qtdBaixas) FROM qtdBaixasPorLocal);

-- 7
SELECT local FROM qtdBaixasPorLocal
WHERE qtdBaixas = (SELECT MIN(qtdBaixas) FROM qtdBaixasPorLocal);

-- 8
CREATE VIEW qtdBaixasPorPersonagem AS
	SELECT personagem.per_nome AS personagem, SUM(baixas.qtd) AS qtdBaixas FROM personagem
	INNER JOIN baixas
	ON personagem.per_id = baixas.per_id
	GROUP BY personagem.per_nome;

SELECT * FROM qtdBaixasPorPersonagem;

-- 9
SELECT personagem FROM	qtdBaixasPorPersonagem
WHERE qtdBaixas = (SELECT MAX(qtdBaixas) from qtdBaixasPorPersonagem);

-- 10
SELECT personagem FROM	qtdBaixasPorPersonagem
WHERE qtdBaixas = (SELECT MIN(qtdBaixas) from qtdBaixasPorPersonagem);