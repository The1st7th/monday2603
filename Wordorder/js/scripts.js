var item = [];
var str;
var newarray = [];
var compare = [];
var secondarray = ["1","2","3"];

function wordnum(){
  str =$("#items").val();
item = str.split(" ");
compare = item.filter(function(item, index, inputArray){
  return inputArray.indexOf(item)==index;
});

};
function comparison(){
  console.log(compare);
  console.log(item);
  compare.forEach(function(initial){
    var counter = 0;
    item.forEach(function(seconddefault){
      if (initial === seconddefault) {
        counter = counter +1;
      }
    });
      $("body").append("<p>"+ initial + " appeared " + counter + " times" + "</p>");
  });
};




/*function wordnum(){
  str =$("#items").val();
item = str.split(" ");
item.forEach(function(first){
secondarray.forEach(function(second){
console.log(first);
  if (first !== second){
    secondarray.push(first);
    console.log("thirdarray is " + secondarray + first);
  };
});

});
};
*/
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
wordnum();
comparison();
ClearFields();

});
});
