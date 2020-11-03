var planer = [];

function unesi() {
    var uneto = document.getElementById("unos").value;
    planer.push(uneto);
    ispis();
}

function ispis() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (let i = 0; i < planer.length; i++) {
        lista.innerHTML += `
        <li>
            ${planer[i]}
            <button type='button' onclick='brisanje(${i})'>
                X</button>
        </li>`;
    }
}

function brisanje(poz) {
    planer.splice(poz,1);
    ispis();
}