// The event handler function for the phone number text box
function chkPhone(event) {
    // Get the target node of the event
      var myPhone = event.currentTarget;
    // Test the format of the input phone number
      var pos = myPhone.value.search(/^\d{3}-\d{3}-\d{4}$/);
      if (pos != 0) {
        alert("The phone number you entered (" + myPhone.value +
              ") is not in the correct form. \n" +
              "The correct form is: ddd-ddd-dddd \n" +
              "Please go back and fix your phone number");
      } 
    }