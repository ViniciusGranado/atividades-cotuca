import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class HorarioIntervalo {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    int horaIntervalo = 0;
    int minutoIntervalo = 0;
    int horaNow = 0;
    int minutoNow = 0;
    Date intervalo = null;

    boolean isIntervalo = false;
    System.out.print("Digite o horário do intervalo: ");


    try {
      intervalo = new SimpleDateFormat("HH:mm").parse(scanner.nextLine());
      horaIntervalo = intervalo.getHours();

      minutoIntervalo = intervalo.getMinutes();
    } catch (Exception e) {
      e.printStackTrace();
      System.exit(1);
    }


    do {
      Date now = new Date();
      horaNow = now.getHours();
      minutoNow = now.getMinutes();


      if (horaNow == horaIntervalo && minutoNow == minutoIntervalo) {
        isIntervalo = true;
        continue;
      }

      int horas;
      int minutos;

      if (minutoIntervalo >= minutoNow) {
        horas = horaIntervalo - horaNow;
        minutos = minutoIntervalo - minutoNow;
      } else {
        horas = (horaIntervalo -  horaNow) - 1;
        minutos = (60 + minutoIntervalo) - minutoNow;
      }

      System.out.println("\nQue pena");
      System.out.printf("Ainda faltam %d horas e %d minutos para o intervalo\n\n", -horas, minutos);

      try {
        Thread.sleep(60000);
      } catch (InterruptedException e) {
        e.printStackTrace();
        System.exit(1);
      }
    } while (!isIntervalo);

    System.out.println("UHUL, CHEGOU O INTERVALO");
  }
}
  