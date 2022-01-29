$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const hundred = parseInt($("input#hundred").val());

    if (hundred <= 50) {
      $("#ruby").show();
    } else {
      $("#go").show();
    }
      event.preventDefault();
    
  });
});