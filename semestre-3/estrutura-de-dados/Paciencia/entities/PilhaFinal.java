package entities;

public class PilhaFinal extends Pilha {
    @Override
    public void empilhar(Carta carta) throws Exception {
        if (estaCheia()) {
            throw new Exception("Overflow");
        }

        if (carta == null) {
            throw new Exception("Invalid Object");
        }

        if ((estaVazia() && carta.getValor() != 1) ||
                carta.getNaipe() != consulta().getNaipe() ||
                carta.getValor() != consulta().getValor() + 1) {
            throw new Exception("Invalid move");
        }

        topo++;
        cartas[topo] = carta;
    }
}
