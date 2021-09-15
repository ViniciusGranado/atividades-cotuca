-- A
SELECT
Emp.Departamento.nomeDepto AS NomeDepartamento,
COUNT(Emp.Empregado.numDepto) AS NumeroFuncionarios
FROM Emp.Empregado
INNER JOIN Emp.Departamento
ON Emp.Empregado.numDepto = Emp.Departamento.numDepto
GROUP BY Emp.Departamento.nomeDepto
HAVING AVG(Emp.Empregado.salario) > 30000;

-- B
SELECT numDepto,
COUNT(sexo) as NumeroSexoMasculino
FROM Emp.Empregado
WHERE sexo = 'M' AND salario > 30000
GROUP BY numDepto;

-- C
SELECT prenome from Emp.Empregado
WHERE numDepto = (
	SELECT numDepto from Emp.Empregado
	WHERE salario = (
		SELECT MAX(salario) from Emp.Empregado
	)
);

-- D
SELECT prenome, inicialMeio, sobrenome FROM Emp.Empregado
WHERE super_numSegSocial IN (
	SELECT numSegSocial  FROM Emp.Empregado
	WHERE super_numSegSocial = '888665555'
)

-- E
SELECT prenome, inicialMeio, sobrenome FROM Emp.Empregado
WHERE salario > (
	SELECT MIN(salario) FROM Emp.Empregado
) + 10000

-- F
SELECT TOP 1 prenome, inicialMeio, sobrenome FROM Emp.Empregado
WHERE numDepto = (
	SELECT numDepto
	FROM Emp.Empregado
	GROUP BY numDepto
	HAVING AVG(salario) = (
		SELECT TOP 1 AVG(salario) AS media
		FROM Emp.Empregado
		GROUP BY numDepto
		ORDER BY media DESC
	)
) 
ORDER BY salario;