console.log("Pozdrav iz konzole");
document.write("<h1>Pozdrav svete</h1>");

var e = document.getElementById("polje1");
e.innerHTML = "<h3>Ispis unutar elementa</h3>";

var ime = "Petar";
var prezime = "Petrovic";
var godine = 40;
var zaposlen = false;

// var ime = prompt("Unesite ime");
// var prezime = prompt("Unesite prezime");
// var godine = prompt("Unesite godine");
// var zaposlen = confirm("Jeste li zaposleni");

// document.write("Ime: " + ime + ", Prezime: " + prezime);
// document.write("<br>Godine: " + godine);

document.write(`Ime: ${ime}, Prezime: ${prezime} 
                <br>Godine: ${godine}`)

if (zaposlen) {
    document.write("<br>Osoba je zaposlena")
} else {
    document.write("<br>Osoba nije zaposlena")
}

console.log(ime + " " + prezime);

const pi = 3.14;




var niz = [45,78,"ovo je neki tekst", true];

document.write("<ol>");
for (let i = 0; i < niz.length; i++) {
    document.write(`<li>${niz[i]}</li>`); 
}
document.write("</ol>");

function funkcijaA() {
    console.log("ovo je funkcija");
}

funkcijaA();

function funkcijaB() {
    alert("Dugme je kliknuto");
}

const funkcijaC = function () {
    console.log("Funkcija je tip podatka");
}

funkcijaC();

var brojac = 1;
var funkcijaD = function() {
   console.log(brojac);
   brojac++;

   if(brojac == 10) {
       clearInterval(interval);
   }
}

var interval = setInterval(funkcijaD,1000);


function funkcija1(x) {
    x();
}

function funkcija2() {
    console.log("Ovo je funkcija koja je parametar funkcije");
}

funkcija1(funkcija2);

funkcija1(function() {
    console.log("AAAAAAAAAAAAAAAA");
});


var slajder = [
    "http://www.centar.edu.rs/wp-content/themes/gabfire-snapwire-3e28dcb/timthumb.php?src=http%3A%2F%2Fwww.centar.edu.rs%2Fwp-content%2Fuploads%2F2012%2F08%2FDSC3721.jpg&q=90&w=664&zc=1",
    "http://www.centar.edu.rs/wp-content/themes/gabfire-snapwire-3e28dcb/timthumb.php?src=http%3A%2F%2Fwww.centar.edu.rs%2Fwp-content%2Fuploads%2F2012%2F08%2FDSC3712.jpg&q=90&w=664&zc=1?1603958708748",
    "http://www.centar.edu.rs/wp-content/themes/gabfire-snapwire-3e28dcb/timthumb.php?src=http%3A%2F%2Fwww.centar.edu.rs%2Fwp-content%2Fuploads%2F2012%2F08%2FDSC3744.jpg&q=90&w=664&zc=1",
    "http://www.centar.edu.rs/wp-content/themes/gabfire-snapwire-3e28dcb/timthumb.php?src=http%3A%2F%2Fwww.centar.edu.rs%2Fwp-content%2Fuploads%2F2012%2F08%2FDSC3748.jpg&q=90&w=664&zc=1"
]

var el = document.getElementById("slajder");
var brFoto = 0;

setInterval(function() {
    el.innerHTML = `<img src='${slajder[brFoto]}'>`;
    brFoto++;
    if (brFoto == slajder.length) {
        brFoto = 0;
    }
}, 1500)