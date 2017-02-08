// 1. timer/incrementation on PHP end
// 2. AJAX request GET to get values from PHP
// 3. update front end on request return

$(function() {
  var interval;
  function update() {
    $.get("/increment", function(response) {
      if (response.match(/.*(dead)+/i)) {
        clearInterval(interval);
        $("#tamagotchi-gif").attr("src", "image/dead.gif");
      }
      $("div.card-block").html(response);
    });
  }

  $("#feed-button").click(function() {
    $.get("/feed", function(response) {
      $("#feed-form").html(response);
      temporaryGif("feed");
    });
  });

  $("#nap-button").click(function() {
    $.get("/nap", function(response) {
      $("#nap-form").html(response);
      temporaryGif("nap");
    });
  });

  $("#play-button").click(function() {
    $.get("/play", function(response) {
      $("#play-form").html(response);
      temporaryGif("good-dance");
    });
  });

  function temporaryGif(gifName) {
    $("#tamagotchi-gif").attr("src", "image/" + gifName + ".gif");
    $("#buttons-div").children().prop("disabled", true);

    var timeout = setTimeout(function() {resetInterface()}, 3000);
  }

  function resetInterface() {
    $("#tamagotchi-gif").attr("src", "image/dance.gif");
    $("#buttons-div").children().prop("disabled", false);
  }

  interval = setInterval(function() {update()}, 1000);
});
