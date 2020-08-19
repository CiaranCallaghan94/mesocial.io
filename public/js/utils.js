function SearchForUser() {
  var username = document.getElementById("search").value;
  window.location.href = "/u/" + username; //relative to domain
}

document
  .getElementById("search-button")
  .addEventListener("click", SearchForUser);
