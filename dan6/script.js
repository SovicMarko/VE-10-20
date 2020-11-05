class Osoba {

    constructor(ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }

    ispis = function() {
        console.log(`${this.ime} ${this.prezime}`);
    }
}

class Student extends Osoba {

    constructor(ime, prezime, index) {
        super(ime, prezime);
        this.index = index;
    }

    ispis = function() {
        console.log(`${this.ime} ${this.prezime}`);
        this.index.ispis();
    }

}

class Index {
    constructor(smer, godUpisa, broj) {
        this.smer = smer;
        this.godUpisa = godUpisa;
        this.broj = broj;
    }

    ispis = function() {
        console.log(`${this.smer} - ${this.broj}/${this.godUpisa}`);
    }
}


class Profesor extends Osoba {
    constructor(ime,prezime,diploma) {
        super(ime,prezime);
        this.diploma = diploma;
    }

    ispis = function() {
        console.log(`${this.ime} ${this.prezime} ${this.diploma}`);
    }

}

var i1 = new Index("IT", 2017, 14);
var s1 = new Student("Marko", "Markovic", i1);
var p1 = new Profesor("Petar", "Petrovic", "Biolog");

var o1 = new Osoba("Jovan","Jovanovic");

s1.ispis();
p1.ispis();


function zakaziRezervaciju(osoba) {
    osoba.ispis();
    console.log("Je uspesno rezervisao/la mesto");
}

zakaziRezervaciju(o1); // Osoba
zakaziRezervaciju(p1); // Profesor
zakaziRezervaciju(s1); // Student