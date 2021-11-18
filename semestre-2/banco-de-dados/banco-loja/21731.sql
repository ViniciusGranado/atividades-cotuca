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
HAVING COUNT(produto.nome) = 0
