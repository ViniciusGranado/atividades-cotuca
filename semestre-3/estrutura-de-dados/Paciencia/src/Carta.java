public class Carta {
  protected int naipe;
  protected int valor;

  public Carta(int naipe, int valor) {
    this.naipe = naipe;
    this.valor = valor;
  }

  public int getNaipe() {
    return naipe;
  }

  public int getValor() {
    return valor;
  }

  public String toString() {
    return qualValor(valor) + " de " + qualNaipe(naipe);
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
    switch (valor) {
      case 1:
        return "PAUS";
      case 2:
        return "OURO";
      case 3:
        return "ESPADAS";
      default:
        return "COPAS";
    }
  }
}
