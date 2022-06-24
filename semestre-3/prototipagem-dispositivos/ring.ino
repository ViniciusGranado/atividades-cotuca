// VINICIUS RAFAEL GRANADO 21731

#include <Adafruit_NeoPixel.h>

// define pino e numero de leds do ring
#define PIN            6
#define NUMLEDS        24

// define variavel do ring
Adafruit_NeoPixel ring = Adafruit_NeoPixel(NUMLEDS, PIN, NEO_GRB + NEO_KHZ800);

void setup()
{
  // inicia ring
  ring.begin();
}

void loop()
{
  // instancia variavel de led atual
  int led = 0;

  // gera duas cores aleatorias
  uint32_t color1 = ring.Color(random(0, 256), random(0, 256), random(0, 256));
  uint32_t color2 = ring.Color(random(0, 256), random(0, 256), random(0, 256));
 

  // instancia pelos leds, acendendo com as cores intercaladas
  for (led; led < NUMLEDS; led++) {
    if (led % 2 == 0) {
      ring.setPixelColor(led, color1);
    } else {
      ring.setPixelColor(led, color2);
    }

    ring.show();
    delay(100);
  }

  // apaga leds sequencialmente
  for (led; led >= 0; led--) {
    ring.setPixelColor(led, 0, 0, 0);

    ring.show();
    delay(100);
  }
}