/* Hector Ramos */
/* July 8, 2015 */

$(document).ready(function() {
  var list = document.getElementById("list");

  $("#button").on("click", function() { 
    var toDo = document.getElementById("textfield").value;
    toDo = "<li><input type='checkbox'> " + toDo + " </li>"
    $("#textfield").val("");

    $(list).append(toDo);
  });



  $("#removeButton").on("click", function() {
    $("#list li :checkbox:checked").each( function() {
        $(this).parent().remove();
    });

    /*$("#list li").each(function() {
      console.log($(this).find("input"));
      if( $(this).find("input").checked ) {
        console.log(this + "worked");
        $(this).remove();
      }
    });*/




  });

});
