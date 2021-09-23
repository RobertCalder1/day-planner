var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$(".saveBtn").on("click", function () {
  var id = $(this).attr("id");
  var userEntry = $(this).siblings("textarea").val();
  localStorage.setItem(id, userEntry);
});
var currentTime = moment().hours();

for (let i = 9; i <= 17; i++) {
  var getStorage = localStorage.getItem(i);
  $("#" + i)
    .siblings("textarea")
    .val(getStorage);
  if (i > currentTime) {
    $("#" + i)
      .siblings("textarea")
      .addClass("future");
  } else if (i === currentTime) {
    $("#" + i)
      .siblings("textarea")
      .addClass("present");
  } else {
    $("#" + i)
      .siblings("textarea")
      .addClass("past");
  }
}
