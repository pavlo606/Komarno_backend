const btnModalClose = document.getElementById("btnModalClose");
const modal = document.getElementById("modal");

btnModalClose.addEventListener("click", (e) => {
    modal.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
