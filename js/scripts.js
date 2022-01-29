$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const hundred = parseInt($("input#hundred").val());
    const vacation = $("input:radio[name=vacation]:checked").val();
    const dogs = $("input:radio[name=dogs]:checked").val();
    const music = $("select#music").val();

    if (hundred <= 30 && vacation === "home" || music === "xsj") {
      $("#ruby").show();
      $("#go").hide();
      $("#python").hide();
      $("#nope").hide();
    } else if (hundred > 30 && vacation === "beach" ) {
      $("#go").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#nope").hide();
    } else {
      $("#python").show();
      $("#ruby").hide();
      $("#go").hide();
      $("#nope").hide();
    }
    
    if (dogs === "false") {
      $("#nope").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#go").hide();
    }
    
    event.preventDefault();
  });
  // $(".btn").click(function() {
  //   $("#ruby").toggle();
  //   $("#python").toggle();
  //   $("#go").toggle();

  
  // });
});