public class IsNegativo {
  public static void main(String[] args) {
    System.out.println(isNegativo(-5));
    System.out.println(isNegativo(5));
    
    System.out.println(sum(-5, 8));
  };
  
  static boolean isNegativo(int n) {
    return isNegativo(n, n);
  };

  static int sum(int n, int m) {
    if (m == 0) {
      return n;
    }

    if (isNegativo(m)) {
      return sum(n - 1, m + 1);
    }

    return sum(n + 1, m - 1);
  };
  
  //////////////

  static boolean isNegativo(int a, int d) {
    if (a == -1) return true;
    if (d == 1) return false;
    
    return isNegativo(a + 1, d - 1);
  }
}