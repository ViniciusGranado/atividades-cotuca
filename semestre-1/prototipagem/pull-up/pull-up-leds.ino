#define led1 8
#define led2 9
#define led3 10
#define led4 11

#define botao 2

int control = 0;


void setup()
{
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);

  pinMode(botao, INPUT_PULLUP);
}

void loop()
{  
  switch (control)
  {
    case 0:
      digitalWrite(led1, HIGH);
      digitalWrite(led2, HIGH);
      digitalWrite(led3, HIGH);
      digitalWrite(led4, HIGH);
      delay(300);
    
      digitalWrite(led1, LOW);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);        
      delay(300);
    
      digitalWrite(led1, LOW);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);    
   	  break;
    
    case 1:
      digitalWrite(led1, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led3, HIGH);
      digitalWrite(led4, LOW);
      delay(300);
    
      digitalWrite(led1, LOW);
      digitalWrite(led2, HIGH);
      digitalWrite(led3, LOW);
      digitalWrite(led4, HIGH);        
      delay(300);
    
      digitalWrite(led1, LOW);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);    
      break;
    
    case 2:
      digitalWrite(led1, HIGH);
      digitalWrite(led4, LOW);
      delay(500);
    
      digitalWrite(led1, LOW);
      digitalWrite(led4, HIGH);        
      delay(500);
    
      digitalWrite(led1, LOW);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);    
      break;
    
    case 3:
      digitalWrite(led4, LOW);       
      digitalWrite(led1, HIGH);
      delay(100);	
    
      digitalWrite(led1, LOW);
      digitalWrite(led2, HIGH);
      delay(100);
    
      digitalWrite(led2, LOW);
      digitalWrite(led3, HIGH);
      delay(100);
    
      digitalWrite(led3, LOW);
      digitalWrite(led4, HIGH);
      delay(100);
    
      digitalWrite(led1, LOW);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);    
      break;
    
    default:
      return;
  }
  
  if (digitalRead(botao) == LOW)
  {
    control = (control + 1) % 4;
  }

  delay(100);
}