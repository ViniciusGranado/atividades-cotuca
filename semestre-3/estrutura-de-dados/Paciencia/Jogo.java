import entities.Baralho;
import entities.Carta;
import entities.PilhaJogo;

public class Jogo {
  public static void main(String[] args) {
    Baralho baralho = new Baralho();

    baralho.shuffle();

    PilhaJogo[] montinhos = new PilhaJogo[7];

    Carta carta = null;
    for (int i = 1; i <= 7; i++) {
      montinhos[i - 1] = new PilhaJogo(i);

      for(int j = 0; j < i; j++) {
        try {
          carta = baralho.getCartas().desempilhar();

          if (j == i - 1) {
            carta.setEstaVirada(true);
          }

          montinhos[i - 1].empilhar(carta, false);
        } catch (Exception e) {
          e.printStackTrace();
          System.exit(1);
        }
      }
    }

    for (PilhaJogo pilha : montinhos) {
      System.out.println(pilha);
      System.out.println("----------------------------");
    }
  }
}
