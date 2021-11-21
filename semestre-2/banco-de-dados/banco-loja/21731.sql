-- LISTA FINAL DE EXERCÍCIOS
-- VINICIUS RAFAEL GRANADO
-- RA: 21731

-- 1
SELECT pedido.id_cli, cliente.nome FROM pedido
INNER JOIN cliente
ON pedido.id_cli = cliente.id
GROUP BY id_cli, cliente.nome
HAVING COUNT(pedido.id_cli) = 0;

-- 2
SELECT produto.id, produto.nome FROM itempedido
INNER JOIN produto
ON itempedido.id_prod = produto.id
GROUP BY produto.id, produto.nome
HAVING COUNT(produto.id) = 0;

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

-- 7
SELECT cliente.id, cliente.nome, COUNT(cliente.id) AS totalPedidos FROM pedido
INNER JOIN cliente
ON pedido.id_cli = cliente.id
GROUP BY cliente.id, cliente.nome

-- 8
SELECT id_ped AS idPedido, SUM(qtd * valor) AS valorTotalPedido FROM itempedido
GROUP BY id_ped

-- 9
SELECT valorTotalPorPedido.idPedido, valorTotalPorPedido.valorTotalPedido from (
	SELECT id_ped AS idPedido, SUM(qtd * valor) AS valorTotalPedido FROM itempedido
	GROUP BY id_ped
) AS valorTotalPorPedido
WHERE (valorTotalPedido = (
	SELECT MAX(valorTotalPedido) from valorTotalPorPedido
)) OR (valorTotalPedido = (
	SELECT MIN(valorTotalPedido) from valorTotalPorPedido
));

-- 10
SELECT cliente.id, cliente.nome, COUNT(cliente.id) AS totalPedidos FROM pedido
INNER JOIN cliente
ON pedido.id_cli = cliente.id
GROUP BY cliente.id, cliente.nome

-- 11

-- 12

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
