'use strict';

let list = document.querySelector('.microfono') ;

let listItem = [
    'Uova',
    'Pesce',
    'Uva',
    'Ananas',
    'Banana',
    'Panolini',
    'Borotalco',
    'Latte in polver',
    'Acqua',
] ;
console.log(listItem)

let i=0 ;
while (i<listItem.length){
    list.innerHTML += `<li>${listItem[i]}</li>` ;
    i++ ;
} ;
