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

const collapseButton = document.getElementById("collapseButton");
collapseButton.addEventListener("click", function() {
    const collapsable = document.getElementById("collapsable");
    collapsable.style.display = collapsable.style.display === "block" ? "none" : "block";
    collapseButton.innerHTML = collapseButton.innerHTML === "_" ? "■" : "_";
});

const idPrefixes = ["changelog", "about", "config"]

function showTab(tab, content) {
    for(let i = 0; i < idPrefixes.length; i++) {
        const tabId = idPrefixes[i] + "Tab";
        const tabElement = document.getElementById(tabId);
        const contentId = idPrefixes[i] + "Content";
        const contentElement = document.getElementById(contentId);

        contentElement.style.display = "none";
        tabElement.classList.remove("active");
    }

    content.style.display = "block";
    tab.classList.add("active");
}

for(let i = 0; i < idPrefixes.length; i++) {
    const tabId = idPrefixes[i] + "Tab";
    const tabElement = document.getElementById(tabId);
    const contentId = idPrefixes[i] + "Content";
    const contentElement = document.getElementById(contentId);
    tabElement.addEventListener("click", function() {
        showTab(tabElement, contentElement);
    });
}

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