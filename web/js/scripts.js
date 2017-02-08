$(function() {
  var pageStart = setTimeout(function() {
    var interval;

    $("#tamagotchi-gif").attr("src", "image/dance.gif");
    $("#buttons-div").children().prop("disabled", false);

    function update() {
      $.get("/increment", function(response) {
        if (response.match(/.*(dead)+/i)) {
          clearInterval(interval);
          $("#tamagotchi-gif").attr("src", "image/dead.gif");
        }
        $("div.card-block").html(response);

        if ($("#bar1").attr("class").match(/bg-(\w+)/i)) {
          var feedColor = $("#bar1").attr("class").match(/bg-(\w+)/i)[1];
        } else {
          var feedColor = "primary";
        }
        if ($("#bar2").attr("class").match(/bg-(\w+)/i)) {
          var napColor = $("#bar2").attr("class").match(/bg-(\w+)/i)[1];
        } else {
          var napColor = "primary";
        }
        if ($("#bar3").attr("class").match(/bg-(\w+)/i)) {
          var playColor = $("#bar3").attr("class").match(/bg-(\w+)/i)[1];
        } else {
          var playColor = "primary";
        }
        $("#feed-button").removeClass().addClass("bg-" + feedColor + " btn");
        $("#nap-button").removeClass().addClass("bg-" + napColor + " btn");
        $("#play-button").removeClass().addClass("bg-" + playColor + " btn");
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
  }, 14500);
});
