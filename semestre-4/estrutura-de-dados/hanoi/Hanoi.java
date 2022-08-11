public class Hanoi {
    public static void main (String[] args) {
        try {
            hanoi(4, 'A', 'B', 'C');
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    static void hanoi (int qtsAnilhas, char pinoOrigem, char pinoAux, char pinoDestino) throws Exception {
        if (qtsAnilhas == 0) return;
        
        hanoi(qtsAnilhas - 1, pinoOrigem, pinoDestino, pinoAux);
        moveDisco(pinoOrigem, pinoDestino);
        hanoi(qtsAnilhas - 1, pinoAux, pinoOrigem, pinoDestino);
    }
    
    static void moveDisco(char origem, char destino) {
        System.out.println("Move de " + origem + " para " + destino);
    };
}



