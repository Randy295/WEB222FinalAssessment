function validate(event) {
  const getForm = document.getElementById("add-observation"); // Get the specific form for validation.
  let getLat = getForm.latitude.value; // Get the user-inputted value for latitude.
  let getLong = getForm.longitude.value; // Get the user-inputted value for longitude.
  let errorLat = document.querySelector(".errorLat"); // SHow/hide error message for latitude.
  let errorLong = document.querySelector(".errorLong"); // Show/Hide error message for longitude

  if (getLat >= -90 && getLat <= 90) {
    errorLat.classList.add("hidden");
  } else {
    errorLat.classList.remove("hidden");
  }

  if (getLong >= -180 && getLong <= 180) {
    errorLong.classList.add("hidden");
  } else {
    errorLong.classList.remove("hidden");
  }

  if (getLat >= -90 && getLat <= 90 && getLong >= -180 && getLong <= 180) {
    event = true;
  } else {
    event = false;
  }

  return event;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};