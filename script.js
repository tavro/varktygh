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

const colorKeys = ["dark-solid", "header", "header-hover", "bg-main", "bg-light"];
for(let i = 1; i < 5+1; i++) {
    const redId = 'red-slider' + i;
    const greenId = 'green-slider' + i;
    const blueId = 'blue-slider' + i;
    const redVId = 'red-value' + i;
    const greenVId = 'green-value' + i;
    const blueVId = 'blue-value' + i;
    const redSlider = document.getElementById(redId);
    const greenSlider = document.getElementById(greenId);
    const blueSlider = document.getElementById(blueId);
    const redValue = document.getElementById(redVId);
    const greenValue = document.getElementById(greenVId);
    const blueValue = document.getElementById(blueVId);

    function updateColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
    
        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;
    
        colors[colorKeys[i-1]] = `rgb(${red}, ${green}, ${blue})`;
        addCSSVariables(colors);
    }

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);
}