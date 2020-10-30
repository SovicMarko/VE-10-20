var ime = "Aleksandra Martinovic";

console.log(ime.length);

// var korisnik = prompt("Unesite vase korisnicko ime");

var korisnik = "Nesto bezveze";

if (korisnik.length > 15) {
    document.write("Korisnicko ime ne moze sadrzati vise od 15 karaktera");
} else {
    document.write("Korisnicko ime je uspesno prihvaceno");
}


var poruka = "Danas je cetvrtak";

console.log(poruka.indexOf("cetvrtak"));
console.log(poruka.indexOf("petak"));

// var email = prompt("Unesite Vasu email adresu");
var email = "proba@email.com";

if (proveraEmaila(email)) {
    document.write("<p>Email adresa je uspesno prihvacena</p>");
} else {
    document.write("<p>Email adresa nije pravilno uneta</p>");
}

function proveraEmaila(tekst) {
    if (tekst.indexOf("@") > -1)
        return true; 
    return false;
}

var tekst = "Danas nije lep dan";

console.log(tekst.slice(6,10));
console.log(tekst.substr(6,4));

console.log(tekst.replace("nije","je"));

console.log(tekst.toUpperCase());
console.log(tekst.toLowerCase());
eljovana1@hotmail.com
console.log(tekst.charAt(0));

// Korisnik unosi tekst, zatim se na ekranu 
// ispisuje broj samoglasnika unutar teksta

// var unos = prompt("Unesite tekst");
var unos = "Aleksandar";
var brSamoglasnika = 0;

for (let i = 0; i < unos.length; i++) {
   if (unos.toUpperCase().charAt(i) == "A" ||
       unos.toUpperCase().charAt(i) == "E" || 
       unos.toUpperCase().charAt(i) == "I" ||
       unos.toUpperCase().charAt(i) == "O" ||
       unos.toUpperCase().charAt(i) == "U" )
       brSamoglasnika++;
}


document.write(`<h2>Broj samoglasnika je: ${brSamoglasnika}</h2>`);

var recenica = "Ovo je neka primer recenica";

var nizReci = recenica.split(" ");

console.log(nizReci);
