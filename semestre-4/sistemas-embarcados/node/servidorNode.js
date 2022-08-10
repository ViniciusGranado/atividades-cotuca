const express = require('express');
const app = express();

var SerialPort = require('serialport');

var port = 3000; 
var baud = 9600;
var arduinoCOMPort = "/dev/cu.usbserial-2120";

var ardSerialPort = new SerialPort.SerialPort({ path: arduinoCOMPort, baudRate: baud });

ardSerialPort.on('open', () => {
  console.log('Serial Port' + arduinoCOMPort + 'is opened');
});

app.get('/', function(_, res){
  return res.send('Trabalhando........................');
})

app.get('/:action', (req, res) => {
  var action = req.params.action || req.param('action');

  if (action == 'on') {
    ardSerialPort.write('l');
    return res.send('O LED ESTA LIGADO........................');
  }

  if (action == 'off') {
    ardSerialPort.write('d');
    return res.send('O LED ESTA DESLIGADO........................');
  }

  return res.send('chamou?' + action);
})

app.listen(port, function(){
  console.log('ESTA ESCUTANDO NA PORTA........................' + port);
})