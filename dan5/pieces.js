class Figura {

    constructor(boja, simbol) {
        this.boja = boja;
        this.simbol = simbol;
        this.position = null;
        this.col = null;
        this.row = null;
        this.poljaKretanja = [];
        this.attackPlaces = [];
    }

    odrediPoziciju = function () {
        this.col = col.indexOf(this.position.substring(0,1));
        this.row = Number(this.position.substring(1));
    }
}


class Kralj extends Figura {
    constructor(boja) {
        var simbol = "";
        if (boja.indexOf("b") == 0) simbol = "&#9812;"
        else simbol = "&#9818;"
        super(boja, simbol) 
    }

    pronadjiPoteze = function() {
        console.log("AAAA");
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i == 0 && j == 0) {}
                else {
                    var lokacija = col[this.col + i] + (this.row + j);
                    if (polja[lokacija] != undefined) {
                        this.poljaKretanja.push(lokacija)
                    }
                }
            }
        }
    }
}

class Pijun extends Figura {
    constructor(boja) {
        var simbol = "";
        if (boja.indexOf("b") == 0) simbol = "&#9817;"
        else simbol = "&#9823;"
        super(boja, simbol) 
    }

    pronadjiPoteze = function() {
        console.log("ovde");
        // beli pijun
        if (this.boja.indexOf("b") == 0) {

            if (this.row == 2) {
                this.poljaKretanja.push(col[this.col] + (this.row + 1));
                this.poljaKretanja.push(col[this.col] + (this.row + 2));
            } else {
                this.poljaKretanja.push(col[this.col] + (this.row + 1));
            } 
        } 
        // crni pijun
        else {

        }
    }
}

// asocijativni niz
// kompozicija
// nasledjivanje
// polimorfizam

