

// Printing a string with JavaScript
console.log("Hello, world!");

console.log(y);
2

let vegetables = ['Carrots', 'Peas', 'Lettuce', 'Tomatoes'];

for (var i=0; i<vegetables.length; i++){ }

for (var i=0; i<vegetables.length; i++){ console.log('I love' +vegetables[i]); }
//I loveCarrots //debugger eval code:1:50
//I lovePeas //debugger eval code:1:50
//I loveLettuce //debugger eval code:1:50
//I loveTomatoes //debugger eval code:1:50

for (var i=0; i<vegetables.length; i++){                                                console.log('I love ' +vegetables[i]); 
                                       }
//I love Carrots //debugger eval code:1:63
//I love Peas //debugger eval code:1:63
//I love Lettuce //debugger eval code:1:63
//I love Tomatoes //debugger eval code:1:63

for ( var i=0; i<5; i++){
    console.log( 'I am ' + i);
  }
  //I am 0 //debugger eval code:2:11
  //I am 1 //debugger eval code:2:11
  //I am 2 //debugger eval code:2:11
  //I am 3 //debugger eval code:2:11
  //I am 4 //debugger eval code:2:11