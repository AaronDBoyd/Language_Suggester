$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const hundred = parseInt($("input#hundred").val());
    const vacation = $("input:radio[name=vacation]:checked").val();
    if (hundred <= 50 && vacation === "home") {
      $("#ruby").show();
    } else if (hundred > 50 && vacation === "beach") {
      $("#go").show();
    } else {
      $("#python").show();
    }
     
    
    event.preventDefault();
  });
  // $(".btn").click(function() {
  //   $("#ruby").toggle();
  //   $("#python").toggle();
  //   $("#go").toggle();

  
  // });
});