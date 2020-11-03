// Kombinatorika slozenih tipova podataka

// Nizovi

// niz unutar niza
var niz = ["Petar", 25, false, ["JavaScript", "HTML", "CSS"]];

console.log(niz[0]);
console.log(niz[3][2]);

// niz nizova / dvodimenzionalni niz / matrica

var matrica = [
    [11,2,8],
    [4,8,-3],
    [-2,0,1]
];

console.log(matrica[1][2]);
console.log("---------------");

// i = 1
// j = 0

for (var i = 0; i < matrica.length; i++) {
   for (var j = 0; j < matrica[i].length; j++) {
       console.log(matrica[i][j]);
   }
}

// niz funkcija

var nizFunkcija = [
    function() { console.log("a"); },
    function() { console.log("b"); },
    function() { console.log("c"); },
    function() { console.log("d"); }
];

nizFunkcija[2]();

for (var i = 0; i < nizFunkcija.length; i++) {
    nizFunkcija[i]();
}

// niz objekata

var osobe = [
    { ime: "Petar", prezime: "Petrovic", god: 2000 },
    { ime: "Marko", prezime: "Markovic", god: 1987 },
    { ime: "Jovana", prezime: "Jovanovic", god: 1970 },
    { ime: "Milica", prezime: "Milic", god: 1992 }
];

console.log(osobe[3].prezime);

for (var i = 0; i < osobe.length; i++) {
    console.log(`${osobe[i].ime} ${osobe[i].prezime}`);
};

class Polaznik {
    constructor(ime, prezime, status) {
        this.ime = ime;
        this.prezime = prezime;
        this.status = status;
    }

    ispis = function() {
        console.log(`${this.ime} ${this.prezime}`);
        if (this.status) {
            console.log("Osoba je zaposlena");
        } else {
            console.log("Osoba nije zaposlena");
        }
    }
}

var polaznici = [
    new Polaznik("Ivan","Ivanovic", false),
    new Polaznik("Ana", "Jovanovic", true),
    new Polaznik("Vesna", "Visnjic", false)
]


for (var i = 0; i < polaznici.length; i++) {
    polaznici[i].ispis();
}