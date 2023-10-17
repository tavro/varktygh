const changelogTab = document.getElementById("changelogTab");
const aboutTab = document.getElementById("aboutTab");
const changelogContent = document.getElementById("changelogContent");
const aboutContent = document.getElementById("aboutContent");

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
