var gradovi =  [3194360, 792680, 787657, 524894, 3553478, 4180386, 4876353, 1261481, 1850147];

const APIid = "e27e88d2b383c55e101540eebb2249dd";
const APIbaseURL = "http://api.openweathermap.org/data/2.5/group";

function gradKomponenta(grad, istaknuti = false) {
    var naziv = "";
    if (istaknuti) naziv = `<h1>${grad.naziv}</h1>`;
    else naziv = `<h2>${grad.naziv}
                    <a href="#"><span class="glyphicon glyphicon-pushpin"
                          onclick="istakniGrad(${grad.pozicija})"></span></a>
                  </h2>`;
    var backColorClass = '';

    if (grad.temperatura < 5) {
        backColorClass = "primary";
    } else if (grad.temperatura < 20) {
        backColorClass = "warning";   
    } else {
        backColorClass = "danger";
    }


    return (`
        <div class="col col-md-${istaknuti ? '8 main' : '4'}">
            <div class="panel panel-${backColorClass}">
                <div class="panel-heading"> 
                    ${naziv} 
                    <h1>  
                        <img src="http://openweathermap.org/img/wn/${grad.slika}@2x.png">
                        ${grad.temperatura} <sup>&#8451;</sup>
                    </h1>
                </div>
                <div class="panel-body"> 
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Weather</td>
                                <td>${grad.vreme}</td>
                            </tr>
                            <tr>
                                <td>Wind</td>
                                <td>${grad.vetar} km/h</td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>${grad.vlaznost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `)
}

function istakniGrad(index) {
    var izabrani = gradovi[index];
    gradovi.splice(index,1);
    gradovi.unshift(izabrani);
    $(".col-md-4").fadeOut();
    $(".col-md-8").slideUp(1000, function() {
          $("#gradovi").empty();
          preuzmiPodatke();
    })
}

function prikazPodataka(gradovi) {
    $("#gradovi").append(gradKomponenta(gradovi[0], true));
    for (let i = 1; i < gradovi.length; i++) {
        $("#gradovi").append(gradKomponenta(gradovi[i]));
    }
}

function preuzmiPodatke() {
    var settings = {
        "async" : true,
        "crossDomain" : true,
        "url" : `${APIbaseURL}?id=${gradovi}&units=metric&appid=${APIid}`
    }
    $.ajax(settings).done(function(response) {
        var result = response.list;
        console.log(result);
        var pripremljeno = [];
        result.forEach((grad, i) => {
            pripremljeno.push({
                pozicija : i,
                naziv : grad.name,
                temperatura : Math.floor(grad.main.temp),
                vreme : grad.weather[0].description,
                slika : grad.weather[0].icon,
                vetar : grad.wind.speed,
                vlaznost : grad.main.humidity
            })
        });

        console.log(pripremljeno);
        prikazPodataka(pripremljeno);
        $(".col-md-8").slideDown();
        setTimeout(function() {
             $(".col-md-4").fadeIn();
        },800)
    })

}

preuzmiPodatke();

setTimeout(function() {
    console.log("Pozdrav");
},2000)