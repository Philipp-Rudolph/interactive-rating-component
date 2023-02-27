const ratingItem = document.querySelectorAll(".rating-item");
const ratingItemArray = Array.prototype.slice.call(ratingItem);
let activeButton = null;

ratingItemArray.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    if (activeButton && activeButton !== item) {
      activeButton.classList.remove("active");
    }
    activeButton = item;
    let selectedValue = document.querySelector(".selected-value");

    selectedValue.innerHTML = `You selected ${activeButton.innerHTML} out of 5`;
  });
});

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  if (!activeButton) {
    return;
  }
  let cardContainer = document.querySelector(".card");
  cardContainer.style.display = "none";
  let cardThanks = document.querySelector(".card-thanks");
  cardThanks.style.display = "block";
});
