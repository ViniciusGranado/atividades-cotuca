// VINICIUS RAFAEL GRANADO
// RA: 21731

// NO ENUNCIADO DA ATIVIDADE FOI PEDIDO QUE SE UTILIZASSE
// O SENSOR DE TEMPERATURA LM35, POREM ELE NAO ESTA
// DISPONIVEL NO TINKERCAD, E POR ISSO FOI UTILIZADO
// O SENSOR TMP36. OS METODOS DE MEDICAO DOS DOIS
// SAO PARECIDOS, MAS O TMP36 NECESSITA DE UMA FORMULA
// DE CONVERSAO DIFERENTE PARA SE OBTER A TEMPERATURA
// EM GRAUS CELSIUS

#include <LiquidCrystal.h>

const int sensorTemp = A0; // porta sensor temperatura
float valorSensor; // valor lido pelo sensor
float temperatura; // temperatura lida pelo sensor

LiquidCrystal lcd(12, 11, 5, 4, 3, 2); // inicia LCD

void setup()
{
  Serial.begin(9600); // inicia monitor serial
  pinMode(sensorTemp, INPUT); // inicia porta do sensor como INPUT
   
  lcd.begin(16, 2); // inicializa LCD com 2 linhas e 16 colunas
}

void loop()
{
  lcd.print("RA: 21731");
  
  valorSensor = analogRead(sensorTemp); // le valor do sensor
  
  // converte valor lido pelo sensor para temperatura em C
  temperatura = ((valorSensor / 1024 * 5) - 0.5) * 100;

  // escreve temperatura no monitor serial
  Serial.print("Temperatura: ");
  Serial.println(temperatura);
  
  // escreve temperatura no LCD
  lcd.setCursor(0, 1);
  lcd.print("Temp: " + (String)temperatura + "C");
  
  delay(1000);
  
  // limpa LCD
  lcd.clear();
}