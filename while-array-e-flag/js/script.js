var arrayNomi = ['Franco', 'Pina', 'Maria', 'Ernesto', 'Pina'];
var nomeDaControllare = 'Pina';

var nomeTrovato = false;
// for( var i = 0; i < arrayNomi.length; i++ ) {
//     var thisNome = arrayNomi[i];
    
//     console.log(thisNome);
//     if( thisNome == nomeDaControllare ) {
//         nomeTrovato = true;
//     }
// }

var counter = 0;
while( nomeTrovato == false && counter < arrayNomi.length ) {
    var thisNome = arrayNomi[counter];
    console.log(thisNome);

    if( thisNome == nomeDaControllare ) {
        nomeTrovato = true;
    }

    counter++;
}

console.log(nomeTrovato);