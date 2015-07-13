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
    console.log($("#list").children());
    $($("#list").children()).each( function() {
      console.log($(this).children("input"));

      if( ($(this).children("input").is(":checked")) )
        $(this).remove();
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
