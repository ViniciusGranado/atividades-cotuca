void setup() {
  // put your setup code here, to run once:
 Serial.begin(19200);
}
int i = 0;
bool sentido = true;
void loop() {

  if (sentido)
   i++;
  else  
   i--; 
  Serial.println(i);
  delay(400);
  if (i > 30)
    sentido = false;
  if (i < 1)
    sentido = true; 


}
