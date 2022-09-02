const int pinoSensor = A2; // pino sensor
const int pinoLed = 7;
float temp = 0; // variavel temperatura

void setup() {
  Serial.begin(19200);
  pinMode(pinoLed, OUTPUT);
}

void loop() {
  // le temperatura do sensor
  temp = analogRead(pinoSensor) * 0.0048828125 * 100;

  // imprime temperatura no monitor serial
  Serial.println(String(temp) + "ºC");

  delay(500);
  
  // controla se led esta ligado ou desligado dependendo da temperatura
  if(temp <= 27) {
    digitalWrite(pinoLed, LOW);
  } else if(temp > 27) {
    digitalWrite(pinoLed, HIGH);
  }
}
