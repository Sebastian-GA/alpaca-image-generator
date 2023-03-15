const img_sections = ["background", "neck", "hair", "ears", "accessories", "eyes", "mouth", "leg"];

// Go trough each btns-section and add functionality to each button
img_sections.forEach((section) => {
    const btns_container = document.getElementById("customize-" + section).children[1].childNodes;
    btns_container.forEach((button) => {
        button.addEventListener("click", () => {
            const img_section = document.getElementById("img-" + section);
            img_section.setAttribute("src", button.children[0].getAttribute("src"));
        });
    });
});
