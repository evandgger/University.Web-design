const defaultImageWidth = 250;
const defaultImageHeight = 250;
const defaultParagraphColor = "black";

window.addEventListener('DOMContentLoaded', () => {
    let image = document.getElementById("image-demo");
    setElementStyleAttribute(image, "height", `${defaultImageHeight}px`);
    setElementStyleAttribute(image, "width", `${defaultImageWidth}px`);
    addImageEventListeners(image);

    let firstParagraph = document.getElementById("first-p");
    addParagraphEventListeners(firstParagraph, "red");

    let secondParagraph = document.getElementById("second-p");
    addParagraphEventListeners(secondParagraph, "green");

    let thirdParagrah = document.getElementById("third-p");
    addParagraphEventListeners(thirdParagrah, "blue");
});

function setElementStyleAttribute(element, attributeName, attributeValue) {
    element.style[attributeName] = attributeValue;
}

function addParagraphEventListeners(paragraph, reactionColor) {
    paragraph.addEventListener("mouseenter", function () {
        setElementStyleAttribute(paragraph, "color", reactionColor);
        setElementStyleAttribute(paragraph, "font-weight", "bold");
        setElementStyleAttribute(paragraph, "font-family", "Courier New");
    });

    paragraph.addEventListener("mouseleave", function () {
        setElementStyleAttribute(paragraph, "color", defaultParagraphColor);
        setElementStyleAttribute(paragraph, "font-weight", "normal");
        setElementStyleAttribute(paragraph, "font-family", "sans-serif");
    });
}

function addImageEventListeners(image) {
    image.addEventListener("mouseenter", function () {
        setElementStyleAttribute(image, "height", `${defaultImageHeight * 2}px`);
        setElementStyleAttribute(image, "width", `${defaultImageWidth * 2}px`);
    });

    image.addEventListener("mouseleave", function () {
        setElementStyleAttribute(image, "height", `${defaultImageHeight}px`);
        setElementStyleAttribute(image, "width", `${defaultImageWidth}px`);
    });
}