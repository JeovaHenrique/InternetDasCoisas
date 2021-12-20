var forca = 0

function on() {
  document.getElementById("lamp").src="Lon.png"
  forca = getRndInterger(200, 1000)
  setTimeout(sendToServer(forca), 1000)
}

function off() {
  document.getElementById("lamp").src="Loff.png"
  forca = 0
  setTimeout(sendToServer(forca), 1000)
}

function blink() {
  var intervalo = 0
  var cont = 0
  while(cont < 10) {
    intervalo += 300
    setTimeout("document.getElementById('lamp').src='Lon.png'", intervalo)
    intervalo += 300
    setTimeout("document.getElementById('lamp').src='Loff.png'", intervalo)
    cont ++
  }
}

function sendToServer(state) {
  var KEY = "4JOC78UH2DJHM9L5"

  const http = new XMLHttpRequest()

  http.open("GET", "https://api.thingspeak.com/update?api_key="+ KEY +" &field1 =0"+ state)
  http.send()
  http.onload = console.log(http.responseText+" "+state)
}

function getRndInterger(min, max) {
  return Math.floor(Math.random()*(max-min + 1 )) + min
}

setInterval(sendToServer(forca), 1000)