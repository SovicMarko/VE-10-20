function ispisNiza(niz) {
    for (var i = 0; i < niz.length; i++) {
        console.log(niz[i]);
    }
}

ispisNiza([4, 8, -8, 78, 56]);


// Dati su nizovi A i B, koji predstavljaju stranice
// a i b pravougaonika. Napisati funkciju koja
// vraca niz povrsina tih pravouganika

var nizA = [40, 50, 80, 120];
var nizB = [20, 40, 50, 10];

function pov(a,b) {
    var nizP = [];
    for (var i = 0; i < a.length; i++) {
        nizP.push(a[i] * b[i]);
    }
    return nizP;
}

console.log(pov(nizA,nizB));


function funkcijaA(b) {
    b();
}

funkcijaA(function() {
    console.log("Funkcija unutar funkcije");
})


function ispisObjekta(obj) {
    for (var atr in obj) {
        console.log(obj[atr])
    }
}

ispisObjekta({ ime: "Marko", prezime: "Markovic"});
ispisObjekta({ marka: "Audi", boja: "Crvena", god: 2000});



