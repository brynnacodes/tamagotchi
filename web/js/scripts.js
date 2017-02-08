//1. timer/incrementation on PHP end
//2. AJAX request GET to get values from PHP
//3. update front end on request return

// $(function() {
//   function update() {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("POST", "../increment", true);
//     xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//         var responseArray = this.response;
//         updateFields(responseArray);
//       }
//     };
//     xmlhttp.send();
//   }
//
//   function updateFields(fieldsArray) {
//     for (var i = 0; i < fieldsArray.length; i++) {
//       var progressBar = $("#bar" + (i+1));
//       progressBar.attr("style", "width: " + fieldsArray[i] + "%");
//       if (fieldsArray[i] > 85) {
//         progressBar.attr("class", "progress-bar progress-bar-striped progress-bar-animated bg-danger");
//       } else if (fieldsArray[i] > 60) {
//         progressBar.attr("class", "progress-bar progress-bar-striped progress-bar-animated bg-warning");
//       } else if (fieldsArray[i] > 25) {
//         progressBar.attr("class", "progress-bar progress-bar-striped progress-bar-animated bg-success");
//       } else {
//         progressBar.attr("class", "progress-bar progress-bar-striped progress-bar-animated");
//       }
//     }
//   }
//
//   var timeout = setTimeout(update(), 1000);
// });
