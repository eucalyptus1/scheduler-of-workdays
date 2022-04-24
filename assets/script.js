// Display the current time at the top of the page

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

var currentHour = moment().hour();

// save entered tasks into local storage and append onto page

$(".saveBtn").on("click", function() {
  var text = $(this).siblings(".description").val();
  var hour = $(this).siblings(".hour").text();
  localStorage.setItem(hour, text);
})


// change colour of blocks based on time passed
   function timeAudit() {

    var date = $("#taskHour").find("span").text().trim();

    var time = moment(date, "L").set("hour", 9);

    if ($("date") === $("currentHour")) {
      $("#taskHour").addClass("present")

    } else if ($("date") < $("currentHour")) {
        $("#taskHour").addClass("past")

    } else if ($("date") > $("currentHour")) {
        $("#taskHour").addClass("future")
    }

   };





