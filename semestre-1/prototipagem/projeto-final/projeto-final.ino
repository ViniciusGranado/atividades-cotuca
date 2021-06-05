void setup()
{
  for (int i = 3; i <= 11; i++)
  {
    pinMode(i, OUTPUT);
  }
  
  bool demoMode = true;
  int demoModeCounter = 0;
}

void loop()
{

}

void selecionarEfeito(int efeito)
{
  apagarTodosLeds();

  switch (efeito)
  {
  case 0:
    efeito0();
    break;
  case 1:
    efeito1();
    break;
  case 2:
    efeito2();
    break;
  case 3:
    efeito3();
    break;
  case 4:
    efeito4();
    break;
  }
}

void efeito0()
{
  for (int i = 3; i <= 10; i++)
  {
    digitalWrite(i, HIGH);
    digitalWrite(i - 1, LOW);
    delay(300);
  }
}

void efeito1()
{
  for (int i = 0; i < 2; i++)
  {
    for (int j = 0; j < 2; j++)
    {
      acenderTodosLeds();
      delay(200);

      apagarTodosLeds();
      delay(200);
    }
    delay(500);
  }
}

void efeito2()
{
  for (int i = 0; i < 2; i++)
  {
    digitalWrite(7, LOW);
    digitalWrite(8, LOW);
    digitalWrite(9, LOW);

    digitalWrite(3, HIGH);
    digitalWrite(4, HIGH);
    digitalWrite(5, HIGH);

    delay(300);

    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW);

    digitalWrite(7, HIGH);
    digitalWrite(8, HIGH);
    digitalWrite(9, HIGH);

    delay(300);
  }
}

void efeito3()
{
  digitalWrite(7, HIGH);
  delay(500);

  digitalWrite(7, LOW);
  digitalWrite(3, HIGH);
  delay(500);

  digitalWrite(3, LOW);
  digitalWrite(5, HIGH);
  delay(500);

  digitalWrite(5, LOW);
  digitalWrite(9, HIGH);
  delay(500);
}

void efeito4()
{
  for (int i = 0; i < 3; i++)
  {
    acenderTodosLeds();
    delay(200);
    apagarTodosLeds();
    delay(200);
  }

  delay(200);

  for (int i = 0; i < 3; i++)
  {
    acenderTodosLeds();
    delay(300);
    apagarTodosLeds();
    delay(300);
  }

  delay(200);

  for (int i = 0; i < 3; i++)
  {
    acenderTodosLeds();
    delay(200);
    apagarTodosLeds();
    delay(200);
  }

  apagarTodosLeds();
  delay(500);
}

void acenderTodosLeds ()
{
  for (int i = 3; i <= 10; i++)
  {
    digitalWrite(i, HIGH);
  }
}

void apagarTodosLeds ()
{
  for (int i = 3; i <= 10; i++)
  {
    digitalWrite(i, LOW);
  }
}