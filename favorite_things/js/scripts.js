
    var television = [];
    var pet = [];
    var exercise = [];



$(document).ready(function(){
  $(".btn-success").click(function(){


    television.push($("#tv").val());
    pet.push($("#animal").val());
    exercise.push($("#sport").val());

    console.log(television);
    console.log(pet);
    console.log(exercise);

    $("#televison").text(television);
    $("#pet").text(pet);
    $("#exercise").text(exercise);
  });
});
