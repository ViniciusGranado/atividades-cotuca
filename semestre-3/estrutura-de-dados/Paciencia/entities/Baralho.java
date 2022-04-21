package entities;

import java.util.concurrent.ThreadLocalRandom;

public class Baralho {
  protected Pilha cartas = new Pilha(52);

  public Baralho() {
    for (int valor = 1; valor < 14; valor++) {
      for (int naipe = 0; naipe < 4; naipe++) {
        try {
          cartas.empilhar(new Carta(naipe, valor));
        } catch (Exception e) {
          e.printStackTrace();
          System.exit(1);
        }
      }
    };
  }

  public Pilha getCartas() {
    return cartas;
  }

  public void setCartas(Pilha cartas) {
    this.cartas = cartas;
  }

  public void shuffle() {
    int randomInt1;
    int randomInt2;
    Carta auxCard;

    for (int i = 0; i < 200; i++) {
      randomInt1 = ThreadLocalRandom.current().nextInt(0, 51);
      randomInt2 = ThreadLocalRandom.current().nextInt(0, 51);

      auxCard = this.cartas.cartas[randomInt1];
      this.cartas.cartas[randomInt1] = this.cartas.cartas[randomInt2];
      this.cartas.cartas[randomInt2] = auxCard;
    }
  }

  @Override
  public String toString() {
    return cartas.toString();
  }
}
