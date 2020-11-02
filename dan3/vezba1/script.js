var x = -1;

while(x != 0) {
    x = prompt(`Izaberite opciju: \n
                1) Sabiranje
                2) Oduzimanje
                3) Mnozenje
                4) Deljenje
                0) Izlaz`);
    if (x == 1) {
        kalkulator("sabiranje");
    } else if (x == 2) {
        kalkulator("oduzimanje");
    } else if (x == 3) {
        kalkulator("mnozenje");
    } else if (x == 4) {
        kalkulator("deljenje");
    }
}

function kalkulator(operacija) {
    var a = Number(prompt("Unesite broj A"));
    var b = Number(prompt("Unesite broj b"));
    if (operacija == "sabiranje") {
        alert("Vas rezultat je: " + (a + b));
    } else if (operacija == "oduzimanje") {
        alert("Vas rezultat je: " + (a - b));
    } else if (operacija == "mnozenje") {
         alert("Vas rezultat je: " + (a * b));
    } else {
         alert("Vas rezultat je: " + (a / b));
    }
}