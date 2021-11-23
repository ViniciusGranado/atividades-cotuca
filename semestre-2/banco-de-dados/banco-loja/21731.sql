-- LISTA FINAL DE EXERCÍCIOS
-- VINICIUS RAFAEL GRANADO
-- RA: 21731

-- 1
SELECT cliente.id as idCliente, cliente.nome AS nomeCliente FROM cliente
LEFT JOIN pedido
ON cliente.id = pedido.id_cli
GROUP BY cliente.id, cliente.nome
HAVING COUNT(pedido.id_cli) = 0;

-- 2
SELECT produto.id, produto.nome FROM produto
LEFT JOIN itempedido
ON produto.id = itempedido.id_prod
GROUP BY produto.id, produto.nome
HAVING COUNT(itempedido.id_prod) = 0;

-- 3
SELECT id_ped, COUNT(id_prod) AS totalItensPedido FROM itempedido
GROUP BY id_ped;

-- 4
SELECT produto.id, produto.nome, SUM(itempedido.qtd) AS qtdPedidos FROM itempedido
INNER JOIN produto
ON itempedido.id_prod = produto.id
GROUP BY produto.id, produto.nome;

-- 5
SELECT id_prod, nome, (valor * quantidade) AS valorTotal FROM (
	SELECT id_prod, itempedido.valor, SUM(itempedido.qtd) AS quantidade, produto.nome FROM itempedido
	INNER JOIN produto
	ON itempedido.id_prod = produto.id
	GROUP BY itempedido.id_prod, itempedido.valor, produto.nome
) AS quantidadePorProduto
ORDER BY id_prod;

-- 6
CREATE VIEW valorTotalPorPedido AS
SELECT id_ped AS idPedido, SUM(qtd * valor) AS valorTotalPedido FROM itempedido
GROUP BY id_ped

SELECT idPedido, valorTotalPedido from valorTotalPorPedido
WHERE valorTotalPedido = (
	SELECT MAX(valorTotalPedido) from valorTotalPorPedido
);

DROP VIEW valorTotalPorPedido;

-- 7
SELECT id_cli AS idCliente, COUNT(id_cli) AS totalPedidos from pedido
GROUP BY id_cli;

-- 8
SELECT id_ped AS idPedido, SUM(qtd * valor) AS valorTotalPedido FROM itempedido
GROUP BY id_ped;

-- 9
CREATE VIEW valorTotalPorPedido AS
SELECT id_ped AS idPedido, SUM(qtd * valor) AS valorTotalPedido FROM itempedido
GROUP BY id_ped

SELECT idPedido, valorTotalPedido FROM valorTotalPorPedido
WHERE (valorTotalPedido = (
	SELECT MAX(valorTotalPedido) from valorTotalPorPedido
)) OR (valorTotalPedido = (
	SELECT MIN(valorTotalPedido) from valorTotalPorPedido
));

DROP VIEW valorTotalPorPedido;

-- 10
SELECT cliente.id, cliente.nome, COUNT(cliente.id) AS totalPedidos FROM pedido
INNER JOIN cliente
ON pedido.id_cli = cliente.id
GROUP BY cliente.id, cliente.nome

-- 11
CREATE TRIGGER updateProduto ON produto
AFTER UPDATE AS
	IF (((SELECT COUNT(*) FROM deleted) > 1) AND ((SELECT COUNT(*) FROM deleted) > 1 ))
	BEGIN
		PRINT 'Não é permitido alterar vários produtos de uma vez.';
		ROLLBACK TRAN;
		RETURN;
	END

	IF (EXISTS (SELECT * FROM itempedido WHERE id_prod = (SELECT id FROM deleted)))
	BEGIN
		PRINT('Não é permitido alterar produtos que já foram pedidos.');
		ROLLBACK TRAN;
		RETURN;
	END

	PRINT 'Update realizado com sucesso';

-- 12
CREATE TRIGGER deletarClienteComPedidos ON cliente
AFTER DELETE AS
	DECLARE @idClienteDeletado INT;

	DECLARE cr_deleted CURSOR FOR
		SELECT id FROM deleted;

	OPEN cr_deleted;

	FETCH NEXT FROM cr_deleted 
	INTO @idClienteDeletado

	WHILE @@FETCH_STATUS <> -1
	BEGIN
		
		DELETE FROM itempedido WHERE id_ped IN (
			SELECT id FROM PEDIDO WHERE id_cli = @idClienteDeletado
		)

		DELETE FROM pedido
		WHERE id_cli = @idClienteDeletado;

		FETCH NEXT FROM cr_deleted 
		INTO @idClienteDeletado
	END

	CLOSE cr_deleted;
	DEALLOCATE cr_deleted;

-- 13
CREATE PROCEDURE cadastraAtualizaCliente (
	@nome VARCHAR(30),
	@cidade VARCHAR(30),
	@id INT = -1
) AS
	SET NOCOUNT ON
	IF EXISTS(SELECT 1 FROM cliente WHERE nome = @nome OR id = @id)
	BEGIN
		UPDATE cliente
		SET nome = @nome,
			cidade = @cidade
		WHERE nome = @nome OR id = @id;

		PRINT 'Cliente atualizado com sucesso';
	END
	ELSE
		BEGIN
			INSERT INTO cliente VALUES(@nome, @cidade, getdate());
			PRINT 'Cliente inserido com sucesso';
		END

--14
CREATE PROCEDURE valorTotalDeVendaPorIdProduto (
	@id int
) AS 
	SELECT id_prod, nome, (valor * quantidade) AS valorTotal FROM (
		SELECT id_prod, itempedido.valor, SUM(itempedido.qtd) AS quantidade, produto.nome FROM itempedido
		INNER JOIN produto
		ON itempedido.id_prod = produto.id
		GROUP BY itempedido.id_prod, itempedido.valor, produto.nome
	) AS quantidadePorProduto
	WHERE id_prod = @id;

-- 15
CREATE PROCEDURE totalPedidosPorIdProduto (
	@id int
) AS 
	SELECT produto.id, produto.nome, SUM(itempedido.qtd) AS qtdPedidos FROM itempedido
	INNER JOIN produto
	ON itempedido.id_prod = produto.id
	WHERE produto.id = @id
	GROUP BY produto.id, produto.nome
