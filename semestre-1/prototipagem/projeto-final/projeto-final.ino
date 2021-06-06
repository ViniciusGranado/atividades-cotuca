#define botao 12

void setup()
{
  for (int i = 3; i <= 11; i++)
  {
    pinMode(i, OUTPUT);
  }

  pinMode(botao, INPUT_PULLUP);

  Serial.begin(9600);
}

bool demoMode = true;
int demoModeCounter = 49; // Char 1 ASCII
int efeitoSelecionado;

void loop()
{ 
  if (demoMode)
  {
    digitalWrite(11, HIGH);
    selecionarEfeito(demoModeCounter);
    demoModeCounter = (((demoModeCounter + 1) - 49) % 5) + 49; // Loop alteração efeito demoMode
  } else {
    digitalWrite(11, LOW);

    if (Serial.available())
    {
      efeitoSelecionado = Serial.read();

      if (efeitoSelecionado >= 49 && efeitoSelecionado <= 53)
      {
        Serial.print("Efeito ");
        Serial.print(efeitoSelecionado - 48);
        Serial.println(" selecionado.");
      }
      else
      {
        Serial.println("Opcao invalida.");
      }
    }

    selecionarEfeito(efeitoSelecionado);
  }
}

void selecionarEfeito(int efeito)
{
  apagarTodosLeds();

  switch (efeito)
  {
  case 49:
    efeito1();
    break;
  case 50:
    efeito2();
    break;
  case 51:
    efeito3();
    break;
  case 52:
    efeito4();
    break;
  case 53:
    efeito5();
    break;
  default:
    break;
  }
}

void efeito1()
{
  for (int i = 3; i <= 10; i++)
  {
    digitalWrite(i, HIGH);
    digitalWrite(i - 1, LOW);
    asyncDelay(300);
  }
}

void efeito2()
{
  for (int i = 0; i < 2; i++)
  {
    for (int j = 0; j < 2; j++)
    {
      acenderTodosLeds();
      asyncDelay(200);

      apagarTodosLeds();
      asyncDelay(200);
    }
    asyncDelay(500);
  }
}

void efeito3()
{
  for (int i = 0; i < 2; i++)
  {
    digitalWrite(7, LOW);
    digitalWrite(8, LOW);
    digitalWrite(9, LOW);

    digitalWrite(3, HIGH);
    digitalWrite(4, HIGH);
    digitalWrite(5, HIGH);

    asyncDelay(300);

    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW);

    digitalWrite(7, HIGH);
    digitalWrite(8, HIGH);
    digitalWrite(9, HIGH);

    asyncDelay(300);
  }
}

void efeito4()
{
  digitalWrite(7, HIGH);
  asyncDelay(500);

  digitalWrite(7, LOW);
  digitalWrite(3, HIGH);
  asyncDelay(500);

  digitalWrite(3, LOW);
  digitalWrite(5, HIGH);
  asyncDelay(500);

  digitalWrite(5, LOW);
  digitalWrite(9, HIGH);
  asyncDelay(500);
}

void efeito5()
{
  for (int i = 0; i < 3; i++)
  {
    acenderTodosLeds();
    asyncDelay(200);
    apagarTodosLeds();
    asyncDelay(200);
  }

  asyncDelay(200);

  for (int i = 0; i < 3; i++)
  {
    acenderTodosLeds();
    asyncDelay(300);
    apagarTodosLeds();
    asyncDelay(300);
  }

  asyncDelay(200);

  for (int i = 0; i < 3; i++)
  {
    acenderTodosLeds();
    asyncDelay(200);
    apagarTodosLeds();
    asyncDelay(200);
  }

  apagarTodosLeds();
  asyncDelay(500);
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

void asyncDelay (unsigned long duracao)
{
  unsigned long start = millis();

  while (millis() - start <= duracao)
  {
    checkButton();
  }
}

void checkButton ()
{
  if (digitalRead(botao) == LOW)
  {
    demoMode = !demoMode;

    if (demoMode)
    {
      Serial.println("Mode DEMO ligado");
    }
    else
    {
      Serial.println("Mode DEMO desligado");
      mostrarMenu();
    }
    delay(300);
  }
}

void mostrarMenu() {
  Serial.println("-------------------------------");
  Serial.println("              MENU             ");
  Serial.println("-------------------------------\n");

  Serial.println("Selecione um efeito para exibi-lo:");
  Serial.println("[1] CAMINHO");
  Serial.println("[2] FLASH DUPLO");
  Serial.println("[3] LADO A LADO");
  Serial.println("[4] CANTOS");
  Serial.println("[5] SOS");
}