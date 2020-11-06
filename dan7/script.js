 $(document).ready(function() {

    $("#naslov").css("color","red");
    $(".plava").css("color","blue");

    $("#dugme").click(function() {
        alert("Pozdrav iz jQuery-ja")
    });

    $("#polje").mouseenter(function() {
        $("#polje").css("backgroundColor", "red");
    });
      $("#polje").mouseleave(function() {
        $("#polje").css("backgroundColor", "blue");
    }); 


    $("#dugme11").click(function() {
        $("#polje1").hide();
    })
    $("#dugme12").click(function() {
        $("#polje1").show();
    })
    $("#dugme13").click(function() {
        $("#polje1").toggle();
    })

    $("#dugme21").click(function() {
        $("#polje2").fadeOut();
    })
    $("#dugme22").click(function() {
        $("#polje2").fadeIn();
    })
     $("#dugme23").click(function() {
        $("#polje2").fadeToggle();
    })


    $("#dugme31").click(function() {
        $("#polje3").slideUp();
    })
    $("#dugme32").click(function() {
        $("#polje3").slideDown();
    })
     $("#dugme33").click(function() {
        $("#polje3").slideToggle();
    })

     $("#dugme41").click(function() {
        $("#polje4").animate({
            left : "100px",
            height: "100px",
            borderRadius : "50px"
        },1000, function() {
            alert("animacija je zavrsena")
        })
        $("#polje4").css("backgroundColor", "red");
    })

     $("#dugme42").click(function() {
         $("#polje4").stop();
     })

     $("#dugme51").click(function() {
         $("#polje5").hide(1000).slideDown(2000).fadeOut(1500).fadeIn(1000);
     })
})

// document.getElementById("naslov").style.color = "red";


// document.getElementsByClassName("plava").style.color = "blue";

// var stavke = document.getElementsByClassName("plava");
// for (let i = 0; i < stavke.length; i++) {
//     stavke[i].style.color = "blue";
// }

// CLOSURE
function a() {
    function b() {
        console.log("closure");
    }
    b();
}
a();


// CALLBACK
function c(d) {
    d();
}

c(function() {
    console.log("callback");
})