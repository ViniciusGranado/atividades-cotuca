public class BaicFunctions {
  public static void main(String[] args) {
    // isNegativo()
    System.out.println(isNegativo(-5));
    System.out.println(isNegativo(5));
    
    // sum()
    System.out.println(sum(-5, 8));
    System.out.println(sum(5, -8));
    
    // minus()
    System.out.println(minus(5, 3));
    System.out.println(minus(-10, 5));
    System.out.println(minus(10, -5));
    System.out.println(minus(-10, -5));
    
    // greaterThan()
    System.out.println(greaterThan(5, 2));
    System.out.println(greaterThan(2 , 10));
    System.out.println(greaterThan(-2, -5));
    System.out.println(greaterThan(-5, -2));
    System.out.println(greaterThan(2, 2));
  };
  
  static boolean isNegativo(int n) {
    if (n == 0) return false;

    return isNegativo(n, n);
  };

  static int sum(int n, int m) {
    if (m == 0) return n;

    if (isNegativo(m)) {
      return sum(n - 1, m + 1);
    }

    return sum(n + 1, m - 1);
  };
  
  static int minus(int n, int m) {
    if (m == 0) return n;

    if (isNegativo(m)) {
      return minus(n + 1, m + 1);
    }

    return minus(n - 1, m - 1);
  }
  
  static boolean greaterThan(int n, int m) {
    if (m == n) return false;

    if (m == 0) {
        return !isNegativo(n);
    }
    
    if (isNegativo(m)) {
        return greaterThan(++n, ++m);
    }

    return greaterThan(--n, --m);
  }
  
  //////////////

  static boolean isNegativo(int a, int d) {
    if (a == -1) return true;
    if (d == 1) return false;
    
    return isNegativo(a + 1, d - 1);
  }
}