var item = [];
function ClearFields(){
  document.getElementById("items").value = "";
};

$(document).ready(function(){
  $(".btn-success").click(function(){
    item.push($("#items").val());
    ClearFields();

  });

  $(".alpha").click(function(){

item.sort();
item = item.map(function(it){

    return it.toUpperCase();


  });
      $("#formOne").hide();
      $("#item").text(item);
      $("li").show();
  });

});
