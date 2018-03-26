var item = [];
var str;
var newarray = [];

function ClearFields(){
  document.getElementById("items").value = "";
};

$(document).ready(function(){
  $(".btn-success").click(function(){
    str =$("#items").val();
item = str.split(" ");
item.forEach(function(it){

  if (it.length >= 3){
    newarray.push(it);}
    newarray.reverse();
    $("p").text(newarray.toString());
  });

console.log(item);
console.log(newarray);
    ClearFields();

});
  });




  /*$(".alpha").click(function(){

item.sort();
item = item.map(function(it){

    return it.toUpperCase();


  });
      $("#formOne").hide();
      $("#item").text(item);
      $("p").show();
  });

});*/
