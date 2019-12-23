$(document).ready(function(){
  $("#feedbackForm").on("submit", function() {
    var formValid = true;

    if ($("#userName").prop("validity").valid) {
      $("#userNameError").addClass("hidden");
    } else {
      $("#userNameError").removeClass("hidden");
      formValid = false;
    };

    if ($("#userEmail").prop("validity").valid) {
      $("#emailError").addClass("hidden");
    } else {
      $("#emailError").removeClass("hidden");
      formValid = false;
    };

    if ($("#never").is(':checked') || $("#one_three").is(':checked') || $("#four_seven").is(':checked') || $("#eight_plus").is(':checked') ) {
      $("frequencyError").addClass("hidden");
    } else {
      $("#frequencyError").removeClass("hidden");
      formValid = false;
    };
    
  return formValid;
  })
})
