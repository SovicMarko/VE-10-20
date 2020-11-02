// Sintaksa za kreiranje pojedinacnog objekta
// "literalna notacija"

var osoba = {
    ime : "Petar",
    prezime : "Petrovic",
    godiste : 1988,
    zanimanje : "Pekar",
    zaposlen: false,
    radnoIskustvo: ["Zeki", "Klas", "Skroz Dobra"],

    adresa: {
        ulica : "Radnicka",
        broj : 10,
        grad : "Novi Sad"
    },

    ispis: function() {
        document.write(`
            <div>
                <h4>${this.ime} ${this.prezime}</h4>
                <h5>rodjen: ${this.godiste}</h5>
                <h5>po zanimanju: ${this.zanimanje}</h5>
            </div>
        `);
    },

    radnaBiografija: function() {
        document.write("<ol>");
        for (var i = 0; i < this.radnoIskustvo.length; i++) {
           document.write(`<li> Pekara ${this.radnoIskustvo[i]}</li>`);
        }
        document.write("</ol>");
    }

};



console.log(osoba);
document.write(osoba);
document.write("<hr>");
document.write(osoba.ime + " " + osoba.prezime);
document.write("<hr>");
osoba.prezime = "Pavlovic";
document.write(osoba["zanimanje"]);
osoba.ispis();

console.log(console);

osoba.radnaBiografija();

document.write(osoba.adresa.grad);
