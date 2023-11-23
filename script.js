const button = document.querySelectorAll("button");
const itemDivs = document.querySelectorAll(".item");

button.forEach((button, index) => {
  // button and index in forEach((button, index) is just parameters, and can replace
  // with any name
  button.addEventListener("click", () => {
    itemDivs[index].classList.toggle("hidden");

    // to make svg rotation
    const svg = button.children[1];
    svg.classList.toggle("rotate-180");
  });
});

// toggle is automatin for Add and Remove
