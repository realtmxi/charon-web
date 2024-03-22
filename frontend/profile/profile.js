function handleEditClick() {
    var editPasswordContainer = document.getElementById("edit-password-container");
    editPasswordContainer.classList.remove("hidden");
}

function handleCloseClick() {
    var editPasswordContainer = document.getElementById("edit-password-container");
    editPasswordContainer.classList.add("hidden");
}


var editPasswordLink = document.getElementById("profile-sec2-3-2");
var closeButton = document.querySelector('#edit-password-container .close');

editPasswordLink.addEventListener("click", handleEditClick);
closeButton.addEventListener("click", handleCloseClick);
