package entities;

public class PilhaJogo extends Pilha {
    public PilhaJogo(int qty) {
        cartas = new Carta[qty];
        topo = -1;
    }

    public void empilhar(Carta carta, boolean useGamePileRules) throws Exception {
        if (estaCheia()) {
            throw new Exception("Overflow");
        }

        if (carta == null) {
            throw new Exception("Invalid Object");
        }

        if (useGamePileRules &&
                !estaVazia() &&
                carta.color() == consulta().color() &&
                carta.getValor() != consulta().getValor() - 1) {
            throw new Exception("Invalid move");
        }

        topo++;
        cartas[topo] = carta;
    }
}
