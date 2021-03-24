// Stampare a schermo una lista della spesa
var listaSpesa = [
    'Uova',
    'Farina 00',
    'Fecola di patate',
    'Zucchero a velo',
    'Lievito per dolci',
    'Vaniglia',
    'Burro',
    'Limone',
    'Arancia'
];

// Scorrere l'elenco
for( var i = 0; i < listaSpesa.length; i++ ) {
    var thisElemento = listaSpesa[i];

    // Versione breve delle due righe sotto
    // document.getElementById('lista-spesa').innerHTML += '<li>' + thisElemento + '</li>';

    var contenutoAttualeUl = document.getElementById('lista-spesa').innerHTML;
    document.getElementById('lista-spesa').innerHTML = contenutoAttualeUl + '<li>' + thisElemento + '</li>';
}
