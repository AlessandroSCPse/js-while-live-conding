var nomeUtente = prompt("Dimmi il tuo nome");

while ( nomeUtente.length == 0 ) {
    console.log(nomeUtente);
    nomeUtente = prompt("Ti ho chiesto il nome, non lasciarlo vuoto!");
}

alert("Finalmente hai messo il nome: " + nomeUtente);