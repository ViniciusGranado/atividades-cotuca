public class Main {

  public static void main(String[] args) {
    Arvore<String> arvore = new Arvore<String>();

    try {
      arvore.include("Java");
      arvore.include("C");
      arvore.include("Python");
      arvore.include("C++");
    } catch (Exception e) {
      System.out.println(e);
    }

    //System.out.println(arvore);
    System.out.println(arvore.getQtNodes());
  }
}
