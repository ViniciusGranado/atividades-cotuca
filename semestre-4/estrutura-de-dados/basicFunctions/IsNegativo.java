public class IsNegativo {
    public static void main(String[] args) {
        System.out.println(isNegativo(-5));
        System.out.println(isNegativo(5));
    };
    
    static boolean isNegativo(int n) {
        return isNegativo(n, n);
    };
    
    static boolean isNegativo(int a, int d) {
        if (a == -1) return true;
        if (d == 1) return false;
        
        return isNegativo(a + 1, d - 1);
    }
}