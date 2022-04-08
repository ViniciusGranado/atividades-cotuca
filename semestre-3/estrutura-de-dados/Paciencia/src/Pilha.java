public class Pilha {
  protected Carta[] cartas;
  protected int topo;

  public Pilha(int qty) {
    cartas = new Carta[qty];
    topo = -1;
  }

  public Pilha() {
    this(10);
  }

  public void empilhar(Carta carta) throws Exception {
    if (estaCheia()) {
      throw new Exception("Overflow");
    }

    if (carta == null) {
      throw new Exception("Invalid Object");
    }

    topo++;
    cartas[topo] = carta;
  }

  public Carta desempilhar() throws Exception {
    if (estaVazia()) {
      throw new Exception("Pilha vazia");
    }

    topo--;

    return cartas[topo + 1];
  }

  public Carta consulta() throws Exception {
    if (estaVazia()) {
      throw new Exception("Underflow Error");
    }
    return cartas[topo];
  }

  public boolean estaCheia() throws Exception {
    return topo == cartas.length - 1;
  }

  public boolean estaVazia() throws Exception {
    return topo == -1;
  }
}
