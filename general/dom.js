function setElement(id, value) {
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML = value;
    } else {
        console.error("Element with id " + id + " not found.");
    }
}