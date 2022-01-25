// Bring down the button

const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // To get where we click in the entire viewport
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    // Position of the button
    const buttonLeft = e.target.offSetLeft;
    const buttonTop = e.target.offSetTop;
    // console.log(buttonTop, buttonLeft);

    // Creating the radius for the circle
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    // timeout to clean up the DOM
    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
