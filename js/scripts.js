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

  var userNumber = parseInt(prompt("Enter a number to ping-pong!"));


  debugger;
  for (var i = 1; i <= userNumber; i++) {
    if (divisible15(i)) {
      $("ul#list").append("<li>" + "ping-pong" + "</li>");
    } else if (divisible3(i)) {
      $("ul#list").append("<li>" + "ping" + "</li>");
    } else if (divisible5(i)) {
      $("ul#list").append("<li>" + "pong" + "</li>");
    } else     
    $("ul#list").append("<li>" + i + "</li>");
  };

});
