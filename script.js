/* Hector Ramos */
/* July 8, 2015 */

$(document).ready(function() {
  var list = document.getElementById("list");

  $("#button").on("click", function(){
    var toDo = "<li>" + document.getElementById("textfield").value + "</li>";

    $(list).append(toDo);
  });
});
