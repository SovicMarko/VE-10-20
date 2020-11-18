$(document).ready(function() {
    $("#dugme1").click(function() {
        // var sadrzaj = $(".polje1").text();
        // console.log(sadrzaj);
        $(".polje1").text("Neki <b>drugi</b> sadrzaj")
    })

    $("#dugme2").click(function() {
        // var sadrzaj = $(".polje2").html();
        // console.log(sadrzaj);
        $(".polje2").html("Neki <u>drugi</u> sadrzaj")
    })

     $("#dugme3").click(function() {
       // console.log( $("#unos").val());
       $("#unos").val("Postavljena vrednost")
    })

     $("#dugme4").click(function() {
       // console.log( $("#unos").val());
       $("#slika").attr("src", "https://d.newsweek.com/en/full/1625852/peach.jpg?w=1600&h=1200&q=88&f=af0637f100a4664ffd0e2a4158607f21");
    })

    $("#dugme5").click(function() {
        if ($("#lozinka").attr("type") == "text") {
            $("#lozinka").attr("type","password");
            $(this).text("Prikazi");  
        } else {
            $("#lozinka").attr("type","text"); 
            $(this).text("Sakrij"); 
        }
        
    })

    $("#dugme61").click(function() {
        $("#polje6").append("... dodato na kraju (append)");
        
    })

     $("#dugme62").click(function() {
        $("#polje6").prepend("dodato na pocetku (prepend)...");
        
    })

    $("#dugme63").click(function() {
        $("#polje6").after("...dodato nakon");
        
    })
    $("#dugme64").click(function() {
        $("#polje6").before("dodato pre...");
        
    })

    $("#dugme71").click(function() {
        $("#lista").empty();
    })

    $("#dugme72").click(function() {
        $("#lista").remove();
    })

    $("#dugme81").click(function() {
       $("#polje8").addClass("plava"); 
    })

     $("#dugme82").click(function() {
       $("#polje8").removeClass("plava"); 
    })

      $("#dugme83").click(function() {
       $("#polje8").toggleClass("plava"); 
    })

    $("#dugme9").click(function() {
        $("body").css(
            {
                "background-color" : "black", 
                "color" : "white"
            }
        )
    })
})