var divisible15 = function(indexNumber) {
  return (indexNumber % 15 === 0);
};

var divisible3 = function(indexNumber) {
  return (indexNumber % 3 === 0);
};

var divisible5 = function(indexNumber) {
  return (indexNumber % 5 === 0);
};


$(document).ready(function() {

  $("form#numberInput").submit(function(event) {

    var userNumber = $("input#number").val();
    var listIdTag = $("ul#list");

    listIdTag.text("");

    for (var i = 1; i <= userNumber; i++) {
      if (divisible15(i)) {
        listIdTag.append("<li>" + "pingpong" + "</li>");
      } else if (divisible3(i)) {
        listIdTag.append("<li>" + "ping" + "</li>");
      } else if (divisible5(i)) {
        listIdTag.append("<li>" + "pong" + "</li>");
      } else
        listIdTag.append("<li>" + i + "</li>");
    };

    event.preventDefault();
  });
});
