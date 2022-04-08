public class Baralho {
  protected Pilha cartas = new Pilha(52);

  public Baralho() {
    for (int valor = 1; valor < 14; valor++) {
      for (int naipe = 1; naipe < 5; naipe++) {
        try {
          cartas.empilhar(new Carta(naipe, valor));
        } catch (Exception e) {
          e.printStackTrace();
          System.exit(1);
        }
      }
    };
  }

  @Override
  public String toString() {
    String ret = "";

    for (Carta carta : cartas.cartas) {
      ret += carta + "\n";
    }

    return ret;
  }
}
