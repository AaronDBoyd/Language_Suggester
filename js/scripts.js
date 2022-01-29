$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const hundred = parseInt($("input#hundred").val());
    const vacation = $("input:radio[name=vacation]:checked").val();
    const dogs = $("input:radio[name=dogs]:checked").val();
    const music = $("select#music").val();

    if (hundred <= 30 && vacation === "home" || music === "xsj") {
      $("#ruby").show();
    } else if (hundred > 30 && vacation === "beach" ) {
      $("#go").show();
    } else {
      $("#python").show();
    }
    
    if (dogs === "false") {
      $("#nope").show();
    }
    
    event.preventDefault();
  });
  // $(".btn").click(function() {
  //   $("#ruby").toggle();
  //   $("#python").toggle();
  //   $("#go").toggle();

  
  // });
});