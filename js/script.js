const background = document.getElementsByClassName("img-background")[0];
const neck = document.getElementsByClassName("img-neck")[0];
const nose = document.getElementsByClassName("img-nose")[0];
const hair = document.getElementsByClassName("img-hair")[0];
const ears = document.getElementsByClassName("img-ears")[0];
const accessories = document.getElementsByClassName("img-accessories")[0];
const eyes = document.getElementsByClassName("img-eyes")[0];
const mouth = document.getElementsByClassName("img-mouth")[0];
const legs = document.getElementsByClassName("img-legs")[0];

// Background
const buttons_background = document.getElementById("customize-background").children[1].childNodes;
buttons_background.forEach((button) => {
    button.addEventListener("click", () => {
        background.setAttribute("src", button.children[0].getAttribute("src"));
    });
});
