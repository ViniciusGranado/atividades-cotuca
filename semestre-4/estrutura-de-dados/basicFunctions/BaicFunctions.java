public class BasicFunctions {
  public static void main(String[] args) {
    // isNegativo()
    System.out.println("isNegativo():");
    
    System.out.print("-5: ");
    System.out.println(isNegativo(-5));
    
    System.out.print("5: ");
    System.out.println(isNegativo(5));
    System.out.println();
    
    // sum()
    System.out.println("\nsum():");
    
    System.out.print("5 + 8 = ");
    System.out.println(sum(5, 8));
    
    System.out.print("5 + -8 = ");
    System.out.println(sum(5, -8));
    
    System.out.print("-5 + 8 = ");
    System.out.println(sum(-5, 8));
    
    System.out.print("-5 + -8 = ");
    System.out.println(sum(-5, -8));
    
    System.out.print("5 + 0 = ");
    System.out.println(sum(5, 0));
    
    System.out.print("0 + 5 = ");
    System.out.println(sum(0, 5));
    
    // minus()
    System.out.println("\nminus():");
    
    System.out.print("5 - 8 = ");
    System.out.println(minus(5, 8));

    System.out.print("-5 - (-8) = ");
    System.out.println(minus(5, -8));
    
    System.out.print("-5 - 8 = ");
    System.out.println(minus(5, 8));
    
    System.out.print("5 - (-8) = ");
    System.out.println(minus(5, -8));
    
    System.out.print("5 - 0 = ");
    System.out.println(minus(5, 0));
    
    System.out.print("0 - 5 = ");
    System.out.println(minus(0, 5));

    // greaterThan()
    System.out.println("\ngreaterThan():");
    
    System.out.print("5 > 8 = ");
    System.out.println(greaterThan(5, 8));

    System.out.print("8 > 5 = ");
    System.out.println(greaterThan(8, 5));
    
    System.out.print("-5 > 8 = ");
    System.out.println(greaterThan(-5, 8));
    
    System.out.print("5 > -8 = ");
    System.out.println(greaterThan(5, -8));
    
    System.out.print("5 > 5 = ");
    System.out.println(greaterThan(5, 8));
    
    // gte()
    System.out.println("\ngte():");
    
    System.out.print("5 >= 8 = ");
    System.out.println(gte(5, 8));

    System.out.print("8 >= 5 = ");
    System.out.println(gte(8, 5));
    
    System.out.print("-5 >= 8 = ");
    System.out.println(gte(-5, 8));
    
    System.out.print("5 >= -8 = ");
    System.out.println(gte(5, -8));
    
    System.out.print("5 >= 5 = ");
    System.out.println(gte(5, 5));
    
    // lessThan()
    System.out.println("\nlessThan():");
    
    System.out.print("5 < 8 = ");
    System.out.println(lessThan(5, 8));

    System.out.print("8 < 5 = ");
    System.out.println(lessThan(8, 5));
    
    System.out.print("-5 < 8 = ");
    System.out.println(lessThan(-5, 8));
    
    System.out.print("5 < -8 = ");
    System.out.println(lessThan(5, -8));
    
    System.out.print("5 < 5 = ");
    System.out.println(lessThan(5, 8));

    // lte()
    System.out.println("\nlte():");
    
    System.out.print("5 <= 8 = ");
    System.out.println(lte(5, 8));

    System.out.print("8 <= 5 = ");
    System.out.println(lte(8, 5));
    
    System.out.print("-5 <= 8 = ");
    System.out.println(lte(-5, 8));
    
    System.out.print("5 <= -8 = ");
    System.out.println(lte(5, -8));
    
    System.out.print("5 <= 5 = ");
    System.out.println(lte(5, 5));
    
    // abs()
    System.out.println("\nabs():");
    
    System.out.print("|5| = ");
    System.out.println(abs(5));

    System.out.print("|-5| = ");
    System.out.println(abs(-5));
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
  
  static boolean gte(int n, int m) {
    if (m == n) return true;

    if (m == 0) {
      return !isNegativo(n);
    }
    
    if (isNegativo(m)) {
      return gte(++n, ++m);
    }

    return gte(--n, --m);
  }
  
  static boolean lessThan(int n, int m) {
    if (m == n) return false;

    if (m == 0) {
      return isNegativo(n);
    }
    
    if (isNegativo(m)) {
      return lessThan(++n, ++m);
    }

    return lessThan(--n, --m);
  }
  
  static boolean lte(int n, int m) {
    if (m == n) return true;

    if (m == 0) {
      return isNegativo(n);
    }
    
    if (isNegativo(m)) {
      return lessThan(++n, ++m);
    }

    return lessThan(--n, --m);
  }

  static int abs(int n) {
    if (!isNegativo(n)) return n;

    return sum(sum(n, -n), -n);
  }
  
  //////////////

  static boolean isNegativo(int a, int d) {
    if (a == -1) return true;
    if (d == 1) return false;
    
    return isNegativo(a + 1, d - 1);
  }
}