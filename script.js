/* Hector Ramos */
/* July 8, 2015 */

$(document).ready(function() {
  var $list = $("#list");
  var $textfield = $("#textfield");
  var $button = $("#button");
  var $removeButton = $("#removeButton");
  
  $textfield.focus();
  $textfield.on("keypress", function(key) {
    if (key.which === 13) {
      appendItem($textfield);
    }
  });

  $button.on("click", function() {
    appendItem($textfield);
  });

  $removeButton.on("click", function() {
    $list.children().each(function() {
      if (($(this).children("input").is(":checked"))) {
        $(this).remove();
      }
    });
  });
});

/**
 * Appends an item to a list from a textfield object.
 * 
 * The textfield object is cleared and refocused afterwards.
 * @param {JQuery} $textfield JQuery reference to the textfield object to use.
 */
function appendItem($textfield) {
  $list.append("<li><input type=\"checkbox\">" + $textfield.val() + "</li>");
  $textfield.val("");
  $textfield.focus();
}
