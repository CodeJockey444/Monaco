const readMoreButtons = document.querySelectorAll(".btn-read");
const textParagraphs = document.querySelectorAll(".less-text");
readMoreButtons.forEach((readMoreButton) => {
  readMoreButton.addEventListener("click", (e) => {
    textParagraphs.forEach((textParagraph) => {
      textParagraph.classList.toggle("less-text");
      if (readMoreButton.innerText === "Read More") {
        readMoreButton.textContent = "Read Less";
      } else {
        readMoreButton.textContent = "Read More";
      }
    });
  });
});
// WHEN YOU CODE FINALLY WORKS!:)
