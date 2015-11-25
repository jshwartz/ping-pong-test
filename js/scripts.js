var divisible15 = function(userNumber) {
  if (userNumber % 15 === 0) {
    return true;
  } else {
    return false;
  }
};

var divisible3 = function(userNumber) {
  if (userNumber % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

var divisible5 = function(userNumber) {
  if (userNumber % 5 === 0) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {

  $("form#numberInput").submit(function(event) {

    $("ul#list").text("");

    var userNumber = $("input#number").val();
    var listAppend = $("ul#list");

    for (var i = 1; i <= userNumber; i++) {
      if (divisible15(i)) {
        listAppend.append("<li>" + "ping-pong" + "</li>");
      } else if (divisible3(i)) {
        listAppend.append("<li>" + "ping" + "</li>");
      } else if (divisible5(i)) {
        listAppend.append("<li>" + "pong" + "</li>");
      } else
        listAppend.append("<li>" + i + "</li>");
    };

    event.preventDefault();
  });
});
