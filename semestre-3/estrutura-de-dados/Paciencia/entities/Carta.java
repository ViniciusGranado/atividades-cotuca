package entities;

public class Carta {
  private int naipe;
  private int valor;
  private boolean estaVirada;


  final String[] strNaipe = {"Paus", "Copas", "Espada", "Ouro"};

  public Carta(int naipe, int valor) {
    this.naipe = naipe;
    this.valor = valor;
    this.estaVirada = false;
  }

  public int getNaipe() {
    return naipe;
  }

  public int getValor() {
    return valor;
  }

  public boolean isEstaVirada() {
    return estaVirada;
  }

  public void setEstaVirada(boolean estaVirada) {
    this.estaVirada = estaVirada;
  }

  public String color() {
    if (naipe % 2 == 0) {
      return "PRETO";
    }

    return "VERMELHO";
  }

  public String qualValor(int valor) {
    switch (valor) {
      case 1:
        return "A";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return Integer.toString(valor);
    }
  }

  public String qualNaipe(int valor) {
    return strNaipe[valor];
  }

  @Override
  public String toString() {
    return qualValor(valor) + " de " + qualNaipe(naipe);
  }
}
