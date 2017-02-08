// 1. timer/incrementation on PHP end
// 2. AJAX request GET to get values from PHP
// 3. update front end on request return

$(function() {
  var interval;
  function update() {
    $.get("/increment", function(response) {
      if (response.match(/.*(dead)+/i)) {
        console.log("I'm in!");
        clearInterval(interval);
      }
      $("div.card-block").html(response);
    });
  }

  interval = setInterval(function() {update()}, 1000);
});
