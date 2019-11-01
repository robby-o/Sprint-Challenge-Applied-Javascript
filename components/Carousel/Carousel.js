/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement("div"),
    leftButton = document.createElement("div"),
    rightButton = document.createElement("div"),
    img = document.createElement("img");

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  leftButton.classList.add("button");
  rightButton.classList.add("right-button");
  rightButton.classList.add("button");

  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);
  carousel.appendChild(img);

  return carousel;
}

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(Carousel());

const img = document.querySelector(".carousel img");
imgArray = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

// button functionality
let index = 0;
img.id = "fade-in";
img.src = imgArray[index];
const rightButton = document.querySelector(".right-button");
rightButton.addEventListener("click", () => {
  if (index === imgArray.length) {
    index = 0;
  }
  index++;
  img.src = imgArray[index];
});
const leftButton = document.querySelector(".left-button");
leftButton.addEventListener("click", () => {
  if (index === 0) {
    index = imgArray.length;
  }
  index--;
  img.src = imgArray[index];
});

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    img.id = "";
    setTimeout(() => {
      img.id = "fade-in";
    }, 500);
  });
});
