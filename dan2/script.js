var broj = 43.5634;

console.log( broj.toFixed(2) );
console.log( broj.toFixed(0) );

console.log(5);

console.log(broj.toPrecision(3));

var unos = "25.78";

console.log( unos );
console.log(Number(unos));
console.log(parseInt(unos));
console.log(parseFloat(unos));



console.log(Math.PI);
console.log(Math.round(3.7));
console.log(Math.pow(2,3));
console.log(Math.sqrt(64));
console.log(Math.abs(-19));
console.log(Math.ceil(4.2));
console.log(Math.floor(2.9));
console.log(Math.random());


var r = Math.ceil(Math.random() * 255);
var g = Math.ceil(Math.random() * 255);
var b = Math.ceil(Math.random() * 255);

var e = document.getElementsByTagName("body")[0];
e.style.backgroundColor = `rgb(${r},${g},${b})`;

// Zadat je nasumicni broj od 0 do 10
// Korisnik treba da pogodi zadati broj
// Zahteva se ponovni unos broja sve dok nije 
// unet zadati broj.
// Na kraju igre se ispisuje ukupni broj pokusaja

// var zadati = Math.ceil(Math.random() * 10);
// console.log(zadati);

// var unos = -1;
// var brPokusaja = 0
// while (unos != zadati) {
//     unos = prompt("Pogodite zadati broj");
//     brPokusaja++;
// }

// document.write("Čestitamo uspešno ste pogodili zadati broj " + zadati);
// document.write("<br>Broj pokušaja: " + brPokusaja);

var niz = ["Marko", "Petar", "Jovana", "Jelena"];

console.log(niz.join(" "));

niz.push("Dusan");
console.log(niz);
niz.pop();
console.log(niz);
niz.unshift("Bojan");
console.log(niz);
niz.shift();
console.log(niz);

delete niz[2];
console.log(niz);

niz.splice(2,1);
console.log(niz);

niz.splice(2,0,"Milan","Ana");
console.log(niz);

var niz2 = ["Dejan", "Milos", "Milica"];

var niz3 = niz.concat(niz2);
console.log(niz3);

var niz4 = niz3.slice(4,6);
console.log(niz4);