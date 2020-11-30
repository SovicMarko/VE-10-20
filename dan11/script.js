new Vue({
    el : "#root",
    data: {
        ime : "Petar",
        prezime: "Petrovic",
        godine: 25,
        zaposlen: false,
        radnoIskustvo : ["Maxi","Roda","Idea"],
        adresa: {
            ulica: "Radnicka",
            broj: 6,
            grad: "Novi Sad"
        },
        website: "https://www.google.com",
        tipUnosa: "password",
        poruka: "",
        stanari : [
            {
                ime: "Milica",
                godine: 20
            }, 
            {
                ime: "Dusan",
                godine: 30
            },
            {
                ime: "Neven",
                godine: 28
            }
        ],
        novoIme : "",
        noveGodine: "",
        bojaTeksta: "red",
        pozadinskaBoja: "",
        zelena: false,
        podvuceno: false,
        uokvireno: false
    },
    computed: {
        izracunajProsek: function() {
            let zbir = 0;
            for (let i = 0; i < this.stanari.length; i++) {
                zbir += this.stanari[i].godine;
            }
            return zbir/this.stanari.length;
        }
    },
    methods: {
        promenaTipaUnosa: function() {
            if (this.tipUnosa == "password") {
                this.tipUnosa = "text";
            } else {
                this.tipUnosa = "password";
            }
        },
        pozdrav: function(poruka) {
            return poruka
        },
        unosStanara: function() {
            this.stanari.push({
                ime : this.novoIme,
                godine: Number(this.noveGodine)
            });
            this.novoIme = "";
            this.noveGodine = "";
        }
    }
}) 