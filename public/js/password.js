function togglePasswordVisibility() {
  var senhaInput = document.getElementById("senha");
  var eyeIcon = document.getElementById("view_passw");

  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    eyeIcon.classList.remove("bi-eye-slash-fill");
    eyeIcon.classList.add("bi-eye-fill");
  } else {
    senhaInput.type = "password";
    eyeIcon.classList.remove("bi-eye-fill");
    eyeIcon.classList.add("bi-eye-slash-fill");
  }
}
