CREATE DATABASE ArvoreGenealogica;
DROP DATABASE ArvoreGenealogica;

USE ArvoreGenealogica;

CREATE TABLE Pessoa (
	numero SMALLINT UNSIGNED AUTO_INCREMENT, 
    nome VARCHAR(50) NOT NULL,
    sexo CHAR(1) NOT NULL,
    PRIMARY KEY(numero)
);
DESCRIBE Pessoa;

CREATE TABLE Nascimento (
	numero SMALLINT UNSIGNED AUTO_INCREMENT,
    data DATE,
    local VARCHAR(50),
    filho SMALLINT UNSIGNED,
    pai SMALLINT UNSIGNED,
    mae SMALLINT UNSIGNED,
    PRIMARY KEY (numero),
    FOREIGN KEY (filho) REFERENCES Pessoa(numero),
	FOREIGN KEY (pai) REFERENCES Pessoa(numero),
	FOREIGN KEY (mae) REFERENCES Pessoa(numero)
);
DESCRIBE Nascimento;

CREATE TABLE Morte (
	numero SMALLINT UNSIGNED AUTO_INCREMENT,
    data DATE,
    local VARCHAR(50),
    morto SMALLINT UNSIGNED,
	PRIMARY KEY (numero),
    FOREIGN KEY (morto) REFERENCES Pessoa(numero)
);
DESCRIBE Morte;

CREATE TABLE Casamento (
	numero SMALLINT UNSIGNED AUTO_INCREMENT,
    data DATE,
    local VARCHAR(50),
    esposo SMALLINT UNSIGNED,
    esposa SMALLINT UNSIGNED,
    NNEsposo VARCHAR(50),
    NNEsposa VARCHAR(50),
    PRIMARY KEY (numero),
    FOREIGN KEY (esposo) REFERENCES Pessoa(numero),
    FOREIGN KEY (esposa) REFERENCES Pessoa(numero)
);
DESCRIBE Casamento;

CREATE TABLE Separacao (
	numero SMALLINT UNSIGNED AUTO_INCREMENT,
    data DATE,
    local VARCHAR(50),
    casamento SMALLINT UNSIGNED,
    PRIMARY KEY (numero),
    FOREIGN KEY (casamento) REFERENCES Casamento(numero)
);
DESCRIBE Separacao;

-- INSERCAO DE DADOS