$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var person1Input = $("input#person1").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();
    $(".name").text(person1Input);
    $(".beverage").text(beverage);
    $(".secondDrink").text(flavor);
    $(".bday").text(dob);
    $(".colorful").text(favoriteColor);
    $("#magic").css("color", favoriteColor);

        $("#magic").show();
    event.preventDefault();
  });
});
