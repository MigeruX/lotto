Array.prototype.equals = function(array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            return false;   
        }           
    }       
    return true;
}
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var jugadaGanadora = [];
while (jugadaGanadora.length < 1) {
    jugadaGanadora.push(getRandom(1, 6));
};

console.log("Salió el " + jugadaGanadora);

var jugadores = [
  { nombre: "Anny", jugada: 1 },
  { nombre: "Bill", jugada: 2 },
  { nombre: "Carl", jugada: 3 }
];

var ganador = jugadores.filter(function(jugador) {
  return jugador.jugada == jugadaGanadora;
})

if(ganador[0] != null){
  console.log("Ganó " + ganador[0].nombre)
}
else {
  console.log("No ganó nadie")
};
