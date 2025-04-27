document.getElementById("requestForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // You can collect form data here if needed
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const request = document.getElementById("request").value;

  // For now, just show a success message
  document.getElementById("successMessage").classList.remove("hidden");

  // Optionally, clear the form
  document.getElementById("requestForm").reset();
});
