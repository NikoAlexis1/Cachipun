var partidas = parseInt(prompt("Cuantas partidas desea jugar: "));

var Ganados = 0;
var Perdidos = 0;
var Empatados = 0;

for(var i = 0; i < partidas ;i++){
    //Opciones Usuario
    var opcionUsuario = prompt(`Partida N° ${i+1}\nOpciones: Piedra, Papel, Tijera`);
    
    //Opciones Maquina
    var opcionMaquina = Math.floor(Math.random() *3);
    if (opcionMaquina == 0){
        opcionMaquina = "piedra";
    }else if (opcionMaquina == 1){
        opcionMaquina = "papel";
    }else {
        opcionMaquina = "tijera";
    }
    
    // Proceso del juego
    if (opcionUsuario.toLowerCase() ==  opcionMaquina.toLowerCase()){ //EMPATE
        alert(`Tu: ${opcionUsuario.toUpperCase()}\nMaquina: ${opcionMaquina.toUpperCase()}\n\nHa sido un empate 🤝`);
        Empatados++;
    } 
    else if (opcionUsuario.toLowerCase() == "piedra" && opcionMaquina == "tijera"){ //GANAR
        alert(`Tu: ${opcionUsuario.toUpperCase()}\nMaquina: ${opcionMaquina.toUpperCase()}\n\nFelicidades haz ganado 🥳`);
        Ganados++;
    } 
    else if (opcionUsuario.toLowerCase() == "piedra" && opcionMaquina == "papel"){//PERDER
        alert(`Tu: ${opcionUsuario.toUpperCase()}\nMaquina: ${opcionMaquina.toUpperCase()}\n\nQue lastima, haz perdido 😔`);
        Perdidos++;
    }
    else if (opcionUsuario.toLowerCase() == "tijera" && opcionMaquina == "papel"){//GANAR
        alert(`Tu: ${opcionUsuario.toUpperCase()}\nMaquina: ${opcionMaquina.toUpperCase()}\n\nFelicidades haz ganado 🥳`);
        Ganados++;
    }
    else if (opcionUsuario.toLowerCase() == "tijera" && opcionMaquina == "piedra"){//PERDER
        alert(`Tu: ${opcionUsuario.toUpperCase()}\nMaquina: ${opcionMaquina.toUpperCase()}\n\nQue lastima, haz perdido 😔`);
        Perdidos++;
    }
    else if (opcionUsuario.toLowerCase() == "papel" && opcionMaquina == "piedra"){//GANAR
        alert(`Tu: ${opcionUsuario.toUpperCase()}\nMaquina: ${opcionMaquina.toUpperCase()}\n\nFelicidades haz ganado 🥳`);
        Ganados++;
    }
    else if (opcionUsuario.toLowerCase() == "papel" && opcionMaquina == "tijera"){//PERDER
        alert(`Tu: ${opcionUsuario.toUpperCase()}\nMaquina: ${opcionMaquina.toUpperCase()}\n\nQue lastima, haz perdido 😔`);
        Perdidos++;
    }
    else {
        alert("Deber seleccionar una opcion, Pruebe otra vez");
        i--;
    }
}

// Resultados del juego
document.write(`<h2>Partidas: ${partidas}<br><br>Ganadas: ${Ganados}<br>Perdidas: ${Perdidos}<br>Empatadas: ${Empatados}</h2>`);

if(Ganados > Perdidos && Ganados > Empatados){
    document.write("<h1>Felicidades haz ganado el juego 🍰</h1>");

}else if(Perdidos > Ganados && Perdidos > Empatados){
    document.write("<h1>Haz perdido el juego, suerte para la proxima</h1>");

}else if((Empatados > Ganados && Empatados > Perdidos) || Empatados == Ganados || Empatados == Perdidos || Ganados == Perdidos){
    document.write("<h1>Ha sido un empate</h1>");

}