const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

searchButton.addEventListener("click", function() {
    search();
});

function search() {
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8";
}
