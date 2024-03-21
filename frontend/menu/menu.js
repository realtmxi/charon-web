function handleClick() {
    var searchInterface = document.getElementById("search-interface");
    if (searchInterface.classList.contains("hidden")) {
        searchInterface.classList.remove("hidden");
    } else {
        searchInterface.classList.add("hidden");
    }
}

document.querySelectorAll("#menu-search")[0].addEventListener("click", handleClick);