let addButton;

addButton = document.getElementById("add");
popUp = document.getElementById("popUpElement");

addButton.addEventListener("click", function () {
    showPopUp();
});

popUp.addEventListener("click", function () {
    hidePopUp();
});
function showPopUp(){
    popUp.style.display = "block";
    
}

function hidePopUp(){
    popUp.style.display = "none";
    
}