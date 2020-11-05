class Polje {
    constructor(id) {
        this.id = id;
        this.figura = null;
    }

    postaviFiguru = function(figura) {
        figura.position = this.id;
        figura.odrediPoziciju();
        this.figura = figura;
        document.getElementById(this.id).innerHTML = figura.simbol;
    }

    ukloniFiguru = function() {
        document.getElementById(this.id).innerHTML = "";
        this.figura = null;
    }

}

const col = ["a","b","c","d","e","f","g","h"];

var polja = [];

function nacrtTable() {
    var e = document.getElementById("board");
    for (let i = 8; i >= 1; i--) {
        for (let j = 0; j < 8; j++) {
            var id = col[j] + i;
            polja[id] = new Polje(id);
            if (j % 2 == 0) {
                if (i % 2 == 0) 
                    e.innerHTML +=  `<div onclick="poljeKlik('${id}')" class="feild" id="${id}"></div>`;
                else e.innerHTML += `<div onclick="poljeKlik('${id}')" class="feild black" id="${id}"></div>`;
            } else {
                if (i % 2 == 0) 
                    e.innerHTML +=  `<div onclick="poljeKlik('${id}')" class="feild black" id="${id}"></div>`
                else e.innerHTML += `<div onclick="poljeKlik('${id}')" class="feild" id="${id}"></div>`;
            }
        }
    }

    console.log(polja);
}

nacrtTable();

function postaviTablu() {
    polja['e1'].postaviFiguru(new Kralj("crni"));
    polja['d4'].postaviFiguru(new Kralj("beli"));
    polja['h2'].postaviFiguru(new Kralj("beli"));
    polja['a2'].postaviFiguru(new Pijun("beli"));
    polja['g3'].postaviFiguru(new Pijun("crni"));
    polja['f4'].postaviFiguru(new Pijun("crni"));
    polja['c3'].postaviFiguru(new Lovac("crni"))
}

postaviTablu();


var aktivnaFigura = null;

function poljeKlik(id) {
    // console.log(polja[id]);

    if (aktivnaFigura != null) {

        if (aktivnaFigura.poljaNapada.indexOf(id) > -1) {
            polja[aktivnaFigura.position].ukloniFiguru();
            ukloniPoteze(aktivnaFigura.poljaKretanja);
            polja[id].postaviFiguru(aktivnaFigura);
            ukloniPoljaNapada(id);
            aktivnaFigura.poljaKretanja = [];
            aktivnaFigura.poljaNapada = [];
            aktivnaFigura = null;
        }

        else if (aktivnaFigura.poljaKretanja.indexOf(id) > -1) {
            polja[aktivnaFigura.position].ukloniFiguru();
            ukloniPoteze(aktivnaFigura.poljaKretanja);
            polja[id].postaviFiguru(aktivnaFigura);
            aktivnaFigura.poljaKretanja = [];
            aktivnaFigura.poljaNapada = [];
            aktivnaFigura = null;
        }
    } else {
        if(polja[id].figura != null) {
            aktivnaFigura = polja[id].figura;
            aktivnaFigura.pronadjiPoteze();
            nacrtajPoteze(aktivnaFigura.poljaKretanja);
            nacrtajPoljaNapada(aktivnaFigura.poljaNapada);
        }
    }

   

}

function nacrtajPoteze(niz) {
    for (let i = 0; i < niz.length; i++) {
        document.getElementById(niz[i]).innerHTML = "·";
    }
}

function nacrtajPoljaNapada(niz) {
    for (let i = 0; i < niz.length; i++) {
        document.getElementById(niz[i]).style.color = "red";
    }
}

function ukloniPoljaNapada(id) {
    console.log("DA");
    document.getElementById(id).style.color = "black";
}

function ukloniPoteze(niz) {
    for (let i = 0; i < niz.length; i++) {
        document.getElementById(niz[i]).innerHTML = "";
    }
}


function provera() {
    console.log(polja);
}