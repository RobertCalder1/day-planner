var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$(".saveBtn").on("click", function () {
  var id = $(this).attr("id");
  var userEntry = $(this).siblings("textarea").val();
});
