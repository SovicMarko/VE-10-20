// Konstruktor funkcija
// za kreiranje klase objekata

function Osoba(ime, prezime, zanimanje) {
    this.ime = ime;
    this.prezime = prezime;
    this.zanimanje = zanimanje;

    this.ispis = function() {
        document.write(`<h2>${this.ime} ${this.prezime} ${this.zanimanje}</h2>`);
    }
}


var o1 = new Osoba("Marko", "Markovic", "Lekar");
var o2 = new Osoba("Petar", "Petrovic", "Pekar");
var o3 = new Osoba("Milica", "Milic", "Trgovac");

console.log(o1);
o1.ispis();
o2.ispis();
o3.ispis();