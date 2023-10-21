function addCSSVariables(colors) {
    const root = document.documentElement;

    for (const key in colors) {
        if (colors.hasOwnProperty(key)) {
            const value = colors[key];
            root.style.setProperty(`--${key}`, value);
        }
    }
}

const colors = {
    "header": "rgba(55, 55, 55, 1)",
    "header-hover": "rgba(90, 90, 90, 1)",
    "bg-main": "rgba(255, 255, 255, 1)",
    "bg-light": "rgba(240, 240, 240, 1)",
    "dark-solid": "rgba(30, 30, 30, 1)"
};

addCSSVariables(colors);

const changelogTab = document.getElementById("changelogTab");
const aboutTab = document.getElementById("aboutTab");
const changelogContent = document.getElementById("changelogContent");
const aboutContent = document.getElementById("aboutContent");

const collapseButton = document.getElementById("collapseButton");
collapseButton.addEventListener("click", function() {
    const collapsable = document.getElementById("collapsable");
    collapsable.style.display = collapsable.style.display === "block" ? "none" : "block";
    collapseButton.innerHTML = collapseButton.innerHTML === "_" ? "■" : "_";
});

changelogTab.addEventListener("click", function() {
    aboutContent.style.display = "none";
    changelogContent.style.display = "block";

    aboutTab.classList.remove("active");
    changelogTab.classList.add("active");
});

aboutTab.addEventListener("click", function() {
    changelogContent.style.display = "none";
    aboutContent.style.display = "block";

    changelogTab.classList.remove("active");
    aboutTab.classList.add("active");
});

document.addEventListener("DOMContentLoaded", function() {
    var optionsHeader = document.querySelector('.options-header');
    var movableDiv = document.querySelector('.movable');

    var offsetX, offsetY, isDragging = false;

    optionsHeader.addEventListener('mousedown', function(e) {
        offsetX = e.clientX - movableDiv.getBoundingClientRect().left;
        offsetY = e.clientY - movableDiv.getBoundingClientRect().top;
        isDragging = true;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            var newX = e.clientX - offsetX;
            var newY = e.clientY - offsetY;

            movableDiv.style.left = newX + 'px';
            movableDiv.style.top = newY + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
});