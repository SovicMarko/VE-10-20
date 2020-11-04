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
    polja['a4'].postaviFiguru(new Pijun("beli"));
}

postaviTablu();


function poljeKlik(id) {
    // console.log(polja[id]);

    if(polja[id].figura != null) {
        polja[id].figura.pronadjiPoteze();
        nacrtajPoteze(polja[id].figura.poljaKretanja);
    }

}

function nacrtajPoteze(niz) {
    for (let i = 0; i < niz.length; i++) {
        document.getElementById(niz[i]).innerHTML = "·";
    }
}
