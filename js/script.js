const img_sections = ["background", "neck", "hair", "ears", "accessories", "eyes", "mouth", "leg"];

// Go trough each btns-section and add functionality to each button
img_sections.forEach((section) => {
    const btns_container = document.getElementById("customize-" + section).children[1].childNodes;
    btns_container.forEach((button) => {
        button.addEventListener("click", () => {
            const img_section = document.getElementById("img-" + section);
            if (button.classList.contains("custom-option-dont")) {
                img_section.setAttribute("display", "none");
                img_section.style.display = "none";
            } else {
                img_section.style.display = "unset";
                img_section.setAttribute("src", button.children[0].getAttribute("src"));
            }
        });
    });
});

// Randomize button
const btn_random = document.getElementById("btn-random");
btn_random.addEventListener("click", () => {
    img_sections.forEach((section) => {
        const btns_container = document.getElementById("customize-" + section).children[1];
        // Select a random option and make click on button
        btns_container.children[Math.floor(Math.random() * btns_container.childElementCount)].click();
    });
});
