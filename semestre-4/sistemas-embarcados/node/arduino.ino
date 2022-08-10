const int LED1 = 13
const int LED2 = 12
char x;

void setup() {
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);

  Serial.begin(9600);

}

void loop() {
  // le monitor serial e passa valor para variavel x
  if (Serial.available()) {
    x = Serial.read();
  }
  
  // liga os leds
  if(x == 'l' || x == 'L') {
    digitalWrite(LED1, HIGH);
    digitalWrite(LED2, HIGH);
  }
  
  // desliga os leds
  else if(x == 'd' || x == 'D') {
    digitalWrite(LED1, LOW);
    digitalWrite(LED2, LOW);
  }
}
